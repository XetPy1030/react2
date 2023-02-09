import {useParams} from "react-router-dom";
import {useFetch} from "../../api/hook";
import {starships_url} from "../../api/const";

export function Starship() {
    const {id} = useParams();
    const {data, error, isPending} = useFetch(`${starships_url}${id}/`);

    return (
        <div>
            <h1>Starship</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.name}</h2>
                    <p>Model: {data.model}</p>
                    <p>Manufacturer: {data.manufacturer}</p>
                    <p>Cost in credits: {data.cost_in_credits}</p>
                    <p>Length: {data.length}</p>
                    <p>Max atmosphering speed: {data.max_atmosphering_speed}</p>
                    <p>Crew: {data.crew}</p>
                    <p>Passengers: {data.passengers}</p>
                    <p>Cargo capacity: {data.cargo_capacity}</p>
                    <p>Consumables: {data.consumables}</p>
                    <p>Hyperdrive rating: {data.hyperdrive_rating}</p>
                    <p>MGLT: {data.MGLT}</p>
                    <p>Starship class: {data.starship_class}</p>
                </article>
            )}
        </div>
    )
}