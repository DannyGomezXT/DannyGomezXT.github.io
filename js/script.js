const valorEntrada = 200;

let dtoEstudiante  = 0.8;
let dtoTrainee     = 0.5;
let dtoJunior      = 0.15;

let nombre         = document.getElementById("nombre")
let apellido       = document.getElementById("apellido")
let email          = document.getElementById("email")
let nroDeEntradas  = document.getElementById("nroDeEntradas")
let categoria      = document.getElementById("categoria")
let resultado      = document.getElementById("resultado");

let btnDtoEstudiante  = document.querySelector(".ticketEstudiante");
let btnDtoTrainee     = document.querySelector(".ticketTrainee");
let btnDtoJunior      = document.querySelector(".ticketJunior");

btnResumen.addEventListener("click", displayTotal);
btnBorrar.addEventListener("click", resetTotal);

btnDtoEstudiante.addEventListener("click",refreshCategory);
btnDtoTrainee.addEventListener("click",refreshCategory);
btnDtoJunior.addEventListener("click",refreshCategory);

function displayTotal() {
  quitarClaseError();
   // ***** Verificación nombre *****
  if(nombre.value==="")
  {
      alert("Se requiere escribir nombre...");
      nombre.classList.add("is-invalid");
      nombre.focus();
      return ;
  }
   // ***** Verificación apellido *****
  if(apellido.value==="")
  {
      alert("Se requiere escribir apellido...");
      apellido.classList.add("is-invalid");
      apellido.focus();
      return ;
  }
   // ***** Verificación email *****
  if(email.value==="")
  {
      alert("Se requiere escribir email...");
      email.classList.add("is-invalid");
      email.focus();
      return ;
  }
  const emailValido = mail => 
  {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  }
  if(!emailValido(email.value))
  {
     alert("Se requiere escribir email válido...");
     email.classList.add("is-invalid");
     email.focus();
     return ;
  }
  // ***** Verificación número de entradas *****
  const nroDeEntradasValido = nroDeEntradas => 
  {
     return /^[0-9]+$/.test(nroDeEntradas);
  }
  if(!nroDeEntradasValido(nroDeEntradas.value))
  {
     alert("Se requiere escribir un número válido...");
     nroDeEntradas.classList.add("is-invalid");
     nroDeEntradas.focus();
     return ;
  }
  console.log(categoria.value)  
  // ***** Verificación categoría *****
  if(categoria.value==="-- Seleccione --") 
  {
      alert("Se requiere seleccionar categoria...");
      categoria.classList.add("is-invalid");
      categoria.focus();
      return ;
  }

  let totalAPagar = 0;

  switch (categoria.value) {
    case "0":
      totalAPagar = nroDeEntradas.value * valorEntrada
      break;
    case "1":
      totalAPagar = nroDeEntradas.value * valorEntrada * (1-dtoEstudiante);
      break;
    case "2":
      totalAPagar = nroDeEntradas.value * valorEntrada * (1-dtoTrainee);
      break;
    case "3":
      totalAPagar = nroDeEntradas.value * valorEntrada * (1-dtoJunior);
      break;
    default:
      return; 
  }
  return resultado.innerHTML =  "Total a pagar: $ "+Number(totalAPagar.toFixed(3));
}

function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}

function resetTotal()
{
    quitarClaseError();
    nombre.value=""
    apellido.value=""
    email.value=""
    nroDeEntradas.value=""
    categoria.value="-- Seleccione --"
    resultado.innerHTML="Total a pagar: $ ";
}

function refreshCategory(event) 
{
  console.log("Holis");
  // let categoria = event.id;
  let categoria = event.target.parentNode.className;
  console.log(categoria)
  switch (categoria) {
      case "estudiante": {
          console.log("es estudiante");
          // document.querySelector(".ticketsCategory").options.selectedIndex = 0;
          // document.querySelector(".estudiante").style.backgroundColor = "#f2f2f2";
          // document.querySelector(".trainee").style.backgroundColor = "transparent";
          // document.querySelector(".junior").style.backgroundColor = "transparent";
          break;
      }
      case "trainee": {
          console.log("es trainee");
          // document.querySelector(".ticketsCategory").options.selectedIndex = 1;
          // document.querySelector(".estudiante").style.backgroundColor = "transparent";
          // document.querySelector(".trainee").style.backgroundColor = "#f2f2f2";
          // document.querySelector(".junior").style.backgroundColor = "transparent";
          break;
      }
      case "junior": {
          console.log("es junior");
          // document.querySelector(".ticketsCategory").options.selectedIndex = 2;
          // document.querySelector(".estudiante").style.backgroundColor = "transparent";
          // document.querySelector(".trainee").style.backgroundColor = "transparent";
          // document.querySelector(".junior").style.backgroundColor = "#f2f2f2";
          break;
      }
  }
}