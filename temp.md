Practice Problem: Formatting Bands
==================================

We have the following Array of information for some popular bands:


```javascript
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

```

There are problems with this data, though, so we first have to clean it up before we can use it:

-   The band countries are wrong: all the bands should have 'Canada' as the country.
-   The band name should have all words capitalized.
-   Remove all dots from the band names.

Write a function that can process the input band Array and return an Array that contains the fixed information:


```javascript
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  // ...
}

processBands(bands);

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]

```

Thinking in Abstractions

Solution with Side Effects


```javascript
function processBands(bands) {
  return bands.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name
                  .split(' ')
                  .map(word => capitalizeString(word))
                  .join(' ');
}

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

```

Taming Side Effects

Our solution works, but every step along the way produces side effects. Specifically, this process mutates the original `bands` Array, and each of the transformative functions works on different content. If you no longer need the original `bands` data, this may be OK, but it can cause problems if you don't expect the mutation. Generally, you should aim to reduce side effects in your functions; this contains the effects on the rest of your program.

A version of this program that is free from side effects may look like this:


```javascript
function processBands(bands) {
  return bands.map(band => {
    let capitalizedName = capitalizePhrase(band.name);
    let newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalizePhrase(phrase) {
  return phrase.split(' ')
               .map(word => capitalizeString(word))
               .join(' ');
}

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInString(string) {
  return string.replace(/\./g, '');
}

```

This is also a better solution as an abstraction -- the concept of a band doesn't leak into the `capitalizePhrase` and `removeDotsInString` functions. Instead, it merely performs string operations, and doesn't care what its arguments represent.