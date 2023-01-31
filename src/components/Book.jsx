import {Navigate, useParams} from "react-router-dom";
import {Comments} from "./Comments";
import {useEffect, useState} from "react";

export function Book({books, setBooks}) {
  const {id} = useParams();
  const book_id = parseInt(id);
  const book = books.find((book) => book.id === book_id);

  if (!book) {
    return <Navigate to="/404" />;
  }

  return (
    <main>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <h2>Comments</h2>
      <ul>
        <Comments
          book_id={book_id}
          books={books}
          setBooks={setBooks}
        />
      </ul>
    </main>
  );
}

export function AddBook({books, setBooks}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const new_book = {
          id: books.length + 1,
          title: title,
          description: description,
          author: author,
          comments: [],
        };
        setBooks([...books, new_book]);
        setTitle("");
        setAuthor("");
        setDescription("");
      }}
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
