import Image from "next/image";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  //get movie
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-5xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie image"
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3">movie : {movie.title || movie.name}</h2>
          <p className="mb-3 text-xl">
            <span className="font-semibold mr-1">OverView :</span>
            {movie.overview}
          </p>
          <p className="flex items-center">
            {movie.first_air_date || movie.release_date}
            <AiFillHeart className="text-red-500 ml-3 mr-1" />
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
