let notes = [];

function addNote(content, id)
 {
     notes.push({content, id}); 

}

addNote("realEstate", 1);
addNote("assets", 2);
addNote("commodities", 3);
addNote("bitcoin", 4);
addNote("stockExchanges", 5);

console.log(notes);

/*get note*/

function getNoteFromId(id) {
     
    for (let i = 0; i < notes.length; i++) {
        if (id === notes[i].id){

            return (notes[i]);     
        }
 else{
    return 'missing id number';
}
}
}


console.log(getNoteFromId(1))
console.log(getNoteFromId(3))


/*Get all notes*/

function allNotes() {

    return notes;
}

console.log(allNotes());

/*Log Out Notes*/

function logOutNotesFormatted () {
    for (let i = 0; i < notes.length; i++) {
        return `Name id: ${notes[i].id}, is: ${notes[i].content}.`;
    }
   
}

console.log(logOutNotesFormatted());

/*Unique feature*/



