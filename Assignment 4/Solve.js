function totalFine( fare ) {


if(typeof fare==='number' && fare>0 ){

return ( ( fare * ( 20 / 100) + 30 ) + fare );

}

return"Invalid";

}

function onlyCharacter( str ) {


if(typeof str==='string' ){


let temp=str.replaceAll(' ','');

return temp.toUpperCase();

}


return "Invalid";


}

function bestTeam( player1, player2 ) {


if( (typeof player1 === 'object' && !Array.isArray(player1) && player1 !== null) &&

(typeof player2 === 'object' && !Array.isArray(player2) && player2 !== null) ){

let sum1=player1.foul + player1.cardY + player1.cardR;

let sum2=player2.foul + player2.cardY + player2.cardR;

if(sum1<sum2)return player1.name;

else if(sum1==sum2)return "Tie";

else return player2.name;

}

return "Invalid";

}

function isSame(arr1 , arr2 ) {
  
if(Array.isArray(arr1) && Array.isArray(arr1) ){

let n=Math.min(arr1.length,arr2.length);

if(arr1.length!==arr2.length)return false;

for(let i=0;i<n;i++){

if(arr1[i]!==arr2[i])return false;

}

return true;

}

return "Invalid";

}

function resultReport( marks ) {


if(Array.isArray(marks)){


let obj ={};

let sum=0;

let sum2=0;

let p=0;

let f=0;

for(let ele of marks){


if(ele>=40){


p++;

}

else {

f++;

}

sum+=ele;

}

let t=Math.round(sum/marks.length);


if(marks.length)obj.finalScore=t;

else obj.finalScore=0;


obj.pass=p;

obj.fail=f;

return obj;

}

return "Invalid";

}
