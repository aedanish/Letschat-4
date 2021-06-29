 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBSrsKj-aWA-8O5PV0abeZxjxjyMky-YWY",
    authDomain: "kwitterapp-d8d8f.firebaseapp.com",
    databaseURL: "https://kwitterapp-d8d8f-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-d8d8f",
    storageBucket: "kwitterapp-d8d8f.appspot.com",
    messagingSenderId: "231902421209",
    appId: "1:231902421209:web:2cf20c47a4cd5005825ec8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
          });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}