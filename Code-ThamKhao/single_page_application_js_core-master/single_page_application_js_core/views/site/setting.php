<?php

/* @var $this yii\web\View */

use yii\widgets\ActiveForm;

$this->title = 'Setting';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="container-fluid">
    <!-- Page Heading -->
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">
                Setting
            </h1>
        </div>
    </div>


    <?php if (Yii::$app->getSession()->getFlash('save_ok')) { ?>
        <div class="alert alert-success">
            Đã lưu!
        </div>
    <?php } ?>

    <div class="row">
        <div class="col-lg-12">
            <div class="box box-primary">
                <?php $form = ActiveForm::begin() ?>
                <div class="box-body">
                    <?= $form->field($model, 'address')->textInput() ?>
                    <?= $form->field($model, 'phone')->textInput() ?>
                    <?= $form->field($model, 'skype')->textInput() ?>
                    <?= $form->field($model, 'zalo')->textInput() ?>
                    <?= $form->field($model, 'email')->textInput() ?>
                    <?= $form->field($model, 'facebook')->textInput() ?>
                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary">Save</button>
                        <button type="reset" class="btn btn-default">Reset</button>
                    </div>
                </div>
                <?php ActiveForm::end() ?>
            </div>
        </div>
    </div>

    <!-- /.row -->
</div>
