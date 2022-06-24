function nightmode(){
document.body.classList.toggle("dark");
var encabezado=document.getElementById("encabezado");
encabezado.classList.toggle("dark-header");
}
function info(name){
    alert("Hola " +name+ " mi nombre es Juan Martin Flores");
    alert("Estoy buscando desarrollarme como programador Web!");
    alert("Si quieres saber algo sobre mi te dejo mis formas de contacto");
    alert("Correo:juanmartinf7@hotmail.com Telefono:2616687795");
}

var name=prompt("bienvenido:¿Cual es su nombre?")
