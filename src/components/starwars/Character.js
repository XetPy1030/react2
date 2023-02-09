import {heroes_url} from "../../api/const";
import {Link, useParams} from "react-router-dom";
import {useFetch} from "../../api/hook";

export function Character() {
    const {id} = useParams();
    const {data, error, isPending} = useFetch(`${heroes_url}${id}/`);

    return (
        <div>
            <h1>Character</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.name}</h2>
                    <p>Height: {data.height}</p>
                    <p>Mass: {data.mass}</p>
                    <p>Hair color: {data.hair_color}</p>
                    <p>Eye color: {data.eye_color}</p>
                    <p>Birth year: {data.birth_year}</p>
                    <p>Gender: {data.gender}</p>
                    <Link to={`/planets/${data.homeworld.split('/')[5]}`}>Homeworld</Link>
                </article>
            )}
        </div>
    )
}