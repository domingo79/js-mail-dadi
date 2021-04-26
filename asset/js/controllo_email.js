//email
var archivio_mail = ['pippo@gmail.com', 'pluto@gmail.com', 'carlo@gmail.com', 'gianni@gmail.com',
    'diego@gmail.com', 'lello@gmail.com', 'michela@gmail.com', 'nunzia@gmail.com', 'fabio@gmail.com',];

var chiedere_mail = prompt('inserisci la tua e-mail per accedere');

// var controllo_mail = archivio_mail.includes(chiedere_mail);

var controllo = archivio_mail.indexOf(chiedere_mail)

if (controllo < archivio_mail.length && controllo >= 0) {
    document.getElementById('controllo').innerHTML = 'Accesso consentito';
    console.log('LOG-IN');
} else {
    document.getElementById('no_log').innerHTML = 'Accesso Negato'
    console.log('ACCESSO NEGATO');
}




