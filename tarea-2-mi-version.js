/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

<div id="resultados" class="oculto">
        <p>El mayor salario anual es : <strong id="mayor-salario-anual"></strong></p>
        <p>El menor salario anual es : <strong id="menor-salario-anual"></strong></p>
        <p>El salario anual promedio es : <strong id="salario-anual-promedio"></strong></p>
        <p>El salario mensual promedio es : <strong id="salario-mensual-promedio"></strong></p>
    </div>
*/

const $agregarSalarioAnual = document.querySelector("#agregar-input-salario-anual");
const $salariosAnuales = document.querySelector("#inputs-salarios-anuales");
const $calcular = document.querySelector("#calcular");
const $mayorSalarioAnual = document.querySelector("#mayor-salario-anual");
const $menorSalarioAnual = document.querySelector("#menor-salario-anual");
const $salarioAnualPromedio = document.querySelector("#salario-anual-promedio");
const $salarioMensualPromedio = document.querySelector("#salario-mensual-promedio");
let contadorDeInputs = 0;
let contadorDeInputsEnEsteInstante = 0;

$agregarSalarioAnual.onclick = function(){
    agregarInputSalarioAnual();

    return false;
}

$calcular.onclick = function(){
    $mayorSalarioAnual.innerText = mayorSalarioAnual();
    $menorSalarioAnual.innerText = menorSalarioAnual();
    $salarioAnualPromedio.innerText = salarioAnualPromedio();
    $salarioMensualPromedio.innerText = salarioMensualPromedio();

    return false;
}

function agregarInputSalarioAnual(){
    contadorDeInputs++;

    const input = document.createElement("input");
    input.type = "number";
    input.id = "input-salario-anual" + contadorDeInputs;
    $salariosAnuales.appendChild(input);

    const label = document.createElement("label");
    label.id = "label-salario-anual" + contadorDeInputs;
    label.textContent = "Salario anual " + contadorDeInputs;
    $salariosAnuales.appendChild(label);

    const button = document.createElement("button");
    button.type = "submit";
    button.id = "boton-salario-anual" + contadorDeInputs;
    button.textContent = "Eliminar salario";
    button.onclick = function(){
        borrarme(this.id);
        return false;
    }
    $salariosAnuales.appendChild(button);
}

function borrarme(id){
    const $button = document.querySelector("#" + id);
    $button.remove();
    const $label = document.querySelector("#label-salario-anual" + id.charAt(id.length - 1));
    $label.remove();
    const $input = document.querySelector("#input-salario-anual" + id.charAt(id.length - 1));
    $input.remove();
    return false;
}

function mayorSalarioAnual(){
    const salariosAnuales = document.querySelectorAll("input");
    let mayorSalarioAnual = Number(salariosAnuales[0].value);
    for(let i = 1; i < salariosAnuales.length; i++){
        if(Number(salariosAnuales[i].value) > mayorSalarioAnual){
            mayorSalarioAnual = Number(salariosAnuales[i].value);
        }
    }
    console.log(mayorSalarioAnual);

    return mayorSalarioAnual;
}

function menorSalarioAnual(){
    const salariosAnuales = document.querySelectorAll("input");
    let menorSalarioAnual = Number(salariosAnuales[0].value);
    for(let i = 1; i < salariosAnuales.length; i++){
        if(Number(salariosAnuales[i].value) < menorSalarioAnual){
            menorSalarioAnual = Number(salariosAnuales[i].value);
        }
    }
    console.log(menorSalarioAnual);

    return menorSalarioAnual;
}

function salarioAnualPromedio(){
    const salariosAnuales = document.querySelectorAll("input");
    let promedioAnual = 0;
    let divisor = 0;
    for(let i = 0; i < salariosAnuales.length; i++){
        promedioAnual += Number(salariosAnuales[i].value);
        divisor++;
    }
    promedioAnual = promedioAnual / divisor;
    console.log(promedioAnual);

    return promedioAnual;
}

function salarioMensualPromedio(){
    const MESES_DEL_AÑO = 12;
    let promedioMensual = 0;

    const salariosAnuales = document.querySelectorAll("input");
    let promedioAnual = 0;
    let divisor = 0;
    for(let i = 0; i < salariosAnuales.length; i++){
        promedioAnual += Number(salariosAnuales[i].value);
        divisor++;
    }
    promedioAnual = promedioAnual / divisor;

    promedioMensual = promedioAnual / MESES_DEL_AÑO;
    console.log(promedioMensual);

    return promedioMensual;
}
