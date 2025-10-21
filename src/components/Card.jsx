import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ book }) => {
    return (
        <>
        <Link to={`/single/${book._id}`}>
            {/* Book Card Component using Tailwind CSS (No React) */}
            <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-56 w-full bg-gray-100 flex items-center justify-center">
                    <img src={book.bookImage} alt="Book Cover" className="object-cover h-full w-full" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                    <header className="mb-2">
                        <h3 className="text-lg font-semibold leading-tight text-gray-900 truncate">
                            {book.bookName}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">by {book.authorName}</p>
                    </header>
                    <div className="text-xs text-gray-500 mb-3">
                        <span className="mr-2">Published: {book.publishedAt}</span>
                        <span className="mx-1">•</span>
                        <span>TechPress Publication</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                        {book.bookDescription}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm text-gray-500">Price</span>
                            <span className="text-lg font-medium text-gray-900">₹ {book.bookPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Card
