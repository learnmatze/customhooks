import './BooksList.css';
import books from './books.json';
import BooksListItem from "./BooksListItem.tsx";
import {useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import BooksListPaging from "./BooksListPaging.tsx";

interface Book {
    id: number,
    title: string,
    author: string,
    isbn: string,
    rating: number,
}

const initialBooks: Book = {}

function BooksList() {
    const [booksState, setBooksState] = useState([]);

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
            <div style={{paddingTop: '150px', paddingBottom: '150px', paddingRight:'10px', paddingLeft: '10px'}}>
                <table>
                    <thead>
                    <th>Title</th>
                    <th>Autor</th>
                    <th>ISBN</th>
                    <th>Bewertung</th>
                    </thead>
                    <tbody>
                    {booksState.map((book) => {
                        return (<BooksListItem key={book.id} book={book} onRate={handleRate}></BooksListItem>)
                    })}
                    </tbody>
                </table>
                <BooksListPaging></BooksListPaging>
            </div>
        </>
        )
        };

            export default BooksList;