import { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios"
import Navbar from "../components/Navbar"

const Home = () => {
    const [books, setBooks] = useState([])
    const fetchAllBooks = async () => {
        const response = await axios.get("http://localhost:3000/books")
        setBooks(response.data.data)
        console.log(response.data.data)
    }
    useEffect(() => {
        fetchAllBooks()
    }, [])
    
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap gap-6 justify-center p-6">
                {books.map((book) => (
                    <Card key={book._id} book={book} />
                ))}
            </div>
        </>
    )
}

export default Home
