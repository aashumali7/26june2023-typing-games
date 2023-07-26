let fn = window.localStorage.getItem('first_name');
let ln = window.localStorage.getItem('last_name');

let story =`This is a story from Panchatantra A monkey lived on a berry tree on the River Bank. Once he saw a crocodile under the tree who looked hungry and tired. He gave the crocodile some berries, the crocodile thanked the monkey and became one of his friends. 
The monkey would give berries to the crocodile every day. One day the monkey even gave the crocodile extra berries to take to his wife His wife enjoyed the berries but told her husband that she wanted to eat the monkey's heart. She was a wicked and cunning woman. The crocodile was upset, but he decided that he needed to make his wife happy.
On the next day, the crocodile went to the monkey and said that his wife had called him for dinner. The crocodile carried the monkey on his back across the river. He told this monkey his wife's plan. 
The monkey had to think quickly if he wanted to save himself. He told the crocodile that he left his heart at on the berry tree and that they needed to return.
On reaching the monkey climbed the tree and spoke. "I'm not getting down; you betrayed my trust and that means our friendship is over
A monkey lived on a berry tree on the River Bank. Once he saw a crocodile under the tree who looked hungry and tired. He gave the crocodile some berries, the crocodile thanked the monkey and became one of his friends The monkey would give berries to the crocodile every day. One day the monkey even gave the crocodile extra berries to take to his wife.
His wife enjoyed the berries but told her husband that she wanted to eat the monkey's heart. She was a wicked and cunning woman. The crocodile was upset, but he decided that he needed to make his wife happy.
On the next day, the crocodile went to the monkey and said that his wife had called him for dinner. The crocodile carried the monkey on his back across the river. He told this monkey his wife's plan. 
The monkey had to think quickly if he wanted to save himself. He told the crocodile that he left his heart at on the berry tree and that they needed to return.
On reaching the monkey climbed the tree and spoke. "I'm not getting down; you betrayed my trust and that means our friendship `
          


let pertwolinecharactercount = 35;
let initialSequence = 1;
let currentcharacterlocation = 1;
let totalcl=1;
console.log('total count',story.length);
var pertwolinecharacter =Math.ceil(story.length/pertwolinecharactercount);
let prevChar = [];
let currentChar ='';
let nextChar =''; // square back is array


let saveRegistrationInfo =()=>{
  //console.log('okok');
        // object.method
  let fn = document.getElementById("first_name").value;
  let ln = document.getElementById("last_name").value;
  let dur = document.querySelector(".a_myselect").value;

  //console.log(fn);
  //console.log(ln);
  window.localStorage.setItem('first_name',fn);
  window.localStorage.setItem('last_name',ln);
  window.localStorage.setItem('duration',dur);
   // page reload
   window.location.reload();
}
let logout = ()=>{
  window.localStorage.clear();
  // page reload
  window.location.reload();
}

let playsound =(status)=>{
   //console.log('hey');
   let at = document.querySelector('.a_audio');
   if(status === 'correct'){
      at.src = '../sound/keyboard.mp3';
    at.play();
   }else{
    at.src = '../sound/error2.mp3';
    at.play();
  }

}


let start = ()=>{
// built -in function 
      // set the date we're counting down to 
      var nextTime = new Date().getTime();
      nextTime = new Date(nextTime + (localStorage.getItem('duration')*60* 1000)); // add one hour

      const dateTime = new Date( nextTime);

        const unixTimestamp = Math.floor(dateTime.getTime() / 1000)*1000;

        setInterval(function(){
        // get today's date and time 
        var now = new Date().getTime();
        // console.log('Next Time',unixTimestamp);
        // console.log('Current Time',now);

         var distance = unixTimestamp - now;

         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

         document.querySelector(".a_duration").innerHTML = minutes + "m " + seconds + "s ";

         if(distance < 0) {
          clearInterval(x);
          document.querySelector(".a_duration").innerHTML = "EXPIRED";
         }

      },1000)
}

// ()(); IIFE
// onpage load
(()=>{
console.log('page loaded successfully');
// get a refrence to the modal element 
var modal = document.getElementById('registrationModelLabel');

// craete a bootstrap modal instance using the modal element
var modalInstance = new bootstrap.Modal(modal);

// call the show method on the modal instance to launch the modal
console.log(fn);
if(fn=== null  ){
    //true
    modalInstance.show();
} 

// check if the local storage is set or note
if(fn !== null){
      document.querySelector('h5.a_welcome').innerHTML = 'welcome '+fn+ " "+ln+'<button class=""btn btn-sm btn-dark ms-4" onclick="logout()" >Logout</button>';
}
     // keypress sound play 
     document.addEventListener('keypress',(e)=>{

    var prevChar2 = prevChar.pop();
      if(prevChar2 !== currentChar ){
          // play error sound
        console.log('Incorrect',prevChar);
          console.log('Incorrect',currentChar);
          playsound('correct');
      }else{
        console.log('Correct',prevChar);
        console.log('Correct',currentChar);


        // play error sound
        playsound('incorrect');
      }
      console.log('->',e);
      currentChar = e.key;
      if(e.keyCode == 97){
      let a = document.querySelector('.a_a');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_pinky').style.display = 'block';
    }
    if(e.keyCode == 113){
      let a = document.querySelector('.a_q');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_pinky').style.display = 'block';
    }
    if(e.keyCode == 122){
      let a = document.querySelector('.a_z');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_pinky').style.display = 'block';
    }

    if(e.keyCode == 119){
      let a = document.querySelector('.a_w');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_ring').style.display = 'block';
    }
    if(e.keyCode == 115){
      let a = document.querySelector('.a_s');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_ring').style.display = 'block';
    }
    if(e.keyCode == 120){
      let a = document.querySelector('.a_x');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_ring').style.display = 'block';
    }
       
    if(e.keyCode == 101){
      let a = document.querySelector('.a_e');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_middle').style.display = 'block';
    }
    if(e.keyCode == 100){
      let a = document.querySelector('.a_d');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_middle').style.display = 'block';
    }
    if(e.keyCode == 99){
      let a = document.querySelector('.a_c');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_middle').style.display = 'block';
    }

    if(e.keyCode == 114){
      let a = document.querySelector('.a_r');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_middle').style.display = 'block';
    }
    if(e.keyCode == 102){
      let a = document.querySelector('.a_f');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_middle').style.display = 'block';
    }
    if(e.keyCode == 118){
      let a = document.querySelector('.a_v');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_middle').style.display = 'block';
    }

    if(e.keyCode == 116){
      let a = document.querySelector('.a_t');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_index').style.display = 'block';
    }
    if(e.keyCode == 103){
      let a = document.querySelector('.a_g');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_index').style.display = 'block';
    }
    if(e.keyCode == 98){
      let a = document.querySelector('.a_b');
  //  console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_index').style.display = 'block';
    }

    if(e.keyCode == 121){
      let a = document.querySelector('.a_y');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_index').style.display = 'block';
    }
    if(e.keyCode == 104){
      let a = document.querySelector('.a_h');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_index').style.display = 'block';
    }
    if(e.keyCode == 110){
      let a = document.querySelector('.a_n');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_index').style.display = 'block';
    }

    if(e.keyCode == 117){
      let a = document.querySelector('.a_u');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_middle').style.display = 'block';
    }
    if(e.keyCode == 106){
      let a = document.querySelector('.a_j');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_middle').style.display = 'block';
    }
    if(e.keyCode == 109){
      let a = document.querySelector('.a_m');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_middle').style.display = 'block';
    }

    if(e.keyCode == 105){
      let a = document.querySelector('.a_i');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_index').style.display = 'block';
    }
    if(e.keyCode == 107){
      let a = document.querySelector('.a_k');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_index').style.display = 'block';
    }
    if(e.keyCode == 44){
      let a = document.querySelector('.a_111');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_middle').style.display = 'block';
    }

    if(e.keyCode == 111){
      let a = document.querySelector('.a_o');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_pinky').style.display = 'block';
    }
    if(e.keyCode == 108){
      let a = document.querySelector('.a_l');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_pinky').style.display = 'block';
    }
    if(e.keyCode == 46){
      let a = document.querySelector('.a_222');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_ring').style.display = 'block';
    }

    if(e.keyCode == 112){
      let a = document.querySelector('.a_p');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_pinky').style.display = 'block';
    }

      if(e.keyCode == 32){
      let a = document.querySelector('.a_space');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_thumb').style.display = 'block';
    }

    if(e.keyCode == 49){
      let a = document.querySelector('.a_11');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_middle').style.display = 'block';
    }

    if(e.keyCode == 50){
      let a = document.querySelector('.a_22');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_middle').style.display = 'block';
    }

    if(e.keyCode == 51){
      let a = document.querySelector('.a_33');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_index').style.display = 'block';
    }


    if(e.keyCode == 52){
      let a = document.querySelector('.a_44');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_index').style.display = 'block';
    }

    if(e.keyCode == 53){
      let a = document.querySelector('.a_55');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_index').style.display = 'block';
    }

    if(e.keyCode == 54){
      let a = document.querySelector('.a_66');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_index').style.display = 'block';
    }

    if(e.keyCode == 55){
      let a = document.querySelector('.a_77');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_index').style.display = 'block';
    }

    if(e.keyCode == 56){
      let a = document.querySelector('.a_88');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_index').style.display = 'block';
    }

    if(e.keyCode == 57){
      let a = document.querySelector('.a_99');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_middle').style.display = 'block';
    }

    if(e.keyCode == 48){
      let a = document.querySelector('.a_00');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.r_middle').style.display = 'block';
    }

    if(e.keyCode == 88){
      let a = document.querySelector('.a_x');
    console.log(a.classList.add('a_active'));
     
      document.querySelector('.l_ring').style.display = 'block';
    }
   playsound();
    })
     document.addEventListener('keyup',(e)=>{
      //  console.log(e);
      var elements = document.getElementsByClassName('a_active');
       
      for (var i = 0; i < elements.length; i++){
          elements[i].classList.remove('a_active')
      }

      var elements = document.getElementsByClassName('a_left_pinky');
       
      for (var i = 0; i < elements.length; i++){
          elements[i].style.display="none";
      } 

      console.log('initialSequence->',initialSequence);
      console.log('currentcharacterlocation',currentcharacterlocation);
      console.log('pertwolinecharacter->',pertwolinecharactercount);
      if(currentcharacterlocation >= pertwolinecharactercount ){
        currentcharacterlocation=0;
        initialSequence++;
        console.log('new initialSequence',initialSequence);
      }else{
      currentcharacterlocation++; 
      }

      if(initialSequence === 1){
console.log('-->',story.substring(initialSequence-1, (initialSequence*pertwolinecharactercount) + pertwolinecharactercount));
let x = story.substring(initialSequence-1, (initialSequence*pertwolinecharactercount) + pertwolinecharactercount);

var p1 = x.substring(0,currentcharacterlocation);
var p2 = x.substring(currentcharacterlocation);
prevChar.push(p2.charAt(0));
p2 = "<span style='text-decoration: underline;font-weight:bolder'>" + p2.charAt(0) + "</span>" + p2.slice(1);

console.log('part 1->',p1)
console.log('part 2->',p2)

let a = `<span style="color:red">${p1}</span>`+p2;

document.querySelector('.a_myparagraph').innerHTML = a;
console.log('nextchar-->',nextChar);
}else{
console.log('-->',story.substring((initialSequence-1)*pertwolinecharactercount, (initialSequence*pertwolinecharactercount) + pertwolinecharactercount));
let x =story.substring((initialSequence-1)*pertwolinecharactercount, (initialSequence*pertwolinecharactercount) + pertwolinecharactercount);

var p1 = x.substring(0,currentcharacterlocation);
var p2 = x.substring(currentcharacterlocation);
prevChar.push(p2.charAt(0));
p2 = "<span style='text-decoration: underline;font-weight:bolder'>" + p2.charAt(0) + "</span>" + p2.slice(1);

console.log('part 1->',p1)
console.log('part 2->',p2)

let a = `<span style="color:red">${p1}</span>`+p2;

document.querySelector('.a_myparagraph').innerHTML = a;
console.log('nextchar-->',nextChar);
}
totalcl++;

     // document.querySelector('.a_left_pinky').style.display = 'none';
     });

     /*
       for (expression 1; condition; increment++/decrement) {
        // code block to be executed
       }
     */
       var o = '';
       for(var i=1; i<=60;i++){
            o = o + `<option value="${i}">${i}</option>`;
          
       }

       console.log(o);
      console.log( document.querySelector('.a_myselect'));
      document.querySelector('.a_myselect').innerHTML = o;

      document.querySelector('.a_duration').innerHTML = localStorage.getItem('duration') === null ?'':localStorage.getItem('duration') +':00';
      
      
})();

// ()(); IIFE