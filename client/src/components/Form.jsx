import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const Form = props => {
    const {name, onClickHandler, onSubmitHandler, handleInput} = props;

    return(
        <form onSubmit={onSubmitHandler}>
            <label>Name:</label>
            <input type="text" name="name" value={name.name} onChange={handleInput}/>
            <input type="submit" value="Add"/>
            <button onClick={onClickHandler}>Cancel </button>
        </form>
    )
}

export default Form;