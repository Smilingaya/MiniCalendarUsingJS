const date=document.getElementById('date');
const day=document.getElementById('day');
const month=document.getElementById('month');
const year=document.getElementById('year');

const today = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//You can access individual days by their index. For example, weekdays[0] will give you 'Sunday', weekdays[1] will give you 'Monday', and so on.
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

date.innerHTML= (today.getDate()<10 ?"0":"")+ today.getDate(); //if it is lass then 10 it is a single digit than it will add 0 else it will be empty 
day.innerHTML= weekdays[today.getDay()];
month.innerHTML=months[today.getMonth()];//today.getMonth() this give you a number  of the month and he will start of 0
year.innerHTML=today.getFullYear();
