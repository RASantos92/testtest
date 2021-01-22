import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import FavoriteAuthors from '../components/FavoriteAuthors';
import Form from "../components/Form";



const AddNewAuthor = () => {
    const [name, setName] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8888/authors", name
        )
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    const onClickHandler = e => {
        navigate('/')
    }
    const handleInput = e => {
        setName({...name,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <FavoriteAuthors />
            <h2> Add new author </h2>
            <Link to="/">Home</Link>
            <Form name={name} onClickHandler={onClickHandler} onSubmitHandler={onSubmitHandler} handleInput={handleInput}/> 
        </div>
    )
}


export default AddNewAuthor;