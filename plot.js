//this is the file for plotting the function... this will take a function and should plot it


// library uses Chart.js
const timePlot = () => {
  var scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{
              label: 'Scatter Dataset',
              data: [{
                  x: -10,
                  y: 0
              }, {
                  x: 0,
                  y: 10
              }, {
                  x: 10,
                  y: 5
              }]
          }]
      },
      options: {
          scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom'
              }]
          }
      }
  });
}

// function that takes data and builds it into an object
// takes in week as a date string with momentjs and will query the data for that
const dataBuilder = (week) => {

}
