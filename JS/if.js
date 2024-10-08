function calcularResultado(){
   var n1, n2, n3, n4, mf = 0;
   var result = document.getElementById('resultado')

   n1 = parseFloat(document.getElementById('nota1').value);

   n2 = parseFloat(document.getElementById('nota2').value);

   n3 = parseFloat(document.getElementById('nota3').value);

   n4 = parseFloat(document.getElementById('nota4').value);

   mf = (n1 + n2 + n3 + n4)/4;

    if(mf >= 70){
        document.getElementById('resultado').innerHTML = 'Aprovado'
        result.style.background = 'green'
    }
    else if(mf < 50){
        document.getElementById('resultado').innerHTML = 'Reprovado'
        result.style.background = 'red'
    }
    else{
        document.getElementById('resultado').innerHTML = 'Recuperação'
        result.style.background = 'yellow'
    }
}

function limpar(){
    document.getElementById('nota1').value = '';

    document.getElementById('nota2').value = '';

    document.getElementById('nota3').value = '';

    document.getElementById('nota4').value = '';

    document.getElementById('resultado').innerHTML = '';

}
