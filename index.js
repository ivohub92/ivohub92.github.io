//Carga inical de la pagina

window.addEventListener('load', () => {
  const contenedor_loader= document.querySelector('.contenedor_loader')
  contenedor_loader.style.opacity= 0
  contenedor_loader.style.opacity= 'hidden'

})
function animacion(){
  $('.contenedor_loader').remove();
}
setTimeout(animacion,1600);

//funcion para guardar datos de newsleter




//uso la funcion para calcular las divisas
function calculo(x, y, z) {
  return x / (y*z);
}
//funcion para calcular en dolar
function calculoDolar(a,b) {
  return parseFloat(a)/parseFloat(b);
}
//FUNCIONES USADAS PARA GUADDAR EN LOCALSTORAGE LOS USUARIOS Y CONTRASEÑAS INGRESADAS

function guardarLog(claveL,valorL) {
  return localStorage.setItem(claveL,valorL)}

//Usuarios que ingresan

function Usuarios(usuario, contrasena){
  this.usuario= usuario;
  this.contrasena= contrasena;
}
//Guarda usuarios inscriptos
function UsuariosInscriptos(user, pass, mail, nombre, apellido, sexo, direccion, ciudad, codigoPostal, pais, pcia, newsletter ){
  this.user= user;
  this.pass= pass;
  this.mail= mail;
  this.nombre= nombre;
  this.apellido= apellido;
  this.sexo= sexo;
  
  this.newsletter= newsletter;
}
//guarda las cvonversiones hechas

function Conversiones(monedaCripto, divisaIngresada, inversion, convertido){
  this.monedaCripto= monedaCripto;
  this.divisaIngresada= divisaIngresada;
  this.inversion= inversion;
  this.convertido= convertido;
  }

//guarda la gente que se anoto al newsletter
function Newsletter(newsletter){
  this.newsletter=newsletter;
}



//BOTON INICIAR SESION

const arrayIngresado= []; //Array de inicios de sesion

  $(window).ready(function(){

    $("#iniciarSesion").click(() =>{  

      Swal.fire({
        title: 'Bienvenido socio',
                
        html: `
        <div> <p>Ingrese a nuestra red para hacer trading en todo el mundo </p></div>
        <form>
          <div class="form-group row">
            <label for="login" class="col-sm-4 col-form-label">Ingrese usuario</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="login">
            </div>
          </div>
          <div class="form-group row">
            <label for="password" class="col-sm-4 col-form-label">Contraseña</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="password">
            </div>
          </div>
        </form>`,
        confirmButtonText: 'Iniciar sesion',
        focusConfirm: false,
        preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!login || !password) {
          Swal.showValidationMessage(`Por favor ingrese usuario y contraseña`)
        }else{
          let usuarios= new Usuarios(login,password)
          arrayIngresado.push(usuarios)
          guardarLog(arrayIngresado.length,JSON.stringify(usuarios))
        }
        return { login: login, password: password}
        }
      }).then((result) => {
        Swal.fire(`
        Login: ${result.value.login}
        Password: ${result.value.password}
        SECCION EN CONSTRUCCION
        `.trim())
    })
    })//cierre click
  })//cierre function



 //ACLARACION: SE QUE REPETIR FUNCIONES NO ES UNA BUENA PRACTICA, 
 //PERO NO ME DEJA PONER COMO FUNCION APARTE LOS HTMLS DEL SWAL FIRE (SWEET ALERT 2)

const arrayIngresadoInscriptos= [];//Array para guardar a las personas que se inscriben


 $("#registro").click(() =>{  

      Swal.fire({
        title: 'Crea tu cuenta para unirte al mejor team de trabajo!',
        
        html: `
        <div> <p>Unite al mejor team del mercado y empeza a que el dinero trabaje para vos</p></div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="user">Usuario*</label>
              <input type="text" class="form-control" id="user">
            </div>
            <div class="form-group col-md-6">
              <label for="contraseña">Contraseña*</label>
              <input type="password" class="form-control" id="contraseña">
            </div>
          </div>
          <small id="help" class="form-text text-muted">
            Los items con * son obligatorios. Los demas no pero se pediran luego para hacer transacciones monetarias.
          </small>
          <div class="form-group">
            <label for="mailito">Email*</label>
            <input type="email" class="form-control" id="mailito" placeholder="Ingrese mail">
          </div>
          <p>Datos personales</p>
          <div class="form-group row">
            <label for="nombreUser" class="col-sm-4 col-form-label">Nombre/s</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="nombreUser">
            </div>
          </div>
          <div class="form-group row">
            <label for="apellidoUser" class="col-sm-4 col-form-label">Apellido(s)</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="apellidoUser">
            </div>
          </div>
          <div class="form-group row">
            <label for="sexo" class="col-sm-4 col-form-label">Sexo</label>
            <div class="col-sm-8">
              <select id="sexo" class="form-control">
                <option selected>Prefiero no decirlo</option>
                <option>Hombre</option>
                <option>Mujer</option>
              </select>
            </div>
          </div>
           <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="news">
            <label class="form-check-label" for="news">
              Quiero unirme al Newsletter
            </label>
  
        </form>`,
        confirmButtonText: 'Inscribirme',
        focusConfirm: false,
        preConfirm: () => {
        const user = Swal.getPopup().querySelector('#user').value
        const contraseña = Swal.getPopup().querySelector('#contraseña').value
        const mailito = Swal.getPopup().querySelector('#mailito').value
        const nombreUser = Swal.getPopup().querySelector('#nombreUser').value
        const apellidoUser = Swal.getPopup().querySelector('#apellidoUser').value
        const sexo = Swal.getPopup().querySelector('#sexo').value
        
        let news = ""
        //Para saber si el usuario se quiere unir al newsletter
        if (document.getElementById('news').checked)
        {
          news= "si"
        }else
        {
          news= "no"
        } 

        if (!user || !contraseña || !mailito) {
          Swal.showValidationMessage(`Por favor ingrese datos obligatorios`)
        }else{
          let inscriptos= new UsuariosInscriptos(user,contraseña, mailito, nombreUser, apellidoUser, sexo, news)
          arrayIngresadoInscriptos.push(inscriptos)
          guardarLog(arrayIngresadoInscriptos.length,JSON.stringify(inscriptos))
        }
        return { nombreUser: nombreUser, apellidoUser: apellidoUser}
        }
      }).then((result) => {
        Swal.fire(`
        Nombre usuario: ${result.value.nombreUser}
        Apellido usuario: ${result.value.apellidoUser}
        SECCION EN CONSTRUCCION
        `.trim())
    })
    });//cierre click

 $("#registrarse").click(() =>{  

      Swal.fire({
        title: 'Crea tu cuenta para unirte al mejor team de trabajo!',
        
        html: `
        <div> <p>Unite al mejor team del mercado y empeza a que el dinero trabaje para vos</p></div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="user">Usuario*</label>
              <input type="text" class="form-control" id="user">
            </div>
            <div class="form-group col-md-6">
              <label for="contraseña">Contraseña*</label>
              <input type="password" class="form-control" id="contraseña">
            </div>
          </div>
          <small id="help" class="form-text text-muted">
            Los items con * son obligatorios. Los demas no pero se pediran luego para hacer transacciones monetarias.
          </small>
          <div class="form-group">
            <label for="mailito">Email*</label>
            <input type="email" class="form-control" id="mailito" placeholder="Ingrese mail">
          </div>
          <p>Datos personales</p>
          <div class="form-group row">
            <label for="nombreUser" class="col-sm-4 col-form-label">Nombre/s</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="nombreUser">
            </div>
          </div>
          <div class="form-group row">
            <label for="apellidoUser" class="col-sm-4 col-form-label">Apellido(s)</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="apellidoUser">
            </div>
          </div>
          <div class="form-group row">
            <label for="sexo" class="col-sm-4 col-form-label">Sexo</label>
            <div class="col-sm-8">
              <select id="sexo" class="form-control">
                <option selected>Prefiero no decirlo</option>
                <option>Hombre</option>
                <option>Mujer</option>
              </select>
            </div>
          </div>
           <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="news">
            <label class="form-check-label" for="news">
              Quiero unirme al Newsletter
            </label>
  
        </form>`,
        confirmButtonText: 'Inscribirme',
        focusConfirm: false,
        preConfirm: () => {
        const user = Swal.getPopup().querySelector('#user').value
        const contraseña = Swal.getPopup().querySelector('#contraseña').value
        const mailito = Swal.getPopup().querySelector('#mailito').value
        const nombreUser = Swal.getPopup().querySelector('#nombreUser').value
        const apellidoUser = Swal.getPopup().querySelector('#apellidoUser').value
        const sexo = Swal.getPopup().querySelector('#sexo').value
        let news = ""
        //Para saber si el usuario se quiere unir al newsletter
        if (document.getElementById('news').checked)
        {
          news= "si"
        }else
        {
          news= "no"
        } 

        if (!user || !contraseña || !mailito) {
          Swal.showValidationMessage(`Por favor ingrese datos obligatorios`)
        }else{
          let inscriptos= new UsuariosInscriptos(user,contraseña, mailito, nombreUser, apellidoUser, news)
          arrayIngresadoInscriptos.push(inscriptos)
          guardarLog(arrayIngresadoInscriptos.length,JSON.stringify(inscriptos))
        }
        return { nombreUser: nombreUser, apellidoUser: apellidoUser}
        }
      }).then((result) => {
        Swal.fire(`
        Nombre usuario: ${result.value.nombreUser}
        Apellido usuario: ${result.value.apellidoUser}
        SECCION EN CONSTRUCCION
        `.trim())
    })
    });//cierre click

   $("#registro").click(() =>{  

      Swal.fire({
        title: 'Crea tu cuenta para unirte al mejor team de trabajo!',
        
        html: `
        <div> <p>Unite al mejor team del mercado y empeza a que el dinero trabaje para vos</p></div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="user">Usuario*</label>
              <input type="text" class="form-control" id="user">
            </div>
            <div class="form-group col-md-6">
              <label for="contraseña">Contraseña*</label>
              <input type="password" class="form-control" id="contraseña">
            </div>
          </div>
          <small id="help" class="form-text text-muted">
            Los items con * son obligatorios. Los demas no pero se pediran luego para hacer transacciones monetarias.
          </small>
          <div class="form-group">
            <label for="mailito">Email*</label>
            <input type="email" class="form-control" id="mailito" placeholder="Ingrese mail">
          </div>
          <p>Datos personales</p>
          <div class="form-group row">
            <label for="nombreUser" class="col-sm-4 col-form-label">Nombre/s</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="nombreUser">
            </div>
          </div>
          <div class="form-group row">
            <label for="apellidoUser" class="col-sm-4 col-form-label">Apellido(s)</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="apellidoUser">
            </div>
          </div>
          <div class="form-group row">
            <label for="sexo" class="col-sm-4 col-form-label">Sexo</label>
            <div class="col-sm-8">
              <select id="sexo" class="form-control">
                <option selected>Prefiero no decirlo</option>
                <option>Hombre</option>
                <option>Mujer</option>
              </select>
            </div>
          </div>
           <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="news">
            <label class="form-check-label" for="news">
              Quiero unirme al Newsletter
            </label>
  
        </form>`,
        confirmButtonText: 'Inscribirme',
        focusConfirm: false,
        preConfirm: () => {
        const user = Swal.getPopup().querySelector('#user').value
        const contraseña = Swal.getPopup().querySelector('#contraseña').value
        const mailito = Swal.getPopup().querySelector('#mailito').value
        const nombreUser = Swal.getPopup().querySelector('#nombreUser').value
        const apellidoUser = Swal.getPopup().querySelector('#apellidoUser').value
        const sexo = Swal.getPopup().querySelector('#sexo').value
        
        let news = ""
        //Para saber si el usuario se quiere unir al newsletter
        if (document.getElementById('news').checked)
        {
          news= "si"
        }else
        {
          news= "no"
        } 

        if (!user || !contraseña || !mailito ) {
          Swal.showValidationMessage(`Por favor ingrese datos obligatorios`)
        }else{
          let inscriptos= new UsuariosInscriptos(user,contraseña, mailito, nombreUser, apellidoUser, news)
          arrayIngresadoInscriptos.push(inscriptos)
          guardarLog(arrayIngresadoInscriptos.length,JSON.stringify(inscriptos))
        }
        return { nombreUser: nombreUser, apellidoUser: apellidoUser}
        }
      }).then((result) => {
        Swal.fire(`
        Nombre usuario: ${result.value.nombreUser}
        Apellido usuario: ${result.value.apellidoUser}
        SECCION EN CONSTRUCCION
        `.trim())
    })
    });//cierre click

//BOTONES SCROLL DE MENU

$("#main_bt").click((e) => {
  e.preventDefault();
  $("html , body").animate({
    scrollTop: $("#divisasTitulo").offset().top}, 2000);
  });

$("#menuConversion").click((e) => {
  e.preventDefault();
  $("html , body").animate({
    scrollTop: $("#divisasTitulo").offset().top}, 2000);
  });
  
  $("#menuAbout").click((e) => {
  e.preventDefault();
  $("html , body").animate({
    scrollTop: $("#about").offset().top}, 2000);
  });

  $("#menuHome").click((e) => {
  e.preventDefault();
  $("html , body").animate({
    scrollTop: $("#home").offset().top}, 2000);
  });

  $("#menuContact").click((e) => {
  e.preventDefault();
  $("html , body").animate({
    scrollTop: $("#contact").offset().top}, 2000);
  });


//CUADRILLA DE BOTONES PARA CONVERTIR MONEDAS


let monedas = []; //Usado para generar las opciones de monedas internacionales (linea 376)
let cuadrillaProds = []; //Lo uso para el for of que genera la cuadrilla de calculos (linea 392)
const arrayConvertido= [];//usado para anotar las conversiones que hice (linea 454 en adelante)
const criptomonedasCompradas = [];//uso esto para armar los totales de cada una de las cuadriculas (linea 492)
let totalDefinitivo= 0;


//TOMO LA INFO DE JSON Y HAGO LOS OPTION DE LAS MONEDAS
const monedasOpcion= () =>{
  $.getJSON('data/dataMonedas.json', (monedasJSON) => {

    monedas= monedasJSON;
  
    //FOR QUE HACE LOS OPTION
    for (let divisasMoneda of monedas){

      $('.inputMon').append($('<option>').val(`${divisasMoneda.cambiodolar}`).text(`${divisasMoneda.nombre}`))    
       
      }//cierro for
    })//cierro getJson
  }//cierro monedasOpcion


//TOMO LA INFO DE JSON Y HAGO LAS CUADRILLAS DE CONVERSION

const conversor= () => {
  $.getJSON('data/data.json', (divisasJSON) => {
  cuadrillaProds= divisasJSON;



  for (let element of cuadrillaProds ){
    $("#divisas").prepend(`
    <div class= "col-md-4 col-sm-6 mx-auto">
      <div class="card">
        <div class="box">
          <div class="row">
            <div class="img">
              <img src="img/carrito/${element.simbolo}.png" width="100%" class="img-carrrito">
            </div>
            <div class= "parrafo-box">
              <h5 class="card-title">${element.simbolo}</h5>
              <p class="card-subttitle">${element.nombre}</p>
            </div>
        </div>
        <div class= "selectorCambio">
        <form name="criptoMonedas">
          <label class="card-text" for="inputMon">Elija moneda con cual comprar ${element.nombre}</label>
          <select id="inputMon${element.simbolo}" class="inputMon form-control">
            <option selected>Elegir moneda</option>
            </select>
        </div>
        <div class="contenedor-btn">
          <input type="number" id="convertir${element.simbolo}" class="input" placeholder="Cuanto quiere invertir?">
          <button id="btnconvertir${element.simbolo}" class="btn botonesConvert">Convertir moneda</button>
        </div>
        <div class="resultado${element.simbolo}"><p> - </p></div>
        <div class="contenedor-btn">
          <button id="btnCarrito${element.simbolo}" class="btn botonesConvert">Quiero comprar</button>
        </div>
      </div>
    </div>`)//cierre del prepend

    //BOTON PARA CONVERTIR MONEDAS

     $(`#btnconvertir${element.simbolo}`).on('click', () => {
      event.preventDefault();
      ($(`.resultado${element.simbolo}`)).empty();//Vacío el resultado
      //calculo las criptomonedas que puede comprar el usuario con el dinero que ingresó     
      let calculoCripto= calculo(parseFloat($(`#convertir${element.simbolo}`).val()),parseFloat($(`#inputMon${element.simbolo}`).val()),parseFloat(`${element.cambiodolar}`) ).toFixed(4)
      //condicionales por si el usuario no ingresa toda la informacion

      if (isNaN($(`#inputMon${element.simbolo}`).val())) {
        Swal.fire(
            "Elija con que moneda quiere invertir"); 
        ($(`.resultado${element.simbolo}`)).append("<p> - </p>") 

      }else if (isNaN($(`#convertir${element.simbolo}`).val()))  {
        Swal.fire('Ingrese cuanto quiere comprar!!');
        ($(`.resultado${element.simbolo}`)).append("<p> - </p>") 

      }else if (isNaN(calculoCripto)){
        Swal.fire(`Ingrese cuanto dinero quiere invertir en ${element.nombre} `);
        ($(`.resultado${element.simbolo}`)).append("<p> - </p>") 
          
      }else{

        //Muestra el resultado de la cantidad de monedas convertidas
        ($(`.resultado${element.simbolo}`)).append(`<p> Usted puede comprar ${calculoCripto} ${element.simbolo} </p>`)

        //ingreso la conversion hecha
        let monedaCripto = (`${element.nombre}`)
        let inversion= $(`#convertir${element.simbolo}`).val()
        let divisaIngresada= $(`#inputMon${element.simbolo} option:selected`).text() 
        let convertido= calculoCripto
        let conversionesRealizadas= new Conversiones(monedaCripto ,inversion, divisaIngresada, convertido)
        arrayConvertido.push(conversionesRealizadas)
        guardarLog(arrayConvertido.length,JSON.stringify(conversionesRealizadas))
      
      }//cierro else
    })//cierro btncompra



//este es el boton DE COMPRA
    $(`#btnCarrito${element.simbolo}`).on('click', () => {

      let simboloCriptomoneda = `${element.simbolo}`;//Usado en el array de objetos de la linea 491
      

      //Este calculo es del total de la lista, todas las monedas ser expresan en dolar estadounidense

      let calculoMoneda= calculoDolar($(`#convertir${element.simbolo}`).val(),$(`#inputMon${element.simbolo}`).val())
      
      //Para obligar al usuario a ingresar
      if (isNaN(calculoMoneda)) {
        Swal.fire(
            "Elija cuanto quiere comprar");
      }
      else if (calculoMoneda === 0){
        Swal.fire(`Ingrese cuanto dinero quiere invertir en ${element.nombre} `);        
      }
      else{
        $(`#aviso`).empty()//vacio los avisos del HTML
        $(`#resultado`).empty()

      //aca es donde calculo los totales del carrito. Los calculos finales estan hecho en dolares.

      //Ver si ya se compro la criptomoneda, si se compro, sumarle el valor anterior. Estos totales son por cada moneda
      //existente

      if (simboloCriptomoneda in criptomonedasCompradas){
          const montoAnterior = criptomonedasCompradas[simboloCriptomoneda];
          criptomonedasCompradas[simboloCriptomoneda] = montoAnterior + calculoMoneda;
        }else { //sino se compró, crea el array e ingresa el valor
        criptomonedasCompradas[simboloCriptomoneda] = {};
        criptomonedasCompradas[simboloCriptomoneda] = calculoMoneda;
      }
        console.log(criptomonedasCompradas)
        console.log(criptomonedasCompradas[simboloCriptomoneda])

       
                
        let resultado=  calculo(parseFloat($(`#convertir${element.simbolo}`).val()),parseFloat($(`#inputMon${element.simbolo}`).val()),parseFloat(`${element.cambiodolar}`) ).toFixed(4)
        

        //For usado para sumar cada uno de los totales de cada criptomoneda
        //El resultado se ve en el total a invertir
        totalDefinitivo= 0;
        for (simboloCriptomoneda in criptomonedasCompradas){
          totalDefinitivo= totalDefinitivo + criptomonedasCompradas[simboloCriptomoneda]         
        }
        console.log(totalDefinitivo)
        
        //auxiliares usados para mostrar el resultado

        let auxMoneda=  parseFloat($(`#convertir${element.simbolo}`).val())
        let auxValor=   $(`#inputMon${element.simbolo} option:selected`).text()
       

         $(`#billeteraVirtual`).append(
             `<div class= "carrito${element.simbolo}" >
                <p> Añadidos ${resultado}  ${element.nombre} al carrito por ${auxMoneda} ${auxValor}
                    <button  class="borrar${element.simbolo} btn btn-primary">
                        Eliminar del carrito 
                    </button>
                </p> 
            </div>`)



          $(`#resultado`).append(
             `<p> Total a invertir ${totalDefinitivo.toFixed(0)} dolares
              </p> 
            `)


       
        $(`.borrar${element.simbolo}`).on('click', () => {

          
          $(`.carrito${element.simbolo}`).hide(300)

          function animacion(){
          $(`.carrito${element.simbolo}`).remove();
          }
          setTimeout(animacion,400);
          
          

          simboloCriptomoneda= `${element.simbolo}`
         

          //cuando borro un elemento, que se reste de ese total definitivo          
          totalDefinitivo= totalDefinitivo - parseFloat(criptomonedasCompradas[simboloCriptomoneda])
          
          //para asegurarme que esta borrado, le doy el valor CERO a ese elemento borrado

          criptomonedasCompradas[simboloCriptomoneda]=0  

         
          $(`#resultado`).empty()

          //aca otro problema, no me toma este if por alguna razon. Quiero que cuando no tenga elementos en el carrito, aparezca el 
          //parrafo carrito vacio, pero nno lo hace :'(

          

          
          if(totalDefinitivo === 0 ){
           
          $(`#resultado`).empty()

          $(`#resultado`).append(
              `<p>Carrito vacio</p>`)

          }
          else(totalDefinitivo > 0 )
          {

            $(`#resultado`).append(
              `
              <p> Total a invertir ${totalDefinitivo.toFixed(0)} dolares</p> 
            `)
            }        
          })



       $("html , body").animate({
        scrollTop: $("#billeteraVirtual").offset().top}, 2000); 

      }//cierraelse
     
    })//cierro btnCarrito

   

    // ESTILO DE LA CUADRILLA
    $(".card").css({
      "padding":"2vw 1vw 2vw 1vw",
      "margin": "1vw 1vw 1vw 1vw", 
    })

    $(".img").css({
      "padding":"1vw 1vw 2vw 1vw", 
    })
    $(".parrafo-box").css({
      "padding":"1vw 1vw 2vw 1vw", 
    })

    $(".box").css({
      "padding":"0", 
    })

    $(`.resultado${element.simbolo}`).css({
      "text-align":"center",
      "font-weight":"bold",
    })

    $("#divisas").css({
      "padding":"4vw 2vw 4vw 2vw",
    })
    
    $(".contenedor-btn").css({
      "text-align":"center",
      "padding": "1vw 0 1vw 0"
    })

    $(".row").css({
      "margin":"0vw 0vw 0vw 0vw",
      "padding":"0vw 0vw 0vw 0vw",
    })

    


  }//cierro el for

    
    
})//CIERRO GETJSON



}//cierro la funcion



//FUNCION DE LA CUADRILLA DE CONVERSION

conversor()



//FUNCION DE LOS OPTIONS
monedasOpcion()



$("#comprar").click(() =>{ 
  if( totalDefinitivo===0){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No ingresaste dinero en la billetera',
      footer: '<a href="#convert">Dirigite a nuestro conversor de divisas</a>'
    })}else{    

      Swal.fire({
        title: 'Unase a nuestra red o inicie sesión para completar transaccion',
        
        html: `
        

          <form>
            <div class="form-group row">
              <label for="login" class="col-sm-4 col-form-label">Ingrese usuario</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="login">
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-sm-4 col-form-label">Contraseña</label>
              <div class="col-sm-8">
                <input type="password" class="form-control" id="password">
              </div>
            </div>
          </form>
          <p>Si no posee cuenta, puede registrarse en nuestra página</p>
          
        `,
        confirmButtonText: 'Iniciar sesion',
        focusConfirm: false,
        showDenyButton: true, 
        denyButtonText: `Registrarse`,
        preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!login || !password) {
          Swal.showValidationMessage(`Por favor ingrese usuario y contraseña`)
        }else{
          let usuarios= new Usuarios(login,password)
          arrayIngresado.push(usuarios)
          guardarLog(arrayIngresado.length,JSON.stringify(usuarios))
        }
        return { login: login, password: password}
        }
      }).then((result) => {
        if(result.isConfirmed){
        Swal.fire(`
        Login: ${result.value.login}
        Password: ${result.value.password}
        SECCION EN CONSTRUCCION
        `.trim())}else if(result.isDenied){
          Swal.fire({
        title: 'Crea tu cuenta para unirte al mejor team de trabajo!',
        
        html: `
        <div> <p>Unite al mejor team del mercado y empeza a que el dinero trabaje para vos</p></div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="user">Usuario*</label>
              <input type="text" class="form-control" id="user">
            </div>
            <div class="form-group col-md-6">
              <label for="contraseña">Contraseña*</label>
              <input type="password" class="form-control" id="contraseña">
            </div>
          </div>
          <small id="help" class="form-text text-muted">
            Los items con * son obligatorios. Los demas no pero se pediran luego para hacer transacciones monetarias.
          </small>
          <div class="form-group">
            <label for="mailito">Email*</label>
            <input type="email" class="form-control" id="mailito" placeholder="Ingrese mail">
          </div>
          <p>Datos personales</p>
          <div class="form-group row">
            <label for="nombreUser" class="col-sm-4 col-form-label">Nombre/s</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="nombreUser">
            </div>
          </div>
          <div class="form-group row">
            <label for="apellidoUser" class="col-sm-4 col-form-label">Apellido(s)</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="apellidoUser">
            </div>
          </div>
          <div class="form-group row">
            <label for="sexo" class="col-sm-4 col-form-label">Sexo</label>
            <div class="col-sm-8">
              <select id="sexo" class="form-control">
                <option selected>Prefiero no decirlo</option>
                <option>Hombre</option>
                <option>Mujer</option>
              </select>
            </div>
          </div>
           <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="news">
            <label class="form-check-label" for="news">
              Quiero unirme al Newsletter
            </label>
  
        </form>`,
        confirmButtonText: 'Inscribirme',
        focusConfirm: false,
        preConfirm: () => {
        const user = Swal.getPopup().querySelector('#user').value
        const contraseña = Swal.getPopup().querySelector('#contraseña').value
        const mailito = Swal.getPopup().querySelector('#mailito').value
        const nombreUser = Swal.getPopup().querySelector('#nombreUser').value
        const apellidoUser = Swal.getPopup().querySelector('#apellidoUser').value
        const sexo = Swal.getPopup().querySelector('#sexo').value
        
        let news = ""
        //Para saber si el usuario se quiere unir al newsletter
        if (document.getElementById('news').checked)
        {
          news= "si"
        }else
        {
          news= "no"
        } 

        if (!user || !contraseña || !mailito) {
          Swal.showValidationMessage(`Por favor ingrese datos obligatorios`)
        }else{
          let inscriptos= new UsuariosInscriptos(user,contraseña, mailito, nombreUser, apellidoUser, sexo, direccion, ciudad, cp, pcia, pais, news)
          arrayIngresadoInscriptos.push(inscriptos)
          guardarLog(arrayIngresadoInscriptos.length,JSON.stringify(inscriptos))
        }
        return { nombreUser: nombreUser, apellidoUser: apellidoUser}
        }
        }).then((result) => {
          Swal.fire(`
          Nombre usuario: ${result.value.nombreUser}
          Apellido usuario: ${result.value.apellidoUser}
          SECCION EN CONSTRUCCION
          `.trim())
        })
      }
    })
  }
})//cierre click

//Post del newsletter

const URLGET   = "https://jsonplaceholder.typicode.com/posts"

  let infoPost = ""
  let auxInfo= ""


  //Escuchamos el evento click del botón agregado
$('#envioEmail').change(function(){
  infoPost = $('#envioEmail').val()
  auxInfo= infoPost.length

})

let arrayNews= []
//metodo post
$("#btnMail").click(() => {   
  $.post(URLGET, infoPost ,(respuesta, estado) => {
    $.post(URLGET, infoPost ,(respuesta, estado) => {
      if(estado === "success"){
        if(auxInfo == 0 ){
          Swal.fire({
          icon: 'error',
          text: 'No ingresaste email!'})
        }else if(auxInfo >0){
          Swal.fire(
          "Se inscribio a nuestro Newsletter con exito!!")
        }
        let news= new Newsletter(infoPost)
        arrayNews.push(news)
        guardarLog(arrayNews.length,JSON.stringify(news))
        }else{
        Swal.fire(
        "Servicio momentaneamente no disponible, intente mas tarde")
      }  
    });
  });
});
