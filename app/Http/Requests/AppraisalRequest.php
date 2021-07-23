<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppraisalRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'period.from' => 'required|string',
            'period.to' => 'required|string',
            'sap.open' => 'required|string',
            'sap.close' => 'required|string',
            'np.open' => 'required|string',
            'np.close' => 'required|string',
            'description' => 'nullable|string',
            'applicableFor.branch' => 'required|array',
            'applicableFor.department' => 'required|array',
            'applicableFor.unit' => 'required|array',
            'applicableFor.role' => 'required|array',
        ];
    }

    /**
     *Change request attributes.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'period.from' => 'from',
            'period.to' => 'to',
            'sap.open' => 'open',
            'sap.close' => 'close',
            'np.open' => 'open',
            'np.close' => 'close',
            'kg.open' => 'open',
            'kg.close' => 'close',
            'ar.open' => 'open',
            'ar.close' => 'close',
            'applicableFor.branch' => 'branch',
            'applicableFor.department' => 'department',
            'applicableFor.unit' => 'unit',
            'applicableFor.role' => 'role',
        ];
    }
}
