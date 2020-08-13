var vp = document.getElementById("villapollo");
var papel = vp.getContext("2d");
var minimo = 0;
var maximo = 7;

var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cantVacas = aleatorio(0, 50);
var cantPollos = aleatorio(0, 50);

console.log(Image)

document.addEventListener("keyup", teclado);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

var cerdo = new Image();
cerdo.src = "cerdo.png";
//  cerdo.addEventListener("load", teclado);
var movimiento = 20;
var x = 210;
var y = 210;

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
} 
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
} 
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0); 
    }
    if (vaca.cargaOK)
    {
        console.log(cantVacas);
        for (v=0; v<cantVacas; v++)
        {
            papel.drawImage(vaca.imagen, aleatorio(minimo, maximo)*60, aleatorio(minimo, maximo)*60); 
        }
        
    }
    if (pollo.cargaOK)
    {
        console.log(cantPollos);
        for (v=0; v<cantPollos; v++)
        {
            papel.drawImage(pollo.imagen, aleatorio(minimo, maximo)*60, aleatorio(minimo, maximo)*60); 
        }
        
    }
    papel.drawImage(cerdo, x, y);
}

function teclado(evento)
{
    switch(evento.keyCode)
    {
        case teclas.UP:
            //aquí algo par que borre cerdo(x, y);
            moverCerdo(x, y - movimiento);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            moverCerdo(x, y + movimiento)
            y = y + movimiento;
        break;
        case teclas.LEFT:
            moverCerdo(x - movimiento, y);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            moverCerdo(x + movimiento, y);
            x = x + movimiento;
        break;
        default:
            console.log("Solo se debe usar las teclas de las flechas");
        break;
    }
}

function moverCerdo(movX, movY)
{
    papel.drawImage(cerdo, movX, movY);
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}