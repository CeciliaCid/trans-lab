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
