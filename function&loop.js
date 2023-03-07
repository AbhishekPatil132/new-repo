//solution1
let marks = {
    harry:34,
    abhi:50,
    jay:55
}
for(let i=0; i<Object.keys(marks).length;i++)
{
    //console.log("The marks of " + Object.keys(marks)[i]+ " are " + marks[Object.keys(marks)[i]])
    //Object.keys(marks)= returns harry,abhi,jay as array
}

//solution2
function mean(a,b,c){
    return (a+b+c)/3
}

console.log(mean(5,6,1))
