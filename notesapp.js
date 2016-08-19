/**
 * Note class to create notes
 * @class
 * @constructor
 * @param {string} author The authors name
 * @param {string} note_content The contents of the note
 * 
*/
class Note {
	constructor (author, note_content) {
		this.id = null;
		this.author = author;
		this.note_content = note_content;
	}	
	
}

/**
 * Class that holds all the methos that can be
 * 		perform on the NotesApplication
 * @Class
 * @constructor
 * @param {string} author The author of the contents
 * 
*/
class NotesApplication {
	constructor (author) {
		this.author = author;
		this.notes = [];
	}
	
	/**
	 * Function that creates a new note
	 * @function 
	 * @param {string} author Author of the new note to 
	 * 		be created
	 * @param {string} note_content contents of the new note
	 * 
	*/	
	createNote (author, note_content) {
		var newNote = new Note(author, note_content);
	
		if(author, note_content) {
			return this.notes.push(newNote);
		}
		
	}
	
	/**
	 * List and dispalys all the note.
	 * @function
	*/
	listNotes () {
		
		for (var i = 0; i < this.notes.length; i+=1) {
			var output = this.displayNoteContent(i);
			console.log(output);
		} 
		if(output !== null){
			//Do nothing
		}else {
			console.log( "List note is empty");
		}
		
	}
	
	/**
	 * Get note
	 * @function
	*/
	getNote (note_id) {
		if(note_id)
			console.log(this.notes[note_id].note_content);
		else
			console.log("Note not found");
	}
	
	/**
	 * Search Note contents
	 * @function
	 * @param {string} search_text Search note for
	*/
	searchNote (search_text) {
		var result;
		for (var i =0; i < this.notes.length; i+=1 ){
			if (this.notes[i].note_content.includes(search_text) === true) {
				result = "Showing results for search <"+ search_text +">\n";
				result += this.displayNoteContent(i);
			}
		}
		console.log(result);
	}
	
	/**
	 * Used to delete a note 
	 * @function
	 * @param {number} note_id ID of note to delete
	*/
	deleteNote (note_id) {
		if (note_id) {
			 console.log(this.notes[note_id] = null);
		}
	}
	/**
	 * Edit the contents of a note. 
	 * @function
	 * @param {number} note_id ID of note 
	 * @param {string} new_content New contents
	*/
	editNote (note_id, new_content) {
		if (note_id) {
			 console.log(this.notes[note_id] = null);
		}
	}

	/**
	 * Display Note Content . 
	 * @function
	 * @param {number} note_id ID of note 
	*/
	displayNoteContent (id) {
		var disContent;
		disContent = "Note ID: " + id + "\n" + this.notes[id].note_content;
		disContent+= "\nBy Author " + this.notes[id].author+ "\n\n";
		//console.log(disContent);
		return disContent;
	}
}

var note = new NotesApplication("Sylvester");
console.log(note.createNote("Sylvester", "In Andela BootCamp"));
// note.createNote("Sylvester", "In Andela BootCamp");
// note.createNote("Sylvester", "In Andela BootCamp");
// console.log(note.createNote("g--ramos", "Code Moster"));
// note.listNotes();
// note.searchNote("Andela");
// note.searchNote("Code");
note.editNote(0, "Code gru");

// var note2 = new NotesApplication("Bayo");
// console.log(note2.createNote("Bayo", "The great guy"));
// console.log(note2.createNote("Albert", "Genius redefined"));
// note2.listNotes();
// note2.searchNote("great");



