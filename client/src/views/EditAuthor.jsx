import React, {useEffect, useState} from 'react';
import FavoriteAuthors from "../components/FavoriteAuthors";
import Form from '../components/Form';
import {Link, navigate} from '@reach/router';
import axios from 'axios';


const EditAuthor = props => {

    const [name, setName] = useState({
        name: ""
    })
    
    useEffect(()=> {
        axios.get(`http://localhost:8888/authors/${props.id}`)
        .then(res=> {
            setName(res.data);
        })
        .catch(err=> {
            console.log(err);
        })
    },[props])

    
    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8888/authors/${props.id}`, name)
        .then(res=>{
            console.log(name);
        })
        
    } 

    const handleInput = e => {
        setName({...name,[e.target.name]:e.target.value})
    }

    const onClickHandler = e => {
        navigate('/')
    }

    return (
        <div>
            <h1>{name.name}</h1>
            <FavoriteAuthors/>
            <h2>Edit Author</h2>
            <Link to="/">Home</Link>
            <Form name={name} onSubmitHandler={handleSubmit} handleInput={handleInput} onClickHandler={onClickHandler}/>
        </div>
    )
}

export default EditAuthor;