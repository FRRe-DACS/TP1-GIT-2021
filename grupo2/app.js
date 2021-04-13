var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
  response.end('Hello World');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

function suma(a, b){
  return a + b;
}

const numberToString = (number) => {
  return number+'';
}

function cuadrado(numero) {
  return numero * numero;
};

const printInput = () => {
  const input = prompt('ingrese una entrada');
  const label = document.querySelector('label');
  label.innerHTML = input;
};