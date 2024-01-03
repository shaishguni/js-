const student = {
    'name':'lol',
    'age':56,
    'marks':{
        science: 70,
        math: 75
    },
    greet: (x) => { console.log('hello', x) },
    

}
console.log(student.name)
console.log(student.marks.science)
student.greet('lol')

student.add = (xy)=>{console.log(5+xy)};
student.add(5)