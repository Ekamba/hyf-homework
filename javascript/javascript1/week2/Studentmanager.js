const class07Students = [];

function addStudentToClass(studentName) {
    if(studentName <= 6) {
        return "name has not been added";
    }else if(class07Students.includes(studentName)) {
        return `Student ${studentName} is already in the class`;
      }else if(studentName === "Queen") {
        return class07Students.push("Queen"); 
    }else if(class07Students > 6) {
        return "Cannot add more students to class 07";
    } else if(studentName === "") {
        return "Provide Student name";
    }else class07Students.push(studentName); 
       
}

function getNumberOfStudents (){
return class07Students.length;
}

addStudentToClass('Axel');
addStudentToClass('Leonide');
addStudentToClass('Gassay');
addStudentToClass('Ekamba');
addStudentToClass('Axel');
addStudentToClass('Irmine');
addStudentToClass('Queen');

console.log(class07Students);
console.log(getNumberOfStudents());






