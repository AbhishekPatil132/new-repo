let A = [10,23,32,45];
//console.log(A)
//console.log(typeof A)


//FOR EACH LOOP
   A.forEach((element) => {
// console.log(element*element)
    })  

// Array.from
let B = [1,2,3,4,5];
let C = Array.from(B)
//console.log(C)
//console.log(typeof C)
//console.log(typeof B)

//for...of
//for(let item of B){
   // console.log(item*2)
// }

// Creating array from giving elements
let D = Array.of('2','5','ABHISHEK','AA','7')
//console.log(D)

//Searching an element at particular index
let E = [4,5,6,'ABHISHEK','Cricket',9];
let Index = -2;
//console.log(`The element at index ${Index} is ${E.at(Index)}`)


//Determines whether the calling array contains a value
let F = [67,45,30,'ABHISHEk','ENGINEER',"INFO"];
let I = 30;
//console.log(`The element "${I}" ${F.includes(I)? 'is ': 'not'} present in the given array`)


//Revering the given array
let G = ['Normal',10,20,30,'Reversed'];
//console.log(G.reverse())
//console.log(typeof G)

// Cutting the array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let J = animals.slice(3,4);
//console.log(J)

// SORTING
let K = [30,32,13,23,29,100,50];
let Kstring = ['Abhishek','Animal','cat','name','Bat'];
//console.log(K.sort())
//console.log(Kstring.sort()) // sorts in ALPHABETICAL order only

//Filtering the given array
let Arr = ['Abhishek','information','technology','computer','Earth'];
let ans = Arr.filter(element => element.length >8)
//console.log(ans)

// Overwriting an array element
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
//console.log(months);


//Joining the array elements
let week = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
//console.log(week.join(' '))



const board = [
   ['R','N','B','Q','K','B','N','R'],
   ['P','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p','p','p','p','p','p','p'],
   ['r','n','b','q','k','b','n','r'] ];
 
 console.log(`${board.join('\n')}\n\n`);
 
 // Move King's Pawn forward 2
 board[4][4] = board[6][4]; //A
 board[6][4] = ' ';

 board[4][1] = board[1][1];//B
 board[1][1] = ' ';

 board[5][3] = board[7][5];//A
 board[7][5] = ' ';

 board[2][2] = board[0][1];
 board[0][1] = ' ';

 console.log(board.join('\n'));
 