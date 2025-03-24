import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Details = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=eccbd3ad`
      );
      const data = await response.json();
      if (data.Search) setMovies(data.Search);
      else alert("No movies found!");
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  const toggleFavorite = (movie) => {
    const updatedFavorites = favorites.some(
      (fav) => fav.imdbID === movie.imdbID
    )
      ? favorites.filter((fav) => fav.imdbID !== movie.imdbID)
      : [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      <div class="relative isolate overflow-hidden bg-white px-6 pt-20 py-2 text-center sm:px-16">
        <p class="mx-auto max-w-xl text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Search for Movies...
        </p>

        <Modal isOpen={showModal} onRequestClose={closeModal}>
          {selectedMovie && (
            <div class="py-8">
              <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row -mx-4">
                  <div class="md:flex-1 px-4">
                    <div class="h-[460px] rounded-lg mb-4">
                      <img
                        class="w-full h-full object-contain"
                        src={selectedMovie.Poster}
                        alt={selectedMovie.Title}
                      />
                    </div>
                    <div class="flex -mx-2 mb-4 justify-center">
                      <div class="w-1/2 px-2">
                        <button
                          class="w-full bg-red-600 text-white py-2 px-4 rounded-full font-bold hover:bg-red-800"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="md:flex-1 px-4">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {selectedMovie.Title}
                    </h2>
                    <div class="flex mb-4">
                      <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">
                          Year :
                        </span>
                        <span class="text-gray-600 font-bold dark:text-gray-300">
                          {" "}
                          {selectedMovie.Year}
                        </span>
                      </div>
                    </div>
                    <div class="flex mb-4">
                      <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">
                          ID :
                        </span>
                        <span class="text-gray-600 font-bold dark:text-gray-300">
                          {" "}
                          {selectedMovie.imdbID}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span class="font-bold text-gray-700 dark:text-gray-300">
                        Description :
                      </span>
                      <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {selectedMovie.Plot}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>

        <div class="min-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <form
            onSubmit={handleSearch}
            class="flex rounded-md border-2 border-[#099f4e] overflow-hidden max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Vikram / Lucy / "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
            />
            <button
              type="submit"
              class="flex items-center justify-center bg-[#099f4e] px-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                class="fill-white"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </form>
          <div class="p-10">
            <ul class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {movies.map((movie) => (
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
                    <a href="#!">
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
                      It is a {movie.Type} that was released in {movie.Year}.
                      Its ID is <b>{movie.imdbID}</b>. Click on download to get
                      poster.
                    </p>
                  </div>

                  <div class="px-6 py-3 flex flex-col sm:flex-row xl:flex-row items-center justify-between bg-gray-100">
                    <button
                      class={
                        favorites.some((fav) => fav.imdbID === movie.imdbID)
                          ? "text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                          : "text-white bg-[#099f4e] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      }
                      onClick={() => toggleFavorite(movie)}
                      type="button"
                    >
                      {favorites.some((fav) => fav.imdbID === movie.imdbID)
                        ? "Remove"
                        : "Favourite"}
                    </button>

                    <button
                      class="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => openModal(movie)}
                      type="button"
                    >
                      Details
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
