<?php

namespace App\Http\Controllers\api\auth;

use App\Http\Controllers\api\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Requests\api\client\LoginRequest;
use App\Models\ClientModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class indexController extends BaseController
{
    public function login(LoginRequest $request){
        $data=$request->except("_token" );
        $client=ClientModel::where("email",$data["email"])->first();
        if($client&&Hash::check($data["password"],$client->password)){
            $token=$client->createToken("webrtc")->accessToken;
            return parent::success("Giriş başarılı",
            [
                "id"=>$client->id,
                "name"=>$client->name,
                "email"=>$client->email,
                "conn_string"=>$client->conn_string,
                "token_type"=>"Bearer",
                "access_takoen"=>$token,
            ]
        );

        }else{
            return parent::error("Kullanıcı bilgileri hatalı");
        }
    }
}
