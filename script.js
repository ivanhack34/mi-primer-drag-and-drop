const draggables = document.querySelectorAll('.draggable') //Para llamar al uso de las clases draggable
const containers = document.querySelectorAll('.container') //Para llamar al uso de las clases container


draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        // console.log('drag start')
        //Este forEach se usa para hacer un callback donde cada vez que se mueva cada cuado aparece un mensaje en consola drag start
        draggable.classList.add('dragging') //Para pooner una clase a esa condicion
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })//Esta parte ayuda a que cuando dejemos de seleccionar uno de los cuadros no se quede con la condicion anterior

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            //console.log('drag over'); //Me muestra que el contenido se esta moviendo o usando, en ese caso cuando tocamos uno de los cuadros
            e.preventDefault() //Ayuda para poder mover fuera del espacio y se mantendra hay
            const afterElement = getDragAfterElement(container, e.clientY) //Se usa para marcar despues del elemento como tal
            const draggable = document.querySelector('.dragging') //Aqui seleccionamos la clase que queremos mover
            container.appendChild(draggable) //Aqui cuando movemos uno de los cuadro puede cambiar de posicion de un espacio a otro
        })
    })
})

function getDragAfterElement(container, y) {
    const draggableElement = [...container.querySelectorAll('draggable:not(.dragging)')] //Ayuda para la seleccion de posiciones

    draggableElement.reduce((closest, child) => {

    }, {offset: Number.POSITIVE_INFINITY}) //Donde lo que seleccionemos sea un numeor positivo
    //se usa esta funcion callback usando reduce para poder llevar desde el elemento de izquierda a derecha 
}//Esta es una funcion que se usara para cuando que se ponga los cuadros sin que se vea tan tansparente y orden que quiera
