import React, { useState } from "react";
import Select from "react-dropdown-select";

const options = [
    { value: "All", label: "All" },
    {
        value: 'Thriller',
        label: 'Thriller'
    },
    {
      value: 'Fantasy',
      label: 'Fantasy'
    },
    {
      value: 'Science Fiction',
      label: 'Science Fiction'
    }
  ];

const movies = [
    {
        id: '0',
        title: 'Butterfly Effect',
        genre: 'Thriller',
        realeseYear: '1996'
    }, {
        id: '1',
        title: 'Harry Potter',
        genre: 'Fantasy',
        realeseYear: '2001'
    }, {
        id: '2',
        title: 'Star Wars',
        genre: 'Science Fiction',
        realeseYear: '1979'
    }
]

const MovieList = () => {
    const [genre, setGenre] = useState("All");

    const listMovies = movies
        .filter(movie => genre === "All" || movie.genre === genre)
        .map(movie => {
        return <li key={movie.id}>
                    <b>{movie.title}</b>
                    <p>{movie.genre}</p>
                    <p>{movie.realeseYear}</p>
                </li>
        });
    
    return (
        <div>
            <Select
                options={options}
                onChange={(selected) => setGenre(selected[0]?.value)} // Access the first selected value
                values={[{ value: genre, label: genre }]} // Sync the dropdown with the selected genre
            />
            <ul>
                {listMovies}
            </ul>
        </div>
    );
};

export default MovieList;