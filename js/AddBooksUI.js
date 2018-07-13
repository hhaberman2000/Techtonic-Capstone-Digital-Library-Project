var AddBooksUI = function(container){
  Library.call(this);
  this._tempBookShelf = new Array();
  this.$container = container;
};

AddBooksUI.prototype = Object.create(Library.prototype);
//importing from Library

AddBooksUI.prototype.init = function() {
  this._bindEvents();
};

AddBooksUI.prototype._bindEvents = function () {
  $('#addBooks-btn').on('click', $.proxy(this._handleModalOpen, this));
  $('#add-books-queue').on('click', $.proxy(this._handleQueueBooks, this));
  $('#add-books-button').on('click', $.proxy(this._handleAddBooksLib, this));
};


AddBooksUI.prototype._handleModalOpen = function () {
  this.$container.modal('show');
};


AddBooksUI.prototype._handleQueueBooks = function () {
  // e.preventDefault();
  // var Title = $("#book-title-add-book").val();
  // var author = $("#add-book-author").val();
  // var Pages = $("#add-book-pages").val();
  // var Published = $("#add-book-pub-date").val();
  // var Rating = $("#ratingSelected").val();
  // var Synopsis = $("#SynopsisText").val();
  //
  //   var queueBook = new Book( {
  //   Title : Title,
  //   author : author,
  //   Pages : Pages,
  //   Published : new Date(Published),
  //   Rating : Rating,
  //   Synopsis: Synopsis,
  //   });
    // var bookObj = new Book({
    //     Title : Title,
    //     author : author,
    //     Pages : Pages,
    //     Published : new Date(Published),
    //     Rating : Rating,
    //     Synopsis: Synopsis,
    //     });

    var bookObj = new Object();
    var queueBook = this.$container.find("#formentry").serializeArray();
    console.log(queueBook);
      $.each(queueBook, function(i, objProp) {
          console.log(objProp);
          console.log(objProp.name);
          var Key = objProp.name
          var Value = objProp.value
          this.bookObj.append(Key , Value);

      });

    console.log(queueBook);
    console.log(bookObj)
    this.hasBooks = false;
    for ( var i=0; i < window.bookShelf.length; i++) {
     if (window.bookShelf[i].Title === bookObj.Title) {
       alert("Book title has already been added.");
       return this.hasBooks;
       }
     }
     this._tempBookShelf.push(bookObj);
     console.log(this._tempBookShelf);
     //alert("The book " + Title + " has been added to the queue.");
     if (this._tempBookShelf.length > 0) {
       $('#books-in-queue').html(this._tempBookShelf.length + " book(s) to add");
       console.log(this._tempBookShelf);
     } else {
       $('#books-in-queue').html(this._tempBookShelf.length);
     }

     //return this.hasBooks=true;

};


AddBooksUI.prototype._handleAddBooksLib = function () {
return this.addBooks(this._tempBookShelf);
};


// AddBooksUI.prototype._addBooksLib = function( ) {
//   //sdd books to queue
// }

$(function(){
  window.gAddBooksUI = new AddBooksUI($('#add-books-modal'));
  window.gAddBooksUI.init();
});
