const students = [
    {id:21, name:"Omor Sunney"},
    {id:31, name:"Maannaaaaa"},
    {id:41, name:"Moyouri"},
    {id:71, name:"Deepjol"}
];

let studentsName = students.map( s => s.name);
let studentId = students.map( s => s.id);
let bigger = students.filter(x => x.id > 40);
let biggest = students.find(x => x.id > 40);

console.log(biggest);