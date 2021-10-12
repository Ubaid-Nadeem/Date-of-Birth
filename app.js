
var birthyear = prompt("Date of Birth","2002 10 1");
var newdate = new Date()
var now = new Date(birthyear)
var newyear =newdate.getFullYear()
var newmonth = newdate.getMonth();

var Miliseconds = newdate.getTime()-now.getTime();
var seconds = Math.round((newdate.getTime()-now.getTime())/(1000*60))
var hours = Math.round((newdate.getTime()-now.getTime())/(1000*60*60)) 
var days = Math.round((newdate.getTime()-now.getTime())/(1000*60*60*24))
var month = Math.round((newdate.getTime()-now.getTime()) /2592000000)
var year = newyear-now.getFullYear()

console.log('Miliseconds ' + Miliseconds )
console.log('Seconds ' + seconds)
console.log( 'Hours '+ hours);
console.log('Days ' + days)
console.log('Months ' + month)
console.log('Year ' + year);


document.write(`<h1>Years</h1> <p class='para'>${year}</p>`);
document.write(`<h1>Months</h1> <p class='para'>${month}</p>`);
document.write(`<h1>Days</h1> <p class='para'>${days}</p>`);
document.write(`<h1>Seconds</h1> <p class='para'>${seconds}</p>`);
document.write(`<h1>Miliseconds</h1> <p class='para'>${Miliseconds}</p>`);

