<?php 
if (session_status() != 2) session_start();
include file_exists("api/model/autoload.php")?"api/model/autoload.php":"../../api/model/autoload.php";
$clients = Client::get_clients()['data']->fetchAll();

 
 
 

?>
<div class="home__container data_view_container">
    <div class="data_view_container__header">
        <h2>Clientes</h2>
  

    </div>

    <div class="client_container">
        <h3>Lista de clientes</h3>
        <table id="table" class="table  table-hover display   dataTable dtr-inline collapsed">

            <thead>
                <tr>
                    <td>id</td>
                    <td>Nombre</td>
                    <td>Monto total</td>
                    <td>-</td>
                    <td>-</td>

                </tr>
            </thead>
   
            <tbody>
            <?php foreach($clients as $client):
                $total = Client::get_total( $client['id'])['data']->fetch()['amount'];
                ?>
                
                <tr>
                    <td><?php echo $client['id']?></td>
                    <td><?php echo $client['name']?></td>
                    <td><?php echo number_format($total,2) ;?></td>
                    <td class="new_debt" data-cid="<?php echo $client['id']?>">Nueva</td>
                    <td class="view_client_info" data-cid="<?php echo $client['id']?>">Ver</td>
                </tr>
      
    <?php endforeach?>

            </tbody>
        </table>

    </div>

</div>