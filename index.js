let flavors = prompt(
    "Please enter your favorite froyo flavors here",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee")

console.log(flavors);

flavors = flavors.split(",");

console.log(flavors);

countFlavors = {};

for (flavor of flavors) {
    if (countFlavors[flavor]) {
        countFlavors[flavor] += 1;
    } else {
        countFlavors[flavor] = 1;
    }
}

console.log(countFlavors);