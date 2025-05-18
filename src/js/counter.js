const meter_total_students = document.getElementById('meter_total_students');

const meter_overall_avg = document.getElementById('meter_overall_avg');

const meter_total_students_passed = document.getElementById('meter_total_students_passed');
const sub_passing_percentage = document.getElementById('sub_passing_percentage');

fetch('http://localhost:3000/api/students/count')
    .then(res => res.json())
    .then(data => {
    const count = data.map(item => item.total);
    meter_total_students.innerHTML = count;
});

fetch('http://localhost:3000/api/studentsGrades/count/passed')
    .then(res => res.json())
    .then(data => {
    const count = data.map(item => item.total);
    meter_total_students_passed.innerHTML = count;
});

fetch('http://localhost:3000/api/studentsGrades/avg/overall')
    .then(res => res.json())
    .then(data => {
    const count = data.map(item => item.overall_grade_average);
    meter_overall_avg.innerHTML = count;
});

// fetch('http://localhost:3000/api/studentsGrades/percentage')
//     .then(res => res.json())
//     .then(data => {
//     const count = data.map(item => item.percentage);
//     sub_passing_percentage.innerHTML = count + '% Passing Rate';
// });