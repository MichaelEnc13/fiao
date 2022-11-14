<?php 
 
if(session_status()!=2)session_start();
include file_exists("api/model/autoload.php")?"api/model/autoload.php":"../../api/model/autoload.php";
$id = isset($_GET["cid"]) ? $_GET['cid']:$_SESSION['cid'];
$client = Client::get_client_info($id)['data']->fetch()['name'];
?>
<div class="new_payment">
    <h3>Cliente: <?php echo $client?></h3>
    <form class="form" onsubmit="return false" id="newDebt">
        <div class="form-control">
            <label for="">Ingresa el monto</label>
            <input type="text" name="amount" class="input" placeholder="$$$">
        </div>
        <div class="form-control">
            <label for="">Breve descripción (opcional)</label>
            <input type="text" class="input" name="descr" placeholder="$$$">
        </div>
      
    
        <button class="btn" id="add_new_debt" data-cid="<?php echo $id ?>">Agregar fiao</button>
    </form>

</div>
