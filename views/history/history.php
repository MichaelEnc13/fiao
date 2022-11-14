<?php
include file_exists("api/model/autoload.php") ? "api/model/autoload.php" : "../../api/model/autoload.php";

$year = date("y");
$january  =   Client::get_sold(1, $year)['data']->fetch()['amount'];
$february  =   Client::get_sold(2, $year)['data']->fetch()['amount'];
$march  =   Client::get_sold(3, $year)['data']->fetch()['amount'];
$april  =   Client::get_sold(4, $year)['data']->fetch()['amount'];
$may  =   Client::get_sold(5, $year)['data']->fetch()['amount'];
$june  =   Client::get_sold(6, $year)['data']->fetch()['amount'];
$july  =   Client::get_sold(7, $year)['data']->fetch()['amount'];
$august  =   Client::get_sold(8, $year)['data']->fetch()['amount'];
$september  =   Client::get_sold(9, $year)['data']->fetch()['amount'];
$october  =   Client::get_sold(10, $year)['data']->fetch()['amount'];
$november  =   Client::get_sold(11, $year)['data']->fetch()['amount'];
$december  =   Client::get_sold(12, $year)['data']->fetch()['amount'];

?>

<div class="chart_container data_view_container">
    <div class="data_view_container__header">
        <h2>Gráfica</h2>

    </div>


    <canvas id="myChart" data-january="<?php echo $january ?>" data-february="<?php echo $february ?>" data-march="<?php echo $march ?>" data-april="<?php echo $april ?>" data-may="<?php echo $may ?>" data-june="<?php echo $june ?>" data-july="<?php echo $july ?>" data-august="<?php echo $august ?>" data-september="<?php echo $september ?>" data-october="<?php echo $october ?>" data-november="<?php echo $november ?>" data-december="<?php echo $december ?>" width="100" height="70"></canvas>
    <h2>Información detallada</h2>
    <div class="detailed">
    
        <div class="detailed_info">
            <h4>Enero</h4>
            <span>RD $<?php echo $january?></span>
        </div>
        <div class="detailed_info">
            <h4>Febrero</h4>
            <span>RD $<?php echo $february?></span>
        </div>
        <div class="detailed_info">
            <h4>Marzo</h4>
            <span>RD $<?php echo $march?></span>
        </div>
        <div class="detailed_info">
            <h4>Abril</h4>
            <span>RD $<?php echo $april?></span>
        </div>
        <div class="detailed_info">
            <h4>Mayo</h4>
            <span>RD $<?php echo $may?></span>
        </div>
        <div class="detailed_info">
            <h4>Junio</h4>
            <span>RD $<?php echo $june?></span>
        </div>
        <div class="detailed_info">
            <h4>Julio</h4>
            <span>RD $<?php echo $july?></span>
        </div>
        <div class="detailed_info">
            <h4>Agosto</h4>
            <span>RD $<?php echo $august?></span>
        </div>
        <div class="detailed_info">
            <h4>Septiembre</h4>
            <span>RD $<?php echo $september?></span>
        </div>
        <div class="detailed_info">
            <h4>Octubre</h4>
            <span>RD $<?php echo $october?></span>
        </div>
        <div class="detailed_info">
            <h4>Noviembre</h4>
            <span>RD $<?php echo $november?></span>
        </div>
        <div class="detailed_info">
            <h4>Diciembre</h4>
            <span>RD $<?php echo $december?></span>
        </div>
    </div>
</div>