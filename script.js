//1
const user = {
    hobby: "Computer games",
    premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const ArrObj1 = Object.entries(user);
for (const iterar of ArrObj1) {
    console.log(...iterar);
}
console.log(user);

//2
//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. 
//Функція повертає число — кількість властивостей.

const obj = {
    name: "Nick",
    age: "16",
}

function countProps(obj) {
    const keys = Object.keys(obj);
    const length = keys.length;
    return length
}

//3
//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і 
//повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і 
//кількість виконаних завдань містяться як властивості об'єкта в форматі 
//"ім'я":"кількість задач".

function findBestEmployee(employees) {
    let maxNum = 0;
    let bestName = "";
    const arrNames = Object.keys(employees);
    for (const iterator of arrNames) {
        if (employees[iterator] > maxNum) {
            maxNum = employees[iterator];
            bestName = iterator;
        }
    };

    return `max number (${maxNum}) have peson ${bestName}`;
}
    
    console.log(
      findBestEmployee({
          ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
      }), //lorence
    );
    
        console.log(
        findBestEmployee({
            poly: 12,
            mango: 17,
            ajax: 4,
        }),
        ); // mango
        
        console.log(
            findBestEmployee({
                lux: 147,
                david: 21,
                kiwi: 19,
        chelsy: 38,
        }),
        ); // lux

//const lorenes = findBestEmployee.lorence;

//4
//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
//Функція рахує загальну суму зарплати працівників і повертає її. 
//Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const Pays = {
    Nick: 13000,
    Mike: 16000,
    Liza: 15000
}

function countTotalSalary(employees) {
    const paysArr = Object.values(employees);
    const sumOfNumbers = paysArr.reduce((acc, paysArr) => acc + paysArr, 0);
    return sumOfNumbers
};
console.log(countTotalSalary(Pays));

//5
//Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
//Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
//Викличи функції для перевірки працездатності твоєї реалізації.
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];
  
const getAllPropValues = function (arr, prop) {
    let value = [];

    for (const iterator of arr) {
        let keys = Object.keys(iterator);
        for (const iterator2 of keys) {
            if (iterator2 === prop) {
                value.push(iterator[prop]);
            }
        }
    }
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < Object.keys(arr[i]); j++) {
    //         if (Object.keys(arr[i]) === prop) {
    //             Object.keys(arr[i]);
    //         }
    //     }
    // }
    return value
};
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []

//6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив 
//об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість 
//продукту (ціна * кількість).Викличи функції для перевірки працездатності твоєї реалізації.

const products2 = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];
const calculateTotalPrice = function (allProdcuts, productName) {
    let value = 0;
    for (const iterator of allProdcuts) {
        let values = Object.values(iterator);
        if (values[0] === productName) {
            value = values[1] * values[2];
            return value
            }
        }
};

console.log(calculateTotalPrice(products2, 'Радар')); // 5200
console.log(calculateTotalPrice(products2, 'Дроїд')); // 2800