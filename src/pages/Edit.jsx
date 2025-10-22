import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        bookName: "",
        bookDescription: "",
        bookPrice: "",
        authorName: "",
        publishedAt: "",
        publication: "",
        bookImage: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const response = await axios.patch(`http://localhost:3000/edit/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        if (response.status === 200) {
            alert("Book updated successfully!");
            navigate("/");
        }
        console.log("Form submitted:", response);
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target
        setFormData({
            ...formData,
            [name]: name === "bookImage" ? files[0] : value
        })
    }
    const fetchSingleBook = async () => {
        // Fetch single book details based on ID from URL params
        const response = await axios.get(`http://localhost:3000/book/${id}`);
        if (response.status === 200) {
            setFormData(response.data.data);
        } else {
            alert("Error fetching book data")
        }
    }
    useEffect(() => {
        fetchSingleBook();
    }, [])

    return (
        <>
            <Navbar />
            {/* Book Entry Form using Tailwind CSS */}
            <form className="max-w-md mx-auto bg-white p-6 m-5 rounded-2xl shadow-lg space-y-5">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Edit Book</h2>
                <div>
                    <label htmlFor="bookName" className="block text-sm font-medium text-gray-700">Book Name</label>
                    <input value={formData.bookName} onChange={handleChange} type="text" id="bookName" name="bookName" placeholder="Enter book name" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="bookDescription" className="block text-sm font-medium text-gray-700">Book Description</label>
                    <textarea value={formData.bookDescription} onChange={handleChange} id="bookDescription" name="bookDescription" rows={3} placeholder="Write a short description..." className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" defaultValue={""} />
                </div>
                <div>
                    <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-700">Book Price (₹)</label>
                    <input value={formData.bookPrice} onChange={handleChange} type="number" id="bookPrice" name="bookPrice" placeholder="Enter price" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">Author Name</label>
                    <input value={formData.authorName} onChange={handleChange} type="text" id="authorName" name="authorName" placeholder="Enter author name" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-700">Published At</label>
                    <input value={formData.publishedAt} onChange={handleChange} type="date" id="publishedAt" name="publishedAt" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="publication" className="block text-sm font-medium text-gray-700">Publication</label>
                    <input value={formData.publication} onChange={handleChange} type="text" id="publication" name="publication" placeholder="Enter publication name" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="bookImage" className="block text-sm font-medium text-gray-700">Book Image</label>
                    <input onChange={handleChange} type="file" id="bookImage" name="bookImage" placeholder="https://example.com/book.jpg" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <button onClick={handleSubmit} type="submit" className="w-full py-2.5 mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Submit
                </button>
            </form>


        </>
    )
}

export default Edit
