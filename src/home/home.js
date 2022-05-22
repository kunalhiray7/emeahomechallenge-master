import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BookCard} from "../books/bookCard";
import {fetchBooks} from "../api/booksApi";
import {Error} from "../common/components/error";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Home() {
    const classes = useStyles();

    const [books, setBooks] = useState({});
    const [error, setError] = useState(undefined);

    React.useEffect(() => {
        fetchBooks().then(setBooks).catch(setError);
    }, []);

    return <>
        {
            error !== undefined ? (
                    <Error id="error" message={`Error while fetching books! - ${error.message}`}/>)
                : (
                    <div className={classes.root}>
                        <main className={classes.content}>
                            <BookCard books={books}/>
                        </main>
                    </div>
                )
        }
    </>;
}
