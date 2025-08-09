var userName = prompt("What is your name:");
userName = userName.toLowerCase();
var nameArr = ["angela", "jack", "pam", "james", "lara", "jason"];
if (nameArr.includes(userName)) {
  alert("You are in the list");
} else {
  alert("Sorry, you are not in the list");
}
