// URL Module

const url = require("url");

const address =
  "https://meet.google.com/ffd-xpgr-vzj?name=Smriti&address=Kathmandu";

const parsedURL = url.parse(address, true); //true le parse garxa false doesn't

console.log(parsedURL.hostname);
console.log(parsedURL.pathname);
