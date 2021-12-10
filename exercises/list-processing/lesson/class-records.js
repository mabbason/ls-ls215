"use strict";
const GRADING_WEIGHT_PCNT = {
  exams: 0.65,
  exercises: 0.35
};

const LETTER_GRADES = {
  A: 93,
  B: 85,
  C: 77,
  D: 69,
  E: 60
};

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  return {
    studentGrades: getStudentGrades(scores),
    exams: getExamsInfo(scores)
  }
}

function getStudentGrades(scores) {
  return Object.keys(scores).map(student => {
    let [ examAvg, exercises ] = getScoresExamsExercises(scores[student]);
    let gradePercent = Math.round((examAvg * GRADING_WEIGHT_PCNT.exams) + 
                                  (exercises * GRADING_WEIGHT_PCNT.exercises)); 
    return `${gradePercent} (${getLetterGrade(gradePercent)})`
  });
}

function getScoresExamsExercises(student) {
  let examAvg = Math.round(arrayAvg(student.scores.exams));
  let exercisesSum = student.scores.exercises.reduce((sum, curr) => sum + curr); 
  return [ examAvg, exercisesSum ];
}

function getLetterGrade(gradePercent) {
  for (let grade in LETTER_GRADES) {
    if (gradePercent >= LETTER_GRADES[grade]) return grade;
  }
  return 'F';
}

function getExamsInfo(allScores) {
  let exams = Object.keys(allScores).reduce((exams, currStudent) => {
    allScores[currStudent].scores.exams.forEach((examScore, i) => {
      if (!exams[i]) {
        exams.push([examScore]);
      } else {
        exams[i].push(examScore);
      }
    });
    return exams;
  }, []);
  
  return exams.map(scores => {
    return {
      average: arrayAvg(scores),
      minimum: Math.min(...scores),
      maximum: Math.max(...scores)
    }
  })
}

function arrayAvg(arr) {
  let sum = arr.reduce((sum, curr) => sum + curr);
  return sum / arr.length;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }