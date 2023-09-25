// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var rootE1 = $('#root');

var textArea = $('#textHere');
console.log('hello')
var timeSheet = [
  { time: "9 AM", 
      event: "" },
  { time: "10 AM", 
      event: "" },
  { time: "11 AM", 
      event: "" },
  { time: "12 PM", 
      event: "" },
  { time: "1 PM", 
      event: "" },
  { time: "2 PM", 
      event: "" },
  { time: "3 PM", 
      event: "" },
  { time: "4 PM", 
      event: "" },
  { time: "5 PM", 
      event: "" },
];


$(document).ready(function () {
  // code goes here
  $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //var saveButton = $('#saveBtn');
 
  $('.saveBtn').on('click', function() {
   var hour = $(this).parent().attr("id");
   console.log(hour)
   var entry = $(this).siblings('textarea').val();
   localStorage.setItem(hour, entry);
   console.log(entry);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  console.log('hello');
  var now = dayjs();
var currentHour = now.hour();
console.log(currentHour)
  for (var i=9; i <= 17; i++) {
    var hour = i;
    if((hour < currentHour)) {
      $('#hour-' + i).addClass('past')
    } else if ((hour > currentHour)) {
      $('#hour-' + i).addClass('future')
    } else {
      $('#hour-' + i).addClass('present')
    }
  };
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  var savedTasks = JSON.parse(localStorage.getItem("workDay"));
  for (var i = 9; i <= 17; i++) {
    $('#hour-' + i).children('textarea').val(localStorage.getItem('hour-' + i));
  }
  
if (savedTasks) {
  timeSheet = savedTasks;
}
  // TODO: Add code to display the current date in the header of the page.
  
  var timeHeader = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(timeHeader);
});
});