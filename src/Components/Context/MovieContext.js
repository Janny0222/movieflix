import React, { createContext, useState} from "react";
import { MoviesData } from "../../Data/MovieData";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const maxPage = 10;
    const [page, setPage] = useState(maxPage);

    const handleNavPage = () => {
        setPage(page + maxPage);
    };

    return (
        <MovieContext.Provider
            value={{
                MoviesData,
                page,
                handleNavPage
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}

export default MovieProvider