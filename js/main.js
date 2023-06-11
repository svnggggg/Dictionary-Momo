const dictionary = document.getElementById('opcion');
const enviado = document.getElementById('mandar');
const contenido = document.getElementById('texto');

const hoja1 = [
    '<span class="lol"> Laid: </span> Establecer', 
    '<span class="lol"> Affordable: </span> Asequible',
    '<span class="lol"> Development: </span> Desarrollo',
    '<span class="lol"> Need: </span> Necesitar',
    '<span class="lol"> Nowadays: </span> Actualmente',
    '<span class="lol"> Technical: </span> Tecnico',
    '<span class="lol"> Many: </span> Muchos'
];

const hoja2 = [
    '<span class="lol"> Assert: </span> Es una declaracion especial que se utliza para verificar que una determinada condicion se cumple en tiempo de ejecucion. Si la condicion es verdadera, no ocurre nada y el programa continua ejecutandose normalmente, pero, si la condicion es falsa, se genera una excepcion "AssertionError.',
    '<span class="lol"> Async: </span> Palabra clave que se utiliza en el conjunto con "await" para crear codigo asincronico, lo que permite que un programa realice multiples tareas simultaneamente',
    '<span class="lol"> Yield: </span> Palabra clave que se utiliza para crear generadores, los cuales son funciones especiales que pueden producir una secuencia de valores en lugar de devolver un valor como lo hacen las funciones comunes.',
    '<span class="lol"> Lambda: </span> Crea funciones anonimas',
    '<span class="lol"> Raise: </span> se utiliza para generar una excepción de forma explícita. Permite al programador indicar que ha ocurrido una condición excepcional en su código y que desea interrumpir la ejecución normal y manejar la excepción en algún otro lugar.'
];



enviado.addEventListener('click', Cambiar);
console.log('¡Sí funcionó 1 B)');

function Cambiar(){
    const opcionSeleccionada = dictionary.value;
    console.log('¡Sí funcionó 2 B)');

    switch(opcionSeleccionada){
        case '1':
            contenido.innerHTML = hoja1.join('<br>');
            break;

        case '2':
            contenido.innerHTML = hoja2.join('<br>');
            break;

        default:
            contenido.innerHTML = 'No se encontro una pagina con este numero';
    }
}
