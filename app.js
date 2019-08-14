/*
  DO NOT EDIT THE LINE BELOW
  -------------------------- */
const generateTable = require("./lib/tables");

/*
  YOU MAY EDIT THE LINES BELOW
  ---------------------------- */

/**
 * Write a function that converts grades into a string format
 * that shows each grade out of 100, e.g. "76/100".
 *
 * The function should return an ARRAY of strings.
 *
 * @param {Array<number>} gradesArr (Example: [0.76, 0.45])
 * @return {Array<string>} (Example: ['76/100', '45/100'])
 */
function gradeOutOfHundred(gradesArr) {
  const newArr = gradesArr.map(function(elements) {
    const timesHundered = elements * 100;
    const roundedGrades = Math.round(timesHundered);
    const gradeOutOfHundred = roundedGrades + "/100";
    return gradeOutOfHundred;
  });
  return newArr;
}
/**
 * Write a function that sorts grades from highest to lowest
 * and returns sorted grades in a string format like above,
 * e.g. "76/100".
 *
 * The function should return an ARRAY of strings.
 *
 * @param {Array<Number>} gradesArr (Example: [0.76, 0.45])
 * @return {Array<string>} (Example: ['76/100', '45/100'])
 */
function sortGrades(gradesArr) {
  const sortedArr = gradesArr.sort(function(a, b) {
    return b - a;
  });
  const newArr = sortedArr.map(function(elements) {
    const timesHundered = elements * 100;
    const roundedGrades = Math.round(timesHundered);
    const gradeOutOfHundred = roundedGrades + "/100";
    return gradeOutOfHundred;
  });
  return newArr;
}

/**
 * Write a function that returns an array of grades that are
 * higher than 0.50.
 *
 * The function should return an ARRAY of numbers.
 *
 * @param {Array<Number>} gradesArr (Example: [0.76, 0.45])
 * @return {Array<Number>} (Example: [0.76, 0.77])
 */
function showPassingGrades(gradesArr) {
  const filteredResult = gradesArr.filter((gradesArr) => gradesArr >= 0.5);
  return filteredResult;
}

/**
 * Write a function that returns the average grade.
 *
 * Calculate the average of all grades in gradesArr and return
 * a NUMBER rounded to 3 decimal places.
 *
 * @param {Array<Number>} gradesArr (Example: [0.76, 0.45])
 * @return {Number}
 */
function calculateAverage(gradesArr) {
  let sumOfNumber = 0;
  for (let x = 0; x < gradesArr.length; x++) {
    let total = sumOfNumber + gradesArr[x];
    sumOfNumber = total;
  }
  let averageGrade = sumOfNumber / gradesArr.length;
  let roundedGrades = averageGrade.toFixed(3);
  return roundedGrades;
}

/**
 * Write a function that returns the average PASSING grade.
 *
 * Calculate the average of all grades that are MORE THAN 0.50 and
 * return a NUMBER rounded to 3 decimal places.
 *
 * @param {Array<Number>} gradesArr (Example: [0.76, 0.45])
 * @return {Number}
 */
function calculateAveragePassingGrade(gradesArr) {
  let filteredArr = gradesArr.filter(function(gradesArr) {
    return gradesArr >= 0.5;
  });
  let sumOfNumber = 0;
  for (let x = 0; x < filteredArr.length; x++) {
    let total = sumOfNumber + filteredArr[x];
    sumOfNumber = total;
  }
  let averageGrade = sumOfNumber / filteredArr.length;
  let roundedGrades = averageGrade.toFixed(3);
  return roundedGrades;
}

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

/**
 * The array below shows the grades of all 10 students in
 * ACME School of Code.
 */
const classGrades = [0.76, 0.45, 0.77, 0.55, 0.52, 0.63, 0.48, 0.66, 0.44, 0.59];

generateTable("Grades (x/100) in ACME School of Code", gradeOutOfHundred(classGrades));
generateTable("Sorted Grades (x/100) in ACME School of Code", sortGrades(classGrades));
generateTable("Passing Grades (0.xx) in ACME School of Code", showPassingGrades(classGrades));
generateTable("Average Grade (0.xxx) in ACME School of Code", calculateAverage(classGrades));
generateTable(
  "Average Passing Grade (0.xxx) in ACME School of Code",
  calculateAveragePassingGrade(classGrades)
);
