data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';
var mydata = JSON.parse(data);
console.log(mydata[0].age)

mydata.forEach(a=>{
    console.log(a.name)
})
