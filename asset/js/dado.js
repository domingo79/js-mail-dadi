var user = parseInt((Math.random() * 6) + 1);
var pc = parseInt((Math.random() * 6) + 1);

if (user > pc) {
    document.getElementById('user').innerHTML = ' WIN';
    console.log('win utente')
} else if (pc > user) {
    document.getElementById('pc').innerHTML = ' WIN';

    console.log('win PC')
} else {
    document.getElementById('pareggio').innerHTML = ' PAREGGIO';
    console.log('pareggio')
}


console.log(user);
document.getElementById('risultato_user').innerHTML = user;
console.log(pc);
document.getElementById('risultato_pc').innerHTML = pc;

