
<?php
 
?>
<div class="new_container data_view_container">
    <div class="data_view_container__header">
        <h2>Nuevo cliente</h2>

    </div>

        <form  onsubmit="return false" class="form" id="newClient">
            <div class="form-control">
                <label for="">Nombre</label>
                <input type="text"  class="input" name="name" placeholder="..." required>
            </div>
            <div class="form-control">
                <label for="">Numero de contacto</label>
                <input type="text" class="input"  name="tel" placeholder="..." >
            </div>
            <div class="form-control">
                <label for="">Ubicación</label>
                <input type="text" class="input"  name="dir" placeholder="..." >
            </div>
            <button class="btn" id="addClient">Agregar</button>
        </form>
</div>