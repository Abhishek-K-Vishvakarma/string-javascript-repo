// Str.length...

let str = "Abhishek Vishvakarma";
console.log(str.length);

// find Index of str...

let str1 = "Abhishek Vishvakarma";
console.log(str1[0]);
console.log(str1[1]);
console.log(str1[2]);
console.log(str1[3]);
console.log(str1[4]);
console.log(str1[5]);
console.log(str1[6]);
console.log(str1[7]);
console.log(str1[8]);
console.log(str1[9]);
console.log(str1[10]);
console.log(str1[11]);
console.log(str1[12]);
console.log(str1[13]);
console.log(str1[14]);
console.log(str1[15]);
console.log(str1[16]);
console.log(str1[17]);
console.log(str1[18]);
console.log(str1[19]);

// second method of string...
for(let i = 0; i < str1.length; i++){
  console.log(str[i]);
};


// Next Level Method of string...

let str2 = "Abhishek Vishvakarma";
let obj = {};
for(let st of str2){
  if(obj[st]){
    obj[st]++;
  }else{
    obj[st] = 1;
  }
}
console.log(obj);


// str.charAt(ind...) method
let str3 = "Abhishek Vishvakarma";
let res = str3.charAt(9); // Find only one string alphabet...
console.log(res);

// str.charCodeAt(0) method...
let str4 = "AB";
let res1 = str4.charCodeAt(0);
console.log(res1);

// str.at(index) method...

let str5 = "WorldSchool";
let res2 = str5.at(3);
console.log(res2);

// str.slice() method...
let str6 = "HelloWorld";
let res3 = str6.slice(5);
console.log(res3);

// str.split('') method...
let str7 = "HelloWorld";
let res4 = str7.split('');
console.log(res4);

// str.replace('search','newAddstr')...
let str8 = "HelloWorld";
let res5 = str8.replace('World', "Abhishek");
console.log(res5);

// str.concat(another str)...

let str9 = "Hello";
let string = "World!"
let res6 = str9.concat(string);
console.log(res6);

// str.substring()...
let str10 = "HelloWorld";
let res7 = str10.substring();
console.log(res7);

// str.toUpperCase()...
let str11 = "Hello World";
let res8 = str11.toUpperCase();
console.log(res8);

// str.toUpperCase()...
let str12 = "Hello World";
let res9 = str12.toLowerCase();
console.log(res9);

// str.trim()...
let str13 = "  Hello World  ";
let res10 = str13.trim();
console.log(res10);

// str.trimStart()...
let str14 = "  Hello World  ";
let res11 = str14.trimStart();
console.log(res11);

// str.trimEnd()...
let str15 = "  Hello World  ";
let res12 = str15.trimEnd();
console.log(res12);


// str.padStart(4, 0) method...
let str16 = "5";
let res13 = str16.padStart(4, 0);
console.log(res13);

// str.padStart(4, 0) method...
let str17 = "5";
let res14 = str17.padEnd(4, 0);
console.log(res14);

// str.repeat(2) method...
let str18 = "Hello";
let res15 = str18.repeat(2);
console.log(res15);