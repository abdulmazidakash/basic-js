var student = { id:121, phone:1742, name:'abir'};
var student2 = { id:122, phone:1452, name:'mahi'};

// var phoneNo = student.phone;
// var phoneNo = student['phone'];

var phonePropName = 'phone';
var phoneNo = student[phonePropName];

// update phone number 
student2.phone = 34566;
student2['phone'] = 6546;
student2[phonePropName] = 345789;

student2.cinema = 'ogni22';
student2['cinema'] = 'smart girl';

console.log(phoneNo);
console.log(student2);
