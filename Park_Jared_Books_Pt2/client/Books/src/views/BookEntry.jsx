import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import bookentrystyle from "../css/BookEntry.module.css"

const BookEntry = () => {
    const [book, setBook] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((resp) => {
                setBook(resp.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [id])
    //delete from database
    const HandleBorrow = () => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res.data)
                navigate("/")
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className={bookentrystyle.book_entry}>
            <div className="entry_head">
                <span style={{ fontWeight: "bold" }}><p>{book.title}</p></span>
                <p>By {book.author}</p>
            </div>
            <div className="entry_body">
                <p>Page count: {book.pages}</p>
                {book.isAvailable ?<span style={{ "color": "green" }}><p>Available for borrowing</p></span> : <span style={{ "color": "red" }}><p>Book is already borrowed</p></span>}
            </div>
            <div className="entry_head">
                <button onClick={HandleBorrow}>Borrow</button>
            </div>
        </div>
    )
}
export default BookEntry