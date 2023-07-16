 const  Person={
    fname:"Ahmad",
    lname:"Hossam",
    age:"20",
    city:"alex"
 }
console.log(Person)

 const PersonJson= JSON.stringify(Person)


 const fs= require("fs")
 fs.writeFileSync("data2.txt", PersonJson)

//  const fs=require("fs")
//  fs.writeFileSync("data2.txt", PersonJson)

const PersonObj=JSON.parse(PersonJson)




console.log(Person.fname="adel",Person.lname="ahmad",Person.age="40",Person.city="cairo")
const PersonJson2= JSON.stringify(Person)


fs.writeFileSync("data2.txt", PersonJson2)

 module.exports={
    PersonJson1:PersonJson,
    PersonObj1:PersonObj,
    PersonJson2:PersonJson2
 }