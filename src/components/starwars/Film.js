import {Link, useParams} from "react-router-dom";
import {films_url} from "../../api/const";
import {useFetch} from "../../api/hook";


export function Film() {
    const {id} = useParams();
    const {data, error, isPending} = useFetch(`${films_url}${id}/`);

    return (
        <div>
            <h1>Film</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>{data.opening_crawl}</p>
                    <p>Director: {data.director}</p>
                    <p>Producer: {data.producer}</p>
                    <p>Release date: {data.release_date}</p>
                    <p>Episode: {data.episode_id}</p>
                    <p>Characters:</p>
                    <div>
                        {data.characters.map(character => (
                            <Link to={`/heroes/${character.split('/')[5]}`}>
                                Character {character.split('/')[5]}
                            </Link>
                        ))}
                    </div>
                    <p>Planets:</p>
                    <div>
                        {data.planets.map(planet => (
                            <Link to={`/planets/${planet.split('/')[5]}`}>
                                Planet {planet.split('/')[5]}
                            </Link>
                        ))}
                    </div>
                    <p>Starships:</p>
                    <div>
                        {data.starships.map(starship => (
                            <Link to={`/starships/${starship.split('/')[5]}`}>
                                Starship {starship.split('/')[5]}
                            </Link>
                        ))}
                    </div>
                    <p>Vehicles:</p>
                    <div>
                        {data.vehicles.map(vehicle => (
                            <Link to={`/vehicles/${vehicle.split('/')[5]}`}>
                                Vehicle {vehicle.split('/')[5]}
                            </Link>
                        ))}
                    </div>
                    <p>Species:</p>
                    <div>
                        {data.species.map(specie => (
                            <Link to={`/species/${specie.split('/')[5]}`}>
                                Specie {specie.split('/')[5]}
                            </Link>
                        ))}
                    </div>
                </article>
            )}
        </div>
    );
}