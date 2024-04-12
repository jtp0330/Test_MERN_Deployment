import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import bookformstyle from '../css/BookForm.module.css'
const BookForm = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState()
    const [available, setAvailable] = useState(false)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const HandleFormSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/books', {
            title,
            author,
            pages,
            available
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/")
            }).catch(err => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <>
            <form onSubmit={HandleFormSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={(e) => { setTitle(e.target.value) }}></input>
                {errors.title && <span style={{ "color": "red" }}><p>{errors.title.message}</p></span>}
                <label htmlFor="author">Author Name</label>
                <input type="text" id="author" onChange={(e) => { setAuthor(e.target.value) }}></input>
                {errors.author && <span style={{ "color": "red" }}><p>{errors.author.message}</p></span>}
                <label htmlFor="pages">Page Count</label>
                <input type="number" id="pages" onChange={(e) => { setPages(e.target.value) }}></input>
                {errors.pages && <span style={{ "color": "red" }}><p>{errors.pages.message}</p></span>}
                <div className={bookformstyle.checkplease}>
                    <label htmlFor="available">Is it Available?</label>
                    <input type="checkbox" id="available" onChange={() => { setAvailable(!available) }}></input>
                </div>
                <button>Add Book!</button>
            </form >
        </>
    );
};
export default BookForm;