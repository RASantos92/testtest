import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import FavoriteAuthors from '../components/FavoriteAuthors';



const Main = ({authors}) => {

    return(
        <div>
            <FavoriteAuthors/>
            <Link to="/new">Add Author</Link>
            {
                authors.map((author, idx) => 
                <table>
                    <tr>
                        <th>Author</th>
                        <th>Actions Avaliable</th>
                    </tr>
                    <tr>
                        <td>{author.name}</td>
                        <td><Link to={`/edit/${author._id}`}>Edit</Link></td>
                        <td><Link to="/">Delete</Link></td>
                    </tr>
                </table>
                )
            }
        </div>
    )
}

export default Main;