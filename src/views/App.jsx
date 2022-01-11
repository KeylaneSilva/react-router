import React from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

export default function App() {
    return (
        <div className='App'> 
        <Router >
                <Menu/>
                <Content />
        </Router>
        </div>
    )
}
