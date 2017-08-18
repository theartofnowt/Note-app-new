(function(exports){
  function NoteModel(str) {
    this._text = str;
  }

  NoteModel.prototype = {
    text: fucntion(){
      return this._text;
    }
  };

  exports.NoteModel = NoteModel;
})(this)
