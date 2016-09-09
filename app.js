document.getElementById("myBtn").addEventListener("click", function(){
  computeTestAvg();
});

function computeTestAvg(){
  // Get the three test scores.
  var test1 = parseInt(document.getElementById('test1').value);
  var test2 = parseInt(document.getElementById('test2').value);
  var test3 = parseInt(document.getElementById('test3').value);

  // Calculate the average test score.
  var average = (test1 + test2 + test3) / 3;

  // Display the average test score, with
  // the output rounded to 1 decimal point.
  document.getElementById('outTestAvg').innerHTML = "Average Test Score: " + average.toFixed(1);
}
