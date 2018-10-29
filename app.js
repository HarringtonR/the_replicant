//CURRENTLY FIXING WIN TITLE INSTEAD OF ALERT

//win logic
let win = 0;

function checkWin() {
  if (win === 2) {
    setTimeout(function() {
      alert('You found your dog and arrested the Criminal! You WIN!')
    }, 14000);
  } else {
    console.log('keep playing')
  }
}


//LANDING PAGE
let landing = document.getElementById('landing')
let apt = document.getElementById('apartment')
let button = document.getElementById('btn')


button.addEventListener('click', pageToggle)

let audio1 = document.getElementById('audioID')

function playAudio() {
  audio1.play();
}


let audio2 = document.getElementById('audioApt')

function playApt() {
  audio2.play();
}

function pageToggle() {
  landing.classList.toggle('hide');
  // console.log(apt.classList);
  apt.classList.toggle('hide')
  // console.log(apt.classList);
  // audio1.pause();
  playApt();
}


// LoadPage2  APARTMENT!!!!!!!!!!!!!!!
let street = document.getElementById('street')
let outsideBtn = document.getElementById('outsideBtn')
outsideBtn.addEventListener('click', aptToggle)

//LOAD STREET WIHTOUT OPTION FOR CAR
function aptToggle() {

  apt.classList.toggle('hide')
  street.classList.toggle('hide')
  audio2.pause();
  audio1.pause();
  audio4.pause();
  playStreet();

}

// RESOURSE UED TO FIGURE OUT TYPING TEXT BELOW
//https://www.w3schools.com/howto/howto_js_typewriter.asp

let i = 0;
let txt = 'You return home and immediately notice the open window. There’s a note, and blood. Your dog is missing. You loved that dog. What happened?';
let speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("scene").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//RUNNING COMPUTER
let computer = document.getElementById('computer');
let computerText = document.getElementById('computerTextBox')
computer.addEventListener('click', comp)
//AUDIO FOR COMPUTER TYPING
let audio4 = document.getElementById('keyboard')

function playKeyboard() {
  audio4.play();
}

function comp() {
  computerText.style.visibility = 'visible';
  computerText.style.opacity = '.7';
  playKeyboard();
}

let submitButtonComp = document.getElementById('buttonAlertComp')

function computerScene(event) {
  let responseComp = document.getElementById('responseComp')
  let valueComp = responseComp.value
  switch (valueComp) {
    case 'yes':
      streetToggleCar();
      break;
    case 'no':
      computerText.style.visibility = 'hidden';
  }
}
submitButtonComp.addEventListener('click', computerScene)


// LOOKKING OUT WINDOW
let d = 0;
let txtDog = 'There’s a strange moon in the evening sky, but no sign of your dog.';

function dogText() {
  if (d < txtDog.length) {
    document.getElementById("dogMoon").innerHTML += txtDog.charAt(d);
    d++;
    setTimeout(dogText, speed);
  }
}

let outsideView = document.getElementById('outsideView');
let windowBox = document.getElementById('windowBox');

function windowView(event) {
  apt.classList.toggle('hide');
  outsideView.classList.toggle('hide');
  dogText();
  audio4.pause();
}

windowBox.addEventListener('click', windowView)


function windowButton() {
  outsideView.classList.toggle('hide');
  apt.classList.toggle('hide');
}

// NOTE DETAILS ON CLICK

let notes = document.getElementById('note')
let noteMessage = document.getElementById('noteMessage')

function noteClick(event) {
  noteMessage.style.opacity = '.7';
  noteMessage.style.visibility = 'visible';
}

let submitButton = document.getElementById('buttonAlert')

function grabInput(event) {
  let response = document.getElementById('response');
  let value = response.value;
  switch (value) {
    case 'yes':
      compStore();
      break;
    case 'no':
      noteMessage.style.visibility = 'hidden';
  }
}
submitButton.addEventListener('click', grabInput)


// STREET SIDE TOGGLE

//Go back button
let audio3 = document.getElementById('audioStreet')

function playStreet() {
  audio3.play();
}

function streetToggle() {
  street.classList.toggle('hide')
  apt.classList.toggle('hide')
  carNotVisible();
  audio3.pause();
  playAudio();
  playApt();
}
streetBtn.addEventListener('click', streetToggle)


//STREET VISIBLE WITH CAR OPTION

let x = 0;
let txtStreet = 'Its a quiet evening with a few people walking around';

function typeStreet() {
  if (x < txtStreet.length) {
    document.getElementById("streetText").innerHTML += txtStreet.charAt(x);
    x++;
    setTimeout(typeStreet, speed);
  }
}
// CAR VISIBILITY FUNCTION

function carVisible() {
  let car1 = document.getElementById('car');
  car1.style.display = 'inline-block';
}

function carNotVisible() {
  let car1 = document.getElementById('car');
  car1.style.display = 'none';
}


function streetToggleCar() {
  street.classList.toggle('hide')
  apt.classList.toggle('hide')
  email();
  carVisible();
  audio2.pause();
  audio4.pause();
  audio1.pause();
  playStreet();
}

//function below calls special text if the use uses the compter to get to the car scene
let w = 0;
let txtEmail = 'You were going to walk, but see your neighbor’s lamborghini, you never did like your neighbor. Click on car to hot-wire it.';

function email() {
  if (w < txtEmail.length) {
    document.getElementById("emailResponse").innerHTML += txtEmail.charAt(w);
    w++;
    setTimeout(email, speed);
  }
}

//CAR TO NEXT PICTURE
let carToBar = document.getElementById('car');
let barScene = document.getElementById('bar');

function toBar() {
  street.classList.toggle('hide')
  barScene.classList.toggle('hide')
  audio3.pause();
  audio1.pause();
  playStore()
};

let y = 0;
let txtBar = 'You spot your ex, a former Russian spy with psychotic tendencies. “I’m looking for my dog,” you say. “Maybe I can help,” your ex replies. “But first you must drink from one of these glasses. One is poisoned.” You can: Tell your ex they\'re nuts and go back, drink from the glass in front of your ex, or drink from the glass offered to you.';

function barText() {
  if (y < txtBar.length) {
    document.getElementById('barText').innerHTML += txtBar.charAt(y);
    y++;
    setTimeout(barText, speed);
  }
  displayNav();
}


//Computer STORE
let audio5 = document.getElementById('audioCompStore')

function playStore() {
  audio5.play();
}

let computerStore = document.getElementById('computerStore')
let computerStoreBtn = document.getElementById('compBtn')
computerStoreBtn.addEventListener('click', compStoreReturn)


function compStore() {
  apt.classList.toggle('hide');
  computerStore.classList.toggle('hide');
  audio2.pause();
  audio1.pause();
  audio4.pause();
  playStore();
}

function compStoreReturn() {
  apt.classList.toggle('hide');
  computerStore.classList.toggle('hide');
  audio5.pause();
  playAudio();
  playApt();
}


// COMPUTER STORE DETAILS



let a = 0;
let txtComputer = 'You see two suspects, both acting suspiciously. One is quite timid and avoids eye contact. The other has a bandaged hand. They leave, going in opposite directions. Which one do you follow?';

function typeComputer() {
  if (a < txtComputer.length) {
    document.getElementById("compText").innerHTML += txtComputer.charAt(a);
    a++;
    setTimeout(typeComputer, speed);
  }
  displayFollowChoice();
}


// BARRR
let barReturn = document.getElementById('barButton');

function returnBar(event) {
  barScene.classList.toggle('hide');
  street.classList.toggle('hide');
  playStreet();
  audio5.pause();
}

barReturn.addEventListener('click', returnBar);


// AUDIO FINAL

let audioFinal = document.getElementById('audioFinal')

function audioF() {
  audioFinal.play();
}

let audioDead = document.getElementById('audioDeath');

function audioD() {
  audioDead.play();
}

//DRINK CHOICE AND TRANSITION

let drinkChoices = document.getElementById('displayNav');

function displayNav() {
  drinkChoices.style.opacity = '.7';
  drinkChoices.style.visibility = 'visible';
}

let displayChoice = document.getElementById('displayChoice')

function displayFollowChoice() {
  displayChoice.style.visibility = 'visible';
  displayChoice.style.opacity = '.7';
}
displayChoice.addEventListener('click', displayFollowChoice)


let finalRoof = document.getElementById('roofFinal');
let finalDeath = document.getElementById('death');

function drink1Location() {
  win += 1;
  barScene.classList.toggle('hide');
  finalRoof.classList.toggle('hide');
  audio5.pause();
  audioF();
  final();

  // console.log(win);
  checkWin();
}

drink1.addEventListener('click', drink1Location);


function drink2Death() {
  barScene.classList.toggle('hide');
  finalDeath.classList.toggle('hide');
  audio5.pause();
  audioD();
  regret();
}

drink2.addEventListener('click', drink2Death);




let f = 0;
let txtFinal = 'Your ex smiles. “Come with me,”. You fall under their spell and hardly notice the heavy rain. Your dog is at their apartment. It’s a happy reunion. . . . But who was in your apartment, keep looking to find out.';

function final() {
  if (f < txtFinal.length) {
    document.getElementById("final").innerHTML += txtFinal.charAt(f);
    f++;
    setTimeout(final, speed);
  }
}


// Follow decisions at computer store

let followUnknown = document.getElementById('computerUnknown');
let followNeighbor = document.getElementById('computerNeighbor');

function folllowU() {
  computerStore.classList.toggle('hide');
  followUnknown.classList.toggle('hide');
  // audio5.pause()
}

let followUKP = document.getElementById('followUKP')
followUKP.addEventListener('click', folllowU)

function followN() {
  computerStore.classList.toggle('hide');
  followNeighbor.classList.toggle('hide');
  // audio5.pause();
}

let followNP = document.getElementById('followNP')
followNP.addEventListener('click', followN)



//Arcade Text
let u = 0;
let txtWrong = 'He goes into a game arcade. You accost him and say: “I’m looking for a dog.” He gives you a blank look. “I have no programmed memories of a dog,” he says. You realize this is a dead end.';

function wrong() {
  if (u < txtWrong.length) {
    document.getElementById("wrongDirection").innerHTML += txtWrong.charAt(u);
    u++;
    setTimeout(wrong, speed);
  }
}
//Regrets Text

let r = 0;
let txtRegrets = 'Ouch! Life is short and full of regrets. . . ';

function regret() {
  if (r < txtRegrets.length) {
    document.getElementById("regrets").innerHTML += txtRegrets.charAt(r);
    r++;
    setTimeout(regret, speed);
  }
}


//Arcade Text

let n = 0;
let txtNeigh = 'You follow him into a GUN24 shop. He acts nervously. He quickly exits the store and hails a taxi. (click on GUNS 24 to stop him)';

function neigh() {
  if (n < txtNeigh.length) {
    document.getElementById("neigh").innerHTML += txtNeigh.charAt(n);
    n++;
    setTimeout(neigh, speed);
  }
}


// LAST SCREEN
let lastScreen = document.getElementById('lastScreen');

function endScene() {
  win += 1;
  followNeighbor.classList.toggle('hide');
  lastScreen.classList.toggle('hide');
  audio5.pause();
  audioLast();
  // console.log(win)
  checkWin();
}

bench.addEventListener('click', endScene)

let t = 0;
let txtEnd = 'As the taxi pulls up, you arrest the replicant. He admits to breaking in and writing the note, but that your dog bit him and ran off. You take him to the station and keep looking for your dog ';

function end() {
  if (t < txtEnd.length) {
    document.getElementById("end").innerHTML += txtEnd.charAt(t);
    t++;
    setTimeout(end, speed);
  }
}

let lastAudio = document.getElementById('lastAudio')

function audioLast() {
  lastAudio.play();
}

// RESTART
let lookForReplicant = document.getElementById('restart');
let restartDeath = document.getElementById('restartDeath');
let restartVideo = document.getElementById('restartVideoGame');

let goToApt = document.getElementById('restartFinal');
// let restartClass = document.getElementsByClassName('restart');


lookForReplicant.addEventListener('click', lookFor);

restartDeath.addEventListener('click', restartFun);

restartVideo.addEventListener('click', restartFun);
// Contine and find dog
goToApt.addEventListener('click', goToApartment);
//Restart function
function restartFun() {
  location.reload();
}

function goToApartment() {
  lastScreen.classList.toggle('hide');
  apt.classList.toggle('hide');
  lastAudio.pause();
  playAudio();
  playApt();
}

function lookFor() {
  finalRoof.classList.toggle('hide');
  apt.classList.toggle('hide');
  audioFinal.pause();
  playAudio();
  playApt();
}
