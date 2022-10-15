//Utilice el html y el css de fabricio.
const $siguientePaso = document.querySelector("#siguiente-paso");

let cantidadIntegrantes = 0;

$siguientePaso.onclick = function(){
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    cantidadIntegrantes = Number($cantidadIntegrantes.value);
    $analisis.className = "oculto";
    crearInputs(cantidadIntegrantes);
    return false;
}

const $integrantes = document.querySelector("#integrantes");

function crearInputs(cantidadIntegrantes){

    while($integrantes.hasChildNodes()){
        $integrantes.removeChild($integrantes.lastChild);
    }

    for(let i = 0; i < cantidadIntegrantes; i++){
        const input = document.createElement("input");
        input.type = "number";
        input.id = "edad" + i;
        $integrantes.appendChild(input);

        const label = document.createElement("label");
        label.textContent = "Edad" + i;
        $integrantes.appendChild(label);
    }

    //const $calcular = document.querySelector("#calcular");
    if(cantidadIntegrantes > 0){
        $calcular.className = "";
    }
    if(cantidadIntegrantes < 1){
        $calcular.className = "oculto";
    }

    return false;

}

const $calcular = document.querySelector("#calcular");

const edades = [];
let mayorEdad = 0;
let menorEdad = 0;
let promedioEdad = 0;

const $analisis = document.querySelector("#analisis");

$calcular.onclick = function(){
    console.log(cantidadIntegrantes);
    tomarValoresInputs(cantidadIntegrantes);
    retornarMayor(edades);
    retornarMenor(edades);
    promediarNumeros(edades);
    
    $analisis.className = "";
    const $mayorEdad = document.querySelector("#mayor-edad");
    $mayorEdad.innerText = mayorEdad;
    const $menorEdad = document.querySelector("#menor-edad");
    $menorEdad.innerText = menorEdad;
    const $promedioEdad = document.querySelector("#promedio-edad");
    $promedioEdad.innerText = promedioEdad;

    return false;
}


function tomarValoresInputs(cantidadIntegrantes){
    //const edades = [];
    for(let i = 0; i < cantidadIntegrantes; i++){
        edades[i] = Number(document.querySelector("#edad" + i).value);
    }

    return false;
}

function retornarMayor(arrayDeNumeros){
    mayorEdad = arrayDeNumeros[0];
    for(let i = 1; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] > mayorEdad){
            mayorEdad = arrayDeNumeros[i];
        }
    }
}

function retornarMenor(arrayDeNumeros){
    menorEdad = arrayDeNumeros[0];
    for(let i = 1; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] < menorEdad){
            menorEdad = arrayDeNumeros[i];
        }
    }
}

function promediarNumeros(arrayDeNumeros){
    promedioEdad = 0;
    for(let i = 0; i < arrayDeNumeros.length; i++){
        promedioEdad += arrayDeNumeros[i];
    }
    promedioEdad = promedioEdad / (arrayDeNumeros.length);

}

const $resetear = document.querySelector("#resetear");

$resetear.onclick = function(){
    while($integrantes.hasChildNodes()){
        $integrantes.removeChild($integrantes.lastChild);
    }

    $calcular.className = "oculto";
    $analisis.className = "oculto";
}






