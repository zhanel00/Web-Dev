function Calculator() {
    return {
        read() {
            this.a = +prompt("Enter the first number: ");
            this.b = +prompt("Enter the second number: ");
        },
        sum() {
            return this.a + this.b;
        },
        mul() {
            return this.a * this.b;
        }
    }
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );