$(document).ready(function(){
 
 var today = moment().format("dddd, MMMM Do, YYYY");
 
 //setting the current day text with moment js
 $("#currentDay").text(today);

 var currentHr = moment().hour();

 var block1El = $("#9el");
 var block2El = $("#10el"); 
 var block3El = $("#11el");
 var block4El = $("#12el");
 var block5El = $("#1el");  
 var block6El = $("#2el");
 var block7El = $("#3el");
 var block8El = $("#4el");
 var block9El = $("#5el");
 
 var elArray = [block1El, block2El, block3El, block4El, block5El, block6El, block7El, block8El, block9El];

//  var meetingsInput = 

 //defining the function for setting classes
 function setClasses() {
   
   for (let i = 0; i < elArray.length; i++) {
     const hourEl = elArray[i];
     const hour = elArray[i].data('ref');

     if (currentHr === hour) {
       hourEl.attr("class", "present");
     }
     else if (currentHr > hour) {
       hourEl.attr("class", "past");
     }
     else if (currentHr < hour) {
       hourEl.attr("class", "future");
     }; 
   }
 };

 //defining a function to render saved schedule 
 function renderSchedule() {

 }

 //defining function to store schedule
 function storeSchedule() {
   var storedMeetings = JSON.parse(localStorage.getItem("meetings")); 
 }

 // executing set classes function
 setClasses();
 
 // setting on click function
 $(".saveBtn").on("click", function() {
   console.log(this);
   
 })

})      