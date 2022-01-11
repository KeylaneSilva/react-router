import React from 'react'
import './Content.css'
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Params from '../../views/examples/Params';
import NaoEncontrada from '../../views/examples/NaoEncontrada';


export default function Content() {
    return (
        <main className='Content'>
            <Routes>
                <Route element={ <Home /> } path="/" exact />   
                <Route element={ <About /> } path="/about" exact/>
                <Route element={ <Params /> } path="/param/:id" exact/>
                <Route element={ <Params /> } path="/param/:id" exact/>
                <Route element={ <NaoEncontrada />} path="*"/>
            </Routes>
        </main>
    )
}
