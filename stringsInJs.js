const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

//console.log(typeof strPrim); // Logs "string"
//console.log(typeof strPrim2); // Logs "string"
//console.log(typeof strPrim3); // Logs "string"
//console.log(typeof strObj);  // Logs "object"

const s1 = '2 + 2';              // creates a string primitive
const s2 = new String('2 + 2');  // creates a String object
//console.log(eval(s1));           // returns the number 4
//console.log(eval(s2));           // returns the string "2 + 2"
//console.log(s1)
//console.log(s2)
//console.log(eval(s2.valueOf()))

// COMBINING TWO STRINGS
let a = "Hello";
let b = "Peep!";
//console.log(a.concat(' ',b))

//SEARCHING THE GIVEN WORD IN THE SENTENCE
let sentence = "The whale was so near the ship";
let word = "toto";
//console.log(`The word "${word}" ${sentence.includes(word)? 'is ':'is Not '} present in the sentence` )
//console.log(sentence.includes(word))

// REPEATING THE STRING
let c = ' I\'m happy';
//console.log(c.repeat(3))

// REPLACING THE WORD FROM GIVEN SENTENCE
let speech = "Hello guys, I have prepared well but don't laugh at me if I get blanked";
//console.log(speech)
//console.log(speech.replace('I','you'))
//console.log(speech.replaceAll('I','you'))

//CUTTING STRING INTO OTHER STRING
let d = "The whale was so near the ship";
//console.log(d.slice(4,30))
//console.log(d.slice(-16,-4))
let e = "PERSEVERANCE";
//console.log(e.substring(3,10))
//console.log(e.substring(2))

// UPPERCASE AND LOWERCASE
let f = "Abhishek patil";
//console.log(f.toUpperCase())
//console.log(f.toLowerCase())


