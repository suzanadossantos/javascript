function myColour() {
  
    var vermelho = document.getElementById('vermelho').value;
    var verde = document.getElementById('verde').value;
    var azul = document.getElementById('azul').value;
    var colour = 'rgb(' + vermelho + ',' + verde + ',' + azul + ')';
    
    document.body.style.backgroundColor = colour;
    document.getElementById('box').value = colour;
}
  
document.getElementById('vermelho').addEventListener('input', myColour);
document.getElementById('verde').addEventListener('input', myColour);
document.getElementById('azul').addEventListener('input', myColour);