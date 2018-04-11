var mustang = document.getElementById("mustang");
	mustang.innerText = "Some text!";
var myMustang = document.getElementById("myMustang");

function getInfo() {
	var userInput = document.getElementById("userInput").value;
	console.log(userInput);
		myMustang.innerText = userInput;
}



var stringArray = ["this", "is", "a", "string", "array"];
	
for(var i = 0; i < stringArray.length; i++) {
	console.log(stringArray[i]);
}



var myObj = {
	name: "Pawan",
	age: 28,
	isFemale: false
};

console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.isFemale);

var heading1 = document.getElementById("heading1");
var heading2 = document.getElementById("heading2");
var heading3 = document.getElementById("heading3");

	heading1.innerText = myObj.name;
	heading2.innerText = myObj.age;
	heading3.innerText = myObj.isFemale;



var myArray = [
		{
			name: "Dune",
			author: "Frank Herbert",
			genre: "Hard Science Fiction"
		},
		{
			name: "Neverwhere",
			author: "Neil Gaiman",
			genre: "Urban Fantasy"
		},
		{
			name: "Redwall",
			author: "Brian Jacques",
			genre: "Children's Fantasy"
		}
];

for(var i = 0; i < myArray.length; i++) {
	console.log(myArray[i].name);
	console.log(myArray[i].author);
	console.log(myArray[i].genre);
}



document.body.style.color = "red";