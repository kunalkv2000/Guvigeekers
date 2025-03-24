import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Required for accessibility

const Modalimg = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageClick = async (movieTitle) => {
    setModalIsOpen(true);
    setLoading(true);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${movieTitle}&apikey=eccbd3ad`
      );
      setMovieDetails(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setMovieDetails(null);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setMovieDetails(null);
  };

  return (
    <div>
      {/* Replace with dynamic images */}
      <img
        src={"image-url.jpg"}
        alt="Movie Thumbnail"
        onClick={() => handleImageClick("Movie Title")}
        style={{ cursor: "pointer" }}
      />

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {loading ? (
          <p>Loading...</p>
        ) : movieDetails ? (
          <div>
            <h2>{movieDetails.Title}</h2>
            <p>Year: {movieDetails.Year}</p>
            <p>Genre: {movieDetails.Genre}</p>
            <p>Plot: {movieDetails.Plot}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        ) : (
          <p>No details available.</p>
        )}
      </Modal>
    </div>
  );
};

export default Modalimg;
