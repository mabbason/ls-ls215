"use strict";
/*
P
  i: single long string with all email data
  o: console.log w info RE: email data
    - Count of Email(s): XX
    - Date Range: earliest email date - latest email date
        format eg. Sat Jun 25 2016 - Thu Aug 11 2016

  r: 
    - emails separated by '##||##'
    - email has 5 parts, each separated by '#/#'
      - 5 parts are Sender, Subject, Date, Recipient, Body in that order respectively

E
mailCount(emailData);

// console output
Count of Email: 5
Date Range: Sat Jun 25 2016 - Thu Aug 11 2016

D
Array of objects

A
write function mailCount, takes single string as input
  - split the input string by '##||##'
    - ['email string 1', 'email string 2', email string 3', etc...]
  - iterate through array and map each string to an object w following format
    - [
      { Sender: data, Subject: data, Date: data, Recipient: data, Body: data },
      { Sender: data, Subject: data, Date: data, Recipient: data, Body: data },
      ...etc
    ]
    - split each email string by regex to get each part
      - '#/#' is the symbol, but need to remove \n\n chars
      - regex: /#//#/
    - assign each part to a unique variable
    - return an object with each part title, and each respective part variable as value

C
*/


const path = require('path');
const fs = require('fs');

const emailData = fs
  .readFileSync(path.join("./", 'email-data.txt'), 'utf8')
  .toString()
  .trim()

function mailCount(emailData) {
  let emails = parseEmailsFromData(emailData);
  let count = emails.length;
  let dates = getDateObjects(emails).sort((a, b) => a - b);
  let [ earliestDate, latestDate ] = [ dates[0], dates[dates.length - 1] ];

  console.log(earliestDate.toDateString());

  
                          
  

}

function getDateObjects(emails) {
  return emails.map(email => {
    let [ month, day, year ] = [ ...parseDateString(email.Date) ];
    return new Date(year, month, day);
  });
}

function parseDateString(str) {
  let date = str.replace('Date: ', '');
  return date.split('-');
}

function parseEmailsFromData(rawDataString) {
  return rawDataString
    .split(/##\|\|##\\n\\n/)
    .map(email => {
      let [ sender, subject, date, recipient, body ] = 
          [ ...email.split(/#\/#\\n/) ];
      return {
        Sender: sender,
        Subject: subject,
        Date: date,
        Recipient: recipient,
        Body: body
      }; 
    });
};

mailCount(emailData);



