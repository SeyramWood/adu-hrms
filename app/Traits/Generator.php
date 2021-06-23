<?php

namespace App\Traits;

use App\Models\Administration;
use App\Models\Lecturer;

trait Generator
{
  // public function generateAdminId()
  // {
  //   $num = $this->generateNumbers(2);
  //   if (Administration::all()->count() === 0) {
  //     $count =  Administration::all()->count() + 1;
  //     $uniqueempid = '387' . str_pad($count, 3, '0', STR_PAD_LEFT) . $num;
  //     return strtoupper($uniqueempid);
  //   } elseif (Administration::all()->count()) {
  //     $count =  Administration::all()->count() + 1;
  //     $uniqueempid = '387' . str_pad($count, 3, '0', STR_PAD_LEFT) . $num;
  //     return strtoupper($uniqueempid);
  //   }
  // }
  // public function generateLecturerId()
  // {
  //   $num = $this->generateNumbers(2);
  //   if (Lecturer::all()->count() === 0) {
  //     $count =  Lecturer::all()->count() + 1;
  //     $uniqueempid = '388' . str_pad($count, 3, '0', STR_PAD_LEFT) . $num;
  //     return strtoupper($uniqueempid);
  //   } elseif (Lecturer::all()->count()) {
  //     $count =  Lecturer::all()->count() + 1;
  //     $uniqueempid = '388' . str_pad($count, 3, '0', STR_PAD_LEFT) . $num;
  //     return strtoupper($uniqueempid);
  //   }
  // }
  public function generatePassword($length)
  {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#&%';
    $password = '';
    for ($i = 0; $i < $length; $i++) {
      $rand = rand(0, strlen($characters) - 1);
      $password .= substr($characters, $rand, 1);
    }
    return $password;
  }
  public function uuid($length)
  {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $id = '';
    for ($i = 0; $i < $length; $i++) {
      $rand = rand(0, strlen($characters) - 1);
      $id .= substr($characters, $rand, 1);
    }
    return $id;
  }

  public function generateNumbers($length)
  {
    $characters = '0123456789';
    $password = '';
    for ($i = 0; $i < $length; $i++) {
      $rand = rand(0, strlen($characters) - 1);
      $password .= substr($characters, $rand, 1);
    }
    return $password;
  }
}
