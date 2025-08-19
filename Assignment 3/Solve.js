/** Problem -01 ( Divide the Asset ) */

var area = 15;

//write your code here

console.log(area/2);

//------------------------------------------------------------------------------------------------------------

/** Problem -02 ( Cycle or Laptop ) */

var money = 45000;

//write your code here

if(money>=25000){

console.log("Laptop");

}

else if(money>=10000){

console.log("Cycle");

}

else{

console.log("Chocolate ");

}

//------------------------------------------------------------------------------------------------------------

/** Problem -03 ( Medicine Planner ) */

var lastDay = 4 ;

//write your code here

var curr=3;

for(var i=1;i<=lastDay;i++){

if(i==curr){

console.log(i,"- medicine");

curr+=3;

}

else{

console.log(i,"- rest")

}

}

//------------------------------------------------------------------------------------------------------------

/** Problem 04 - (Delete / Store) */

var fileName= "docx.xpdf";

//write your code here

var str="";

for(var i=fileName.length-1; fileName[i]!='.' && i>=0;i--){

str+=fileName[i];

}

var new_str="";

for(var i=str.length-1; i>=0;i--){

new_str+=str[i];

}

if("pdf"===new_str || "docx"===new_str || fileName[0]==='#'){

console.log("Store");

}

else{

console.log("Delete");

}

//------------------------------------------------------------------------------------------------------------

/** Problem 05 - ( PH Email Generator ) */

var student= { name: "jhanku" , roll: 1014 ,department: "cse" };

//write your code here

var str="";

for(var x in student){

str+=student[x];

}

str+="@ph.ac.bd";

console.log(str);

//------------------------------------------------------------------------------------------------------------

/** Problem 06 : (Current Salary ) */

var experience = 3;

var startingSalary = 15000;

//write your code here

for(var i=1;i<=experience;i++){


var percentage=(5/100)*startingSalary;

startingSalary+=percentage;

}

console.log(startingSalary.toFixed(2));
