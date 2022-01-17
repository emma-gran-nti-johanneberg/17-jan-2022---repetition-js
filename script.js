/* DATATYPER */

let string = `Hej, Im a string`;
let number = 1234.5983784751345;
let boolean = true || false;
let n = null;
let uf = undefined;


/* FUNKTIONER*/
function name(name){
    console.log(`Hejsan ${name}, din gamla get!`);
}

function add(num1=0, num2=0){
    return num1+num2;
}

let answer = add(12);

/* DATASTRUKTURER*/
let fruits = [`kiwi`, `orange`, `pear`, `apple`];

let pear = fruits[2]; // titta i enskilt "fack"
fruits.length //kolla längden på arrayen

fruits.push(`pineapple`, `melon`); // lägga till i slutet
fruits.pop(); //plockar bort sista värdet
let pickedFruit = fruits.splice(0, 1);

let numbers = [1, 42, 24, 2562, 524, 5, 7, 16, 245, 27]

let b = numbers.filter(num => {return num > 20})


let obj = {
    key: `value`
};



let dicegame = {
    sides:6,
    numOfThrows: 1000,
    totalValue: 0,
    throw(){
        return Math.ceil(Math.random()*this.sides);
    },    

    init(){
        for(i=0; i<this.numOfThrows; i++){
            let value =  this.throw();
            console.log(value);

            this.totalValue = this.totalValue + value;
        }
    }
};
