
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

switch (user) {
    case 1:
        document.getElementById('img_user').src = '/asset/img/uno_b.jpg';
        break;
    case 2:
        document.getElementById('img_user').src = '/asset/img/due_b.jpg';
        break;
    case 3:
        document.getElementById('img_user').src = '/asset/img/tre_b.jpg';
        break;
    case 4:
        document.getElementById('img_user').src = '/asset/img/quattro_b.jpg';
        break;
    case 5:
        document.getElementById('img_user').src = '/asset/img/cinque_b.jpg';
        break;
    case 6:
        document.getElementById('img_user').src = '/asset/img/sei_b.jpg';
        break;
}

switch (pc) {
    case 1:
        document.getElementById('img_pc').src = '/asset/img/uno_r.jpg';
        break;
    case 2:
        document.getElementById('img_pc').src = '/asset/img/due_r.jpg';
        break;
    case 3:
        document.getElementById('img_pc').src = '/asset/img/tre_r.jpg';
        break;
    case 4:
        document.getElementById('img_pc').src = '/asset/img/quattro_r.jpg';
        break;
    case 5:
        document.getElementById('img_pc').src = '/asset/img/cinque_r.jpg';
        break;
    case 6:
        document.getElementById('img_pc').src = '/asset/img/sei_r.jpg';
        break;
}



console.log(user);

console.log(pc);


