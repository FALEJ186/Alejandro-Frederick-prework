const studentNames = ['Fred', 'Maria', 'Rahul'];

for (let i = 0; i <= 2; i++) {
    studentNames.push(prompt('Enter a Student Name'))
}

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i])
}