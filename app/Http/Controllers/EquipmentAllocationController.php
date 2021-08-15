<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EquipmentAllocation;
use App\Traits\ManageEquipmentRequest;

class EquipmentAllocationController extends Controller
{
    use ManageEquipmentRequest;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function approveEquipmentAllocation(Request $request, EquipmentAllocation $equipmentAllocation)
    {
        return $this->approveAllocation($request, $equipmentAllocation);
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
        return $this->createAllocation($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EquipmentAllocation  $equipmentAllocation
     * @return \Illuminate\Http\Response
     */
    public function show(EquipmentAllocation $equipmentAllocation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EquipmentAllocation  $equipmentAllocation
     * @return \Illuminate\Http\Response
     */
    public function edit(EquipmentAllocation $equipmentAllocation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EquipmentAllocation  $equipmentAllocation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EquipmentAllocation $equipmentAllocation)
    {
        return $this->updateAllocation($request, $equipmentAllocation);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EquipmentAllocation  $equipmentAllocation
     * @return \Illuminate\Http\Response
     */
    public function destroy(EquipmentAllocation $equipmentAllocation)
    {
        $equipmentAllocation->delete();
        return response()->json(['deleted' => true]);
    }

    public function destroyMultiple($equipmentAllocation)
    {
        EquipmentAllocation::whereIn('id', explode(',', $equipmentAllocation))->delete();
        return response()->json(['deleted' => true]);
    }
}
