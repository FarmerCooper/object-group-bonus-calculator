let employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?
let newEmployeeGraphic = [], newCompensation = {}; let object= {}
// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
// for (let i=0; i<array.length; i++){
function gatherNames(array){
  for (let i=0; i<array.length; i++) 
  newEmployeeGraphic.push(array[i].name)
return newEmployeeGraphic;
}

function percentageInputs(array){
  let bonusPercentage
  for (let i=0; i<array.length; i++)
   if (array.reviewRating <= 2) {bonusPercentageInput = 'No bonus percentage'};
   if (object.reviewRating === 3) {bonusPercentageInput = '4%'}
   if (object.reviewRating === 4) {bonusPercentageInput = '6%'}
   if (object.reviewRating === 5) {bonusPercentageInput = '10%'}
}
function percentageInputs(array) {
  for (let i=0; i<array.length; i++) 
  newEmployeeGraphic.push(array[i].name)
return newEmployeeGraphic;
}

// function calculations(array) {
//   let newCompensation = {
//     name:
//     // bonusPercentage: bonusPercentageInput,
//     // totalCompensation: totalCompensation,
//     // totalBonus: totalBonusInput
//   }
//   for (let i=0; i<array.length; i++){
//     if (object.reviewRating <= 2) {bonusPercentageInput = 'No bonus percentage'} {
//     newCompensation.push(array[i].nameInput)
//   }
// }
// }



console.log(gatherNames(employees));
