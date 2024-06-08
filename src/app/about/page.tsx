import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto py-8 px-5">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">About StudyRetro</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/studyretro.svg"
                alt="StudyRetro Logo"
                width={300}
                height={100}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                StudyRetro is your premier destination for buying and selling old books. We provide a convenient and hassle-free platform for book enthusiasts to discover rare and vintage books, as well as for sellers to connect with buyers who share their passion for literature.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At StudyRetro, our mission is to preserve the legacy of timeless literature by connecting readers with hard-to-find books from the past. We believe in the power of storytelling to inspire, educate, and entertain, and we are committed to making these literary treasures accessible to all.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our platform offers a wide range of features, including a vintage book marketplace, seller platform, secure transactions, and a vibrant community of book lovers. Whether you're browsing, buying, selling, or connecting with fellow book enthusiasts, StudyRetro has something for everyone.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              Have a question or need assistance? Our dedicated customer support team is here to help. Reach out to us via email at <span className="text-blue-500 cursor-pointer">support@studyretro.com</span> or visit our <span className="text-blue-500 cursor-pointer hover:underline">Help Center</span> for answers to frequently asked questions.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <span className="text-blue-500 cursor-pointer hover:underline">Facebook</span>
              <span className="text-blue-500 cursor-pointer hover:underline">Twitter</span>
              <span className="text-blue-500 cursor-pointer hover:underline">Instagram</span>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
