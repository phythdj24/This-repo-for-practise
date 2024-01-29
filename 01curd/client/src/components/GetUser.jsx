import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const GetUser = () => {


  const [users, setUsers] = useState([])

  useEffect(()=>{
     

    const FetchData =async()=>{
       const res = await axios.get('http://localhost:8000/api/getall')
       setUsers(res.data)
    }

    FetchData()

  },[])

  return (
    <div>

        <table border={1} cellPadding={10} cellSpacing={0}>

        <thead>

<tr>
    <th>S.NO</th>
    <th>Fullanme</th>
    <th>email</th>
    <th>Actions</th>
</tr>
</thead>

<tbody>

  {
    users.map((user,index)=>{
      return (
                                 <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.firstname} {user.lastname} </td>
                                <td>{user.email}</td>
                                <td>
                                  <button>delete</button>
                                <Link to={`/edit/`+user._id}>
                                  <button>Edit</button>
                                  </Link>
                                </td>



   </tr>

      )
    })

  }

    


</tbody>



        </table>

        


    </div>
  )
}

export default GetUser