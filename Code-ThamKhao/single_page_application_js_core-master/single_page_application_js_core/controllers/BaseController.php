<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;

class BaseController extends Controller
{
    const HEADER_IGNORE_LAYOUT_RENDERER = 'Ignore-Layout-Renderer';

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }


    public function init()
    {
        parent::init();
        $ignoreRenderer = Yii::$app->request->headers[self::HEADER_IGNORE_LAYOUT_RENDERER];
        if ($ignoreRenderer) {
            $this->layout = 'empty';
        }
    }
}
