// const studentNames = {
//     student1: 'Halina',
//     student2: "Brookes",
//     student3:"Anthony"
// }


// Object.defineProperty(studentNames, "student4", {
// value: "Mirabel",
// })

// console.log(studentNames);


// const makeNonExtensive = {
//     firstname: "Charles",
//     lastname: "Chandlier"
// }

// Object.preventExtensions(makeNonExtensive)

// makeNonExtensive.designation = "Software Engineer";

// console.log(makeNonExtensive)


// const makeNonExtensive = {
//     firstName: "charles",
//     lastName: "willock"
// }

// Object.preventExtensions(makeNonExtensive)

// Object.defineProperty(makeNonExtensive, "age", {
//     value: "twenty"
// })

// console.log(makeNonExtensive)

const studentNames = {
    student1: "Temitope",
    student2: "Halima"
}

Object.seal(studentNames);

Object.defineProperty(studentNames, 'student2', {
    value: "Akinmegha"
})

console.log(studentNames)