<?php

namespace App\Traits;

use App\Models\EquipmentAllocation;
use App\Models\Profile;
use App\Models\EquipmentRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

/**
 * ManageEquipment
 */
trait ManageEquipmentRequest
{

  public function getGrantedEquipmentRequests()
  {
    return EquipmentRequest::join('profiles', 'profiles.user_id', '=', 'equipment_requests.user_id')
      ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
      ->whereNotNull('equipment_requests.dpt_unit_approval')
      ->where('equipment_requests.it_approval->status', 'Granted')
      ->where('equipment_requests.user_id', '!=', Auth::id())
      ->select(
        'equipment_requests.*',
        'departments.id as department_id',
        'equipment_requests.details->item as item',
        'equipment_requests.details->otherItem as otherItem',
        'equipment_requests.details->quantity as quantity',
        'profiles.personal_details->title as title',
        'profiles.personal_details->lastName as lastName',
        'profiles.personal_details->firstName as firstName',
        'profiles.personal_details->middleName as middleName',
      )
      ->orderByDesc(
        'equipment_requests.created_at'
      )
      ->get();
  }
  public function getMyEquipmentRequests()
  {
    return EquipmentRequest::where('equipment_requests.user_id', Auth::id())
      ->join('profiles', 'profiles.user_id', '=', 'equipment_requests.user_id')
      ->join('users', 'users.id', '=', 'profiles.user_id')
      ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
      ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
      ->select(
        'equipment_requests.*',
        'users.email',
        'profiles.personal_details->title as title',
        'profiles.personal_details->lastName as lastName',
        'profiles.personal_details->firstName as firstName',
        'profiles.personal_details->middleName as middleName',
        'departments.name as department',
        'positions.name as position',
      )
      ->orderByDesc(
        'equipment_requests.created_at'
      )
      ->paginate(50);
  }
  public function getMyEquipmentAllocations($id = null)
  {
    // if ($id) {
    //   return EquipmentAllocation::where('equipment_allocations.id', $id)
    //     ->join('profiles', 'profiles.user_id', '=', 'equipment_allocations.user_id')
    //     ->join('users', 'users.id', '=', 'profiles.user_id')
    //     ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
    //     ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
    //     ->whereNotNull('equipment_allocations.dpt_unit_approval')
    //     ->select(
    //       'equipment_allocations.*',
    //       'users.email',
    //       'profiles.personal_details->title as title',
    //       'profiles.personal_details->lastName as lastName',
    //       'profiles.personal_details->firstName as firstName',
    //       'profiles.personal_details->middleName as middleName',
    //       'departments.name as department',
    //       'positions.name as position',
    //     )->first();
    // }
    return EquipmentRequest::where('equipment_requests.user_id', Auth::id())
      ->join('equipment_allocations', 'equipment_allocations.equipment_request_id', '=', 'equipment_requests.id')
      ->join('profiles', 'profiles.user_id', '=', 'equipment_allocations.user_id')
      ->join('users', 'users.id', '=', 'profiles.user_id')
      ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
      ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
      ->whereNotNull('equipment_allocations.dpt_unit_approval')
      ->select(
        'equipment_allocations.*',
        'users.email',
        'profiles.personal_details->title as title',
        'profiles.personal_details->lastName as lastName',
        'profiles.personal_details->firstName as firstName',
        'profiles.personal_details->middleName as middleName',
        'departments.name as department',
        'positions.name as position',
      )
      ->orderByDesc(
        'equipment_allocations.created_at'
      )
      ->paginate(50);
  }
  public function getEquipmentRequests($id = null)
  {
    if ($id) {
      return EquipmentRequest::where('equipment_requests.id', $id)
        ->join('profiles', 'profiles.user_id', '=', 'equipment_requests.user_id')
        ->join('users', 'users.id', '=', 'profiles.user_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'equipment_requests.*',
          'users.email',
          'profiles.personal_details->title as title',
          'profiles.personal_details->lastName as lastName',
          'profiles.personal_details->firstName as firstName',
          'profiles.personal_details->middleName as middleName',
          'departments.name as department',
          'positions.name as position',
        )
        ->first();
    }
    if (Gate::allows('hod', Auth::user())) {

      if (Gate::allows('approve_it_equipment', Auth::user())) {
        return EquipmentRequest::join('profiles', 'profiles.user_id', '=', 'equipment_requests.user_id')
          ->join('users', 'users.id', '=', 'profiles.user_id')
          ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
          ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
          ->select(
            'equipment_requests.*',
            'users.email',
            'profiles.personal_details->title as title',
            'profiles.personal_details->lastName as lastName',
            'profiles.personal_details->firstName as firstName',
            'profiles.personal_details->middleName as middleName',
            'departments.name as department',
            'positions.name as position',
          )
          ->orderByDesc(
            'equipment_requests.created_at'
          )
          ->paginate(100);
      }

      return Profile::whereNotNull('profiles.department_id')
        ->where('profiles.department_id', Auth::user()->profile->department_id)
        ->join('users', 'users.id', '=', 'profiles.user_id')
        ->join('equipment_requests', 'equipment_requests.user_id', '=', 'profiles.user_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'equipment_requests.*',
          'users.email',
          'profiles.personal_details->title as title',
          'profiles.personal_details->lastName as lastName',
          'profiles.personal_details->firstName as firstName',
          'profiles.personal_details->middleName as middleName',
          'departments.name as department',
          'positions.name as position',
        )
        ->orderByDesc(
          'equipment_requests.created_at'
        )
        ->paginate(50);
    }

    if (Gate::allows('approve_it_equipment', Auth::user())) {
      return EquipmentRequest::whereNotNull('equipment_requests.dpt_unit_approval')
        ->join('profiles', 'profiles.user_id', '=', 'equipment_requests.user_id')
        ->join('users', 'users.id', '=', 'profiles.user_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'equipment_requests.*',
          'users.email',
          'profiles.personal_details->title as title',
          'profiles.personal_details->lastName as lastName',
          'profiles.personal_details->firstName as firstName',
          'profiles.personal_details->middleName as middleName',
          'departments.name as department',
          'positions.name as position',
        )
        ->orderByDesc(
          'equipment_requests.created_at'
        )
        ->paginate(100);
    }
  }
  public function getEquipmentAllocations($id = null)
  {
    if ($id) {
      return EquipmentAllocation::where('equipment_allocations.id', $id)
        ->join('users', 'users.id', '=', 'equipment_allocations.user_id')
        ->join('profiles', 'profiles.user_id', '=', 'equipment_allocations.user_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'equipment_allocations.*',
          'users.email',
          'profiles.personal_details->title as title',
          'profiles.personal_details->lastName as lastName',
          'profiles.personal_details->firstName as firstName',
          'profiles.personal_details->middleName as middleName',
          'departments.name as department',
          'positions.name as position',
        )
        ->first();
    }
    if (Gate::allows('hod', Auth::user())) {
      if (Gate::allows('approve_it_equipment', Auth::user())) {
        return EquipmentAllocation::join('users', 'users.id', '=', 'equipment_allocations.user_id')
          ->join('profiles', 'profiles.user_id', '=', 'equipment_allocations.user_id')
          ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
          ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
          ->select(
            'equipment_allocations.*',
            'users.email',
            'profiles.personal_details->title as title',
            'profiles.personal_details->lastName as lastName',
            'profiles.personal_details->firstName as firstName',
            'profiles.personal_details->middleName as middleName',
            'departments.name as department',
            'positions.name as position',
          )
          ->orderByDesc(
            'equipment_allocations.created_at'
          )
          ->paginate(100);

        // dd(Auth::user()->profile->department_id, $ab);
      }

      return EquipmentAllocation::where('equipment_allocations.requester_dpt_id', Auth::user()->profile->department_id)
        ->join('profiles', 'profiles.user_id', '=', 'equipment_allocations.user_id')
        ->join('users', 'users.id', '=', 'equipment_allocations.user_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        // ->whereNotNull('profiles.department_id')
        ->select(
          'equipment_allocations.*',
          'users.email',
          'profiles.personal_details->title as title',
          'profiles.personal_details->lastName as lastName',
          'profiles.personal_details->firstName as firstName',
          'profiles.personal_details->middleName as middleName',
          'departments.name as department',
          'positions.name as position',
        )
        ->orderByDesc(
          'equipment_allocations.created_at'
        )
        ->paginate(50);
    }


    if (Gate::allows('approve_it_equipment', Auth::user())) {
      return EquipmentAllocation::join('users', 'users.id', '=', 'equipment_allocations.user_id')
        ->join('profiles', 'profiles.user_id', '=', 'equipment_allocations.user_id')
        ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
        ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
        ->select(
          'equipment_allocations.*',
          'users.email',
          'profiles.personal_details->title as title',
          'profiles.personal_details->lastName as lastName',
          'profiles.personal_details->firstName as firstName',
          'profiles.personal_details->middleName as middleName',
          'departments.name as department',
          'positions.name as position',
        )
        ->orderByDesc(
          'equipment_allocations.created_at'
        )
        ->paginate(100);
    }
  }

  public function createEquipment($request)
  {
    $request->validate([
      'category' => 'required|string',
      'type' => 'required|string',
      'otherType' => 'exclude_unless:type,other|required|string',
      'item' => 'required|string',
      'otherItem' => 'exclude_unless:item,other|required|string',
      'quantity' => 'required|numeric',
      'purpose' => 'required|string',
    ], [], [
      'otherType' => 'other type',
      'otherItem' => 'other item',
    ]);

    return EquipmentRequest::create([
      'user_id' => Auth::id(),
      'request_number' => null,
      'department_id' => Auth::user()->profile->department_id,
      'details' => json_encode((object)$request->all()),
      'dpt_unit_approval' => null,
      'it_approval' => null,
    ]);
  }
  public function createAllocation($request)
  {
    $request->validate([
      'equipment' => 'required|string',
      'model' => 'required|string',
      'serialNumber' => 'required|string',
      'manufacturer' => 'required|string',
      'quantity' => 'required|numeric',
      'equipmentRequest' => 'required|numeric',
      'approverInitials' => 'required|string',
    ], [], [
      'equipmentRequest' => 'request',
    ]);

    return EquipmentAllocation::create([
      'equipment_request_id' => $request->equipmentRequest,
      'user_id' => Auth::id(),
      'requester_dpt_id' => $request->requesterDptId,
      'request_name' => $request->requestName,
      'equipment' => $request->equipment,
      'model' => $request->model,
      'serial_number' => $request->serialNumber,
      'manufacturer' => $request->manufacturer,
      'quantity' => $request->quantity,
      'approver_initials' => $request->approverInitials,
      'dpt_unit_approval' => null,
      'staff_approval' => null,
    ]);
  }
  public function updateRequest($request, $equipmentRequest)
  {
    $request->validate([
      'category' => 'required|string',
      'type' => 'required|string',
      'otherType' => 'exclude_unless:type,other|required|string',
      'item' => 'required|string',
      'otherItem' => 'exclude_unless:item,other|required|string',
      'quantity' => 'required|numeric',
      'purpose' => 'required|string',
    ], [], [
      'otherType' => 'other type',
      'otherItem' => 'other item',
    ]);
    $equipmentRequest->details = json_encode((object)$request->all());
    $equipmentRequest->save();
    return response()->json(['updated' => true, 'request' => $this->getEquipmentRequests($equipmentRequest->id)]);
  }
  public function updateAllocation($request, $equipmentAllocation)
  {
    $request->validate([
      'equipment' => 'required|string',
      'model' => 'required|string',
      'serialNumber' => 'required|string',
      'manufacturer' => 'required|string',
      'quantity' => 'required|numeric',
      'equipmentRequest' => 'required|numeric',
      'approverInitials' => 'required|string',
    ], [], [
      'equipmentRequest' => 'request',
    ]);

    $equipmentAllocation->equipment_request_id = $request->equipmentRequest;
    $equipmentAllocation->request_name = $request->requestName;
    $equipmentAllocation->equipment = $request->equipment;
    $equipmentAllocation->model = $request->model;
    $equipmentAllocation->serial_number = $request->serialNumber;
    $equipmentAllocation->manufacturer = $request->manufacturer;
    $equipmentAllocation->quantity = $request->quantity;
    $equipmentAllocation->approver_initials = $request->approverInitials;
    $equipmentAllocation->save();
    return response()->json(['updated' => true, 'allocation' => $this->getEquipmentAllocations($equipmentAllocation->id)]);
  }
  public function approveRequest($request, $equipmentRequest)
  {
    if ($request->header('permissionType') === 'hod') {
      $request->validate([
        'name' => 'required|string',
        'initials' => 'required|string',
        'date' => 'required|string',
      ]);
      $data = [
        'name' => Auth::id(),
        'initials' => $request->initials,
        'date' => $request->date,
      ];
      $equipmentRequest->dpt_unit_approval = json_encode((object)$data);
      $equipmentRequest->save();
      return response()->json(['approved' => true, 'request' => $this->getEquipmentRequests($equipmentRequest->id)]);
    }
    if ($request->header('permissionType') === 'IT') {
      $request->validate([
        'status' => 'required|string',
        'reason' => 'nullable|string',
        'availability' => 'required|string',
        'supplier' => 'required|string',
        'name' => 'required|string',
        'initials' => 'required|string',
        'date' => 'required|string',
      ]);
      $data = [
        'status' => $request->status,
        'reason' => $request->reason,
        'availability' => $request->availability,
        'supplier' => $request->supplier,
        'name' => Auth::id(),
        'initials' => $request->initials,
        'date' => $request->date,
      ];
      $equipmentRequest->it_approval = json_encode((object)$data);
      $equipmentRequest->save();
      return response()->json(['approved' => true, 'request' => $this->getEquipmentRequests($equipmentRequest->id)]);
    }
  }
  public function approveAllocation($request, $equipmentAllocation)
  {
    $request->validate([
      'name' => 'required|string',
      'initials' => 'required|string',
      'date' => 'required|string',
    ]);
    $data = [
      'name' => Auth::id(),
      'initials' => $request->initials,
      'date' => $request->date,
    ];
    if ($request->header('permissionType') === 'department') {
      $equipmentAllocation->dpt_unit_approval = json_encode((object)$data);
      $equipmentAllocation->save();
      return response()->json([
        'approved' => true,
        'allocation' => $this->getEquipmentAllocations($equipmentAllocation->id),
      ]);
    }
    if ($request->header('permissionType') === 'staff') {
      $equipmentAllocation->staff_approval = json_encode((object)$data);
      $equipmentAllocation->save();
      return response()->json(['approved' => true, 'allocation' => $this->getEquipmentAllocations($equipmentAllocation->id)]);
    }
  }
}
