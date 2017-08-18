note = new NoteModel('Hi')
noteList = new NoteListModel(note);
noteList.create('HI')
noteController = new NoteController({}, noteList, NoteListView);
