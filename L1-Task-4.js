//Перепишите код с использованием одной конструкции `switch`:
var a = 0;

if (a == 0) {
console.log( 0 );
}
if (a == 1) {
console.log( 1 );
}

if (a == 2 || a == 3) {
console.log( '2,3' );
}

 switch (a)
{
case '0':
     console.log('0');
     break;
 case'1':
  console.log('0');
   break;
 case'2':
 console.log( '2,3' );
  break;
 case'3':
onsole.log( '2,3' );
    console.log('others');
     break;
 default:
     console.log('unknown');
 }