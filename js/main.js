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

function groupAge(array) {
  let age = [];

  array.forEach((user) => {
    if (!age.includes(user.age)) {
      age.push(user.age);
    }
  });

  age.sort();

  age.forEach((item) => {
    if (usersSelect) {
      let option = document.createElement("option");
      option.value = item;
      option.innerText = item;
      usersSelect.appendChild(option);
    }
  });
}

function map(array, fn) {
  fn(array);
}

map(users, groupAge);

usersSelect.addEventListener("change", (e) => {
  let usersByAge = [];
  users.forEach((user) => {
    if (user.age == e.target.value) {
      usersByAge.push(user.name);
    }
  });

  usersByAge.sort();

  res.innerText = "";

  usersByAge.forEach((user) => {
    let userName = document.createElement("p");
    userName.innerText = user;
    res.appendChild(userName);
  });
});
