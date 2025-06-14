function soma(){
  var a = parseFloat(document.getElementById('somaA').value);
  var b = parseFloat(document.getElementById('somaB').value);
  //document.getElementById('demo').innerHTML = a + b;
  document.getElementById('demo').innerHTML = a + b;

}

function subtrai() {
    var a = parseFloat(document.getElementById('subA').value);
    var b = parseFloat(document.getElementById('subB').value);
    document.getElementById('demo02').innerHTML = a - b;
}

function multiplica(){
  var a = parseFloat(document.getElementById('multiA').value);
  var b = parseFloat(document.getElementById('multiB').value);
  document.getElementById('demo03').innerHTML = a * b;

}

function divide(){
  var a = parseFloat(document.getElementById('divA').value);
  var b = parseFloat(document.getElementById('divB').value);
  if (b === 0) {
    document.getElementById('demo04').innerHTML = "divisão por zero!";
  } else {
    document.getElementById('demo04').innerHTML = a/b;
  }
}

function potencia(){
  var a = parseFloat(document.getElementById('valor09').value);
  var b = parseFloat(document.getElementById('valor10').value);
  document.getElementById('demo05').innerHTML = math.pow(a, b);
}