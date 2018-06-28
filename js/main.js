let bipUsuario = document.getElementById("bipUsuario");
let saldoBip = document.querySelector("#saldo");
let fechaBip = document.querySelector("#fechaSaldo");
let botonCargar = document.getElementById("cargarDatos");

/////////////////////////////////////////////////////////////////


function cargar (){
    //let bip = bipUsuario.value;
    //console.log(bip)
    //bipUsuario.value = "";

    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=666`)
    .then(response => response.json())
    .then(data => {
        console.log(data["Estado de contrato"]);
        //renderInfo(data);
    })
}


/*const renderInfo = data => {
    saldoBip.innerHTML = data.Saldo;
    fechaBip.innerHTML = data.Fecha;
}
*/