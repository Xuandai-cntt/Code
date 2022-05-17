<?php

namespace app\models;

use yii\base\Model;

/**
 * SettingForm is the model behind the setting form.
 */
class SettingForm extends Model
{
    public $phone;
    public $skype;
    public $zalo;
    public $address;
    public $email;
    public $facebook;

    public function rules()
    {
        return [
            ['address', 'required'],
            [['phone', 'skype', 'zalo', 'address', 'email', 'facebook'], 'trim'],
            [['phone', 'skype', 'zalo', 'address', 'email', 'facebook'], 'string'],
            ['email', 'email'],
            ['facebook', 'url', 'message' => '{attribute} is invalid'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'phone' => 'Hotline',
            'skype' => 'Skype',
            'zalo' => 'Zalo',
            'address' => 'Address',
            'email' => 'Email',
            'facebook' => 'Facebook link',
        ];
    }
}
