const player = {
    name: 'Nico',
    age: 30
};
console.log(player)  // 출력: {name: 'Nico', age: 30}

player.name = 'seongjin';
console.log(player)  // 출력: {name: 'seongjin', age: 30}

player.weight = 60;
console.log(player) // 출력: {name: 'seongjin', age: 30, weight: 60}



function minusFive(num) {
    console.log(num-5);
}

minusFive(5,15,25,35,45)  // 출력: 0
minusFive(15,25,35,45,5)  // 출력: 10
minusFive(25,35,45,5,15)  // 출력: 20



const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    divide: function(a, b) {
        console.log(a / b)
    },
    multi: function(a, b) {
        console.log(a * b)
    }
};

calculator.add(10,20)  // 출력: 30
calculator.minus(10,20)  // 출력: -10
calculator.divide(10,20) // 출력: 0.5
calculator.multi(10,20) // 출력: 200
