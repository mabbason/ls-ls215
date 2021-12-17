"use strict";

/*
For this practice problem, use the following criteria to determine whether an email address is valid:

- There must be one @ sign.
- The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). 
    It may not contain any other characters.
- The domain part must contain two or more components with a single dot (.) between each component. 
    Each component must contain one or more letters (A-Z, a-z) only.
*/

function isValidEmail(email) {
  
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false