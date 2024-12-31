import React from "react";

const BestSeles = () => {
  const books = [
    {
      _id: "6766df71a4c60955a8d95403",
      img: "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      title: "To Kill a Mockingbird",
      quantity: "937179",
      author: "Harper Lee",
    },
    {
      _id: "6766df75a4c60955a8d95404",
      img: "https://images.squarespace-cdn.com/content/v1/60f8644f48138724a9b44175/1668190274200-ITUZE67287ASKF65SLPK/whennooneiswatching.jpg",
      title: "The Girl with the Dragon Tattoo",
      quantity: "937179",
      author: "Stieg Larsson",
    },
    {
      _id: "6766df78a4c60955a8d95405",
      img: "https://assets.brightspot.abebooks.a2z.com/dims4/default/c0af263/2147483647/strip/true/crop/195x300+0+0/resize/195x300!/format/jpg/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.us-west-2.amazonaws.com%2F9a%2Fef%2Fd4bf8b1a40d180e2e93fddc869bb%2Fbest-history01.jpg",
      title: "Moby-Dick",
      quantity: "937179",
    },
    {
      _id: "6766df7ca4c60955a8d95406",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJL02UQ2hndNAkhmq_BrCyfam3evCqsFhm_g&s",
      title: "The Silent Patient",
      quantity: "937179",
      author: "Alex Michaelide",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary underline font-customRubik">
          Our Best Books
        </h2>
        <p className="text-gray-600 mt-2">
          Discover the books that our readers love the most.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="relative bg-white shadow-md rounded-lg overflow-hidden p-4"
          >
            <div className="relative">
              <img
                src={book.img}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              {/* <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                {book.discount}
              </span> */}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-600">By {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeles;
