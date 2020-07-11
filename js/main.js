/*
1.  В элемент select вывести сгруппированный возраст
    пользователей
То есть у нас 9 пользователей и их возраст 20, 30, 40
Элемент select должен получится таким

<select>
    <option value="-1">Choose age</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
</select>


2. При выборе соответствующего option осуществить вывод
    пользователей соответствующих выбранному возрасту
    в элемент <div id="res"></div>
То есть при выборе например 20 должны вывестись  John, Ashley, Willy
*/

const usersSelect = document.getElementById("users-select");
const res = document.getElementById("res");

let users = [
  { id: 1, name: "John", age: "20" },
  { id: 2, name: "Sasha", age: "30" },
  { id: 3, name: "Bill", age: "40" },
  { id: 4, name: "Ashley", age: "20" },
  { id: 5, name: "Rachel", age: "40" },
  { id: 6, name: "Tom", age: "30" },
  { id: 7, name: "Steve", age: "30" },
  { id: 8, name: "Jim", age: "40" },
  { id: 9, name: "Willy", age: "20" },
];
