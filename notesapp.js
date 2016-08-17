/**
 * The Note class holds a constructor
 * that always help in creating the 
 * autor and the note content 
 * whenever the Mote class is created
 * @
 * It uses the NotesApplication class
 * 
*/
class Note {
	constructor (author, note_content) {
		this.author = author;
		this.note_content = note_content;
	}	
	
}

/**
 * NotesApplication holds all the method of a NotesApplication
 * And it creates a constructor that holds an array of notes and their author
 * 
*/
class NotesApplication {
	constructor (author) {
		this.author = author;
		this.notes = [];
	}
	/**
	 * We create a new note contents and the author of the note_content
	 * this content is added to the the notes array next index
	*/	
	createNote (author, note_content) {
		var newNote = new Note(author, note_content);
		this.notes[this.notes.length] = newNote;
		
	}
	/**
	 * List and dispalys all the note.
	 * a For loop goes through the notes array and displays it ID, Contents and Author
	*/
	listNotes () {
		for (var i = 0; i < this.notes.length; i+=1) {
			console.log ("Note ID: "+i+" \n"+this.notes[i].note_content+"\n\nBy Author "+this.notes[i].author);
		} 
		
	}
	/**
	 * This is used to get a note by it ID
	*/
	getNote (note_id) {
		return this.notes[note_id].note_content;
	}
	/**To search note, a For is used to loop through the notes array
	 * a condition is used to check if the notes contents includes the search search_textit gives a boolean true. the we display all the information of that note.
	*/
	searchNote(search_text) {
		for (var i =0; i < this.notes.length; i+=1 ){
			if (this.notes[i].note_content.includes(search_text) === true) {
				console.log("Showing results for search <"+ search_text +">\n\n"+ "Note ID: "+i+" \n"+this.notes[i].note_content+"\n\nBy Author "+this.notes[i].author );
			}
		}
	}
	/**Used to delete a note aslong as a note id id provided
	*/
	deleteNote (note_id) {
		if (note_id) {
			this.notes[note_id] = null;
		}
		
		
	}
	/**This is uded to edit the contents of a note. 
	 * we pass the ID of the contented to be edited and the new_content
	*/
	editNote (note_id, new_content) {
		if (note_id) {
			this.notes[note_id].note_content = new_content;
		}
	}
}


var note = new NotesApplication();
note.createNote("Sylvester", "In Andela BootCamp")
console.log(note.createNote("g--ramos", "Code Moster"));
note.listNotes();
note.searchNote("Code");


