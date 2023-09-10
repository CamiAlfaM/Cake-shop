const Contacto = () => {
    return(
        <div className="contacto">
        <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Dirección de correo</label>
    <input type="email" class="form-control" id="correo" aria-describedby="emailHelp" placeholder="Ingresa tu correo"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Solicitud</label>
    <input type="text" class="form-control" id="solicitud" placeholder="Ingresa tu solicitud"/>
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
</form>
<img className="tortafinal" src="https://www.kindpng.com/picc/m/500-5000193_thumb-image-imagen-de-torta-png-transparent-png.png" alt="tortaContacto" />
        </div>     
    );
};

export default Contacto;