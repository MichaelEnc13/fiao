 <?php
    include file_exists("api/model/autoload.php") ? "api/model/autoload.php" : "../../api/model/autoload.php";
    if (session_status() != 2) session_start();
    $id = isset($_GET["id"]) ? $_GET['id'] : $_SESSION['cid'];
    $client = Client::get_client_info($id)['data']->fetch();
    $debts = Client::get_client_debt($id)['data']->fetchAll();
    $total = Client::get_total($id)['data']->fetch()['amount'];
    if(!isset($id))header("Location:home");
    ?>

 <div class="home__container data_view_container">
     <div class="data_view_container__header">
         <h2><?php echo $client['name']; ?></h2>
         <button class="btn btn--white" id="new_debt" data-cid="<?php echo $client['id']?>">Nueva deuda</button>

     </div>
     <div class="data__client">
         <i class="amount">Total : RD <span><?php echo $total!=null?number_format($total,2):"0.00" ?></span> DOP</i>
         <button class="btn" id="payment" data-cid="<?php echo $id; ?>" >Aplicar pago</button>

     </div>
     <div class="client_container">
         <div class="data__client">
             <h3>Historial de deudas</h3>


         </div>

         <table id="table" class="table  table-hover display nowrap dataTable dtr-inline collapsed">

             <thead>
                 <tr>
                     <td>id</td>
                     <td>Monto total</td>
                     <td>Descripción</td>
                     <td>Fecha</td>
                 </tr>
             </thead>

             <tbody>
                 <?php foreach ($debts as $debt) : ?>
                     <tr>
                         <td><?php echo $debt['id']; ?></td>
                         <td>RD <?php echo $debt['amount']; ?> DOP</td>
                         <td><?php echo $debt['description']; ?></td>
                         <td><?php echo $debt['date']; ?></td>
                     </tr>
                 <?php endforeach; ?>

             </tbody>
         </table>

     </div>
 </div>