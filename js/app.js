

//dates data
var jccSchedule = [
  { date:"June 16th",
    opponent: "JCC vs. Sports Mall",
    location:"Home"
  },
  {
    date:"June 23rd",
    opponent:"JCC vs.Life Centre",
    location: "Home"
  },
  {
    date:"June 30th",
    opponent:"JCC vs. Life Time Fitness",
    location: "Away"
  },
  {
    date:"July 9th",
    opponent:"Relay Meet",
    location: "Life Time Fitness"
  },
  {
    date:"July 14th",
    opponent:"JCC vs. SportsMall",
    location: "Away"
  },
  {
    date:"July 21st",
    opponent:"JCC vs. Life Centre",
    location: "Away"
  },
  {
    date:"July 28th",
    opponent:"JCC vs. Life Time Fitness",
    location: "Home"
  },
  {
    date:"Aug 6th",
    opponent:"Championship Meet",
    location: "South Davis Rec"
  },
  {
    date:"Aug 7th",
    opponent:"Championship Meet",
    location: "South Davis Rec"
  }
];
var lcacSchedule = [
  { date:"June 16th",
    opponent: "Life Centre vs. Life Time Fitness",
    location:"Home"
  },
  {
    date:"June 23rd",
    opponent:"Life Centre vs. JCC",
    location: "Away"
  },
  {
    date:"June 30th",
    opponent:"Life Centre vs. Sports Mall",
    location: "Home"
  },
  {
    date:"July 9th",
    opponent:"Relay Meet",
    location: "Life Time Fitness"
  },
  {
    date:"July 14th",
    opponent:"Life Centre vs. Life Time Fitness",
    location: "Away"
  },
  {
    date:"July 21st",
    opponent:"Life Centre vs. JCC",
    location: "Away"
  },
  {
    date:"July 28th",
    opponent:"Life Centre vs. Sports Mall",
    location: "Away"
  },
  {
    date:"Aug 6th",
    opponent:"Championship Meet",
    location: "South Davis Rec"
  },
  {
    date:"Aug 7th",
    opponent:"Championship Meet",
    location: "South Davis Rec"
  }
];

var ltSchedule = [
  { date:"June 16th",
    opponent: "Life Time Fitness vs. Life Centre",
    location:"Away"
  },
  {
    date:"June 23rd",
    opponent:"Life Time Fitness vs. Sports Mall",
    location: "Home"
  },
  {
    date:"June 30th",
    opponent:"Life Time Fitness vs. JCC",
    location: "Home"
  },
  {
    date:"July 9th",
    opponent:"Relay Meet",
    location: "Life Time Fitness"
  },
  {
    date:"July 14th",
    opponent:"Life Time Fitness vs. Life Centre ",
    location: "Home"
  },
  {
    date:"July 21st",
    opponent:"Life Time Fitness vs. Sports Mall",
    location: "Away"
  },
  {
    date:"July 28th",
    opponent:"Life Time Fitness vs. JCC",
    location: "Away"
  },
  {
    date:"Aug 6th",
    opponent:"Championship Meet",
    location: "South Davis Rec"
  },
  {
    date:"Aug 7th",
    opponent:"Championship Meet",
    location: "South Davis Rec"
  }

];
var smSchedule = [
  { date:"June 16th",
    opponent: "Sports Mall vs. JCC",
    location:"Away"
  },
  {
    date:"June 23rd",
    opponent:"Sports Mall vs. Life Time Fitness",
    location: "Away"
  },
  {
    date:"June 30th",
    opponent:"Sports Mall vs. Life Centre",
    location: "Away"
  },
  {
    date:"July 9th",
    opponent:"Relay Meet",
    location: "Life Time Fitness"
  },
  {
    date:"July 14th",
    opponent:"Sports Mall vs. JCC",
    location: "Away"
  },
  {
    date:"July 21st",
    opponent:"Sports Mall vs. Life Time Fitness",
    location: "Home"
  },
  {
    date:"July 28th",
    opponent:"Sports Mall vs. Life Centre",
    location: "Home"
  },
  {
    date:"Aug 6th",
    opponent:"Championship Meet",
    location: "South Davis Rec"
  },
  {
    date:"Aug 7th",
    opponent:"Championship Meet",
    location: "South Davis Rec"
  }
];

//config for twitter fetching
var config1 = {
  "id": '601122400374169600',
  "domId": 'tweet',
  "maxTweets": 4,
  "enableLinks": true,
  "showUser": false,
};

var photos = [
  "img/South Davis 1.jpg",
  "img/South Davis 2.jpg",
  "img/South Davis 3.jpg"
];

var teams = ["jcc", "lcac", "lt","sm"];
var jccSlots=[];
var lcacSlots=[];
var ltSlots=[];
var smSlots=[];
var scheduleButtons = document.getElementsByClassName('scheduleButton');
var dateSectionContainer = document.getElementById('dateSlotsContainer');

var faqButtons = document.getElementsByClassName('question');
var menuButton = document.getElementsByClassName("menuButton");

var menuSelections = document.getElementsByClassName("menuSelections");
var cover = document.getElementsByClassName("cover");

var menuSelection = document.getElementsByClassName("menuSelection");
var photoSlider = document.getElementById('photoSlider');

//CREATE ELEMENTS WITH OBJECT INFO and store in array

function createSlots(input,output,aclass) {
    for(var i = 0 ; i < input.length; i++) {
      var slot= document.createElement('div');
      slot.classList.add('grid-container','dateSlot', aclass);
      slot.innerHTML = "<div class='grid-3'><h4>"+input[i]["date"]+"</h4></div><div class='grid-9'><h5>"+input[i]["opponent"]+"</h5><h6>"+input[i]["location"]+"</h6</div>";

      output.push(slot);

    }

}

function newDateSection (slotsArray) {
  var newDateSection = document.createElement('div');
  newDateSection.setAttribute("id","dateslots")
  for(var i = 0; i < slotsArray.length;i++) {
    newDateSection.appendChild(slotsArray[i]);

  }
  dateSectionContainer.appendChild(newDateSection);
};


//remove current dates div
function removeSlotsDiv (elementId) {
  var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);


    }

//append elements to the DOM if button pressed
  //capture event on button
  function addClick (button,task) {
    for(var i =0; i<button.length;i++) {
      button[i].onclick= task;
    }
  }

  //insert new content
  function appendSlots (slotCat) {

    if(this.classList.contains("jcc")) {
      removeSlotsDiv("dateslots");
      newDateSection(jccSlots);

    } else if (this.classList.contains("lcac")){
      removeSlotsDiv("dateslots");
      newDateSection(lcacSlots);



    }else if (this.classList.contains("lt")){
      removeSlotsDiv("dateslots");
      newDateSection(ltSlots);



    }else if (this.classList.contains("sm")){
      removeSlotsDiv("dateslots");
      newDateSection(smSlots);


    }
  }

function displayAnswers () {
  this.children[1].classList.toggle("visible");
}




function toggleMenu (){
  menuButton[0].classList.toggle("menuActive");
  menuSelections[0].classList.toggle("menuSelectionsHidden");
  cover[0].classList.toggle("coverActive");

}

var i = 0;
function photoSliderFunction () {

  photoSlider.setAttribute('src', photos[i]);

  if(i<photos.length-1){
    i++;
  } else {i =0;}

  setTimeout(photoSliderFunction,3000);
}




createSlots(jccSchedule,jccSlots,"jcc");
createSlots(lcacSchedule,lcacSlots,"lcac");
createSlots(ltSchedule,ltSlots,"lt");
createSlots(smSchedule,smSlots,"sm");


addClick(scheduleButtons,appendSlots);
addClick(faqButtons,displayAnswers);
addClick(menuButton,toggleMenu);
addClick(menuSelection, toggleMenu);

//pull tweets in
twitterFetcher.fetch(config1);

//photoSlider

photoSliderFunction ();
