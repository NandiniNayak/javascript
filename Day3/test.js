var superHeroesBirthPlace = {
    marvel: {
        spiderMan: "Brooklyn",
        ironMan: "America",
        thor: "asgard"
    },
    dc: {
        superMan: "Krypton",
        batMan: "Gotham",
        aquaMan: "Atlantas"
    }
}

let {marvel} = superHeroesBirthPlace;
console.log(marvel);
let { spiderMan } = superHeroesBirthPlace.marvel;
console.log(spiderMan);



// var petAnimals = ["cat", "dog", "fish"];
// var wildAnimals = ["tiger", "Lion", "Hippo"];

// let allAnimals = [...petAnimals, ...wildAnimals];
// console.log(allAnimals);

let favColors = {
    philip: "blue",
    kats: "black",
    shun: "red"
}
// assign default values while destructuring
let {philip = "white", kats = "white", shun = "white", garret = "green" } = favColors;

// let philip = favColors.philip;
// let kats = favColors.kats;
// let shun = favColors.shun
// let garret = "green";
console.log(philip, kats, shun, garret);