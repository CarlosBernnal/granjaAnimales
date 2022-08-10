var vp = document.getElementById("granja");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);

var xCerdo = aleatorioDiez();
var yCerdo = aleatorioDiez();

function ganar(xCerdo, yCerdo) {
    if (xCerdo == 420 && yCerdo == 430) {
        alert("GANASTE!!! EL CERDITO LLEGO A SU CASA 😜");
    }
}

function moverCerdo(evento){
    var movimiento = 10;
    var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };

    switch (evento.keyCode)
    {
        case teclas.UP:
            yCerdo = yCerdo - movimiento;
            xCerdo = xCerdo;
            dibujar();
            ganar(xCerdo, yCerdo);
        break;
        case teclas.DOWN:
            yCerdo = yCerdo + movimiento;
            xCerdo = xCerdo;
            dibujar();
            ganar(xCerdo, yCerdo);
        break;
        case teclas.LEFT:
            xCerdo = xCerdo - movimiento;
            yCerdo = yCerdo;
            dibujar();
            ganar(xCerdo, yCerdo);
        break;
        case teclas.RIGHT:
            xCerdo = xCerdo + movimiento;
            yCerdo = yCerdo;
            dibujar();
            ganar(xCerdo, yCerdo);
        break;
        default:
            alert("TECLA EQUIVOCADA!");
        break;
    }
}

var fondo = {
  url: "tile.png",
  cargaOk: false
}
var vaca = {
  url: "vaca.png",
  cargaOk: false
};
var cantidadVaca = aleatorio(2, 10);
var pollo = {
    url: "pollo.png",
    cargaOk: false
};
var cantidadPollo = aleatorio(2, 10);
var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};
var cantidadCerdo = 1;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}
function cargarPollos(){
    pollo.cargaOk = true;
    dibujar();
}
function cargarVacas(){
    vaca.cargaOk = true;
    dibujar();
}
function cargarCerdos(){
    cerdo.cargaOk = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk){
        console.log(cantidadVaca);
        for(var v=0; v<cantidadVaca; v++){
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 70;
            var y = y * 70;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(pollo.cargaOk){
        console.log(cantidadPollo);
        for(var v=0; v<cantidadPollo; v++){
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 70;
            var y = y * 70;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
    if (cerdo.cargaOk){
        papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
    }
}

function aleatorio (min,maxi){
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;
}

function aleatorioDiez(){
    var al, numDiez;
    al = Math.random();
    numDiez = Math.floor(((al.toFixed(1) * 400)));
    return numDiez;
}