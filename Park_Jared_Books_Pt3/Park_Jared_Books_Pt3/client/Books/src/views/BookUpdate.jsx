import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import bookupdatestyle from "../css/BookUpdate.module.css"

const BookUpdate = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState(0)
    const [available, setAvailable] = useState(false)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const { id } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((resp) => {
                console.log(resp.data)
                setTitle(resp.data.title);
                setAuthor(resp.data.author);
                setPages(resp.data.pages);
                setAvailable(resp.data.available);
            }).catch((err) => {
                console.log(err);
            })
    }, [id])
    //edit from database
    const HandleUpdate = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/books/${id}`, {
            title,
            author,
            pages,
            available
        })
            .then(resp => {
                console.log(resp.data)
                navigate("/")
            }).catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <form onSubmit={HandleUpdate}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={(e) => { setTitle(e.target.value) }} value={title}></input>
            {errors.title && <span style={{ "color": "red" }}><p>{errors.title.message}</p></span>}
            <label htmlFor="author">Author Name</label>
            <input type="text" id="author" onChange={(e) => { setAuthor(e.target.value) }} value={author}></input>
            {errors.author && <span style={{ "color": "red" }}><p>{errors.author.message}</p></span>}
            <label htmlFor="pages">Page Count</label>
            <input type="number" id="pages" onChange={(e) => { setPages(e.target.value) }} value={pages}></input>
            {errors.pages && <span style={{ "color": "red" }}><p>{errors.pages.message}</p></span>}
            <div className={bookupdatestyle.checkplease}>
                <label htmlFor="available">Is it Available?</label>
                <input type="checkbox" id="available" onChange={() => { setAvailable(!available) }} checked={available}></input>
            </div>
            <button>Update</button>
        </form>
    )
}
export default BookUpdate;