
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

if (user == 1) {
    document.getElementById('img_user').src = '/asset/img/uno_b.jpg';
} else if (user == 2) {
    document.getElementById('img_user').src = '/asset/img/due_b.jpg';
} else if (user == 3) {
    document.getElementById('img_user').src = '/asset/img/tre_b.jpg';
} else if (user == 4) {
    document.getElementById('img_user').src = '/asset/img/quattro_b.jpg';
} else if (user == 5) {
    document.getElementById('img_user').src = '/asset/img/cinque_b.jpg';
} else {
    document.getElementById('img_user').src = '/asset/img/sei_b.jpg';
}

if (pc == 1) {
    document.getElementById('img_pc').src = '/asset/img/uno_r.jpg';
} else if (pc == 2) {
    document.getElementById('img_pc').src = '/asset/img/due_r.jpg';
} else if (pc == 3) {
    document.getElementById('img_pc').src = '/asset/img/tre_r.jpg';
} else if (pc == 4) {
    document.getElementById('img_pc').src = '/asset/img/quattro_r.jpg';
} else if (pc == 5) {
    document.getElementById('img_pc').src = '/asset/img/cinque_r.jpg';
} else {
    document.getElementById('img_pc').src = '/asset/img/sei_r.jpg';
}


console.log(user);

console.log(pc);


