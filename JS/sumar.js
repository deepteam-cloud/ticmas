document.getElementById("sumar").addEventListener("click", function() {
    console.log ("Pasò por el getElementById");

    var numeroA = document.getElementById("numero1").value;
    var numeroB = document.getElementById("numero2").value;
    console.log ("numeroA vale: "+numeroA+" y numeroB vale "+numeroB);
    document.getElementById('resulta').innerHTML = "El resultado es: "+ 
        sumar(parseInt(numeroA), parseInt(numeroB));
    

})


function sumar(a, b) {
    return a+b;
}