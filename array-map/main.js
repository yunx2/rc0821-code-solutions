const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(num => 2 * num);
console.log('doubled:', doubled);
const prices = numbers.map(num => `$${num}.00`);
console.log('prices:', prices);
const upperCased = languages.map(lang => lang.toUpperCase());
console.log('upperCased:', upperCased);
const firstLetters = languages.map(lang => lang[0]);
console.log('firstLetters:', firstLetters);
