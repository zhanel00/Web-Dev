function A(a) {
    return a;
}
function B(b) {
    return A(b);
}

let a = new A("a");
let b = new B(a);

alert( a == b );