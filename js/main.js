const dictionary = document.getElementById('opcion');
const enviado = document.getElementById('mandar');
const contenido = document.getElementById('texto');

const hoja1 = [
    '<span class="lol"> Laid: </span> Establecer.', 
    '<span class="lol"> Affordable: </span> Asequible.',
    '<span class="lol"> Development: </span> Desarrollo.',
    '<span class="lol"> Need: </span> Necesitar.',
    '<span class="lol"> Nowadays: </span> Actualmente.',
    '<span class="lol"> Technical: </span> Tecnico.',
    '<span class="lol"> Many: </span> Muchos.'
];

const hoja2 = [
    '<span class="lol"> Assert: </span> Es una declaracion especial que se utliza para verificar que una determinada condicion se cumple en tiempo de ejecucion. Si la condicion es verdadera, no ocurre nada y el programa continua ejecutandose normalmente, pero, si la condicion es falsa, se genera una excepcion "AssertionError.',
    '<span class="lol"> Async: </span> Palabra clave que se utiliza en el conjunto con "await" para crear codigo asincronico, lo que permite que un programa realice multiples tareas simultaneamente.',
    '<span class="lol"> Yield: </span> Palabra clave que se utiliza para crear generadores, los cuales son funciones especiales que pueden producir una secuencia de valores en lugar de devolver un valor como lo hacen las funciones comunes.',
    '<span class="lol"> Lambda: </span> Crea funciones anonimas.',
    '<span class="lol"> Raise: </span> se utiliza para generar una excepción de forma explícita. Permite al programador indicar que ha ocurrido una condición excepcional en su código y que desea interrumpir la ejecución normal y manejar la excepción en algún otro lugar.'
];

const hoja3 = [
    '<span class="lol"> Subset: </span> Subconjunto.',
    '<span class="lol"> Deployment: </span> Despliegue.',
    '<span class="lol"> Fields: </span> Campo / Área.',
    '<span class="lol"> Factual: </span> Basado en los hechos.',
    '<span class="lol"> However: </span> De la manera que.',
    '<span class="lol"> Therefore: </span> Por lo tanto.',
    '<span class="lol"> Lingua franca: </span> Lengua franca.'
];

const hoja4 = [
    '<span class="lol"> Typo: </span> Error de tipeo.',
    '<span class="lol"> Several: </span> Varios/as.',
    '<span class="lol"> Coined: </span> Crear, acuñar.',
    '<span class="lol"> Thus: </span> Así / Por consiguiente.',
    '<span class="lol"> Laid: </span> Establecer.',
    '<span class="lol"> Groundwork: </span> Trabajo preparatorio.',
    '<span class="lol"> Vacuum tubes: </span> Tubos vacíos.',
    '<span class="lol"> Affordable: </span> Asequible.',
    '<span class="lol"> Households: </span> Hogares.',
    '<span class="lol"> Finally: </span> Se utiliza para que finalmente algo se ejecute si o si.',
    '<span class="lol"> Nonlocal: </span> Una variable creada en el interior de una función es local y solo existe dentro de ella.'
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

        case '3':
            contenido.innerHTML = hoja3.join('<br>');
            break;
    
        case '4':
            contenido.innerHTML = hoja4.join('<br>');
            break;
            
        default:
            contenido.innerHTML = 'No se encontro una pagina con este numero.';
    }
}
