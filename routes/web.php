<?php

use App\Models\User;
use Inertia\Inertia;
use App\Models\Profile;
use App\Jobs\AccountCreated;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Notifications\NewAccountCreated;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/config', function () {
  Artisan::call('config:clear');
  Artisan::call('cache:clear');
  Artisan::call('config:cache');
  Artisan::call('storage:link');
  return 'Done';
});

Route::get('/notification', function () {
  // AccountCreated::dispatch();
  $user = User::find(4);
  $password = 'password';

  AccountCreated::dispatchAfterResponse($user, $password);
  // dispatch(function () use ($user, $password) {

  //   $user->notify(new NewAccountCreated($user, $password, ['first_name' => 'Woodson', 'last_name' => 'Prikah']));
  // })->afterResponse();

  return (new NewAccountCreated($user, $password, ['first_name' => 'Woodson', 'last_name' => 'Prikah']))
    ->toMail($user);
});

Route::get('lang/{lang}', function ($language) {
  Session()->put('locale', $language);
  return redirect()->back();
})->name('language');

Route::get('/', 'WelcomeController@index')->name('welcome')->middleware('guest');
Route::post('/login', 'Auth\LoginController@signIn')->name('login');
Route::post('/logout', 'Auth\LogoutController@signOut')->name('logout');

/**Password Routes */
Route::get('/password-reset-link', 'Auth\PasswordResetContoller@index')->name('password.request');
Route::post('/password-reset-link', 'Auth\PasswordResetContoller@sendPasswordResetLink')->name('password.email');
Route::get('/password-reset/{token}', 'Auth\PasswordResetContoller@passwordReset')->name('password.reset');
Route::post('/password-reset', 'Auth\PasswordResetContoller@passwordRecover')->name('password.recover');
Route::put('/change-password', 'Auth\PasswordResetContoller@changePassword')->middleware(['auth']);


Route::prefix('dashboard')->group(function () {
  Route::get('/', 'DashboarController@index')->name('dashboard');
  Route::get('/admin', 'DashboarController@admin')->name('admin');
  Route::get('/manager', 'DashboarController@manager')->name('manager');
  Route::get('/supervisor', 'DashboarController@supervisor')->name('supervisor');
  Route::get('/ess/{user?}/{slug?}', 'DashboarController@ess')->name('ess');
  Route::get('/pim', 'DashboarController@pim')->name('pim');
  Route::get('/leave', 'DashboarController@leave')->name('leave');
  Route::get('/kpi', 'DashboarController@kpi')->name('kpi');
  Route::get('/staff-directory', 'DashboarController@staffDirectory')->name('staff.directory');

  /**
   * Admin Routes
   */
  Route::post('/register', 'Auth\RegisterController@createAccount')->name('register');
  Route::get('/check-user-password/{user}/{password}', 'AdminController@checkPassword')->name('check.password');
  Route::delete('/delete-user/{user}', 'AdminController@deleteUser')->name('delete.user');
  Route::delete('/delete-users/{users}', 'AdminController@deleteUsers')->name('delete.users');
  Route::put('/assign-users-role', 'AdminController@assignUsersRole')->name('assign.role');
  Route::put('/assign-users-status', 'AdminController@assignUsersStatus')->name('assign.status');

  Route::post('/create-job-catgory', 'JobCategoryController@create')->name('create.jobcat');
  Route::put('/edit-job-catgory/{jobCategory}', 'JobCategoryController@edit')->name('edit.jobcat');
  Route::delete('/delete-job-catgory/{jobCategory}', 'JobCategoryController@delete')->name('delete.jobcat');
  Route::delete('/delete-job-catgories/{jobCategories}', 'JobCategoryController@deleteCategories')->name('delete.jobcats');

  Route::post('/create-job-title', 'JobTitleController@create')->name('create.jobtitle');
  Route::put('/edit-job-title/{jobTitle}', 'JobTitleController@edit')->name('edit.jobtitle');
  Route::delete('/delete-job-title/{jobTitle}', 'JobTitleController@delete')->name('delete.jobtitle');
  Route::delete('/delete-job-titles/{jobTitles}', 'JobTitleController@deleteTitles')->name('delete.jobtitles');

  Route::post('/add-work-shift', 'WorkShiftController@store')->name('workshift.store');
  Route::put('/update-work-shift/{workShift}', 'WorkShiftController@edit')->name('workshift.edit');
  Route::delete('/delete-work-shift/{workShift}', 'WorkShiftController@deleteShift')->name('workshift.delete');
  Route::delete('/delete-work-shifts/{workShift}', 'WorkShiftController@deleteShifts')->name('workshifts.delete');

  Route::post('/create-employment-status', 'EmploymentStatusController@create')->name('create.employmentStatus');
  Route::put('/edit-employment-status/{employmentStatus}', 'EmploymentStatusController@edit')->name('edit.employmentStatus');
  Route::delete('/delete-employment-status/{employmentStatus}', 'EmploymentStatusController@delete')->name('delete.employmentStatus');
  Route::delete('/delete-employment-statuses/{employmentStatuses}', 'EmploymentStatusController@deleteEmpStatuses')->name('delete.employmentStatusese');

  Route::post('/create-department', 'OrganizationController@addDepartment')->name('create.department');
  Route::put('/edit-department/{department}', 'OrganizationController@editDepartment')->name('update.department');
  Route::delete('/delete-department/{department}', 'OrganizationController@deleteDepartment')->name('delete.department');
  Route::delete('/delete-departments/{departments}', 'OrganizationController@deleteDepartments')->name('delete.departments');

  Route::post('/create-unit', 'OrganizationController@addUnit');
  Route::put('/edit-unit/{unit}', 'OrganizationController@editUnit');
  Route::delete('/delete-unit/{unit}', 'OrganizationController@deleteUnit');
  Route::delete('/delete-units/{units}', 'OrganizationController@deleteUnits');

  Route::post('/create-position', 'OrganizationController@addPosition')->name('create.position');
  Route::put('/edit-position/{position}', 'OrganizationController@editPosition')->name('update.position');
  Route::delete('/delete-position/{position}', 'OrganizationController@deletePosition')->name('delete.position');
  Route::delete('/delete-positions/{positions}', 'OrganizationController@deletePositions')->name('delete.positions');

  Route::post('/update-brand-logo', 'OrganizationController@editBrandLogo')->name('update.logo');
  Route::post('/update-organization-metadata', 'OrganizationController@editMetadata')->name('update.metadata');

  /**
   * Role Routes
   */
  Route::post('/add-role', 'RoleController@addNewRole');
  Route::put('/update-role/{role}', 'RoleController@editRole');
  Route::put('/add-role-user/{role}', 'RoleController@addRoleUser');
  Route::put('/delete-role-user/{role}/{staff}', 'RoleController@deleteRoleUser');
  Route::put('/add-role-permission/{role}', 'RoleController@addRolePermission');
  Route::delete('/delete-role/{role}', 'RoleController@deleteRole');
  Route::delete('/delete-roles/{roles}', 'RoleController@deleteRoles');
  Route::put('/add-report-to-staff/{role}', 'RoleController@addReportToStaff');
  Route::put('/remove-report-to-staff/{role}/{reportTo}', 'RoleController@deleteReportToStaff');

  /**
   * ESS Routes
   */
  Route::post('/ess/upload-avatar', 'ESSController@uploadAvatar')->name('upload.avatar');
  Route::put('/ess/update-personal-details/{id}', 'ESSController@editProfile')->name('update.profile');
  Route::post('/ess/update-personal-details-attachment/{profile:user_id}', 'ESSController@editPersonalDetailAttachment')->name('update.personal.attachment');
  Route::post('/ess/replace-personal-details-attachment/{profile:user_id}', 'ESSController@replacePersonalDetailAttachment');
  Route::delete('/ess/delete-personal-details-attachment/{profile:user_id}/{id}', 'ESSController@deletePersonalDetailAttachment');
  Route::put('/ess/update-contact-details/{profile:user_id}', 'ESSController@editContactDetails');
  Route::put('/ess/add-emergency-contact/{profile:user_id}', 'ESSController@addEmergencyContact');
  Route::put('/ess/update-emergency-contact/{profile:user_id}/{id}', 'ESSController@editEmergencyContact');
  Route::delete('/ess/delete-emergency-contact/{profile:user_id}/{id}', 'ESSController@deleteEmergencyContact');
  Route::put('/ess/add-work-experience/{profile:user_id}', 'ESSController@addWorkExperience');
  Route::put('/ess/update-work-experience/{profile:user_id}/{id}', 'ESSController@editWorkExperience');
  Route::put('/ess/add-education/{profile:user_id}', 'ESSController@addEducation');
  Route::put('/ess/add-continuous-dev/{profile:user_id}', 'ESSController@addContinuousDev');
  Route::put('/ess/update-education/{profile:user_id}/{id}', 'ESSController@editEducation');
  Route::put('/ess/update-continuous-dev/{profile:user_id}/{id}', 'ESSController@editContinuousDev');
  Route::put('/ess/add-expertise/{profile:user_id}', 'ESSController@addExpertise');
  Route::put('/ess/update-expertise/{profile:user_id}/{id}', 'ESSController@editExpertise');
  Route::put('/ess/add-language/{profile:user_id}', 'ESSController@addLanguage');
  Route::put('/ess/update-language/{profile:user_id}/{id}', 'ESSController@editLanguage');
  Route::post('/ess/add-qualification-attachment/{profile:user_id}', 'ESSController@addQualificationAttachment');
  Route::post('/ess/replace-qualification-attachment/{profile:user_id}', 'ESSController@replaceQualificationAttachment');
  Route::delete('/ess/delete-qualification/{profile:user_id}/{id}/{type}', 'ESSController@qualificationDeleteHandler');
  Route::post('/ess/update-job/{profile:user_id}', 'ESSController@editStaffJob');
  Route::put('/ess/award-job-contract/{profile:user_id}/{status}', 'ESSController@awardJobContract');
  Route::put('/ess/update-job-assignment/{profile:user_id}/{type}', 'ESSController@jobAssignment');

  /**
   * KPI Routes
   */
  Route::post('/add-appraisal', 'KPIController@storeAppraisal');
  Route::get('/get-user-appraisal/{appraisal}/{user?}', 'KPIController@userAppraisal');
  Route::post('/add-key-goal', 'SelfAppraisalController@storeKeyGoal');
  Route::post('/add-self-appraisal', 'SelfAppraisalController@storeSelfAppraisal');
  Route::put('/update-user-goal/{appraisal}', 'SelfAppraisalController@editUserGoal');
  Route::put('/update-department-goal/{appraisal}', 'SelfAppraisalController@editDepartmentGoal');
  Route::put('/update-unit-goal/{appraisal}', 'SelfAppraisalController@editUnitGoal');
  Route::put('/update-user-appraisal/{appraisal}', 'SelfAppraisalController@editUserAppraisal');
  Route::put('/update-user-appraisal-metrics/{appraisal}/{user}', 'SelfAppraisalController@editUserAppraisalMetrics');
  Route::delete('/delete-user-goal/{appraisal}/{goal}', 'SelfAppraisalController@deleteUserGoal');
  Route::delete('/delete-department-goal/{appraisal}/{goal}', 'SelfAppraisalController@deleteDepartmentGoal');
  Route::delete('/delete-unit-goal/{appraisal}/{goal}', 'SelfAppraisalController@deleteUnitGoal');
  Route::delete('/delete-user-appraisal/{appraisal}/{id}/{type}', 'SelfAppraisalController@deleteUserAppraisal');


  /**
   * Equipment Routes
   */
  Route::post('/add-equipment-request', 'EquipmentRequestController@store');
  Route::post('/add-equipment-request', 'EquipmentRequestController@store');
  Route::get('/get-request-approval-name/{id}', 'EquipmentRequestController@requestApprovalName');
  Route::put('/approve-equipment-request/{equipmentRequest}', 'EquipmentRequestController@approveEquipmentRequest');
  Route::put('/edit-equipment-request/{equipmentRequest}', 'EquipmentRequestController@update');
  Route::delete('/delete-equipment-request/{equipmentRequest}', 'EquipmentRequestController@destroy');
  Route::delete('/delete-equipment-requests/{equipmentRequests}', 'EquipmentRequestController@destroyMultiple');
  Route::get('/get-granted-requests', 'EquipmentRequestController@getGrantedRequests');


  Route::post('/allocate-equipment', 'EquipmentAllocationController@store');
  Route::put('/edit-equipment-allocation/{equipmentAllocation}', 'EquipmentAllocationController@update');
  Route::delete('/delete-equipment-allocation/{equipmentAllocation}', 'EquipmentAllocationController@destroy');
  Route::delete('/delete-equipment-allocations/{equipmentAllocation}', 'EquipmentAllocationController@destroyMultiple');
  Route::put('/approve-equipment-allocation/{equipmentAllocation}', 'EquipmentAllocationController@approveEquipmentAllocation');




  /**
   * Table Pagination Routes
   */

  Route::get('/get-users', 'PaginationController@usersPerPage');
  Route::get('/get-staff', 'PaginationController@staffPerPage');
  Route::get('/get-appraisals', 'PaginationController@appraisalsPerPage');
  Route::get('/get-appraisees/{appraisal}', 'PaginationController@appraiseesPerPage');
  Route::get('/search-staff', 'PaginationController@searchStaffDirectory');
  Route::get('/get-my-requests', 'PaginationController@myEquipmentRequests');
  Route::get('/get-requests', 'PaginationController@equipmentRequests');
  Route::get('/get-my-allocations', 'PaginationController@myEquipmentAllocations');
  Route::get('/get-allocations', 'PaginationController@equipmentAllocations');
});
