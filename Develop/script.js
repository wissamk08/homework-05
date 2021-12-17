var headDate = moment().format('ddd MMM Do, YYYY');
$('#currentDay').text(headDate)
$(document).ready(function () {
    


$(".saveBtn").on("click", function () {
        
        
var text = $(this).siblings(".plan").val();
var time = $(this).parent().attr("id");

        
        
 localStorage.setItem(time, text);
 console.log(time)
    })
   
 function timeTracker() {
       
        
var timeNow = moment().hour();

       
        
$(".time-block").each(function () {
var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            
            
if (blockTime < timeNow) {
 $(this).removeClass("future");
$(this).removeClass("present");
$(this).addClass("past");
            }
else if (blockTime === timeNow) {
$(this).removeClass("past");
$(this).removeClass("future");
$(this).addClass("present");
            }
 else {
 $(this).removeClass("present");
 $(this).removeClass("past");
$(this).addClass("future");
}})
}

    
    $("#8am .plan").val(localStorage.getItem("8am"));

    $("#9am .plan").val(localStorage.getItem("9am"));

    $("#10am .plan").val(localStorage.getItem("10am"));

    $("#11am .plan").val(localStorage.getItem("11am"));

    $("#12pm .plan").val(localStorage.getItem("12pm"));

    $("#1pm .plan").val(localStorage.getItem("1pm"));

    $("#2pm .plan").val(localStorage.getItem("2pm"));

    $("#3pm .plan").val(localStorage.getItem("3pm"));

    $("#4pm .plan").val(localStorage.getItem("4pm"));

    $("#5pm .plan").val(localStorage.getItem("5pm"));

    timeTracker();
})
