//Перепишите `if..else` с использованием нескольких операторов `?`.
var message,login;
login = 'Pitter'
  // if (login == 'Pitter') {
  //     message = 'Hi';
  // } else if (login == 'Owner') {
  //     message = 'Hello';
  // } else if (login == '') {
  //     message = 'unknown';
  // } else {
  //     message = '';
  // }
  // console.log (message);

login === 'Pitter' ? message = 'Hi': login === 'Owner' ? message = 'Hello' :  login === '' ? message = 'unknown': message = 'Error input data!!!'

console.log (message);