import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


import './App.css'
import AddUser from './components/AddUser'
import GetUser from './components/GetUser'

function App() {

  const route = createBrowserRouter ([
       {
        path: '/',
        element:<GetUser />
       },
       {
        path: '/create',
        element: <AddUser />
       },
       {
        path: '/edit',
        element:'editpage'
       },
      
  ])


  return (
      <div>
          
          <RouterProvider router={route}>

          </RouterProvider>
  
      </div>
  )
}

export default App
