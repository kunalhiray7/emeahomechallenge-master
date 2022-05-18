import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BookCard} from "../books/bookCard";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Home() {
    const classes = useStyles();

    const [books, setBooks] = useState({});
    const [error, setError] = useState({});

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('http://localhost:3000/api/books')
            const books = await response.json();
            setBooks(books);
        }
        fetchBooks().catch(error => setError(error));
    }, []);

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <BookCard books={books} />
            </main>
        </div>
    );
}
