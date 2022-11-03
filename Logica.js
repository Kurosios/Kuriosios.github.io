let Back = document.querySelector(".atras");
let Next = document.querySelector(".adelante");

let uno = document.querySelector(".HTML");
let dos = document.querySelector(".CSS");
let tres = document.querySelector(".JS");
let cuatro = document.querySelector(".Angular");
let num = 1;

Back = Back.addEventListener("click",Atras);
Next = Next.addEventListener("click",Siguiente);

function Atras(){
  if (num == 1){
    cuatro.classList.remove("hidden")
    uno.classList.add("hidden")
    num = 4;
  } else if (num == 2){
    uno.classList.remove("hidden")
    dos.classList.add("hidden")
    num = 1;
  } else if (num == 3){
    dos.classList.remove("hidden")
    tres.classList.add("hidden")
    num = 2;
  }else if (num == 4){
    cuatro.classList.remove("hidden")
    tres.classList.add("hidden")
    num = 3;
  }
  
}
function Siguiente(){
  if (num == 1){
    dos.classList.remove("hidden")
    uno.classList.add("hidden")
    num = 2;
  } else if (num == 2){
    tres.classList.remove("hidden")
    dos.classList.add("hidden")
    num = 3;
  } else if (num == 3){
    cuatro.classList.remove("hidden")
    tres.classList.add("hidden")
    num = 4;
  } else if (num == 4){
    uno.classList.remove("hidden")
    cuatro.classList.add("hidden")
    num = 1;
  }
  
}
