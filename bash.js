var commands = require('./commands');
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var userCommand = data.toString().trim(); // remueve la nueva línea
  var valores = userCommand.split(" ")
  var file = (valores.slice(1)).join(" ").toString()
  // El evento stdin 'data' se dispara cuando el user escribe una línea
    commands[valores[0]](file)

})


