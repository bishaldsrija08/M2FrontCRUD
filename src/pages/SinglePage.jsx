import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar";

const SinglePage = () => {
    const navigate = useNavigate();
    const [book, setBook] = useState({});
    const { id } = useParams();
    const fetchSingleBook = async () => {
        // Fetch single book details based on ID from URL params
        const response = await axios.get(`http://localhost:3000/book/${id}`);
        setBook(response.data.data);
        console.log(response.data.data);
    }
    useEffect(() => {
        fetchSingleBook();
    }, [])

    const handleDelete = async () => {
        const response = await axios.delete(`http://localhost:3000/delete/${id}`)
        if (response.status === 200) {
            alert("Book deleted successfully!")
            navigate("/")
        }
    }
    return (
        <>
            <Navbar />
            <div className="max-w-4xl w-full bg-white shadow-lg m-4 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    {/* Book Image */}
                    <div className="bg-gray-100 flex items-center justify-center">
                        <img src={book.bookImage || "https://via.placeholder.com/400x500.png?text=Book+Cover"} alt="Book Cover" className="object-cover w-full h-full" />
                    </div>
                    {/* Book Info */}
                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.bookName || "Loading..."}</h1>
                            <p className="text-lg text-gray-600 mb-4">by {book.authorName || "Loading..."}</p>
                            <div className="text-sm text-gray-500 mb-4">
                                <span className="mr-2">Published: {book.publishedAt || "Loading..."}</span>
                                <span className="mx-1">•</span>
                                <span>{book.publication || "Loading..."}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {book.bookDescription || "Loading book description..."}
                            </p>
                            <div className="flex items-baseline gap-3 mb-6">
                                <span className="text-gray-500">Price:</span>
                                <span className="text-2xl font-semibold text-gray-900">₹ {book.bookPrice || "Loading..."}</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200">
                                Edit
                            </button>
                            <button onClick={handleDelete} className="flex-1 py-2.5 bg-red-100 hover:bg-red-200 text-red-700 font-medium rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-200">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SinglePage
