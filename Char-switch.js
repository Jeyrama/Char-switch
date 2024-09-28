/*
Given a string made up of letters a, b, and/or c, 
switch the position of letters a and b (change a to b and vice versa). 
Leave any incidence of c untouched.

Example:
  'acb' --> 'bca'
  'aabacbaa' --> 'bbabcabb'
*/


// Solution

function switcheroo(x){
  return x.split('').map(function(e){
    if (e =='b')return 'a';
    if (e == 'a') return 'b';
    if(e=='c') return 'c'
  }).join('');
}

// or

function switcheroo(x){
  let str = "";
  for (let i = 0; i < x.length; i++) {
      if (x[i] === 'a') {
        str += 'b';
      } else if (x[i] === 'b') {
        str += 'a';
      } else {
        str += x[i];
      }
  } return str;
}