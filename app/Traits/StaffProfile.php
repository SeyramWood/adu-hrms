<?php

namespace App\Traits;

use Image;
use App\Models\User;
use App\Models\Profile;
use App\Models\WorkShift;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

/**
 * StaffProfile
 */
trait StaffProfile
{
  use Generator, Staff;
  public function getProfile($id = null, $slug = null)
  {
    if (!$id && !$slug) {
      return User::where('users.id', Auth::id())
        ->join('profiles', 'profiles.user_id', '=', 'users.id')
        ->leftJoin('branches', 'branches.id', '=', 'profiles.branch_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->select(
          'users.*',
          'profiles.*',
          'branches.name as branch',
          'departments.name as department',
        )
        ->first();
    }
    if ($id && $slug) {
      return User::where('users.id', $id)
        ->where('profiles.slug', $slug)
        ->join('profiles', 'profiles.user_id', '=', 'users.id')
        ->leftJoin('branches', 'branches.id', '=', 'profiles.branch_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->select(
          'users.*',
          'profiles.*',
          'branches.name as branch',
          'departments.name as department',
        )
        ->first();
    }
  }
  public function authProfile()
  {
    return User::where('users.id', Auth::id())
      ->join('profiles', 'profiles.user_id', '=', 'users.id')
      ->select(
        'users.*',
        'profiles.branch_id',
        'profiles.department_id',
        'profiles.unit_id',
        'profiles.personal_details->title as title',
        'profiles.personal_details->lastName as lastName',
        'profiles.personal_details->firstName as firstName',
        'profiles.personal_details->middleName as middleName',
        'profiles.personal_details->avatar as avatar',
        'profiles.job->title as jobTitle'

      )
      ->first();
  }
  public function saveAvatar($request)
  {
    $request->validate([
      'avatar' => 'required|image|mimes:jpg,jpeg,png,svg'
    ]);
    $avatar = $this->processAvatar($request);
    Profile::where('user_id', $request->id)->update([
      'personal_details->avatar' => $avatar
    ]);
    return response()->json(['uploaded' => true, 'avatar' => $avatar]);
  }

  public function processAvatar($request)
  {
    $image = $request->file('avatar');
    $userProfile = json_decode(Profile::where('user_id', $request->id)->first()->personal_details);
    $fileName = strtolower("{$userProfile->firstName}_{$userProfile->lastName}_avatar") . '_' . $this->uuid(12) . '.' . $image->extension();
    if (Storage::disk('public')->exists("avatar/{$userProfile->avatar}")) {
      Storage::disk('public')->delete("avatar/{$userProfile->avatar}");
      Image::make($image->path())->resize(132.28, 170.08, function ($const) {
        $const->aspectRatio();
      })->save(storage_path("app/public/avatar/{$fileName}"), 100, 'jpg');
    } else {
      if (!Storage::disk('public')->exists("avatar")) {
        Storage::disk('public')->makeDirectory('avatar');
      }
      Image::make($image->path())->resize(132.28, 170.08, function ($const) {
        $const->aspectRatio();
      })->save(storage_path("app/public/avatar/{$fileName}"), 100, 'jpg');
    }
    return $fileName;
  }

  public function updateProfile($request, $id)
  {
    $request->validate([
      'title' => 'required|string',
      'firstName' => 'required|string',
      'middleName' => 'nullable|string',
      'lastName' => 'required|string',
      'staffId' => 'required|string',
      'otherId' => 'nullable|string',
      'birthDate' => 'required|string',
      'maritalStatus' => 'required|string',
      'gender' => 'required|string',
    ]);
    DB::table('profiles')->where('user_id', $id)->update([
      'personal_details->title' => $request->title,
      'personal_details->firstName' => $request->firstName,
      'personal_details->middleName' => $request->middleName,
      'personal_details->lastName' => $request->lastName,
      'personal_details->staffId' => $request->staffId,
      'personal_details->otherId' => $request->otherId,
      'personal_details->birthDate' => $request->birthDate,
      'personal_details->maritalStatus' => $request->maritalStatus,
      'personal_details->gender' => $request->gender,
      'slug' => Str::slug($request->firstName . ' ' . $request->middleName . ' ' . $request->lastName, '-'),
    ]);
    if (Auth::id() === $id) {
      return response()->json(
        [
          'updated' => true,
          'profile' => json_decode(Profile::where('user_id', $id)->first()->personal_details),
          'authUser' => $this->authProfile()
        ]
      );
    }
    return response()->json(
      [
        'updated' => true,
        'profile' => json_decode(Profile::where('user_id', $id)->first()->personal_details),
      ]
    );
  }

  public function updatePersonalDetailAttachment($request, $profile)
  {
    $request->validate([
      'file' => 'required|file|mimes:pdf|max:2048',
      'comment' => "nullable|string"
    ]);
    $files = $this->processAttachment($request, $profile->personal_details);
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'personal_details->attachments' => json_encode($files),
    ]);
    $profile = Profile::where('user_id', $profile->user_id)->first();
    return response()->json(['attachments' => json_decode($profile->personal_details)->attachments]);
  }
  public function repPersonalDetailAttachment($request, $profile)
  {
    $attachments = json_decode(json_decode($profile->personal_details)->attachments);
    if ($request->has('file')) {
      $request->validate([
        'file' => 'required|file|mimes:pdf|max:2048',
      ]);
      $file = $this->updateAttachment($request, $profile->personal_details, 'personal');
      for ($i = 0; $i < count($attachments); $i++) {
        if ($attachments[$i]->id === $request->id) {
          if (Storage::disk('public')->exists("attachments/personal/{$attachments[$i]->file}")) {
            Storage::disk('public')->delete("attachments/personal/{$attachments[$i]->file}");
          }
          $attachments[$i]->file = $file;
          break;
        }
      }
    }
    if ($request->has('comment')) {
      $request->validate([
        'comment' => "nullable|string"
      ]);
      for ($i = 0; $i < count($attachments); $i++) {
        if ($attachments[$i]->id === $request->id) {
          $attachments[$i]->comment = $request->comment;
          break;
        }
      }
    }
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'personal_details->attachments' => json_encode($attachments),
    ]);
    $profile = Profile::where('user_id', $profile->user_id)->first();
    return response()->json(['attachments' => json_decode($profile->personal_details)->attachments]);
  }
  public function destroyPersonalDetailAttachment($profile, $id)
  {

    $attachments = json_decode(json_decode($profile->personal_details)->attachments);
    for ($i = 0; $i < count($attachments); $i++) {
      if ($attachments[$i]->id === $id) {
        if (Storage::disk('public')->exists("attachments/personal/{$attachments[$i]->file}")) {
          Storage::disk('public')->delete("attachments/personal/{$attachments[$i]->file}");
        }
        array_splice($attachments, $i, 1);
        break;
      }
    }
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'personal_details->attachments' => json_encode($attachments),
    ]);
    return response()->json(['deleted' => true]);
  }

  public function updateContactDetails($request, $profile)
  {
    $request->validate([
      "address1" => "required|string",
      "address2" => "nullable|string",
      "city" => "required|string",
      "region" => "nullable|string",
      "country" => "required|string",
      "mobile" => "required|string",
      "homeTelephone" => "nullable|string",
      "workTelephone" => "nullable|string",
      "workEmail" => "required|string|email",
      "otherEmail" => "nullable|string|email",
    ]);
    $profile->contact_details = json_encode($request->all());
    $profile->save();
    return response()->json(['updated' => true]);
  }
  public function addEmergencyContactDetails($request, $profile)
  {

    $request->validate([
      "name" => "required|string",
      "relationship" => "required|string",
      "mobile" => "required|string",
      "homeTelephone" => "nullable|string",
      "workTelephone" => "nullable|string",
    ]);
    $contacts = $profile->emergency_contacts ? json_decode($profile->emergency_contacts) : [];
    array_push($contacts, [
      'id' => $this->uuid(16),
      "name" => $request->name,
      "relationship" => $request->relationship,
      "mobile" => $request->mobile,
      "homeTelephone" => $request->homeTelephone,
      "workTelephone" => $request->workTelephone,
    ]);
    $profile->emergency_contacts = json_encode($contacts);
    $profile->save();
    return response()->json(['added' => true, 'contacts' => Profile::where('user_id', $profile->user_id)->first()->emergency_contacts]);
  }
  public function updateEmergencyContact($request, $profile, $id)
  {
    $request->validate([
      "name" => "required|string",
      "relationship" => "required|string",
      "mobile" => "required|string",
      "homeTelephone" => "nullable|string",
      "workTelephone" => "nullable|string",
    ]);
    $contacts = json_decode($profile->emergency_contacts);
    for ($i = 0; $i < count($contacts); $i++) {
      if ($contacts[$i]->id === $id) {
        $contacts[$i] =
          [
            'id' => $id,
            "name" => $request->name,
            "relationship" => $request->relationship,
            "mobile" => $request->mobile,
            "homeTelephone" => $request->homeTelephone,
            "workTelephone" => $request->workTelephone,
          ];
        break;
      }
    }
    $profile->emergency_contacts = json_encode($contacts);
    $profile->save();
    return response()->json(['updated' => true]);
  }
  public function destoryEmergencyContact($profile, $id)
  {
    $contacts = json_decode($profile->emergency_contacts);
    for ($i = 0; $i < count($contacts); $i++) {
      if ($contacts[$i]->id === $id) {
        array_splice($contacts, $i, 1);
        break;
      }
    }
    $profile->emergency_contacts = json_encode($contacts);
    $profile->save();
    return response()->json(['deleted' => true]);
  }
  public function createQualificationWorkExperience($request, $profile)
  {
    $request->validate([
      "company" => "required|string",
      "jobTitle" => "required|string",
      "from" => "required|numeric",
      "to" => "required|numeric",
      "comment" => "nullable|string",
    ]);
    $workExperience = is_array(json_decode($profile->qualifications)->workExperience) ? json_decode($profile->qualifications)->workExperience : json_decode(json_decode($profile->qualifications)->workExperience);
    array_push($workExperience, [
      'id' => $this->uuid(16),
      "company" => $request->company,
      "jobTitle" => $request->jobTitle,
      "from" => $request->from,
      "to" => $request->to,
      "comment" => $request->comment,
    ]);
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'qualifications->workExperience' => json_encode($workExperience),
    ]);
    return response()->json(['added' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->qualifications)->workExperience]);
  }
  public function updateWorkExperience($request, $profile, $id)
  {
    $request->validate([
      "company" => "required|string",
      "jobTitle" => "required|string",
      "from" => "required|numeric",
      "to" => "required|numeric",
      "comment" => "nullable|string",
    ]);
    $workExperience = is_array(json_decode($profile->qualifications)->workExperience) ? json_decode($profile->qualifications)->workExperience : json_decode(json_decode($profile->qualifications)->workExperience);
    for ($i = 0; $i < count($workExperience); $i++) {
      if ($workExperience[$i]->id === $id) {
        $workExperience[$i] = [
          'id' => $id,
          "company" => $request->company,
          "jobTitle" => $request->jobTitle,
          "from" => $request->from,
          "to" => $request->to,
          "comment" => $request->comment,
        ];
        break;
      }
    }
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'qualifications->workExperience' => json_encode($workExperience),
    ]);
    return response()->json(['updated' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->qualifications)->workExperience]);
  }

  public function createQualificationEducation($request, $profile)
  {

    $request->validate([
      "institution" => "required|string",
      "specialization" => "required|string",
      "gpa" => "required|string",
      "started" => "required|numeric",
      "completed" => "required|numeric",
    ]);
    $education = is_array(json_decode($profile->qualifications)->education) ? json_decode($profile->qualifications)->education : json_decode(json_decode($profile->qualifications)->education);
    array_push($education, [
      'id' => $this->uuid(16),
      "institution" => $request->institution,
      "specialization" => $request->specialization,
      "gpa" => $request->gpa,
      "started" => $request->started,
      "completed" => $request->completed,
    ]);
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'qualifications->education' => json_encode($education),
    ]);
    return response()->json(['added' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->qualifications)->education]);
  }
  public function updateEducation($request, $profile, $id)
  {

    $request->validate([
      "institution" => "required|string",
      "specialization" => "required|string",
      "gpa" => "required|string",
      "started" => "required|numeric",
      "completed" => "required|numeric",
    ]);
    $education = is_array(json_decode($profile->qualifications)->education) ? json_decode($profile->qualifications)->education : json_decode(json_decode($profile->qualifications)->education);
    for ($i = 0; $i < count($education); $i++) {
      if ($education[$i]->id === $id) {
        $education[$i] = [
          'id' => $id,
          "institution" => $request->institution,
          "specialization" => $request->specialization,
          "gpa" => $request->gpa,
          "started" => $request->started,
          "completed" => $request->completed,
        ];
        break;
      }
    }
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'qualifications->education' => json_encode($education),
    ]);
    return response()->json(['updated' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->qualifications)->education]);
  }
  public function createQualificationSkill($request, $profile)
  {

    $request->validate([
      "skill" => "required|string",
      "yearOfExperience" => "required|string",
      "comment" => "nullable|string",
    ]);
    $skills = is_array(json_decode($profile->qualifications)->skills) ? json_decode($profile->qualifications)->skills : json_decode(json_decode($profile->qualifications)->skills);
    array_push($skills, [
      'id' => $this->uuid(16),
      "skill" => $request->skill,
      "yearOfExperience" => $request->yearOfExperience,
      "comment" => $request->comment,
    ]);
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'qualifications->skills' => json_encode($skills),
    ]);
    return response()->json(['added' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->qualifications)->skills]);
  }
  public function updateSkill($request, $profile, $id)
  {

    $request->validate([
      "skill" => "required|string",
      "yearOfExperience" => "required|string",
      "comment" => "nullable|string",
    ]);
    $skills = is_array(json_decode($profile->qualifications)->skills) ? json_decode($profile->qualifications)->skills : json_decode(json_decode($profile->qualifications)->skills);
    for ($i = 0; $i < count($skills); $i++) {
      if ($skills[$i]->id === $id) {
        $skills[$i] = [
          'id' => $id,
          "skill" => $request->skill,
          "yearOfExperience" => $request->yearOfExperience,
          "comment" => $request->comment,
        ];
        break;
      }
    }
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'qualifications->skills' => json_encode($skills),
    ]);
    return response()->json(['updated' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->qualifications)->skills]);
  }
  public function createQualificationLanguage($request, $profile)
  {

    $request->validate([
      "language" => "required|string",
      "fluency" => "required|string",
      "comment" => "nullable|string",
    ]);
    $languages = is_array(json_decode($profile->qualifications)->languages) ? json_decode($profile->qualifications)->languages : json_decode(json_decode($profile->qualifications)->languages);
    array_push($languages, [
      'id' => $this->uuid(16),
      "language" => $request->language,
      "fluency" => $request->fluency,
      "comment" => $request->comment,
    ]);
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'qualifications->languages' => json_encode($languages),
    ]);
    return response()->json(['added' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->qualifications)->languages]);
  }
  public function updateLanguage($request, $profile, $id)
  {

    $request->validate([
      "language" => "required|string",
      "fluency" => "required|string",
      "comment" => "nullable|string",
    ]);
    $languages = is_array(json_decode($profile->qualifications)->languages) ? json_decode($profile->qualifications)->languages : json_decode(json_decode($profile->qualifications)->languages);
    for ($i = 0; $i < count($languages); $i++) {
      if ($languages[$i]->id === $id) {
        $languages[$i] = [
          'id' => $id,
          "language" => $request->language,
          "fluency" => $request->fluency,
          "comment" => $request->comment,
        ];
        break;
      }
    }
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'qualifications->languages' => json_encode($languages),
    ]);
    return response()->json(['added' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->qualifications)->languages]);
  }
  public function createQualificationAttachment($request, $profile)
  {
    $request->validate([
      'file' => 'required|file|mimes:pdf|max:2048',
      'comment' => "nullable|string"
    ]);
    $attachments = $this->processQualificationAttachment($request, $profile);
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'qualifications->attachments' => json_encode($attachments),
    ]);
    return response()->json(['added' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->qualifications)->attachments]);
  }
  public function updateQualificationAttachment($request, $profile)
  {
    $attachments = json_decode(json_decode($profile->qualifications)->attachments);
    if ($request->has('file')) {
      $request->validate([
        'file' => 'required|file|mimes:pdf|max:2048',
      ]);
      $file = $this->updateAttachment($request, $profile->personal_details, 'qualification');
      for ($i = 0; $i < count($attachments); $i++) {
        if ($attachments[$i]->id === $request->id) {
          if (Storage::disk('public')->exists("attachments/qualification/{$attachments[$i]->file}")) {
            Storage::disk('public')->delete("attachments/qualification/{$attachments[$i]->file}");
          }
          $attachments[$i]->file = $file;
          break;
        }
      }
    }
    if ($request->has('comment')) {
      $request->validate([
        'comment' => "nullable|string"
      ]);
      for ($i = 0; $i < count($attachments); $i++) {
        if ($attachments[$i]->id === $request->id) {
          $attachments[$i]->comment = $request->comment;
          break;
        }
      }
    }
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'qualifications->attachments' => json_encode($attachments),
    ]);
    return response()->json(['updated' => true, 'data' => json_decode(Profile::find($profile->user_id)->qualifications)->attachments]);
  }
  public function deleteQualification($profile, $id, $type)
  {
    $qualifications = json_decode(json_decode($profile->qualifications)->$type);
    for ($i = 0; $i < count($qualifications); $i++) {
      if ($qualifications[$i]->id === $id) {
        if ($type === 'attachments') {
          if (Storage::disk('public')->exists("attachments/qualification/{$qualifications[$i]->file}")) {
            Storage::disk('public')->delete("attachments/qualification/{$qualifications[$i]->file}");
          }
        }
        array_splice($qualifications, $i, 1);
        break;
      }
    }

    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      "qualifications->{$type}" => json_encode($qualifications),
    ]);
    return response()->json(['deleted' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->qualifications)->$type]);
  }

  public function updateStaffJob($request, $profile)
  {

    $request->validate([
      "category" => "required|numeric",
      "title" => "required|numeric",
      "employmentStatus" => "required|numeric",
      "department" => "required",
      "branch" => "required|numeric",
      "startDate" => [
        'required',
        'string',
        function ($attribute, $value, $fail) {
          $value === 'null' && $fail("The start date field is required");
        }
      ],
      "endDate" => [
        'required',
        'string',
        function ($attribute, $value, $fail) {
          $value === 'null' && $fail('The end date field is required');
        }
      ],
      "contractDetails" => $request->file('contractDetails') ? "nullable|file|mimes:pdf|max:2048" : "required",
    ]);
    if ($request->contractDetailsControl === 'dc') {
      if ($this->processContractDetails($request, $profile, 'delete'))
        $file = '';
    } else {
      if ($request->file('contractDetails')) {
        $file = $this->processContractDetails($request, $profile);
      } else {
        $file = $request->contractDetails;
      }
    }
    $dpt = $request->department === 'none' ? null : ($request->unit ? null : $request->department);
    $unt = $request->unit === 'none' ? null : $request->unit;
    $profile->job = json_encode([
      'category' => $request->category,
      'title' => $request->title,
      'employmentStatus' => $request->employmentStatus,
      'department' => $dpt,
      'unit' => $unt,
      'position' => $request->position,
      'branch' => $request->branch,
      'startDate' => $request->startDate,
      'endDate' => $request->endDate,
      'contractDetails' => $file,
    ]);
    $profile->department_id = $dpt;
    $profile->unit_id = $unt;
    $profile->position_id = $request->position;
    $profile->branch_id = $request->branch;
    $profile->save();
    return response()->json(['updated' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->job)]);
  }
  public function saveJobContract($profile, $status)
  {
    DB::table('profiles')->where('user_id', $profile->user_id)->update([
      'job->contractStatus' => $status
    ]);
    return response()->json(['updated' => true, 'data' => json_decode(Profile::where('user_id', $profile->user_id)->first()->job)]);
  }

  public function saveJobAssignment($request, $profile, $type)
  {
    if (!$profile->job) {
      return response()->json(['nodata' => true]);
    }
    if ($type === 'title') {
      DB::table('profiles')->where('user_id', $profile->user_id)->update([
        'job->title' => $request->title
      ]);
    }
    if ($type === 'employmentStatus') {
      DB::table('profiles')->where('user_id', $profile->user_id)->update([
        'job->employmentStatus' => $request->employmentStatus
      ]);
    }
    if ($type === 'branch') {
      DB::table('profiles')->where('user_id', $profile->user_id)->update([
        'branch_id' => $request->branch,
        'job->branch' => $request->branch,
      ]);
    }
    if ($type === 'department') {
      DB::table('profiles')->where('user_id', $profile->user_id)->update([
        'department_id' => $request->department,
        'job->department' => $request->department,
      ]);
    }
    if ($type === 'unit') {
      DB::table('profiles')->where('user_id', $profile->user_id)->update([
        'unit_id' => $request->unit,
        'job->unit' => $request->unit,
      ]);
    }
    return response()->json(['assigned' => true, 'staff' => $this->getStaffList($profile->user_id)]);
  }
  protected function processAttachment($request, $profile)

  {
    $personalDetails = json_decode($profile);
    $prevAttachments = is_array($personalDetails->attachments) ? $personalDetails->attachments : json_decode($personalDetails->attachments);
    $fileName = strtolower("{$personalDetails->firstName}_{$personalDetails->lastName}") . '_' . $this->uuid(8) . '.' . $request->file->getClientOriginalExtension();
    Storage::putFileAs("public/attachments/personal", $request->file, $fileName);
    array_push($prevAttachments, [
      'id' => $this->uuid(16),
      'file' => $fileName,
      'comment' => $request->comment
    ]);
    return $prevAttachments;
  }
  protected function processQualificationAttachment($request, $profile)

  {
    $personalDetails = json_decode($profile->personal_details);
    $prevAttachments = is_array(json_decode($profile->qualifications)->attachments) ? json_decode($profile->qualifications)->attachments : json_decode(json_decode($profile->qualifications)->attachments);
    $fileName = strtolower("{$personalDetails->firstName}_{$personalDetails->lastName}") . '_' . $this->uuid(8) . '.' . $request->file->getClientOriginalExtension();
    Storage::putFileAs("public/attachments/qualification", $request->file, $fileName);
    array_push($prevAttachments, [
      'id' => $this->uuid(16),
      'file' => $fileName,
      'comment' => $request->comment
    ]);
    return $prevAttachments;
  }
  protected function processContractDetails($request, $profile, $delete = null)
  {
    if ($delete) {
      if (Storage::disk('public')->exists("job-contracts/{$request->contractDetails}")) {
        Storage::disk('public')->delete("job-contracts/{$request->contractDetails}");
      }
      return true;
    }
    $userPersonalDetails = json_decode($profile->personal_details);
    $userJob = json_decode($profile->job);
    $fileName = strtolower("contract_{$userPersonalDetails->firstName}_{$userPersonalDetails->lastName}_") . $this->uuid(8) . '.' . $request->file('contractDetails')->extension();
    if ($userJob) {
      if (Storage::disk('public')->exists("job-contracts/{$userJob->contractDetails}")) {
        Storage::disk('public')->delete("job-contracts/{$userJob->contractDetails}");
        Storage::putFileAs('public/job-contracts', $request->file('contractDetails'), $fileName);
      } else {
        Storage::putFileAs('public/job-contracts', $request->file('contractDetails'), $fileName);
      }
    } else {
      Storage::putFileAs('public/job-contracts', $request->file('contractDetails'), $fileName);
    }
    return $fileName;
  }
  protected function updateAttachment($request, $profile, $path)
  {
    $personalDetails = json_decode($profile);
    $fileName = strtolower("{$personalDetails->firstName}_{$personalDetails->lastName}_") . $this->uuid(8) . '.' . $request->file->getClientOriginalExtension();
    Storage::putFileAs("public/attachments/{$path}", $request->file, $fileName);
    return $fileName;
  }
}
