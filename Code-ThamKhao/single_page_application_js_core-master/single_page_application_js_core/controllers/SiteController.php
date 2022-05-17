<?php

namespace app\controllers;

use app\models\SettingForm;

class SiteController extends BaseController
{
    public function actionIndex()
    {
        return $this->render('index');
    }


    public function actionDashboard()
    {
        return $this->render('dashboard');
    }

    public function actionSetting()
    {
        $model = new SettingForm();
        return $this->render('setting', ['model' => $model]);
    }
}
