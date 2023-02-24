 /*document.getElementById('boton').onclick = function() {
    console.log("capturo el elemento click");
    document.getElementById('demo').innerHTML = "Prueba de evento en JS";
    
}*/

/* function PRUEBA_FUN() {
    
    console.log("capturo el elemento click");
    document.getElementById('demo').innerHTML = "Prueba de evento en JS";

}
*/

/* document.addEventListener("click", function() {
    console.log("HolaMundo! desde EventListener");
    document.getElementById('demo').innerHTML = "Prueba de evento en JS desde EventListener";
    document.body.style.backgroundColor = "red";
    
});
*/
// function inicializa_contador() {
//     var contador = true;
//     console.log("Inicializa contador y vale: "+contador);
// }

document.getElementById('boton').addEventListener("click", function() {
    console.log("Dentro del document Contador1 vale: "+contador1);
    var contador3 = (switchea_contador(contador1));
    
    if (contador3 == true) {
        console.log("Dentro del IF true Contador3 vale: "+contador3);

        document.getElementById('demo').innerHTML = "Prueba de evento en JS desde EventListener";
        contador1 = true
      } 
      
    else {
        console.log("Dentro del IF false Contador3 vale: "+contador3);
        document.getElementById('demo').innerHTML = "Estoy probando JavaScript";
        contador1 = false
      }  
});

document.getElementById('boton_color').addEventListener("click", function() {
    console.log("Dentro del document Contador2 vale: "+contador2+ " y va a switchear con eso");
    var contador4 = (switchea_contador(contador2));
    console.log("volvió del switcheo con contador2 valiendo: "+contador2+" y contador4 valiendo: "+contador4); 
    if (contador4 == true) {
        console.log("Dentro del IF trur Contador4 vale: "+contador4);
        document.body.style.backgroundColor = '#FF0000'
        contador2 = true
    }
    else {
        console.log("Dentro del IF false Contador4 vale: "+contador4); 
        document.body.style.backgroundColor = 'blue'
        contador2 = false

    }

});

function switchea_contador(contador) {
    console.log("Dentro de switchea_contador Contador1 vale: "+contador1+ " y contador2 vale "+contador2+" y contador vale "+contador);
    if (contador == true) {
        console.log("Entró en el IF true del switchea: "); 
        return false;
    }
    else {
        console.log("Entró en el IF false del switchea: "); 
        return true;
    }

}

const pepe = document.getElementsByClassName("prueba");
console.log("PEPE VALE: " + pepe.length);
for (let i = 0; i < pepe.length; i++) {
    console.log("I vale= " + i);
    pepe [i].style.backgroundColor = "white";
}


