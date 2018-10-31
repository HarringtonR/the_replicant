# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sep 25th| Project Description | Complete
|Sep 25th| Wireframes / Priority Matrix / Functional Components | Complete
|Sep 26th| Core Application Structure (HTML, CSS, etc.) | Complete
|Sep 27th| Pseudocode | Complete
|Sep 28th|  JS/Animations | In progress
|Sep 29th|  MVP| Partiall Complete
|Sep 30th| Bug Fixes | Complete
|Oct 1st| Present | Incomplete



# THE REPLICANT

[Game Cover](https://imgur.com/YSDM2MG "THE REPLICANT")

## Project Description

"The Replicant" is a choose your own story based game. The goal of the game is to survive and to find out what happened in our apartment and find your dog. You will receive a point for each and when you achieve both of these things you will win the game. But the path is not always clear.


## Priority Matrix

-  Have images for the files\storyboards
-  Correct Layout and basic positioning of elements with css and js 
-  With position absolute be alble to toggle between pages
-  Create a counter for keeping track of points/score as a user clicks a button
-  Map out story and text in each page
-  Add animations to each div to move the files 
-  Create event listeners to make pages hide and appear as necessary
-  Add css trainsitions and animations to pages and buttons

## MVP 

-  Make media querys
-  Create a win game alert when both stories are completed
-  Simply make my story more detailed and try to add more interactivity with css animations

## POST MVP

-  Keep a win count and scoreboard
-  Have form appear “in front” of page and use the users name within the game storyline
-  Make a intro question scene
-  Create a form to capture the player’s information


## Game Components

### Landing Page
- The landing page will just consist of a start button to begin the game. There will be audio in the background and small bits of animation on the button.

### Game Initialization
- After hitting the start button or "Begin Trip". The user will be transfered to the first scene where they will be introduce to the story and have to make their first decision.

### Playing The Game
- There will be a number of choices on each page the goal is to pick decisions that lead to the 'winning' outcome of the game. Incorrect choices will lead to a player being required to restart.

### Winning The Game
- To win the game the player needs to make the correct decisions to end up with a successful outcome. They will win the game once completing both story lines.

### Game Reset
- The game can be reset at anytime by hitting the main reset button from the beginning of the story in the apartment scene.

## Helper Functions

- Two primary helper functional components will be the page transitions and the dom manipulation through the buttons to change from one scene to the next. 

- Secondary to the game logic working will be adding in the animations and css


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Layout| H | 8hrs| 10hrs | 10hrs |
| Dynamically Adding scenes | H | 15hrs | 13hrs | x |
| Win Logic | H | 5hrs| 2hrs | 3hrs |
| Adding Animations | H | 5hrs| 2hrs | x |
| Adding Media Query| H | 5hrs|  1hr  |  x |
| Adding Intro Story pmvp | H | 5hrs | n/a | x |



## Major problems I forsee
-  Will be arranging different size images with Dom manipulation and absolute positiong. 
-  Having it setup in a visually pleasing way with each scene
-  Complicated storylines that will be hard to keep track of
-  Figuring out win logic
-  Not being able to get my transitions and css animations to work properly

## Solutions to Problems
-  Google
-  MDN
-  W3
-  Start small and work up to the bigger issues

## List of main technologies
-  Javascript for Dom manipulation
-  CSS for Animation and Transitions
-  Position absolute for arranging pages

## GitHub Link
-  https://git.generalassemb.ly/HarringtonR/project-1/blob/master/readme.md



## Code Snippet


function noteClick(event){
  noteMessage.style.opacity = '.7';
 noteMessage.style.visibility = 'visible';
}

 let submitButton = document.getElementById('buttonAlert')

function grabInput(event){
  let response = document.getElementById('response')
  let value = response.value
  console.log(value)
  switch(value){
    case 'yes': compStore();
    break;
    case 'no': noteMessage.style.display ='none';
  }
}
submitButton.addEventListener('click', grabInput)


// STREET SIDE TOGGLE

//Go back button
let audio3 = document.getElementById('audioStreet')
function playStreet(){
  audio3.play();
}

function streetToggle(){
street.classList.toggle('hide')
  apt.classList.toggle('hide')
  carNotVisible();
  audio3.pause();
  playAudio();
  playApt();
}
streetBtn.addEventListener('click', streetToggle)
N/A


## Change Log

- The points system went out, because I thought it was a requirement but ended up realizing it wasn't.
- I just used a point system to activate the win game alert after completing both parts of the game.


## Issues and Resolutions
- My number one issue was not knowing what I really wanted. A story game is a bad idea unless you have a solid story already. I kept changing stuff and had to keep reorganizing files.

- I realized that by setting up my pages with display none and toggling the hide function, I wasn't able to make page tranisitons.  From what I understand, you have to yous visibility to make a tranitions not display none.

- Having issues with trying to coordinate text and new elements with different paths to the win game function.  If there is more than one path...everything gets extreamly complicated.  So some text shows up that shouldn't if you have just won the game. Such as it still telling you to find the replicant or your dog even though you already completed that part.

