<?php

/*
|--------------------------------------------------------------------------
| Load The Cached Routes
|--------------------------------------------------------------------------
|
| Here we will decode and unserialize the RouteCollection instance that
| holds all of the route information for an application. This allows
| us to instantaneously load the entire route map into the router.
|
*/

app('router')->setCompiledRoutes(
  array(
    'compiled' =>
    array(
      0 => false,
      1 =>
      array(
        '/api/user' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::pVZyljhp7VVruaCD',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/api/bio' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::1ghgfIZ7EDUXq6cJ',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/config' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::k85KYlgUjSREZOCo',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/notification' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::dcIPsO4Ebxed2SL8',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'welcome',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/login' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'login',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/logout' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'logout',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/password-reset-link' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'password.request',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
          1 =>
          array(
            0 =>
            array(
              '_route' => 'password.email',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/password-reset' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'password.recover',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/change-password' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::wjclpOKcDL9TYmeq',
            ),
            1 => NULL,
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'dashboard',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/admin' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'admin',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/manager' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'manager',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/supervisor' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'supervisor',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/pim' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'pim',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/leave' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'leave',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/kpi' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'kpi',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/staff-directory' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'staff.directory',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/register' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'register',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/assign-users-role' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'assign.role',
            ),
            1 => NULL,
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/assign-users-status' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'assign.status',
            ),
            1 => NULL,
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/create-job-catgory' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'create.jobcat',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/create-job-title' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'create.jobtitle',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/add-work-shift' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'workshift.store',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/create-employment-status' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'create.employmentStatus',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/create-department' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'create.department',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/create-unit' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::Cn3NeUT8PyyRgRT3',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/create-position' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'create.position',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/update-brand-logo' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'update.logo',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/update-organization-metadata' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'update.metadata',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/add-role' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::v3hE7yxZyKgg7U4o',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/add-appraisal' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::Q315xk6C9DUAURz5',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/add-key-goal' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::KyRPHfIifBqf7U35',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/add-self-appraisal' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::7GpTo6wyVEAJGn17',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/add-equipment-request' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::qPNUQPSIcg6dfTxT',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/get-granted-requests' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::GzEwp3GfPXcALOv7',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/allocate-equipment' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::WA29EIUIqZirk4rZ',
            ),
            1 => NULL,
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/get-users' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::xoCsYCyOlOj221U2',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/get-staff' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::zBQTuR6dmiFu3mTu',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/get-appraisals' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::SZHTflEDjK1OzgCP',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/search-staff' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::syZXtdgGlsaHMsPQ',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/get-my-requests' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::6YFHKjS3iv1IJuvp',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/get-requests' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::NUBH0YN7s57M4IwA',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/get-my-allocations' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::ypR93Z4Hbwt1dilU',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        '/dashboard/get-allocations' =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::VhgoBzxVJRb109QO',
            ),
            1 => NULL,
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
      ),
      2 =>
      array(
        0 => '{^(?|/lang/([^/]++)(*:21)|/password\\-reset/([^/]++)(*:53)|/dashboard/(?|e(?|ss(?|(?:/([^/]++)(?:/([^/]++))?)?(*:111)|/(?|up(?|load\\-avatar(*:140)|date\\-(?|personal\\-details(?|/([^/]++)(*:186)|\\-attachment/([^/]++)(*:215))|cont(?|act\\-details/([^/]++)(*:252)|inuous\\-dev/([^/]++)/([^/]++)(*:289))|e(?|mergency\\-contact/([^/]++)/([^/]++)(*:337)|ducation/([^/]++)/([^/]++)(*:371)|xpertise/([^/]++)/([^/]++)(*:405))|work\\-experience/([^/]++)/([^/]++)(*:448)|language/([^/]++)/([^/]++)(*:482)|job(?|/([^/]++)(*:505)|\\-assignment/([^/]++)/([^/]++)(*:543))))|replace\\-(?|personal\\-details\\-attachment/([^/]++)(*:604)|qualification\\-attachment/([^/]++)(*:646))|delete\\-(?|personal\\-details\\-attachment/([^/]++)/([^/]++)(*:713)|emergency\\-contact/([^/]++)/([^/]++)(*:757)|qualification/([^/]++)/([^/]++)/([^/]++)(*:805))|a(?|dd\\-(?|e(?|mergency\\-contact/([^/]++)(*:855)|ducation/([^/]++)(*:880)|xpertise/([^/]++)(*:905))|work\\-experience/([^/]++)(*:939)|continuous\\-dev/([^/]++)(*:971)|language/([^/]++)(*:996)|qualification\\-attachment/([^/]++)(*:1038))|ward\\-job\\-contract/([^/]++)/([^/]++)(*:1085))))|dit\\-(?|job\\-(?|catgory/([^/]++)(*:1129)|title/([^/]++)(*:1152))|e(?|mployment\\-status/([^/]++)(*:1192)|quipment\\-(?|request/([^/]++)(*:1230)|allocation/([^/]++)(*:1258)))|department/([^/]++)(*:1288)|unit/([^/]++)(*:1310)|position/([^/]++)(*:1336)))|check\\-user\\-password/([^/]++)/([^/]++)(*:1386)|delete\\-(?|u(?|ser(?|/([^/]++)(*:1425)|s/([^/]++)(*:1444)|\\-(?|goal/([^/]++)/([^/]++)(*:1480)|appraisal/([^/]++)/([^/]++)/([^/]++)(*:1525)))|nit(?|/([^/]++)(*:1551)|s/([^/]++)(*:1570)|\\-goal/([^/]++)/([^/]++)(*:1603)))|job\\-(?|catgor(?|y/([^/]++)(*:1641)|ies/([^/]++)(*:1662))|title(?|/([^/]++)(*:1689)|s/([^/]++)(*:1708)))|work\\-shift(?|/([^/]++)(*:1742)|s/([^/]++)(*:1761))|e(?|mployment\\-status(?|/([^/]++)(*:1804)|es/([^/]++)(*:1824))|quipment\\-(?|request(?|/([^/]++)(*:1866)|s/([^/]++)(*:1885))|allocation(?|/([^/]++)(*:1917)|s/([^/]++)(*:1936))))|department(?|/([^/]++)(*:1970)|s/([^/]++)(*:1989)|\\-goal/([^/]++)/([^/]++)(*:2022))|position(?|/([^/]++)(*:2052)|s/([^/]++)(*:2071))|role(?|\\-user/([^/]++)/([^/]++)(*:2112)|/([^/]++)(*:2130)|s/([^/]++)(*:2149))|appraisal(?|/([^/]++)(*:2180)|s/([^/]++)(*:2199)))|update\\-(?|work\\-shift/([^/]++)(*:2241)|role/([^/]++)(*:2263)|appraisal/([^/]++)(*:2290)|u(?|ser\\-(?|goal/([^/]++)(*:2324)|appraisal(?|/([^/]++)(*:2354)|\\-metrics/([^/]++)/([^/]++)(*:2390)))|nit\\-goal/([^/]++)(*:2419))|department\\-goal/([^/]++)(*:2454))|a(?|dd\\-r(?|ole\\-(?|user/([^/]++)(*:2497)|permission/([^/]++)(*:2525))|eport\\-to\\-staff/([^/]++)(*:2560))|pprove\\-equipment\\-(?|request/([^/]++)(*:2608)|allocation/([^/]++)(*:2636)))|remove\\-(?|report\\-to\\-staff/([^/]++)/([^/]++)(*:2693)|appraisee/([^/]++)(*:2720))|get\\-(?|user\\-appraisal/([^/]++)(?:/([^/]++))?(*:2776)|request\\-approval\\-name/([^/]++)(*:2817)|appraisees/([^/]++)(*:2845))))/?$}sDu',
      ),
      3 =>
      array(
        21 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'language',
            ),
            1 =>
            array(
              0 => 'lang',
            ),
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        53 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'password.reset',
            ),
            1 =>
            array(
              0 => 'token',
            ),
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        111 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'ess',
              'user' => NULL,
              'slug' => NULL,
            ),
            1 =>
            array(
              0 => 'user',
              1 => 'slug',
            ),
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        140 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'upload.avatar',
            ),
            1 =>
            array(),
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => false,
            6 => NULL,
          ),
        ),
        186 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'update.profile',
            ),
            1 =>
            array(
              0 => 'id',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        215 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'update.personal.attachment',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        252 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::WNxId0n9R9IjXjkP',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        289 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::iY5ns0IIIKScua4D',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'id',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        337 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::vOuPopJSojInxrjq',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'id',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        371 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::0eJ8oJY52QQUsenM',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'id',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        405 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::N1RNLgSl0TqDQ6n3',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'id',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        448 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::LqflBrY8mjpcypyY',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'id',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        482 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::kQcLK2tZqU9AZty4',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'id',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        505 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::ZuWiLASVfprkUo4w',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        543 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::YTK7CilWISo5Ls6g',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'type',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        604 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::0KjEsvIGIxu5lzp5',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        646 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::JF7Z3NapPic3tXh9',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        713 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::ZSjeO5UJQFuJFMg6',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'id',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        757 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::qsHU31M1b3xYj4yp',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'id',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        805 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::i5K0cojps0bicTs6',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'id',
              2 => 'type',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        855 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::fNHIzwDqsClMnvTB',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        880 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::qxjY7F37bD0TE7aW',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        905 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::E8wlLXBctqc2fyQf',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        939 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::ZJRWo7h4y5yupUnX',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        971 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::qHQH2e5sjrpxJxNz',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        996 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::eO6vqakqsffarsTF',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1038 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::AUC00xrQJ2Pdqkxx',
            ),
            1 =>
            array(
              0 => 'profile',
            ),
            2 =>
            array(
              'POST' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1085 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::3yH8dCxewIfHrk2x',
            ),
            1 =>
            array(
              0 => 'profile',
              1 => 'status',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1129 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'edit.jobcat',
            ),
            1 =>
            array(
              0 => 'jobCategory',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1152 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'edit.jobtitle',
            ),
            1 =>
            array(
              0 => 'jobTitle',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1192 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'edit.employmentStatus',
            ),
            1 =>
            array(
              0 => 'employmentStatus',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1230 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::NVPDBvtoVkYqiv6b',
            ),
            1 =>
            array(
              0 => 'equipmentRequest',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1258 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::Vm2PKo4s713RbGvw',
            ),
            1 =>
            array(
              0 => 'equipmentAllocation',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1288 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'update.department',
            ),
            1 =>
            array(
              0 => 'department',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1310 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::UIs1gjOosKHcxIE1',
            ),
            1 =>
            array(
              0 => 'unit',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1336 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'update.position',
            ),
            1 =>
            array(
              0 => 'position',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1386 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'check.password',
            ),
            1 =>
            array(
              0 => 'user',
              1 => 'password',
            ),
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1425 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.user',
            ),
            1 =>
            array(
              0 => 'user',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1444 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.users',
            ),
            1 =>
            array(
              0 => 'users',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1480 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::dqaLlwBlgcsowIwn',
            ),
            1 =>
            array(
              0 => 'appraisal',
              1 => 'goal',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1525 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::Oh7z3Gtigoc06Xq1',
            ),
            1 =>
            array(
              0 => 'appraisal',
              1 => 'id',
              2 => 'type',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1551 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::xfrgXANpSbXh0yfq',
            ),
            1 =>
            array(
              0 => 'unit',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1570 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::050L7xymrvonOsGq',
            ),
            1 =>
            array(
              0 => 'units',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1603 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::UVhvKFgzKBDR6qdX',
            ),
            1 =>
            array(
              0 => 'appraisal',
              1 => 'goal',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1641 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.jobcat',
            ),
            1 =>
            array(
              0 => 'jobCategory',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1662 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.jobcats',
            ),
            1 =>
            array(
              0 => 'jobCategories',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1689 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.jobtitle',
            ),
            1 =>
            array(
              0 => 'jobTitle',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1708 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.jobtitles',
            ),
            1 =>
            array(
              0 => 'jobTitles',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1742 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'workshift.delete',
            ),
            1 =>
            array(
              0 => 'workShift',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1761 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'workshifts.delete',
            ),
            1 =>
            array(
              0 => 'workShift',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1804 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.employmentStatus',
            ),
            1 =>
            array(
              0 => 'employmentStatus',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1824 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.employmentStatusese',
            ),
            1 =>
            array(
              0 => 'employmentStatuses',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1866 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::hDB5GIk8veBwFqfD',
            ),
            1 =>
            array(
              0 => 'equipmentRequest',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1885 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::q4wB2YnVOOQfRbwx',
            ),
            1 =>
            array(
              0 => 'equipmentRequests',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1917 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::JrSlZIdv7lY8lUwS',
            ),
            1 =>
            array(
              0 => 'equipmentAllocation',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1936 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::0T0fw5mmhmy3TYHL',
            ),
            1 =>
            array(
              0 => 'equipmentAllocation',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1970 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.department',
            ),
            1 =>
            array(
              0 => 'department',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        1989 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.departments',
            ),
            1 =>
            array(
              0 => 'departments',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2022 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::6xY1xn1WtqBkMZno',
            ),
            1 =>
            array(
              0 => 'appraisal',
              1 => 'goal',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2052 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.position',
            ),
            1 =>
            array(
              0 => 'position',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2071 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'delete.positions',
            ),
            1 =>
            array(
              0 => 'positions',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2112 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::BzoPvVT4pnHkoUXS',
            ),
            1 =>
            array(
              0 => 'role',
              1 => 'staff',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2130 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::OzAkA02OIZQ58MjR',
            ),
            1 =>
            array(
              0 => 'role',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2149 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::cO4zIuOnic3N1wcY',
            ),
            1 =>
            array(
              0 => 'roles',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2180 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::dIgZOaOM9HVNSTC4',
            ),
            1 =>
            array(
              0 => 'appraisal',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2199 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::EoP9tKBPikxtk3ES',
            ),
            1 =>
            array(
              0 => 'appraisals',
            ),
            2 =>
            array(
              'DELETE' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2241 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'workshift.edit',
            ),
            1 =>
            array(
              0 => 'workShift',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2263 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::kfhtEe34ZdOy9Ilr',
            ),
            1 =>
            array(
              0 => 'role',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2290 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::AediFclM6QVN4j50',
            ),
            1 =>
            array(
              0 => 'appraisal',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2324 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::McSYmadycsxgD7w4',
            ),
            1 =>
            array(
              0 => 'appraisal',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2354 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::QTiViXYEg2rSX6Lo',
            ),
            1 =>
            array(
              0 => 'appraisal',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2390 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::RU72jLB2lwZ0oxgd',
            ),
            1 =>
            array(
              0 => 'appraisal',
              1 => 'user',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2419 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::wNHCM1AjCNpqAKv6',
            ),
            1 =>
            array(
              0 => 'appraisal',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2454 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::3IywWEvUB5jpdDQq',
            ),
            1 =>
            array(
              0 => 'appraisal',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2497 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::CvJdEdnd6OGGYy5n',
            ),
            1 =>
            array(
              0 => 'role',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2525 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::NlEk3aKwCpoOxVkc',
            ),
            1 =>
            array(
              0 => 'role',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2560 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::o4bluNEjxvXZu1N9',
            ),
            1 =>
            array(
              0 => 'role',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2608 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::U97DRdnhQKwG29XN',
            ),
            1 =>
            array(
              0 => 'equipmentRequest',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2636 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::I2oT6dl4OiEh1hJy',
            ),
            1 =>
            array(
              0 => 'equipmentAllocation',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2693 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::kz0jQ15DlAFtz14e',
            ),
            1 =>
            array(
              0 => 'role',
              1 => 'reportTo',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2720 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::GxpiCzIWhPkyCx9O',
            ),
            1 =>
            array(
              0 => 'appraisal',
            ),
            2 =>
            array(
              'PUT' => 0,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2776 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::WtezfPbeaX1WqAkv',
              'user' => NULL,
            ),
            1 =>
            array(
              0 => 'appraisal',
              1 => 'user',
            ),
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2817 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::6NSnWiv8ZpSX081c',
            ),
            1 =>
            array(
              0 => 'id',
            ),
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
        ),
        2845 =>
        array(
          0 =>
          array(
            0 =>
            array(
              '_route' => 'generated::4LD0G0vZs54QBvEO',
            ),
            1 =>
            array(
              0 => 'appraisal',
            ),
            2 =>
            array(
              'GET' => 0,
              'HEAD' => 1,
            ),
            3 => NULL,
            4 => false,
            5 => true,
            6 => NULL,
          ),
          1 =>
          array(
            0 => NULL,
            1 => NULL,
            2 => NULL,
            3 => NULL,
            4 => false,
            5 => false,
            6 => 0,
          ),
        ),
      ),
      4 => NULL,
    ),
    'attributes' =>
    array(
      'generated::pVZyljhp7VVruaCD' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'api/user',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'api',
            1 => 'auth:api',
          ),
          'uses' => 'C:32:"Opis\\Closure\\SerializableClosure":291:{@2nyJNvTGfgbRzsR2CFhDBeHZ9ob9jJfPjSHbGWbpO5I=.a:5:{s:3:"use";a:0:{}s:8:"function";s:79:"function (\\Illuminate\\Http\\Request $request) {
    return $request->user();
}";s:5:"scope";s:37:"Illuminate\\Routing\\RouteFileRegistrar";s:4:"this";N;s:4:"self";s:32:"0000000008584cee000000000b4de345";}}',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => 'api',
          'where' =>
          array(),
          'as' => 'generated::pVZyljhp7VVruaCD',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::1ghgfIZ7EDUXq6cJ' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'api/bio',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'api',
          ),
          'uses' => 'C:32:"Opis\\Closure\\SerializableClosure":809:{@e43QSmIwMU4bGXKRcFX8hWwNG8t6zoMiH7CH+d9DxhQ=.a:5:{s:3:"use";a:0:{}s:8:"function";s:596:"function () {
    \\Illuminate\\Support\\Facades\\App::setLocale(\'fr\');
    \\session()->put(\'locale\', \'fr\');
    $tr = new \\Stichoza\\GoogleTranslate\\GoogleTranslate(\'fr\'); // Translates into English
    // return $tr->translate(\'my name is Seyram\');
    return \\response()->json([\'data\' => \'What you could do is extract all those repetitions and fit them inside a helper service file that you can then import and use. You could also extract this into Vuex actions, but because it will not be used inside Vue components that often, it doesn’t make sense. That would also make them async.\']);
}";s:5:"scope";s:37:"Illuminate\\Routing\\RouteFileRegistrar";s:4:"this";N;s:4:"self";s:32:"0000000008584cef000000000b4de345";}}',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => 'api',
          'where' =>
          array(),
          'as' => 'generated::1ghgfIZ7EDUXq6cJ',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::k85KYlgUjSREZOCo' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'config',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'C:32:"Opis\\Closure\\SerializableClosure":494:{@az1hV48tClBepvpwq3gumZj9OP+r2HkF2l+Xpt7ol6E=.a:5:{s:3:"use";a:0:{}s:8:"function";s:281:"function () {
  \\Illuminate\\Support\\Facades\\Artisan::call(\'config:clear\');
  \\Illuminate\\Support\\Facades\\Artisan::call(\'cache:clear\');
  \\Illuminate\\Support\\Facades\\Artisan::call(\'config:cache\');
  \\Illuminate\\Support\\Facades\\Artisan::call(\'storage:link\');
  return \'Done\';
}";s:5:"scope";s:37:"Illuminate\\Routing\\RouteFileRegistrar";s:4:"this";N;s:4:"self";s:32:"0000000008584ce2000000000b4de345";}}',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'generated::k85KYlgUjSREZOCo',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::dcIPsO4Ebxed2SL8' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'notification',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'C:32:"Opis\\Closure\\SerializableClosure":748:{@8s6sRj/OoYTpobfrnLLzfVPNxYz20UBhtsY2sPivVQs=.a:5:{s:3:"use";a:0:{}s:8:"function";s:535:"function () {
  // AccountCreated::dispatch();
  $user = \\App\\Models\\User::find(4);
  $password = \'password\';

  \\App\\Jobs\\AccountCreated::dispatchAfterResponse($user, $password);
  // dispatch(function () use ($user, $password) {

  //   $user->notify(new NewAccountCreated($user, $password, [\'first_name\' => \'Woodson\', \'last_name\' => \'Prikah\']));
  // })->afterResponse();

  return (new \\App\\Notifications\\NewAccountCreated($user, $password, [\'first_name\' => \'Woodson\', \'last_name\' => \'Prikah\']))
    ->toMail($user);
}";s:5:"scope";s:37:"Illuminate\\Routing\\RouteFileRegistrar";s:4:"this";N;s:4:"self";s:32:"0000000008584ce4000000000b4de345";}}',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'generated::dcIPsO4Ebxed2SL8',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'language' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'lang/{lang}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'C:32:"Opis\\Closure\\SerializableClosure":309:{@GtChwcMmP32wQpSy5grJx0m6xFl/RTB+ZcesE07mJgc=.a:5:{s:3:"use";a:0:{}s:8:"function";s:97:"function ($language) {
  \\Session()->put(\'locale\', $language);
  return \\redirect()->back();
}";s:5:"scope";s:37:"Illuminate\\Routing\\RouteFileRegistrar";s:4:"this";N;s:4:"self";s:32:"0000000008584ce6000000000b4de345";}}',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'language',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'welcome' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => '/',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
            1 => 'guest',
          ),
          'uses' => 'App\\Http\\Controllers\\WelcomeController@index',
          'controller' => 'App\\Http\\Controllers\\WelcomeController@index',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'welcome',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'login' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'login',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\Auth\\LoginController@signIn',
          'controller' => 'App\\Http\\Controllers\\Auth\\LoginController@signIn',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'login',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'logout' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'logout',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\Auth\\LogoutController@signOut',
          'controller' => 'App\\Http\\Controllers\\Auth\\LogoutController@signOut',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'logout',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'password.request' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'password-reset-link',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\Auth\\PasswordResetContoller@index',
          'controller' => 'App\\Http\\Controllers\\Auth\\PasswordResetContoller@index',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'password.request',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'password.email' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'password-reset-link',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\Auth\\PasswordResetContoller@sendPasswordResetLink',
          'controller' => 'App\\Http\\Controllers\\Auth\\PasswordResetContoller@sendPasswordResetLink',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'password.email',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'password.reset' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'password-reset/{token}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\Auth\\PasswordResetContoller@passwordReset',
          'controller' => 'App\\Http\\Controllers\\Auth\\PasswordResetContoller@passwordReset',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'password.reset',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'password.recover' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'password-reset',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\Auth\\PasswordResetContoller@passwordRecover',
          'controller' => 'App\\Http\\Controllers\\Auth\\PasswordResetContoller@passwordRecover',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'password.recover',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::wjclpOKcDL9TYmeq' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'change-password',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
            1 => 'auth',
          ),
          'uses' => 'App\\Http\\Controllers\\Auth\\PasswordResetContoller@changePassword',
          'controller' => 'App\\Http\\Controllers\\Auth\\PasswordResetContoller@changePassword',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => NULL,
          'where' =>
          array(),
          'as' => 'generated::wjclpOKcDL9TYmeq',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'dashboard' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\DashboarController@index',
          'controller' => 'App\\Http\\Controllers\\DashboarController@index',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'dashboard',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'admin' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/admin',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\DashboarController@admin',
          'controller' => 'App\\Http\\Controllers\\DashboarController@admin',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'admin',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'manager' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/manager',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\DashboarController@manager',
          'controller' => 'App\\Http\\Controllers\\DashboarController@manager',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'manager',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'supervisor' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/supervisor',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\DashboarController@supervisor',
          'controller' => 'App\\Http\\Controllers\\DashboarController@supervisor',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'supervisor',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'ess' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/ess/{user?}/{slug?}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\DashboarController@ess',
          'controller' => 'App\\Http\\Controllers\\DashboarController@ess',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'ess',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'pim' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/pim',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\DashboarController@pim',
          'controller' => 'App\\Http\\Controllers\\DashboarController@pim',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'pim',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'leave' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/leave',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\DashboarController@leave',
          'controller' => 'App\\Http\\Controllers\\DashboarController@leave',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'leave',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'kpi' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/kpi',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\DashboarController@kpi',
          'controller' => 'App\\Http\\Controllers\\DashboarController@kpi',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'kpi',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'staff.directory' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/staff-directory',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\DashboarController@staffDirectory',
          'controller' => 'App\\Http\\Controllers\\DashboarController@staffDirectory',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'staff.directory',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'register' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/register',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\Auth\\RegisterController@createAccount',
          'controller' => 'App\\Http\\Controllers\\Auth\\RegisterController@createAccount',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'register',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'check.password' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/check-user-password/{user}/{password}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\AdminController@checkPassword',
          'controller' => 'App\\Http\\Controllers\\AdminController@checkPassword',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'check.password',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.user' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-user/{user}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\AdminController@deleteUser',
          'controller' => 'App\\Http\\Controllers\\AdminController@deleteUser',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.user',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.users' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-users/{users}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\AdminController@deleteUsers',
          'controller' => 'App\\Http\\Controllers\\AdminController@deleteUsers',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.users',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'assign.role' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/assign-users-role',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\AdminController@assignUsersRole',
          'controller' => 'App\\Http\\Controllers\\AdminController@assignUsersRole',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'assign.role',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'assign.status' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/assign-users-status',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\AdminController@assignUsersStatus',
          'controller' => 'App\\Http\\Controllers\\AdminController@assignUsersStatus',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'assign.status',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'create.jobcat' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/create-job-catgory',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\JobCategoryController@create',
          'controller' => 'App\\Http\\Controllers\\JobCategoryController@create',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'create.jobcat',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'edit.jobcat' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/edit-job-catgory/{jobCategory}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\JobCategoryController@edit',
          'controller' => 'App\\Http\\Controllers\\JobCategoryController@edit',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'edit.jobcat',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.jobcat' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-job-catgory/{jobCategory}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\JobCategoryController@delete',
          'controller' => 'App\\Http\\Controllers\\JobCategoryController@delete',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.jobcat',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.jobcats' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-job-catgories/{jobCategories}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\JobCategoryController@deleteCategories',
          'controller' => 'App\\Http\\Controllers\\JobCategoryController@deleteCategories',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.jobcats',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'create.jobtitle' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/create-job-title',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\JobTitleController@create',
          'controller' => 'App\\Http\\Controllers\\JobTitleController@create',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'create.jobtitle',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'edit.jobtitle' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/edit-job-title/{jobTitle}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\JobTitleController@edit',
          'controller' => 'App\\Http\\Controllers\\JobTitleController@edit',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'edit.jobtitle',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.jobtitle' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-job-title/{jobTitle}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\JobTitleController@delete',
          'controller' => 'App\\Http\\Controllers\\JobTitleController@delete',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.jobtitle',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.jobtitles' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-job-titles/{jobTitles}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\JobTitleController@deleteTitles',
          'controller' => 'App\\Http\\Controllers\\JobTitleController@deleteTitles',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.jobtitles',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'workshift.store' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/add-work-shift',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\WorkShiftController@store',
          'controller' => 'App\\Http\\Controllers\\WorkShiftController@store',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'workshift.store',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'workshift.edit' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/update-work-shift/{workShift}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\WorkShiftController@edit',
          'controller' => 'App\\Http\\Controllers\\WorkShiftController@edit',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'workshift.edit',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'workshift.delete' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-work-shift/{workShift}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\WorkShiftController@deleteShift',
          'controller' => 'App\\Http\\Controllers\\WorkShiftController@deleteShift',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'workshift.delete',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'workshifts.delete' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-work-shifts/{workShift}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\WorkShiftController@deleteShifts',
          'controller' => 'App\\Http\\Controllers\\WorkShiftController@deleteShifts',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'workshifts.delete',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'create.employmentStatus' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/create-employment-status',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EmploymentStatusController@create',
          'controller' => 'App\\Http\\Controllers\\EmploymentStatusController@create',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'create.employmentStatus',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'edit.employmentStatus' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/edit-employment-status/{employmentStatus}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EmploymentStatusController@edit',
          'controller' => 'App\\Http\\Controllers\\EmploymentStatusController@edit',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'edit.employmentStatus',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.employmentStatus' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-employment-status/{employmentStatus}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EmploymentStatusController@delete',
          'controller' => 'App\\Http\\Controllers\\EmploymentStatusController@delete',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.employmentStatus',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.employmentStatusese' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-employment-statuses/{employmentStatuses}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EmploymentStatusController@deleteEmpStatuses',
          'controller' => 'App\\Http\\Controllers\\EmploymentStatusController@deleteEmpStatuses',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.employmentStatusese',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'create.department' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/create-department',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@addDepartment',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@addDepartment',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'create.department',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'update.department' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/edit-department/{department}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@editDepartment',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@editDepartment',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'update.department',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.department' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-department/{department}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@deleteDepartment',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@deleteDepartment',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.department',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.departments' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-departments/{departments}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@deleteDepartments',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@deleteDepartments',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.departments',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::Cn3NeUT8PyyRgRT3' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/create-unit',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@addUnit',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@addUnit',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::Cn3NeUT8PyyRgRT3',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::UIs1gjOosKHcxIE1' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/edit-unit/{unit}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@editUnit',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@editUnit',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::UIs1gjOosKHcxIE1',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::xfrgXANpSbXh0yfq' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-unit/{unit}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@deleteUnit',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@deleteUnit',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::xfrgXANpSbXh0yfq',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::050L7xymrvonOsGq' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-units/{units}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@deleteUnits',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@deleteUnits',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::050L7xymrvonOsGq',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'create.position' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/create-position',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@addPosition',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@addPosition',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'create.position',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'update.position' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/edit-position/{position}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@editPosition',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@editPosition',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'update.position',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.position' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-position/{position}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@deletePosition',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@deletePosition',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.position',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'delete.positions' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-positions/{positions}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@deletePositions',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@deletePositions',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'delete.positions',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'update.logo' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/update-brand-logo',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@editBrandLogo',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@editBrandLogo',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'update.logo',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'update.metadata' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/update-organization-metadata',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\OrganizationController@editMetadata',
          'controller' => 'App\\Http\\Controllers\\OrganizationController@editMetadata',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'update.metadata',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::v3hE7yxZyKgg7U4o' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/add-role',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\RoleController@addNewRole',
          'controller' => 'App\\Http\\Controllers\\RoleController@addNewRole',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::v3hE7yxZyKgg7U4o',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::kfhtEe34ZdOy9Ilr' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/update-role/{role}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\RoleController@editRole',
          'controller' => 'App\\Http\\Controllers\\RoleController@editRole',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::kfhtEe34ZdOy9Ilr',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::CvJdEdnd6OGGYy5n' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/add-role-user/{role}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\RoleController@addRoleUser',
          'controller' => 'App\\Http\\Controllers\\RoleController@addRoleUser',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::CvJdEdnd6OGGYy5n',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::BzoPvVT4pnHkoUXS' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/delete-role-user/{role}/{staff}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\RoleController@deleteRoleUser',
          'controller' => 'App\\Http\\Controllers\\RoleController@deleteRoleUser',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::BzoPvVT4pnHkoUXS',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::NlEk3aKwCpoOxVkc' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/add-role-permission/{role}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\RoleController@addRolePermission',
          'controller' => 'App\\Http\\Controllers\\RoleController@addRolePermission',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::NlEk3aKwCpoOxVkc',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::OzAkA02OIZQ58MjR' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-role/{role}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\RoleController@deleteRole',
          'controller' => 'App\\Http\\Controllers\\RoleController@deleteRole',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::OzAkA02OIZQ58MjR',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::cO4zIuOnic3N1wcY' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-roles/{roles}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\RoleController@deleteRoles',
          'controller' => 'App\\Http\\Controllers\\RoleController@deleteRoles',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::cO4zIuOnic3N1wcY',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::o4bluNEjxvXZu1N9' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/add-report-to-staff/{role}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\RoleController@addReportToStaff',
          'controller' => 'App\\Http\\Controllers\\RoleController@addReportToStaff',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::o4bluNEjxvXZu1N9',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::kz0jQ15DlAFtz14e' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/remove-report-to-staff/{role}/{reportTo}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\RoleController@deleteReportToStaff',
          'controller' => 'App\\Http\\Controllers\\RoleController@deleteReportToStaff',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::kz0jQ15DlAFtz14e',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'upload.avatar' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/ess/upload-avatar',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@uploadAvatar',
          'controller' => 'App\\Http\\Controllers\\ESSController@uploadAvatar',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'upload.avatar',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'update.profile' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/update-personal-details/{id}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@editProfile',
          'controller' => 'App\\Http\\Controllers\\ESSController@editProfile',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'update.profile',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'update.personal.attachment' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/ess/update-personal-details-attachment/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@editPersonalDetailAttachment',
          'controller' => 'App\\Http\\Controllers\\ESSController@editPersonalDetailAttachment',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'update.personal.attachment',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::0KjEsvIGIxu5lzp5' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/ess/replace-personal-details-attachment/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@replacePersonalDetailAttachment',
          'controller' => 'App\\Http\\Controllers\\ESSController@replacePersonalDetailAttachment',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::0KjEsvIGIxu5lzp5',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::ZSjeO5UJQFuJFMg6' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/ess/delete-personal-details-attachment/{profile}/{id}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@deletePersonalDetailAttachment',
          'controller' => 'App\\Http\\Controllers\\ESSController@deletePersonalDetailAttachment',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::ZSjeO5UJQFuJFMg6',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::WNxId0n9R9IjXjkP' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/update-contact-details/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@editContactDetails',
          'controller' => 'App\\Http\\Controllers\\ESSController@editContactDetails',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::WNxId0n9R9IjXjkP',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::fNHIzwDqsClMnvTB' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/add-emergency-contact/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@addEmergencyContact',
          'controller' => 'App\\Http\\Controllers\\ESSController@addEmergencyContact',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::fNHIzwDqsClMnvTB',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::vOuPopJSojInxrjq' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/update-emergency-contact/{profile}/{id}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@editEmergencyContact',
          'controller' => 'App\\Http\\Controllers\\ESSController@editEmergencyContact',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::vOuPopJSojInxrjq',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::qsHU31M1b3xYj4yp' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/ess/delete-emergency-contact/{profile}/{id}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@deleteEmergencyContact',
          'controller' => 'App\\Http\\Controllers\\ESSController@deleteEmergencyContact',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::qsHU31M1b3xYj4yp',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::ZJRWo7h4y5yupUnX' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/add-work-experience/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@addWorkExperience',
          'controller' => 'App\\Http\\Controllers\\ESSController@addWorkExperience',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::ZJRWo7h4y5yupUnX',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::LqflBrY8mjpcypyY' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/update-work-experience/{profile}/{id}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@editWorkExperience',
          'controller' => 'App\\Http\\Controllers\\ESSController@editWorkExperience',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::LqflBrY8mjpcypyY',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::qxjY7F37bD0TE7aW' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/add-education/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@addEducation',
          'controller' => 'App\\Http\\Controllers\\ESSController@addEducation',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::qxjY7F37bD0TE7aW',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::qHQH2e5sjrpxJxNz' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/add-continuous-dev/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@addContinuousDev',
          'controller' => 'App\\Http\\Controllers\\ESSController@addContinuousDev',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::qHQH2e5sjrpxJxNz',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::0eJ8oJY52QQUsenM' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/update-education/{profile}/{id}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@editEducation',
          'controller' => 'App\\Http\\Controllers\\ESSController@editEducation',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::0eJ8oJY52QQUsenM',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::iY5ns0IIIKScua4D' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/update-continuous-dev/{profile}/{id}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@editContinuousDev',
          'controller' => 'App\\Http\\Controllers\\ESSController@editContinuousDev',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::iY5ns0IIIKScua4D',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::E8wlLXBctqc2fyQf' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/add-expertise/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@addExpertise',
          'controller' => 'App\\Http\\Controllers\\ESSController@addExpertise',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::E8wlLXBctqc2fyQf',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::N1RNLgSl0TqDQ6n3' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/update-expertise/{profile}/{id}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@editExpertise',
          'controller' => 'App\\Http\\Controllers\\ESSController@editExpertise',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::N1RNLgSl0TqDQ6n3',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::eO6vqakqsffarsTF' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/add-language/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@addLanguage',
          'controller' => 'App\\Http\\Controllers\\ESSController@addLanguage',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::eO6vqakqsffarsTF',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::kQcLK2tZqU9AZty4' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/update-language/{profile}/{id}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@editLanguage',
          'controller' => 'App\\Http\\Controllers\\ESSController@editLanguage',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::kQcLK2tZqU9AZty4',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::AUC00xrQJ2Pdqkxx' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/ess/add-qualification-attachment/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@addQualificationAttachment',
          'controller' => 'App\\Http\\Controllers\\ESSController@addQualificationAttachment',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::AUC00xrQJ2Pdqkxx',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::JF7Z3NapPic3tXh9' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/ess/replace-qualification-attachment/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@replaceQualificationAttachment',
          'controller' => 'App\\Http\\Controllers\\ESSController@replaceQualificationAttachment',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::JF7Z3NapPic3tXh9',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::i5K0cojps0bicTs6' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/ess/delete-qualification/{profile}/{id}/{type}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@qualificationDeleteHandler',
          'controller' => 'App\\Http\\Controllers\\ESSController@qualificationDeleteHandler',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::i5K0cojps0bicTs6',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::ZuWiLASVfprkUo4w' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/ess/update-job/{profile}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@editStaffJob',
          'controller' => 'App\\Http\\Controllers\\ESSController@editStaffJob',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::ZuWiLASVfprkUo4w',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::3yH8dCxewIfHrk2x' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/award-job-contract/{profile}/{status}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@awardJobContract',
          'controller' => 'App\\Http\\Controllers\\ESSController@awardJobContract',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::3yH8dCxewIfHrk2x',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::YTK7CilWISo5Ls6g' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/ess/update-job-assignment/{profile}/{type}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\ESSController@jobAssignment',
          'controller' => 'App\\Http\\Controllers\\ESSController@jobAssignment',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::YTK7CilWISo5Ls6g',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(
          'profile' => 'user_id',
        ),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::Q315xk6C9DUAURz5' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/add-appraisal',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\KPIController@storeAppraisal',
          'controller' => 'App\\Http\\Controllers\\KPIController@storeAppraisal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::Q315xk6C9DUAURz5',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::AediFclM6QVN4j50' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/update-appraisal/{appraisal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\KPIController@updateAppraisal',
          'controller' => 'App\\Http\\Controllers\\KPIController@updateAppraisal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::AediFclM6QVN4j50',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::GxpiCzIWhPkyCx9O' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/remove-appraisee/{appraisal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\KPIController@removeAppraisee',
          'controller' => 'App\\Http\\Controllers\\KPIController@removeAppraisee',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::GxpiCzIWhPkyCx9O',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::dIgZOaOM9HVNSTC4' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-appraisal/{appraisal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\KPIController@deleteAppraisal',
          'controller' => 'App\\Http\\Controllers\\KPIController@deleteAppraisal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::dIgZOaOM9HVNSTC4',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::EoP9tKBPikxtk3ES' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-appraisals/{appraisals}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\KPIController@deleteAppraisals',
          'controller' => 'App\\Http\\Controllers\\KPIController@deleteAppraisals',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::EoP9tKBPikxtk3ES',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::WtezfPbeaX1WqAkv' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-user-appraisal/{appraisal}/{user?}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\KPIController@userAppraisal',
          'controller' => 'App\\Http\\Controllers\\KPIController@userAppraisal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::WtezfPbeaX1WqAkv',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::KyRPHfIifBqf7U35' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/add-key-goal',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@storeKeyGoal',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@storeKeyGoal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::KyRPHfIifBqf7U35',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::7GpTo6wyVEAJGn17' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/add-self-appraisal',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@storeSelfAppraisal',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@storeSelfAppraisal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::7GpTo6wyVEAJGn17',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::McSYmadycsxgD7w4' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/update-user-goal/{appraisal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@editUserGoal',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@editUserGoal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::McSYmadycsxgD7w4',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::3IywWEvUB5jpdDQq' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/update-department-goal/{appraisal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@editDepartmentGoal',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@editDepartmentGoal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::3IywWEvUB5jpdDQq',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::wNHCM1AjCNpqAKv6' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/update-unit-goal/{appraisal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@editUnitGoal',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@editUnitGoal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::wNHCM1AjCNpqAKv6',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::QTiViXYEg2rSX6Lo' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/update-user-appraisal/{appraisal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@editUserAppraisal',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@editUserAppraisal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::QTiViXYEg2rSX6Lo',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::RU72jLB2lwZ0oxgd' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/update-user-appraisal-metrics/{appraisal}/{user}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@editUserAppraisalMetrics',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@editUserAppraisalMetrics',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::RU72jLB2lwZ0oxgd',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::dqaLlwBlgcsowIwn' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-user-goal/{appraisal}/{goal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@deleteUserGoal',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@deleteUserGoal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::dqaLlwBlgcsowIwn',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::6xY1xn1WtqBkMZno' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-department-goal/{appraisal}/{goal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@deleteDepartmentGoal',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@deleteDepartmentGoal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::6xY1xn1WtqBkMZno',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::UVhvKFgzKBDR6qdX' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-unit-goal/{appraisal}/{goal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@deleteUnitGoal',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@deleteUnitGoal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::UVhvKFgzKBDR6qdX',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::Oh7z3Gtigoc06Xq1' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-user-appraisal/{appraisal}/{id}/{type}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\SelfAppraisalController@deleteUserAppraisal',
          'controller' => 'App\\Http\\Controllers\\SelfAppraisalController@deleteUserAppraisal',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::Oh7z3Gtigoc06Xq1',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::qPNUQPSIcg6dfTxT' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/add-equipment-request',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentRequestController@store',
          'controller' => 'App\\Http\\Controllers\\EquipmentRequestController@store',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::qPNUQPSIcg6dfTxT',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::6NSnWiv8ZpSX081c' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-request-approval-name/{id}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentRequestController@requestApprovalName',
          'controller' => 'App\\Http\\Controllers\\EquipmentRequestController@requestApprovalName',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::6NSnWiv8ZpSX081c',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::U97DRdnhQKwG29XN' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/approve-equipment-request/{equipmentRequest}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentRequestController@approveEquipmentRequest',
          'controller' => 'App\\Http\\Controllers\\EquipmentRequestController@approveEquipmentRequest',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::U97DRdnhQKwG29XN',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::NVPDBvtoVkYqiv6b' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/edit-equipment-request/{equipmentRequest}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentRequestController@update',
          'controller' => 'App\\Http\\Controllers\\EquipmentRequestController@update',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::NVPDBvtoVkYqiv6b',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::hDB5GIk8veBwFqfD' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-equipment-request/{equipmentRequest}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentRequestController@destroy',
          'controller' => 'App\\Http\\Controllers\\EquipmentRequestController@destroy',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::hDB5GIk8veBwFqfD',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::q4wB2YnVOOQfRbwx' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-equipment-requests/{equipmentRequests}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentRequestController@destroyMultiple',
          'controller' => 'App\\Http\\Controllers\\EquipmentRequestController@destroyMultiple',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::q4wB2YnVOOQfRbwx',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::GzEwp3GfPXcALOv7' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-granted-requests',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentRequestController@getGrantedRequests',
          'controller' => 'App\\Http\\Controllers\\EquipmentRequestController@getGrantedRequests',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::GzEwp3GfPXcALOv7',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::WA29EIUIqZirk4rZ' =>
      array(
        'methods' =>
        array(
          0 => 'POST',
        ),
        'uri' => 'dashboard/allocate-equipment',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentAllocationController@store',
          'controller' => 'App\\Http\\Controllers\\EquipmentAllocationController@store',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::WA29EIUIqZirk4rZ',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::Vm2PKo4s713RbGvw' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/edit-equipment-allocation/{equipmentAllocation}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentAllocationController@update',
          'controller' => 'App\\Http\\Controllers\\EquipmentAllocationController@update',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::Vm2PKo4s713RbGvw',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::JrSlZIdv7lY8lUwS' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-equipment-allocation/{equipmentAllocation}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentAllocationController@destroy',
          'controller' => 'App\\Http\\Controllers\\EquipmentAllocationController@destroy',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::JrSlZIdv7lY8lUwS',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::0T0fw5mmhmy3TYHL' =>
      array(
        'methods' =>
        array(
          0 => 'DELETE',
        ),
        'uri' => 'dashboard/delete-equipment-allocations/{equipmentAllocation}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentAllocationController@destroyMultiple',
          'controller' => 'App\\Http\\Controllers\\EquipmentAllocationController@destroyMultiple',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::0T0fw5mmhmy3TYHL',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::I2oT6dl4OiEh1hJy' =>
      array(
        'methods' =>
        array(
          0 => 'PUT',
        ),
        'uri' => 'dashboard/approve-equipment-allocation/{equipmentAllocation}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\EquipmentAllocationController@approveEquipmentAllocation',
          'controller' => 'App\\Http\\Controllers\\EquipmentAllocationController@approveEquipmentAllocation',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::I2oT6dl4OiEh1hJy',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::xoCsYCyOlOj221U2' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-users',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\PaginationController@usersPerPage',
          'controller' => 'App\\Http\\Controllers\\PaginationController@usersPerPage',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::xoCsYCyOlOj221U2',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::zBQTuR6dmiFu3mTu' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-staff',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\PaginationController@staffPerPage',
          'controller' => 'App\\Http\\Controllers\\PaginationController@staffPerPage',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::zBQTuR6dmiFu3mTu',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::SZHTflEDjK1OzgCP' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-appraisals',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\PaginationController@appraisalsPerPage',
          'controller' => 'App\\Http\\Controllers\\PaginationController@appraisalsPerPage',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::SZHTflEDjK1OzgCP',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::4LD0G0vZs54QBvEO' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-appraisees/{appraisal}',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\PaginationController@appraiseesPerPage',
          'controller' => 'App\\Http\\Controllers\\PaginationController@appraiseesPerPage',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::4LD0G0vZs54QBvEO',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::syZXtdgGlsaHMsPQ' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/search-staff',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\PaginationController@searchStaffDirectory',
          'controller' => 'App\\Http\\Controllers\\PaginationController@searchStaffDirectory',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::syZXtdgGlsaHMsPQ',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::6YFHKjS3iv1IJuvp' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-my-requests',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\PaginationController@myEquipmentRequests',
          'controller' => 'App\\Http\\Controllers\\PaginationController@myEquipmentRequests',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::6YFHKjS3iv1IJuvp',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::NUBH0YN7s57M4IwA' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-requests',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\PaginationController@equipmentRequests',
          'controller' => 'App\\Http\\Controllers\\PaginationController@equipmentRequests',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::NUBH0YN7s57M4IwA',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::ypR93Z4Hbwt1dilU' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-my-allocations',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\PaginationController@myEquipmentAllocations',
          'controller' => 'App\\Http\\Controllers\\PaginationController@myEquipmentAllocations',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::ypR93Z4Hbwt1dilU',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
      'generated::VhgoBzxVJRb109QO' =>
      array(
        'methods' =>
        array(
          0 => 'GET',
          1 => 'HEAD',
        ),
        'uri' => 'dashboard/get-allocations',
        'action' =>
        array(
          'middleware' =>
          array(
            0 => 'web',
          ),
          'uses' => 'App\\Http\\Controllers\\PaginationController@equipmentAllocations',
          'controller' => 'App\\Http\\Controllers\\PaginationController@equipmentAllocations',
          'namespace' => 'App\\Http\\Controllers',
          'prefix' => '/dashboard',
          'where' =>
          array(),
          'as' => 'generated::VhgoBzxVJRb109QO',
        ),
        'fallback' => false,
        'defaults' =>
        array(),
        'wheres' =>
        array(),
        'bindingFields' =>
        array(),
        'lockSeconds' => NULL,
        'waitSeconds' => NULL,
      ),
    ),
  )
);
