<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Traits\StaffProfile;
use Illuminate\Http\Request;

class ESSController extends Controller
{
    use StaffProfile;
    public function uploadAvatar(Request $request)
    {
        return $this->saveAvatar($request);
    }
    public function editProfile(Request $request, $id)
    {
        return $this->updateProfile($request, (int)$id);
    }
    public function editPersonalDetailAttachment(Request $request, Profile $profile)
    {
        return $this->updatePersonalDetailAttachment($request, $profile);
    }
    public function replacePersonalDetailAttachment(Request $request, Profile $profile)
    {
        return $this->repPersonalDetailAttachment($request, $profile);
    }
    public function deletePersonalDetailAttachment(Profile $profile, $id)
    {
        return $this->destroyPersonalDetailAttachment($profile, $id);
    }
    public function editContactDetails(Request $request, Profile $profile)
    {
        return $this->updateContactDetails($request, $profile);
    }
    public function addEmergencyContact(Request $request, Profile $profile)
    {
        return $this->addEmergencyContactDetails($request, $profile);
    }
    public function editEmergencyContact(Request $request, Profile $profile, $id)
    {
        return $this->updateEmergencyContact($request, $profile, $id);
    }
    public function deleteEmergencyContact(Profile $profile, $id)
    {
        return $this->destoryEmergencyContact($profile, $id);
    }
    public function addWorkExperience(Request $request, Profile $profile)
    {
        return $this->createQualificationWorkExperience($request, $profile);
    }
    public function editWorkExperience(Request $request, Profile $profile, $id)
    {
        return $this->updateWorkExperience($request, $profile, $id);
    }
    public function addEducation(Request $request, Profile $profile)
    {
        return $this->createQualificationEducation($request, $profile);
    }
    public function editEducation(Request $request, Profile $profile, $id)
    {
        return $this->updateEducation($request, $profile, $id);
    }
    public function addSkill(Request $request, Profile $profile)
    {
        return $this->createQualificationSkill($request, $profile);
    }
    public function editSkill(Request $request, Profile $profile, $id)
    {
        return $this->updateSkill($request, $profile, $id);
    }
    public function addLanguage(Request $request, Profile $profile)
    {
        return $this->createQualificationLanguage($request, $profile);
    }
    public function editLanguage(Request $request, Profile $profile, $id)
    {
        return $this->updateLanguage($request, $profile, $id);
    }
    public function addQualificationAttachment(Request $request, Profile $profile)
    {
        return $this->createQualificationAttachment($request, $profile);
    }
    public function replaceQualificationAttachment(Request $request, Profile $profile)
    {
        return $this->updateQualificationAttachment($request, $profile);
    }
    public function qualificationDeleteHandler(Profile $profile, $id, $type)
    {
        return $this->deleteQualification($profile, $id, $type);
    }
    public function editStaffJob(Request $request, Profile $profile)
    {
        return $this->updateStaffJob($request, $profile);
    }
    public function awardJobContract(Profile $profile, $status)
    {
        return $this->saveJobContract($profile, $status);
    }
    public function jobAssignment(Request $request, Profile $profile, $type)
    {
        return $this->saveJobAssignment($request, $profile, $type);
    }
}
