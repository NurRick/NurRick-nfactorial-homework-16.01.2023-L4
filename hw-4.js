// Перепишите функцию, используя оператор '?' или '||'

const age = prompt('How old are you?');

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }
  console.log(checkAge);
