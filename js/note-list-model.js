(function(exports){
  function NoteListModel(NoteModel) {
    this._noteModel = NoteModel;
    this._notes = [];
  }

  NoteListModel.prototype = {
    all: function(){
      return this._notes;
    },
    create: function(str){
      var note = new NoteModel(str)
      this._notes.push(note);
      return note;
    }
  };

  exports.NoteListModel = NoteListModel;
})(this);
