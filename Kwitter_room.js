
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyD596uAvFo4Ql4EkgWXfSy34j8du8dgAu8",
    authDomain: "kwitter-f02eb.firebaseapp.com",
    databaseURL: "https://kwitter-f02eb-default-rtdb.firebaseio.com",
    projectId: "kwitter-f02eb",
    storageBucket: "kwitter-f02eb.appspot.com",
    messagingSenderId: "30287991375",
    appId: "1:30287991375:web:91c1449bfdd5c1ae34d03a",
    measurementId: "G-CYXL0F24RV"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function log_out()
{
    window.location="index.html";
}

function add_roomName()
{
roomName = document.getElementById("roomName").value;

firebase.database().ref("/").child(roomName).update({
    purpose : "adding room name"
});

localStorage.setItem("roomName", roomName);

window.location = "kwitter_page.html";

}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();
