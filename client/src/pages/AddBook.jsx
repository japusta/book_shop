import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddBook = () => {

  const navigate = useNavigate()

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
      await axios.post("http://localhost:8800/books", input)
      navigate("/")
    }
    catch(err){
      setError(true)
    }

  }

  return (
    <div className="form">
    <h1>Add New Book</h1>
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
    <button className='form-button' onClick={handleClick}>Add</button>
    {error && "Something went wrong!"}
    <Link to="/">See all books</Link>
  </div>
  )
}

export default AddBook