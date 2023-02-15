let login = prompt("Enter your login: ");

if (login == "Admin") {
    let password = prompt("Enter the password: ");
    if (password == "TheMaster") {
        alert("Welcome!");
    } else if (password == "") {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (login == "") {
    alert("Canceled");
} else {
    alert("I don't know you");
}
