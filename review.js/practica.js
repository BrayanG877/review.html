/*
const menu = document.querySelectorAll("#menu > div");


menu.forEach(option => {
    option.setAttribute("onclick",`${option.id}()`)
})

function regProducto (){
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = `<form name=frmProducto id=frmProducto"> 
    <span> codigo </span><input type="text" id="codigo" name="codigo">
    <span> nombre </span><input type="text" id="nombre" name="nombre">
    <span> descripcion </span><textarea name="descripcion", id="descripcion"></textarea>
    <span> precio </span><input type="text" id="precio" name="precio">
    <input type="text" id="precio" name="precio">
    </form>`
}
document.getElementById("cancelar").inclick = cancelar;
document.getElementById("guardarProdducto").addEventListener("click", ()=> {
    const formulario = document.querySelector("#frmProducto");
    const data = new FormData(formulario);
})


function cancelar() {
    document.getElementById("contenedor").innerHTML
}
const div1 = document.getElementById("div1");

div1.removeEventListener(`click`, funcionEvento1,{bubble: true});
div1.removeEventListener(`click`, funcionEvento2,);
div1.removeEventListener(`click`, funcionEvento3,);

function funcionEvento1(event) {
    console.log("se ejecuto evento1,", event)
}
function funcionEvento2(){
    console.log("se ejecuto evento 2,",Event)
}
function funcionEvento3(){
    console.log("se ejecuto evento 3,",Event)
}
*/
const prueba = document.getElementById("prueba");


prueba.removeEventListener(`click`, imprimir,{bubble: true});

function imprimir(event) {
    console.log("se ejecuto evento1,", event)
}