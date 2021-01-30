//Ez Namey
const firstWords = ["Easy", "Awesome", "Corporate", "Tuattara", "Wonder", "Moon", "Volte", "Face","Recto", "Verso"]
const lastWords = ["Zig-zag", "Burchetta", "Exergue", "Soleil", "Stars", "Versus", "Rhema", "Logos", "Maximum", "Minimum"];
const startUpName = firstWords[Math.floor(Math.random() * 10)] +" "+ lastWords[Math.floor(Math.random() * 20)];

console.log ("The startup: \""+startUpName+"\" containing "+startUpName.length+" characters.");
