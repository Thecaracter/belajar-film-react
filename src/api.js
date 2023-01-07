import axios from "axios";

export const getMovieList = async () => {
    // Panggil API untuk mendapatkan daftar movie yang populer
    const movie = await axios.get(
        `${process.env.REACT_APP_BASEURL}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`
    );
    // console.log({ movieList: movie });

    // Kembalikan hasil dari pemanggilan API
    return movie.data.results;
};

export const searchMovie = async (q) => {
    const search = await axios.get(
        `${process.env.REACT_APP_BASEURL}/search/movie?query=${q}&page=1&api_key=${process.env.REACT_APP_APIKEY}`
    );
    return search.data;
};
