import Header from "@/components/Header/Header";
import Link from "next/link";
import Image from "next/image";
import { books } from '../../../data/books'


const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105">
      <div className="relative h-56 w-full mb-4">
      </div>
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-700 mb-4">{book.author}</p>
      <Link href={`/books/${book.id}`} className="text-blue-500 hover:underline">View Details
      </Link>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to StudyRetro</h1>
          <p className="text-xl mb-8">Your go-to platform for buying and selling old books.</p>
          <Link href="/shop"className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full transition-all duration-200">
              Shop Now

          </Link>
        </div>
      </section>
      <main className="container mx-auto py-8 px-5">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Discover Your Next Read</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose StudyRetro?</h2>
          <p className="text-lg text-gray-700 mb-6">
            At StudyRetro, we believe in the power of books to change lives. Our platform connects book enthusiasts with rare and vintage books, ensuring that these literary treasures are preserved and enjoyed by future generations.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Wide selection of vintage books</li>
            <li>Easy-to-use platform for buying and selling</li>
            <li>Secure transactions and reliable customer support</li>
            <li>Community of passionate book lovers</li>
          </ul>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-700 mb-6">
            Sign up for a StudyRetro account today and join a community of book enthusiasts. Whether you're looking to buy rare books or sell your collection, you'll find a welcoming and supportive community here.
          </p>
          <Link href="/register" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full transition-all duration-200">
              Get Started
              </Link>
        </section>
      </main>
     
    </div>
  );
};

export default Homepage;