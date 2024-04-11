import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import homestyle from "../css/Home.module.css"


const Home = () => {
    const [books, setBooks] = useState([]);

    //get all books from mongodb using axios api call
    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className={homestyle.home}>
            {/* use axios to get and display all books in mongodb cluster in table */}
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Page Count</th>
                        <th>isAvailable</th>
                        <th>Book Page</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book) => (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.pages}</td>
                                <td>{book.isAvailable ? "Yes" : "No"} {/*| <Link to={`/books/${book._id}/update`}>Edit</Link>*/}</td>
                                <td><Link to={`/books/${book._id}/details`}><button>Book Details</button></Link ></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};
export default Home;