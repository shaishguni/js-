let objj = {
    'name':'lol',
    'python':'js',
}

for(let key in objj){
    console.log(`${key}=${objj[key]}`)
}

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}

let str = 'srt'

for(let x in str){
    console.log(`${str[x]}`)
}

// define array
const arr = [ 'hello', 1, 'JavaScript' ];

// using for...in loop
for (let x in arr) {
    console.log(arr[x]);
}

