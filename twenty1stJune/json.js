// JSON is a format for sharing for storing and trsanspoting data
// json is ofen used when data is snet from server to web page
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand

var person = {
    "name": "John",
    "age": 30,
    "occupation": "Developer",
    "address": [
      "street","123 Main St",
      "city", "Anytown",
    
      "state", "CA",
      "zip", "12345"
    ]
  };
  
  console.log(person.name,typeof person); // John
  console.log(person.address.street.vlaues); // 123 Main St
  const obj = JSON.parse(JSON.stringify(person));
  console.log(obj,typeof person)