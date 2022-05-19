import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BookCard} from "../books/bookCard";
import {fetchBooks} from "../api/booksApi";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Home() {
    const classes = useStyles();

    const [books, setBooks] = useState({});
    const [error, setError] = useState({});

    React.useEffect(() => {
        fetchBooks().then(setBooks).catch(setError);
    }, []);

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <BookCard books={books}/>
            </main>
        </div>
    );
}
