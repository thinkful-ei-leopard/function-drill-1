function createGreeting(name, age){
    const yearOfBirth = 2020 - age;
    return `I was born in ${yearOfBirth}`;
};

const greeting1 = createGreeting();
console.log(greeting1);

