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
 
})();