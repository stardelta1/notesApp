class Note {
	constructor (author, note_content) {
		this.author = author;
		this.note_content = note_content;
	}	
	
}

class NotesApplication {
	constructor (author) {
		this.author = author;
		this.notes = [];
	}
	
	createNote (author, note_content) {
		var newNote = new Note(author, note_content);
		this.notes[this.notes.length] = newNote;
		
	}
	
	listNotes () {
		for (var i = 0; i < this.notes.length; i+=1) {
			console.log ("Note ID: "+i+" \n"+this.notes[i].note_content+"\n\nBy Author "+this.notes[i].author);
		} 
		
	}
	
	getNote (note_id) {
		return this.notes[note_id].note_content;
	}
	
	searchNote(search_text) {
		for (var i =0; i <= this.notes.length; i+=1 ){
			if (this.notes[i].note_content.includes(search_text) == true) {
				console.log("Showing results for search <"+ search_text +">\n\n"+ "Note ID: "+i+" \n"+this.notes[i].note_content+"\n\nBy Author "+this.notes[i].author );
			}
		}
	}
	
	deleteNote (note_id) {
		if (note_id) {
			this.notes[note_id] = null;
		}
		
		
	}
	
	editNote (note_id, new_content) {
		if (note_id) {
			this.notes[note_id].note_content = new_content;
		}
	}
}


var created = new NotesApplication("Sat");
console.log(created.createNote("Sylvester", "In Andela BootCamp"));
// created.listNotes();
created.searchNote("Andela");


