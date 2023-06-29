let saveRegistrationInfo =()=>{
    console.log('okok');
          // object.method
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;

    console.log(fn);
    console.log(ln);
    window.localStorage.setItem('first_name',fn);
    window.localStorage.setItem('last_name',ln);
     // page reload
     window.location.reload();
}
let logout = ()=>{
    window.localStorage.clear();
    // page reload
    window.location.reload();
}

let playsound =()=>{
     //console.log('good morning');
    let at =document.querySelector('.a_audio');
    at.play();
}
// ()(); IIFE
(()=>{
    let fn = window.localStorage.getItem('first_name');
    let ln = window.localStorage.getItem('last_name');
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
        console.log('->',e.keyCode);
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

        playsound();
       })
       document.addEventListener('keyup',(e)=>{
        console.log(e);
        var elements = document.getElementsByClassName('a_active');
         
        for (var i = 0; i < elements.length; i++){
            elements[i].classList.remove('a_active')
        }

        var elements = document.getElementsByClassName('a_left_pinky');
         
        for (var i = 0; i < elements.length; i++){
            elements[i].style.display="none";
        } 

       // document.querySelector('.a_left_pinky').style.display = 'none';
       })
      
})();

// IIFE 