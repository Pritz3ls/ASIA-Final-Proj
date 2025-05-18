// Charts Script
// BarChart
fetch('http://localhost:3000/api/studentsgrades/distribution')
.then(res => res.json())
.then(data => {
  const labels = data.map(item => item.grade_range);
  const counts = data.map(item => item.count);
  
  new Chart(document.getElementById('barchart'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Number of Students',
        data: counts,
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Student Count'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Grade Ranges'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Grade Distribution of Students'
        }
      }
    }
  });
}).catch(err => console.error('Failed loading chart data:', err));

// RadarChart
fetch('http://localhost:3000/api/course/total/avg')
.then(res => res.json())
.then(data => {
  // Let's say your data looks like this:
  // [{ course_name: 'CS', subject_name: 'Math', avg_grade: 89.5 }, {...}]

  // Extract unique labels - subjects
  const labels = [...new Set(data.map(item => item.subject_name))];

  // Extract unique courses for datasets
  const courses = [...new Set(data.map(item => item.course_name))];

  // Create datasets - one per course
  const datasets = courses.map(course => {
    // Random color helper function
    const randomColor = () => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return `rgba(${r},${g},${b},0.5)`;
    };

    // Build data array: avg grade per subject for this course
    const dataPoints = labels.map(subject => {
      const record = data.find(d => d.course_name === course && d.subject_name === subject);
      return record ? record.avg_grade : 0;
    });

    const color = randomColor();

    return {
      label: course,
      data: dataPoints,
      fill: true,
      backgroundColor: color,
      borderColor: color.replace('0.5', '1'),
      pointBackgroundColor: color.replace('0.5', '1'),
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: color.replace('0.5', '1')
    };
  });

  // Create the radar chart
  new Chart(document.getElementById("radarchart"), {
    type: 'radar',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Average Grades per Course Across Subjects'
        }
      },
      scales: {
        r: {
          suggestedMin: 75,
          suggestedMax: 100,
          ticks: {
            stepSize: 5
          }
        }
      }
    }
  });
})
.catch(err => console.error('Failed loading chart data:', err));

// Dough Chart
fetch('http://localhost:3000/api/studentsgrades/avg/subject')
.then(res => res.json())
.then(data => {
  const data_subject_names = data.map(item => item.subject_name);
  const data_subject_codes = data.map(item => item.course_total_students);
  const data_average_grades = data.map(item => item.average_grade_subject);

  new Chart(document.getElementById("doughchart"), {
    type: 'doughnut',
    data: {
      labels: data_subject_names,
      datasets: [
        {
          label: 'Average Grade',
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: data_average_grades
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Average Grade per Subject'
      }
    }
  });
}).catch(err => console.error('Failed loading chart data:', err));

// Pie Chart
fetch('http://localhost:3000/api/course/total/students')
.then(res => res.json())
.then(data => {
  const data_labels = data.map(item => item.course_name);
  const data_count = data.map(item => item.course_total_students);

  new Chart(document.getElementById("piechart"), {
    type: 'pie',
    data: {
      labels: data_labels,
      datasets: [{
        label: "Enrolled Students",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: data_count
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  });
}).catch(err => console.error('Failed loading chart data:', err));