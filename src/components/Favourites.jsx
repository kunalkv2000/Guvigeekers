import React, { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div class="min-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h1 class="relative isolate overflow-hidden text-3xl text-center sm:px-16 font-bold">
        Your Favourite Movies
      </h1>
      <div class="p-10">
        <ul class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {favorites.map((movie) => (
            <li
              key={movie.imdbID}
              class="rounded overflow-hidden shadow-lg flex flex-col"
            >
              <div class="relative">
                <a href="#">
                  <img
                    class="w-full h-[300px] object-contain  bg-gradient-to-b from-black to-[#5beb9e]"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                  <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-black opacity-40"></div>
                </a>
                <a href={movie.Poster} target="_blank">
                  <div class="text-xs absolute top-0 right-0 rounded-3xl bg-[#007235] px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-black transition duration-500 ease-in-out">
                    <b class="capitalize">Download</b>
                  </div>
                </a>
              </div>
              <div class="px-6 py-4 mb-auto">
                <a
                  href="#"
                  onClick={() => handleImageClick("{movie.Year}")}
                  class="font-medium text-lg hover:text-[#099f4e] transition duration-500 ease-in-out inline-block mb-2"
                >
                  {movie.Title}
                </a>
                <p class="text-black text-sm">
                  It is a {movie.Type} that was released in {movie.Year}. Its ID
                  is <b>{movie.imdbID}</b>. Click on download to get poster.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorites;
