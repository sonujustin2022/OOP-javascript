class Library {
  // property
  bookDetails = {
    101: {
      bookId: 101,
      title: "JavaScript Basics",
      author: "John Doe",
      availableCopies: 3,
    },
    102: {
      bookId: 102,
      title: "Learn React",
      author: "Jane Smith",
      availableCopies: 5,
    },
    103: {
      bookId: 103,
      title: "Mastering Node.js",
      author: "David Wilson",
      availableCopies: 2,
    },
    104: {
      bookId: 104,
      title: "Angular for Beginners",
      author: "Sophia Lee",
      availableCopies: 4,
    },
  };

  // methods to implement:
  // 1. validateBook(bookId)  → check if book exists

  toValidate(bookId){
    if(Object.hasOwn(this.bookDetails,bookId)){
        return true;
    }else {
        return false;
    }
  }

  // 2. borrowBook(bookId) → decrease availableCopies by 1 (if available)


  borrowed(bookId){
    let isValid = this.toValidate;
    if(isValid){

        if(Object.hasOwn(this.bookDetails,bookId)){
            let book = this.bookDetails[bookId];
            return book.availableCopies -= 1;
        }
    }else{
        return false;
    }

  }

  // 3. returnBook(bookId) → increase availableCopies by 1


  returned(bookId){
    let isValid = this.toValidate;
    if(isValid){

        if(Object.hasOwn(this.bookDetails,bookId)){
            let book = this.bookDetails[bookId];
            return book.availableCopies += 1;
        }
    }else{
        return false;
    }

  }


  // 4. checkAvailability(bookId) → display available copies
}

let LibraryObj = new Library();

// let isValid = LibraryObj.toValidate(104);

// isValid?console.log("this book is present"):console.log("not present")

// let borrowedBook = LibraryObj.borrowed(104);
// console.log(borrowedBook," copies available");

let returnedBook = LibraryObj.returned(104);
console.log(returnedBook," copies available");