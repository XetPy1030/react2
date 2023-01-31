import {Link, Navigate} from "react-router-dom";


export function Main({books}) {
  // book: id, title, author, description, comments(id, author, comment, datetime_of_comment)
  return (
    <main>
      <h1>Books</h1>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <Link to={`/book/${book.id}`}>View</Link>
            </li>
          );
        })}
      </ul>
    </main>
  )
}