import React from 'react'
import './Content.css'
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Params from '../../views/examples/Params';


export default function Content() {
    return (
        <main className='Content'>
            <Routes>
                <Route element={ <Home /> } path="/" />   
                <Route element={ <About /> } path="/about" />
                <Route element={ <Params /> } path="/param/:id" />
                <Route element={ <Params /> } path="/param/:id" />

            </Routes>
        </main>
    )
}
