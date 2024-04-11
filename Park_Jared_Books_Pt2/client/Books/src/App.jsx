import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import BookHeader from './components/BookHeader.jsx'
import Home from './views/Home.jsx'
import BookEntry from './views/BookEntry.jsx'
import BookForm from './views/BookForm.jsx'
import BookUpdate from './views/BookUpdate.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <BookHeader />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/:id/details" element={<BookEntry />}></Route>
        <Route path="/create" element={<BookForm />}></Route>
        <Route path="/books/:id/update" element={<BookUpdate />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
