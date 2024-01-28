import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


import './App.css'

function App() {

  const route = createBrowserRouter ([
       {
        path: '/',
        element:'homepage'
       },
       {
        path: '/add',
        element:'addpage'
       },
       {
        path: '/edit',
        element:'editpage'
       },
       {
        path: '/delete',
        element:'deletepage'
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
