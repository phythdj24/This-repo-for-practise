
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditUser = () => {


    const users = {
        firstname:"",
        lastname:"",
        email:"",
        
      }

      const {id} = useParams();
      const [user, setUser] = useState(users);

      const inputHandler= (e)=>{
        const {name,value} = e.target;
        setUser({...user, [name]:value})
      }

      useEffect(()=>{
          
        axios.get(`http://localhost:8000/api/getoneuser/${id}`).then((response)=>{setUser(response.data)}).catch((error)=> console.log(error))
    
      },[id])

      const submitForm = async(e)=>{
        e.preventDefault();
        await axios
          .put(`http://localhost:8000/api/update/${id}`, user)
          .then((response) => {
            console.log(response);
          })
          .catch(err => console.log(err));
      }


  return (
    <div>
        
        <form onSubmit={submitForm} >
        <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          value={user.firstname}
          onChange={inputHandler}
          autoComplete="off"
          name="firstname"
          placeholder="Type..."
        />

        <label htmlFor="lastname">lastname</label>
        <input
          type="text"
          value={user.lastname}
          onChange={inputHandler}
          autoComplete="off"
          name="lastname"
          placeholder="Type..."
        />

        <label htmlFor="email">email</label>
        <input
          type="text"
          value={user.email}
          onChange={inputHandler}
          autoComplete="off"
          name="email"
          placeholder="Type..."
        />

        <label htmlFor="firstname">password</label>
        <input
          type="text"
          onChange={inputHandler}
          autoComplete="off"
          name="password"
          placeholder="Type..."
        />

        <button type="submit">Update</button>
      </form>



    </div>
  )
}

export default EditUser
