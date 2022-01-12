/*
The insurance guy calls. They were about to pay you all that fortune you've been
anxiously waiting for, but they detected further irregularities; the list of stolen 
items is misformatted and appears to contain other entries that don't belong there.
Find and remove them.

You receive an object with nested objects with strings as values. 
Convert their values to a number and return an object without the entries
that are not numbers.

Examples:
findAndRemove({
    bedroom: {
      slippers: "10000",
      piano: "550",
      call: "vet",
      travel: "world",
    },
  }) --> {
    bedroom: {
      slippers: 10000,
      piano: 5500,
    },
  }

 findAndRemove({
    kitchen: {
      ["gold spoons"]: "900",
      piano: "550",
      notes: "OO23I49",
    },
    cellar: {
      reminder: "dog",
      bottle: "750",
    },
  }) --> {
    kitchen: {
      ["gold spoons"]: 900,
      piano: 550,
    },
    cellar: {
      bottle: 750,
    },
  }

*/