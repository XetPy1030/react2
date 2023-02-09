import {Link} from "react-router-dom";

export function FilmMini({film}) {
    return (
        <div className="film-mini">
            <h2>{film.title}</h2>
            <p>Episode: {film.episode_id}</p>
            <p>Release date: {film.release_date}</p>
            <Link to={`/films/${film.episode_id}`}>Details</Link>
        </div>
    );
}