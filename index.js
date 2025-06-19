let flavors = prompt(
  "Please enter your favorite froyo flavors here",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

flavors = flavors.split(",");

console.log(flavors);

const flavorCount = (flavors) => {
  const count = {};
  for (flavor of flavors) {
    if (count[flavor]) {
      (count[flavor] += 1);
    } else {
      (count[flavor] = 1);
    }
  }
  return count;
};

console.log(flavorCount(flavors));
