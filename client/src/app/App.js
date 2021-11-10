import React from 'react'
import Home from '../pages/Home'
import UsersList from '../pages/UsersList'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserStats from '../pages/UserStats'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usersList/:page" element={<UsersList/>}/>
                <Route path="/usersStats/:id" element={<UserStats/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
