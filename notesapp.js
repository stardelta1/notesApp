class NotesApplication {
	consteuctor (author) {
		this.author = author;
		this.notes = [];
	}
	
	create (note) {
		this.notes[note] = note;
	}
	
	listNotes () {
		
	}
	
	getNote (note_id) {
		return	this.notes[note_id];
	}
	
	search(search_text) {
		getNote
	}
}
