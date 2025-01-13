import { useState } from 'react'
import './App.css'
import TodoList from '../component/TodoList'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import CompletedTodos from '../component/CompletedTodos';
import UncompletedTodos from '../component/UncompletedTodos';
import NavBar from '../component/NavBar';
function App() {

  return (
    <NavBar/>
  )
}

export default App
