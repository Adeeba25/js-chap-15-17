// CHAP 14 to 16//

// Q1//

// let students=[];

// Q2//

// let studentNames = new [];
// console.log(students);

// Q3//

// let students=["A","B","C","D"];
// console.table(students);

// Q4//

// let num=[5,10,15,20];
// console.table(num);

// Q5//

// let num=["true"];
// console.log(num);

// Q6//

// let mixedElements=[2,3,4,5,"two","three","four","false"];
// console.table(mixedElements);

// Q7//


// let quali = ["SSC", "HCS", "MSC", "PHD","BS","BCOM"];

// document.write("<table>");
// document.write("<tr><th>Qualifications</th></tr>");

// for (let i = 0; i < quali.length; i++) {
//   document.write("<tr>");
//   document.write("<td>" + (i + 1) + "</td>");
//   document.write("<td>" + quali[i] + "</td>");
//   document.write("</tr>");
// }

// document.write("</table>");

// Q8//

// let studentNames = ["Ammara", "Rida", "Areesha"];
// let scores = [400, 350, 450];
// let totalMarks = 500;
// let percentages = [];
// for (let i = 0; i < scores.length; i++) {
//   let percentage = (scores[i] / totalMarks) * 100;
//   percentages.push(percentage);
// }
// for (let i = 0; i < studentNames.length; i++) {
//   console.log("Student: " + studentNames[i]);
//   console.log("Score: " + scores[i]);
//   console.log("Percentage: " + percentages[i] + "%");
//   console.log("----------------------");
// }

// Q9//

// Q10//

// let scores = [320, 230, 480, 120];
// scores.sort(function(a, b) {
//   return a - b;
// });

// console.log("Student scores in ascending order: " + scores);

// Q11//

// let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
// let selectedCities = [];
// selectedCities = cities.slice(2,4);
// console.log("Selected cities: " + selectedCities);

// Q12//

// var arr = ["This", "is", "my", "cat"];
// var result = arr.join(" ");
// console.log("Result: " + result);

// Q13//

// var Array = [];
// function startqueue(value) {
//   Array.push(value);
// }
// function endqueue() {
//   return Array.shift();
// }

// startqueue("Keyboard");
// startqueue("Mouse");
// startqueue("Printer");
// startqueue("Monitor");

// console.log(Array); 

// var firstValue = endqueue();
// console.log(firstValue); 

// console.log(Array);

// Q14//

// var lifoArray = [];
// function push(value) {
//   lifoArray.push(value);
// }
// function pop() {
//   return lifoArray.pop();
// }

// push("Karachi");
// push("Islamabad");
// push("Lahore");

// console.log(lifoArray); 

// var lastValue = pop();
// console.log(lastValue); 

// console.log(lifoArray); 

// Q15//

// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// let dropdownMenu = "<select>";
// for (var i = 0; i < phoneManufacturers.length; i++) {
//   dropdownMenu += "<option>" + phoneManufacturers[i] + "</option>";
// }
// dropdownMenu += "</select>";
// document.write(dropdownMenu);










