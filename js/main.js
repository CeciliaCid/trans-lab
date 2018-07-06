let bipUsuario = document.getElementById("bipUsuario");
let saldoBip = parseInt(document.getElementById("saldo"));
let fechaBip = document.querySelector("#fechaSaldo");
let botonCargar = document.getElementById("cargarDatos");

/////////////////////////////////////////////////////////////////


function cargar (){
    let bip = bipUsuario.value;
    console.log(bip)
    bipUsuario.value = "";

    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${bip}`)
    .then(response => response.json())
    .then(data => {
       // var trans = Object.values(data)
        // console.log(trans);
        console.log(data);
        renderInfo(data);
    })
}
const renderInfo = data => {
    datosUsuariosCargados.innerHTML = `
    <p>Estado de Contrato: ${data['Estado de contrato']}</p>
    <p>Saldo actual: ${data['Saldo  tarjeta']}</p>
    <p>Fecha del Saldo: ${data['Fecha saldo']}</p>
    `
}

///////////////////////////////////////////////////////////////

function loginUser(){
    if((document.getElementById("inputCorreo").value === "")||(document.getElementById("inputContraseña").value === "")){
        alert ("No puedes dejar campos vacios")

}else{
    let email = document.getElementById("inputCorreo").value;
    let contraseña = document.getElementById("inputContraseña").value;
    localStorage.setItem(email, contraseña);
}
}

function imprimirEmail(){
    document.getElementById("datosUsuariosCargados").innerHTML = "";
    for(let i=0; i < localStorage.length; i++){
        let email = localStorage.key(i);
        let emailTexto = localStorage.getItem(email);
        datosUsuariosCargados.innerHTML = `
        <p> Bienvenido: ${emailTexto} <p>
        `
    }
}

function entrar(){
    if(typeof(Storage) !== "undefined"){
        loginUser();
        imprimirEmail();
        document.getElementById("inputCorreo").value = "";
    }else{
        alert("Lo sentimos, el web storage no tiene soporte :( ")
    }
}

