import './BooksList.css';
import books from './books.json';
import {useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from "./Pagination.tsx";
import Rating from "./Rating.tsx";

interface Book {
    id: number,
    title: string,
    author: string,
    isbn: string,
    rating: number,
}

function BooksListPaging () {
    const [booksState, setBooksState] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('Mount');
            setBooksState(books);
        }, 4000);
        return () => {
            console.log('Unmount');
            clearTimeout(timeoutId);
        }
    },[books])

    const booksPerPage = 5;
    const totalPages = Math.ceil(books.length / booksPerPage);

    const indexOfLastItem = currentPage * booksPerPage;
    const indexOfFirstItem = indexOfLastItem - booksPerPage;
    const currentListOfBooks = books.slice(indexOfFirstItem, indexOfLastItem);
    console.log(currentListOfBooks);

    function onCurrentPageChange(page) {
        console.log('Page changed from ', currentPage);
        setCurrentPage(page);
        console.log('Page changed to ', currentPage);
    }

    function handleRate(id, rating) {
        console.log(id, rating);
        setBooksState((prevState) => {
            return prevState.map((book) => {
                if(book.id === id) {
                    book.rating = rating;
                }
                return book;
            })
        })
    }

    if(booksState.length === 0) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }
    return (
        <>
        <div style={{paddingTop: '10px', paddingBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
            <table>
                <thead>
                <th>Title</th>
                <th>Autor</th>
                <th>ISBN</th>
                <th>Bewertung</th>
                </thead>
                <tbody>
                {
                    currentListOfBooks.map((book) => {
                        return (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <Rating item={book} onRate={handleRate}></Rating>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
        <Pagination currentPage={currentPage}
                totalPages={totalPages} onPageChanged={onCurrentPageChange}></Pagination>
        </>
    )
}

export default BooksListPaging;