//1)The given JSON Object is iterate by following loops:
// i.)JSON iterate by for loop:   
   var arr={
  "name":"pavun",
  "age":"25",
  "gender":"male",
  "weight":"65"}
 { 
  var arrkeys=Object.keys(arr);
  for(let i=0;i<arrkeys.length;i++)
  {
  console.log(arr[arrkeys[i]]);
 }
}
  //  Output: pavun
   //         25 
   //         male 
   //         65

   // ii.) JSON Iterate by for in loop;
   
   var arr={
  "name":"pavun",
  "age":"25",
  "gender":"male",
  "weight":"65"}
  { 
     for(var key in arr)
     console.log(key,':',arr[key]);
 }
     // Output:  name : pavun
     //          age : 25
     //          gender : male
     //          weight : 65

// iii.) JSON  Iterate by for of Loop:
   var arr={
   "name":"pavun",
   "age":"25",
   "gender":"male",
   "weight":"65"}
{ 
   var arrkeys=Object.keys(arr)
   for(var key of arrkeys)

   console.log(key,':',arr[key]);
}
   //Output: name : pavun
   //        age : 25
   //        gender : male
   //        weight : 65

//2.create a Resume by JSON format:

var arr=[{
    "name"        :"Pavunkumar.E",
    "email"       :"pulsarpavuns786@gmail.com",
    "phone"       : "8680864587",
    "address"     : "No.12,pillaiyar koil street,pa.nallur vill",
    "pincode"     : "606704",
    "city"        : "Tiruvannamalai",
    "district"    : "Tiruvannamalai"},
   {
    "Degeree"     : "BE mechanical" ,
    "institution" : "s.k.p Institute of technology",
    "university"  :"annauniversity",
    "year"        : "2013-2017",
    "cgpa"        : "6.7",
    "school"      :"HSC",
    "institution" :"A.S.Murugaiyan memorial model Hsc school",
    "board"       :"state board",
    "year"        :"2013",
    "percentage"  :"78",
    "school"      :"SSLC",
    "intitution"  :"A.S.Murugaiyan memorial model Hsc school",
    "board"       :"stateboard",
    "year"        :"2011",
    "percentage"  :"87"},
   {
    "company name":"Aqua sub engineering",
    "role"        :"CNC-machine operator",
    "experience"  :"2.5 years",
    "company name":"Sri balaji instruments",
    "role"        :"sales executive",
    "experience"  :"1.5 years"},
   {
     "language"   : "tamil and english"},
   { 
     "Interested Area":"teamwork,editing"}
     ]
    
   
    for(var i=0;i<arr.length;i++){
     for(var key in arr[i]){
   console.log(key,':',arr[i][key]);
     }
   }
                  
                  