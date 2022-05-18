import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import NavBar from "../navbar/navBar";
import {paths} from "../common/constants/constants";
import Home from "./home";
import {BookDetails} from "../books/bookDetails";


const AppRoutes = () => (
    <>
        <NavBar />
        <Container>
            <Routes>
                <Route exact path={paths.HOME} element={<Home/>}/>
                <Route exact path={paths.BOOK_DETAILS} element={<BookDetails/>}/>
            </Routes>
        </Container>
    </>
);

export default AppRoutes;
