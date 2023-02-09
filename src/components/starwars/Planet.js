import {Link, useParams} from "react-router-dom";
import {useFetch} from "../../api/hook";
import {planets_url} from "../../api/const";

export function Planet() {
    const {id} = useParams();
    const {data, error, isPending} = useFetch(`${planets_url}${id}/`);

    return (
        <div>
            <h1>Planet</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.name}</h2>
                    <p>Rotation period: {data.rotation_period}</p>
                    <p>Orbital period: {data.orbital_period}</p>
                    <p>Diameter: {data.diameter}</p>
                    <p>Climate: {data.climate}</p>
                    <p>Gravity: {data.gravity}</p>
                    <p>Terrain: {data.terrain}</p>
                    <p>Surface water: {data.surface_water}</p>
                    <p>Population: {data.population}</p>
                    <p>Residents:</p>
                    {data.residents.map(resident => (
                        <Link to={`/heroes/${resident.split('/')[5]}`}>
                            Resident {resident.split('/')[5]}
                        </Link>
                    ))}
                </article>
            )}
        </div>
    )
}