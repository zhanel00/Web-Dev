let age = prompt("Enter your age: ", '')

if (!(age >= 14 && age <= 90)) {
    alert("Age is not between 14 and 90")
}

if (age < 14 || age > 90) {
    alert("Age is between 14 and 90")
}