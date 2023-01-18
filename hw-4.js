// ___________________________________________________
// Перепишите функцию, используя оператор '?' или '||'
// ___________________________________________________

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
} 

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

//___________________________________________________________________________________________________________________________   
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// __________________________________________________________________________________________________________________________

function pow (x, n) {
    let answer = x;
    for ( let i = 1; i < n; i++){
        answer *= x;
    }
    return answer
}
let x = prompt('write values for x','')

let n = prompt('write values for n','')

alert(pow(x, n));

// _______________________________
// Перепишите с использованием функции-стрелки. Замените код Function Expression стрелочной функцией
// ________________________________

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",() => alert("Вы согласились."),() => alert("Вы отменили выполнение.")
  )

// _________________________________________________
// Сортировать в порядке по убыванию
// _________________________________________________

let arr = [5, 2, 1, -10, 8];
arr.sort ((a,b)=>b-a);
console.log(arr);

// ________________________________
// Трансформировать в массив имён
// ________________________________

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item =>item.name);

alert( names ); // Вася, Петя, Маша

// __________________________
// Трансформировать в объекты
// __________________________

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let users1Mapped = users1.map(user => ({fullName: `${user.name} ${user.surname}`,id: user.id}));

alert( users1Mapped[0].id ) // 1
alert( users1Mapped[0].fullName ) // Вася Пупкин


// ________________________
// Получить средний возраст
// ________________________

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr2 = [ vasya2, petya2, masha2 ];

alert( getAverageAge(arr2) ); // (25 + 30 + 29) / 3 = 28