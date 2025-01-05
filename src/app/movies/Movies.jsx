"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteMovie, setMovies } from "@/store/movie-store/page";
import UpdateModal from "../updateModal/page";

export default function Movies({ initialMovies = [] }) {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.movie.movie);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    if (initialMovies.length > 0) {
      dispatch(setMovies(initialMovies));
    }
  }, [initialMovies, dispatch]);

  const handleDelete = (id) => {
    alert("Dikkatli Olun");
    dispatch(deleteMovie(id));
  };

  const handleUpdate = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1 className="text-center mt-4 mb-4">
        Movies {moviesList?.length > 0 && moviesList.length}
      </h1>
      <div className="d-flex justify-content-center flex-wrap g-4">
        {moviesList?.map((movie) => (
          <div className="card" style={{ width: "18rem" }} key={movie.id}>
            <img
              className="card-img-top"
              src={movie.poster_path ? IMG_API + movie.poster_path : ""}
              alt={movie.original_title || "No Title"}
            />
            <div className="card-body">
              <h5 className="card-title">
                {movie.original_title || "No Title"}
              </h5>
              <p className="card-text">
                {movie.vote_average || "No Description"}
              </p>
              <div className="d-flex justify-content-between">
                <i
                  onClick={() => handleDelete(movie.id)}
                  className="bi bi-archive-fill text-danger mb-8"
                  style={{ cursor: "pointer" }}
                >
                  Delete
                </i>
                <i
                  className="bi bi-pen text-primary"
                  onClick={() => handleUpdate(movie)}
                  style={{ cursor: "pointer" }}
                >
                  Edit
                </i>
              </div>
            </div>
          </div>
        ))}

        {/* Güncelleme (Edit) Modal’ı */}
        {selectedMovie && (
          <UpdateModal
            movie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        )}
      </div>
    </div>
  );
}
