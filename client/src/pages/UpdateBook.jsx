import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const UpdateBook = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2]

  const [error,setError] = useState(false)

  const[input,setInput] = useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  })

  const handleChange = (e) => {
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/books/" + bookId, input)
      navigate("/")
    }
    catch(err){
      setError(true)
    }

  }

  return (
    <div className="form">
    <h1>Update Book</h1>
    <input
      type="text"
      placeholder="Book title"
      name="title"
      onChange={handleChange}
    />
    <textarea
      rows={5}
      type="text"
      placeholder="Book desc"
      name="desc"
      onChange={handleChange}
    />
    <input
      type="number"
      placeholder="Book price"
      name="price"
      onChange={handleChange}
    />
    <input
      type="text"
      placeholder="Book cover"
      name="cover"
      onChange={handleChange}
    />
    <button className='form-button' onClick={handleClick}>Update</button>
    {error && "Something went wrong!"}
    <Link to="/">See all books</Link>
  </div>
  )
}

export default UpdateBook