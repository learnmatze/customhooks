import Rating from "./Rating.tsx";

function BooksListItem ({book, onRate}) {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author ? book.author : "Unbekannt"}</td>
            <td>{book.isbn}</td>
            <td>
                <Rating item={book} onRate={onRate}></Rating>
            </td>
        </tr>
    )
}

export default BooksListItem;