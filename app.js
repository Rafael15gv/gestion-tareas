const nuevaTarea = document.getElementById('nueva-tarea-txt');
const boton = document.querySelector('button');
const boxTarea = document.getElementById('box-tareas');
let estado = true;

nuevaTarea.addEventListener('keydown', (evento) => {
  if (evento.code == 'Enter') {
    if ("" === nuevaTarea.value) {
      return;
    }
    procesoNuevaTarea();
  }
})


boton.addEventListener('click', () => {
  if ("" === nuevaTarea.value) {
    return;
  }
  procesoNuevaTarea();
})



function procesoNuevaTarea() {
  const newBox = document.createElement('div');
  const inNewBox = document.createElement('div');
  const finalizar = document.createElement('div');
  const borrar = document.createElement('div');
  
  newBox.classList.add('newTask');
  newBox.innerHTML = `<h2>${nuevaTarea.value}</h2>`
  boxTarea.appendChild(newBox);
  
  inNewBox.classList.add('caja-derecha')
  newBox.appendChild(inNewBox);
  
  finalizar.classList.add('fnl-del');
  finalizar.innerHTML = "<h3>✅</h3>";
  inNewBox.appendChild(finalizar);
  
  borrar.classList.add('fnl-del');
  borrar.innerHTML ="<h3>❌</h3>";
  inNewBox.appendChild(borrar);
  
  finalizar.addEventListener('click', () => {
    
    if (estado == true) {
      newBox.style.backgroundColor = "#0aa622";
      estado = !estado;
    } else{
      newBox.style.backgroundColor = "#7E60BF";
      estado = !estado;
    }
    
    
  })

  borrar.addEventListener('click', () => {
    newBox.remove();
  })

  nuevaTarea.value = "";
}


