//email
var archivio_mail = ['pippo@gmail.com', 'pluto@gmail.com', 'carlo@gmail.com', 'gianni@gmail.com',
    'diego@gmail.com', 'lello@gmail.com', 'michela@gmail.com', 'nunzia@gmail.com', 'fabio@gmail.com',];

var chiedere_mail = prompt('inserisci la tua e-mail per accedere');

var controllo_mail = archivio_mail.includes(chiedere_mail);

if (controllo_mail) {
    document.getElementById('controllo').innerHTML = 'Accesso consentito';
    console.log('LOG-IN');
} else {
    console.log('ACCESSO NEGATO');
}