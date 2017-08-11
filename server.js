let exec = require('child_process').exec;
console.log('start running bash script for child process');

let ls = exec('npm run dev');
ls.stdout.on('data', (data) => console.log(data));