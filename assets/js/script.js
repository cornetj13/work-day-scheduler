/*        GLOBAL VARIABLES        */
//
// Document Selectors
var currentDayElement = $('#currentDay');
var nineAMButton = $('#button-9am');
var nineAMEvent = $('#event-9am');
var tenAMButton = $('#button-10am');
var tenAMEvent = $('#event-10am');
var elevenAMButton = $('#button-11am');
var elevenAMEvent = $('#event-11am');
var twelevePMButton = $('#button-12pm');
var twelevePMEvent = $('#event-12pm');
var onePMButton = $('#button-1pm');
var onePMEvent = $('#event-1pm');
var twoPMButton = $('#button-2pm');
var twoPMEvent = $('#event-2pm');
var threePMButton = $('#button-3pm');
var threePMEvent = $('#event-3pm');
var fourPMButton = $('#button-4pm');
var fourPMEvent = $('#event-4pm');
var fivePMButton = $('#button-5pm');
var fivePMEvent = $('#event-5pm');

// Information Variables
var workEvents = {
  nineAM: "",
  tenAM: "",
  elevenAM: "",
  twelevePM: "",
  onePM: "",
  twoPM: "",
  threePM: "",
  fourPM: "",
  fivePM: "",
};
var eventSelectorArray = [
  nineAMEvent, tenAMEvent, elevenAMEvent, twelevePMEvent, onePMEvent, twoPMEvent, threePMEvent, fourPMEvent, fivePMEvent
];

/*        FUNCTIONS        */
//
// Set Date Function - a function to set the current date at the top of the scheduler.
function getDate() {
  var date = moment().format("dddd, MMMM Do");
  currentDayElement.text(date);
}

// Color Code Function - a function for setting the background color of the event to the appropriate color depending on the time of the day.
function colorCode() {
  var dateFormat = 'HH'
  var now = moment().format(dateFormat);
  nowInt = Number(now);
  for(let i = 0; eventSelectorArray.length; i++) {
    if((i + 9) < nowInt) {
      eventSelectorArray[i].addClass("past");
    } else if((i + 9) === nowInt) {
      eventSelectorArray[i].addClass("present");
    } else {
      eventSelectorArray[i].addClass("future");
    }
  }
}

// Save Events Functions - a series of functions for saving an event when the save button is clicked.
function handleButtonClickNineAM() {
  var nineAMeventText = nineAMEvent.val();
  workEvents.nineAM = nineAMeventText;
  var eventsToStore = JSON.stringify(workEvents);
  localStorage.setItem("workEvents", eventsToStore);
}
function handleButtonClickTenAM() {
  var tenAMeventText = tenAMEvent.val();
  workEvents.tenAM = tenAMeventText;
  var eventsToStore = JSON.stringify(workEvents);
  localStorage.setItem("workEvents", eventsToStore);
}
function handleButtonClickElevenAM() {
  var elevenAMeventText = elevenAMEvent.val();
  workEvents.elevenAM = elevenAMeventText;
  var eventsToStore = JSON.stringify(workEvents);
  localStorage.setItem("workEvents", eventsToStore);
}
function handleButtonClickTwelevePM() {
  var twelevePMeventText = twelevePMEvent.val();
  workEvents.twelevePM = twelevePMeventText;
  var eventsToStore = JSON.stringify(workEvents);
  localStorage.setItem("workEvents", eventsToStore);
}
function handleButtonClickOnePM() {
  var onePMeventText = onePMEvent.val();
  workEvents.onePM = onePMeventText;
  var eventsToStore = JSON.stringify(workEvents);
  localStorage.setItem("workEvents", eventsToStore);
}
function handleButtonClickTwoPM() {
  var twoPMeventText = twoPMEvent.val();
  workEvents.twoPM = twoPMeventText;
  var eventsToStore = JSON.stringify(workEvents);
  localStorage.setItem("workEvents", eventsToStore);
}
function handleButtonClickThreePM() {
  var threePMeventText = threePMEvent.val();
  workEvents.threePM = threePMeventText;
  var eventsToStore = JSON.stringify(workEvents);
  localStorage.setItem("workEvents", eventsToStore);
}
function handleButtonClickFourPM() {
  var fourPMeventText = fourPMEvent.val();
  workEvents.fourPM = fourPMeventText;
  var eventsToStore = JSON.stringify(workEvents);
  localStorage.setItem("workEvents", eventsToStore);
}
function handleButtonClickFivePM() {
  var fivePMeventText = fivePMEvent.val();
  workEvents.fivePM = fivePMeventText;
  var eventsToStore = JSON.stringify(workEvents);
  localStorage.setItem("workEvents", eventsToStore);
}

// Retrieve Events Function - a function for retrieving events previously saved to local storage on page load/refresh.
function populateEvents() {
  var storedEvents = JSON.parse(localStorage.getItem("workEvents"));
  if(storedEvents !== null) {
    workEvents = storedEvents;
  }
  nineAMEvent.text(workEvents.nineAM);
  tenAMEvent.text(workEvents.tenAM);
  elevenAMEvent.text(workEvents.elevenAM);
  twelevePMEvent.text(workEvents.twelevePM);
  onePMEvent.text(workEvents.onePM);
  twoPMEvent.text(workEvents.twoPM);
  threePMEvent.text(workEvents.threePM);
  fourPMEvent.text(workEvents.fourPM);
  fivePMEvent.text(workEvents.fivePM);
}

/*        MAIN CODE        */
//
// Set date on page load.
getDate();
populateEvents();
colorCode();

// Evenet handlers on button click.
nineAMButton.on("click", handleButtonClickNineAM);
tenAMButton.on("click", handleButtonClickTenAM);
elevenAMButton.on("click", handleButtonClickElevenAM);
twelevePMButton.on("click", handleButtonClickTwelevePM);
onePMButton.on("click", handleButtonClickOnePM);
twoPMButton.on("click", handleButtonClickTwoPM);
threePMButton.on("click", handleButtonClickThreePM);
fourPMButton.on("click", handleButtonClickFourPM);
fivePMButton.on("click", handleButtonClickFivePM);