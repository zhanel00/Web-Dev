let calculator = {
    read() {
        let a = prompt("Enter the first number: ");
        let b = prompt("Enter the second number: ");
        this.a = +a;
        this.b = +b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );