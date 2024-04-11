import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import bookheaderstyle from '../css/BookHeader.module.css'
//put book header into every view, changing the head to appropriate header


const BookHeader = () => {

    //generate the id based on the path
    const path = useLocation().pathname
    const pathStart = path.indexOf("s") + 1
    const id = path.substring(pathStart + 1, path.indexOf("/d"))
    //state for storing the title of book based on id
    const [bookTitle, setBookTitle] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((resp) => {
                setBookTitle(resp.data.title);
            }).catch((err) => {
                console.log(err);
            })
    }, [id])

    const pathHandler = ((pathname) => {
        if (pathname.includes("/details")) {
            return bookTitle
        }
        else if (pathname.includes("/update")) {
            return `Update ${bookTitle}`
        }
        else if (pathname.includes("/create"))
            return "Add a Book"
        else
            return "Book Catalog"
    })

    return (
        <div className={bookheaderstyle.bookHeader}>
            <div className={bookheaderstyle.buttons}>
                <Link to={"/"}><button>Catalog</button></Link>
                <Link to={"/create"}><button>Add Book</button></Link>
            </div>
            <h1>{pathHandler(path)}</h1>
        </div>
    );
};
export default BookHeader;