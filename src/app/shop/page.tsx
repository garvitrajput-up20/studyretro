'use client';
import { useState } from "react";
import { books } from "../../../data/books"; // Adjust the path based on your project structure
import Header from "@/components/Header/Header";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105">
      <div className="relative h-56 w-full mb-4">
      </div>
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-700 mb-4">{book.author}</p>
      <Link href={`/books/${book.id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const categories = ["All", ...new Set(books.map((book) => book.category))];
  const genres = ["All", ...new Set(books.map((book) => book.genre))];

  const filteredBooks = books.filter(
    (book) =>
      (selectedCategory === "All" || book.category === selectedCategory) &&
      (selectedGenre === "All" || book.genre === selectedGenre)
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Shop</h1>
          <p className="text-xl mb-8">Explore our collection of vintage and rare books.</p>
          <Link
            href="/"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </header>
      <main className="container mx-auto py-8 px-5">
        <div className="mb-8">
          <label htmlFor="category" className="mr-2">
            Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-2 py-1"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="genre" className="mr-2">
            Genre:
          </label>
          <select
            id="genre"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="border px-2 py-1"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 StudyRetro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
