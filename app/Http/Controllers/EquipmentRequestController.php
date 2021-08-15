<?php

namespace App\Http\Controllers;

use App\Models\EquipmentRequest;
use App\Models\Profile;
use App\Traits\ManageEquipmentRequest;
use Illuminate\Http\Request;

class EquipmentRequestController extends Controller
{
    use ManageEquipmentRequest;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function requestApprovalName($id)
    {
        $profile = Profile::where('profiles.user_id', $id)
            ->join('users', 'users.id', '=', 'profiles.user_id')
            ->leftJoin('departments', 'departments.id', '=', 'profiles.department_id')
            ->leftJoin('positions', 'positions.id', '=', 'profiles.position_id')
            ->select(
                'users.email',
                'departments.name as department',
                'positions.name as position',
                'profiles.personal_details->title as title',
                'profiles.personal_details->lastName as lastName',
                'profiles.personal_details->firstName as firstName',
                'profiles.personal_details->middleName as middleName',
                'profiles.personal_details->avatar as avatar',


            )
            ->first();
        return response()->json(['name' => $profile]);
    }

    public function approveEquipmentRequest(Request $request, EquipmentRequest $equipmentRequest)
    {
        return $this->approveRequest($request, $equipmentRequest);
    }
    public function getGrantedRequests()
    {
        return $this->getGrantedEquipmentRequests();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->createEquipment($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EquipmentRequest  $equipmentRequest
     * @return \Illuminate\Http\Response
     */
    public function show(EquipmentRequest $equipmentRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EquipmentRequest  $equipmentRequest
     * @return \Illuminate\Http\Response
     */
    public function edit(EquipmentRequest $equipmentRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EquipmentRequest  $equipmentRequest
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EquipmentRequest $equipmentRequest)
    {
        return $this->updateRequest($request, $equipmentRequest);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EquipmentRequest  $equipmentRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(EquipmentRequest $equipmentRequest)
    {
        $equipmentRequest->delete();
        return response()->json(['deleted' => true]);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EquipmentRequest  $equipmentRequest
     * @return \Illuminate\Http\Response
     */
    public function destroyMultiple($equipmentRequest)
    {
        EquipmentRequest::whereIn('id', explode(',', $equipmentRequest))->delete();
        return response()->json(['deleted' => true]);
    }
}
