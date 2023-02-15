function checkAge1(age) {
    return a > 18 ? true : confirm('Did parents allow you?');
}

function checkAge2(age) {
    return a > 18 || confirm('Did parents allow you?');
}