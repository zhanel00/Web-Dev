let user = {
    name: 'John',
    age: 30
};

alert( count(user) );

function count(obj) {
    return Object.keys(obj).length;
}