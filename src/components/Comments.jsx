import {useState} from "react";

export function Comments({book_id, books, setBooks}) {
  const book = books.find((book) => book.id === book_id);
  const comments = book.comments.slice().reverse();

  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const new_comment = {
            id: comments.length + 1,
            author: author,
            comment: comment,
            datetime_of_comment: new Date().toISOString().slice(0, 19).replace('T', ' '),

          };
          const new_books = books.map((book) => {
              if (book.id === book_id) {
                return {
                  ...book,
                  comments: [...book.comments, new_comment],
                };
              }
              return book;
            }
          );
          setBooks(new_books);
          setComment("");
          setAuthor("");
        }}
      >
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
      {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <p>{comment.author}</p>
              <p>{comment.comment}</p>
              <p>{comment.datetime_of_comment}</p>
            </li>
          );

        }
      )}
    </>
  )
}