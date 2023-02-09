import {useFetch} from "../../api/hook";
import {films_url} from "../../api/const";
import {FilmMini} from "./FilmMini";

export function Films() {
    const {data, error, isPending} = useFetch(films_url);

    return (
        <div>
            <h1>Films</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <div>
                    {data.results.map(film => (
                        <FilmMini key={film.episode_id} film={film}/>
                    ))}
                </div>
            )}
        </div>
    );
}