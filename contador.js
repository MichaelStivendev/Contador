
let valor = document.getElementById('valorContador');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const reset = document.getElementById('reset')
let contador = 0
 sumar.addEventListener("click",()=>{
    contador++ 
    valor.textContent = contador;
 })
 reset.addEventListener("click",()=>{
    contador= 0;
    valor.textContent = contador;
 })
 restar.addEventListener("click",()=>{
    if(contador <= 0) return;
    contador-- 
    valor.textContent = contador;
 })
