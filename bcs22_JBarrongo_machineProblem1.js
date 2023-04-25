// ITCS227 Source Code Template for 21 AY 2022-2023
/*
	Program: Computtation of Grades using Function
	Programmer: Joshua Victor Barrongo
	Section: BCS22
	Start Date: April 17, 2023
	End Date: April 25,2023
*/

/*
const data = 
[
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Mary', age: 25, city: 'Los Angeles' },
  { name: 'Bob', age: 40, city: 'Chicago' },
  { name: 'Jane', age: 35, city: 'Houston' },
  { name: 'Jane', age: 35, city: 'Houston' }
];

console.log(data);
*/

// =====================================================================================
let stud1 = prompt(`Enter the name of the 1st student: `);

function stud1ea()
{
  let sum = 0;
  for (let i = 0; i < 5; i++)
  {
    let num = parseFloat(prompt(`Enter enabling assessment ${i+1}:`));
    sum += num;
  }
  let average = sum / 5;
  return average;
}

let stud1ear = stud1ea();
// console.log(`The average is: ${stud1ear}`);

function stud1sa()
{
  let sum = 0;
  for (let i = 0; i < 3; i++)
  {
    let num = parseFloat(prompt(`Enter summative assessment ${i+1}:`));
    sum += num;
  }
  let average = sum / 3;
  return average;
}

let stud1sar = stud1sa();
// console.log(`The average is: ${stud1sar}`);

let stud1eg = prompt(`Enter major exam grade: `);

let stud1gs = (stud1ear * 0.3) + (stud1sar * 0.3) + (stud1eg * 0.4);
console.log(stud1gs);

function stud1lg()
{
	let lettergrade1;
	if (stud1gs >= 90)
	{
		lettergrade1 = 'A';
	} else if (stud1gs <= 89 && stud1gs >= 80)
	{
		lettergrade1 = 'B';
	} else if (stud1gs <= 79 && stud1gs >= 70)
	{
		lettergrade1 = 'C';
	} else if (stud1gs <= 69 && stud1gs >= 60)
	{
		lettergrade1 = 'D';
	} else if (stud1gs < 60)
	{
		lettergrade1 = 'F';
	}

	return lettergrade1;
}
let lettergrade1 = stud1lg();

// =====================================================================================
let stud2 = prompt(`Enter the name of the 2nd student: `);

function stud2ea()
{
  let sum = 0;
  for (let i = 0; i < 5; i++)
  {
    let num = parseFloat(prompt(`Enter enabling assessment ${i+1}:`));
    sum += num;
  }
  let average = sum / 5;
  return average;
}

let stud2ear = stud2ea();
// console.log(`The average is: ${stud1ear}`);

function stud2sa()
{
  let sum = 0;
  for (let i = 0; i < 3; i++)
  {
    let num = parseFloat(prompt(`Enter summative assessment ${i+1}:`));
    sum += num;
  }
  let average = sum / 3;
  return average;
}

let stud2sar = stud2sa();
// console.log(`The average is: ${stud1sar}`);

let stud2eg = prompt(`Enter major exam grade: `);

let stud2gs = (stud1ear * 0.3) + (stud1sar * 0.3) + (stud1eg * 0.4);
console.log(stud2gs);

function stud2lg()
{
	let lettergrade2;
	if (stud2gs >= 90)
	{
		lettergrade2 = 'A';
	} else if (stud2gs <= 89 && stud2gs >= 80)
	{
		lettergrade2 = 'B';
	} else if (stud2gs <= 79 && stud2gs >= 70)
	{
		lettergrade2 = 'C';
	} else if (stud2gs <= 69 && stud2gs >= 60)
	{
		lettergrade2 = 'D';
	} else if (stud2gs < 60)
	{
		lettergrade = 'F';
	}

	return lettergrade2;
}
let lettergrade2 = stud2lg();

// =====================================================================================
let stud3 = prompt(`Enter the name of the 3rd student: `);

function stud3ea()
{
  let sum = 0;
  for (let i = 0; i < 5; i++)
  {
    let num = parseFloat(prompt(`Enter enabling assessment ${i+1}:`));
    sum += num;
  }
  let average = sum / 5;
  return average;
}

let stud3ear = stud3ea();
// console.log(`The average is: ${stud1ear}`);

function stud3sa()
{
  let sum = 0;
  for (let i = 0; i < 3; i++)
  {
    let num = parseFloat(prompt(`Enter summative assessment ${i+1}:`));
    sum += num;
  }
  let average = sum / 3;
  return average;
}

let stud3sar = stud3sa();
// console.log(`The average is: ${stud1sar}`);

let stud3eg = prompt(`Enter major exam grade: `);

let stud3gs = (stud1ear * 0.3) + (stud1sar * 0.3) + (stud1eg * 0.4);
console.log(stud3gs);

function stud3lg()
{
	let lettergrade3;
	if (stud3gs >= 90)
	{
		lettergrade2 = 'A';
	} else if (stud3gs <= 89 && stud3gs >= 80)
	{
		lettergrade2 = 'B';
	} else if (stud3gs <= 79 && stud3gs >= 70)
	{
		lettergrade2 = 'C';
	} else if (stud3gs <= 69 && stud3gs >= 60)
	{
		lettergrade2 = 'D';
	} else if (stud3gs < 60)
	{
		lettergrade3 = 'F';
	}

	return lettergrade3;
}
let lettergrade3 = stud3lg();

// =====================================================================================
let stud4 = prompt(`Enter the name of the 4th student: `);

function stud4ea()
{
  let sum = 0;
  for (let i = 0; i < 5; i++)
  {
    let num = parseFloat(prompt(`Enter enabling assessment ${i+1}:`));
    sum += num;
  }
  let average = sum / 5;
  return average;
}

let stud4ear = stud4ea();
// console.log(`The average is: ${stud1ear}`);

function stud4sa()
{
  let sum = 0;
  for (let i = 0; i < 3; i++)
  {
    let num = parseFloat(prompt(`Enter summative assessment ${i+1}:`));
    sum += num;
  }
  let average = sum / 3;
  return average;
}

let stud4sar = stud4sa();
// console.log(`The average is: ${stud1sar}`);

let stud4eg = prompt(`Enter major exam grade: `);

let stud4gs = (stud1ear * 0.3) + (stud1sar * 0.3) + (stud1eg * 0.4);
console.log(stud3gs);

function stud4lg()
{
	let lettergrade4;
	if (stud4gs >= 90)
	{
		lettergrade2 = 'A';
	} else if (stud4gs <= 89 && stud4gs >= 80)
	{
		lettergrade2 = 'B';
	} else if (stud4gs <= 79 && stud4gs >= 70)
	{
		lettergrade2 = 'C';
	} else if (stud4gs <= 69 && stud4gs >= 60)
	{
		lettergrade2 = 'D';
	} else if (stud4gs < 60)
	{
		lettergrade4 = 'F';
	}

	return lettergrade4;
}
let lettergrade4 = stud4lg();

// =====================================================================================
let stud5 = prompt(`Enter the name of the 5th student: `);

function stud5ea()
{
  let sum = 0;
  for (let i = 0; i < 5; i++)
  {
    let num = parseFloat(prompt(`Enter enabling assessment ${i+1}:`));
    sum += num;
  }
  let average = sum / 5;
  return average;
}

let stud5ear = stud5ea();
// console.log(`The average is: ${stud1ear}`);

function stud5sa()
{
  let sum = 0;
  for (let i = 0; i < 3; i++)
  {
    let num = parseFloat(prompt(`Enter summative assessment ${i+1}:`));
    sum += num;
  }
  let average = sum / 3;
  return average;
}

let stud5sar = stud5sa();
// console.log(`The average is: ${stud1sar}`);

let stud5eg = prompt(`Enter major exam grade: `);

let stud5gs = (stud1ear * 0.3) + (stud1sar * 0.3) + (stud1eg * 0.4);
console.log(stud3gs);

function stud5lg()
{
	let lettergrade5;
	if (stud5gs >= 90)
	{
		lettergrade2 = 'A';
	} else if (stud5gs <= 89 && stud5gs >= 80)
	{
		lettergrade2 = 'B';
	} else if (stud5gs <= 79 && stud5gs >= 70)
	{
		lettergrade2 = 'C';
	} else if (stud5gs <= 69 && stud5gs >= 60)
	{
		lettergrade2 = 'D';
	} else if (stud5gs < 60)
	{
		lettergrade5 = 'F';
	}

	return lettergrade5;
}
let lettergrade5 = stud4lg();

function Table(cp1, sa1, cp2, sa2, cp3, sa3, cp4, sa4, cp5, sa5)
{
  const data = [
    { Name_of_Student: stud1, Class_Participation: cp1, Summative_Assessment: sa1, Exam_Grade: stud1eg, Grade_Score: stud1gs, Letter_Grade: lettergrade1},
    { Name_of_Student: stud2, Class_Participation: cp2, Summative_Assessment: sa2, Exam_Grade: stud2eg, Grade_Score: stud2gs, Letter_Grade: lettergrade2},
    { Name_of_Student: stud3, Class_Participation: cp3, Summative_Assessment: sa3, Exam_Grade: stud3eg, Grade_Score: stud3gs, Letter_Grade: lettergrade3},
    { Name_of_Student: stud4, Class_Participation: cp4, Summative_Assessment: sa4, Exam_Grade: stud4eg, Grade_Score: stud4gs, Letter_Grade: lettergrade4},
    { Name_of_Student: stud5, Class_Participation: cp5, Summative_Assessment: sa5, Exam_Grade: stud5eg, Grade_Score: stud5gs, Letter_Grade: lettergrade5},
  ];

  console.table(data);
}

Table(stud1ear, stud1sar, stud2ear, stud2sar, stud3ear, stud3sar, stud4ear, stud4sar, stud5ear, stud5sar, );