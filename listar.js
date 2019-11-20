import { Persona } from './Persona.js';

$(document).ready(function() {
    var personas = JSON.parse('{ "personas" : [{ "nombre":"John" , "apellido":"Doe", "edad":"20" },{ "nombre":"Anna" , "apellido":"Smith","edad":"10"  },{ "nombre":"Peter" , "apellido":"Jones","edad":"120"  } ]}');

    let array = [];

    for (let i = 0; i < personas.personas.length; i++) {

        array.push(new Persona(personas.personas[i].nombre, personas.personas[i].apellido, personas.personas[i].edad))
    }

    var tabla = document.getElementById('tabla');
    for (let i = 0; i < array.length; i++) {
        tabla.innerHTML = tabla.innerHTML + "<tr><td>" + array[i].nombre + "</td><td>" + array[i].apellido + "</td><td>" + array[i].edad + "</td></tr > ";
    }


    $('#boton').click(
        function() {
            let nombre = document.getElementById('nombre').value;
            let apellido = document.getElementById('apellido').value;
            let edad = document.getElementById('edad').value;
            array.push(new Persona(nombre, apellido, edad));
            console.log(array)
            tabla.innerHTML = tabla.innerHTML + "<tr><td>" + nombre + "</td><td>" + apellido + "</td><td>" + edad + "</td></tr > ";

        });
    $('#btn_tabla').click(function() {
        $("#tabla").css({ 'color': 'red' })
        $("#tabla").fadeTo("slow", 0.2, function() {});


    });
    $('#mover').click(function() {
        $("#cuadrado").animate({
            margin: '250px',
            opacity: '0.5'


        });
    })




});