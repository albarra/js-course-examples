const human_fn = {
    age: 1,
    birthday: function() {
        this.age++;
    }
}

const human_arrow_fn = {
    age: 1,
    birthday: () => {
        this.age++;
    }
}

human_fn.birthday();
console.log(human_fn.age);

human_arrow_fn.birthday();
console.log(human_arrow_fn.age);