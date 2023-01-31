import './App.css';
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import {Main} from "./components/Main";
import {AddBook, Book} from "./components/Book";
import {About} from "./components/About";
import {NavBar} from "./components/NavBar";


function App() {
  const [books, setBooks] = useState([
      {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon.",
        comments: [
          {
            id: 1,
            author: "John Doe",
            comment: "This is a great book",
            datetime_of_comment: "2021-03-01 12:00:00"
          }
        ]
      }
    ]);

  return (
    <div className="App" style={{
      'backgroundColor': 'white'
    }}>
      <NavBar
      />
      <Routes>
        <Route path="/" element={<Main
          books={books}
        />} />
        <Route path="/book/:id" element={<Book
          books={books}
          setBooks={setBooks}
        />} />
        <Route path="/addbook" element={<AddBook
          books={books}
          setBooks={setBooks}
        />} />
        <Route path="/about" element={<About
        />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
