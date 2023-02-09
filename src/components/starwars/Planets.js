import {useFetch} from "../../api/hook";
import {Link} from "react-router-dom";

export function Planets() {
    const {data, error, isPending} = useFetch("https://swapi.dev/api/planets/");

    return (
        <div>
            <h1>Planets</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <div>
                    {data.results.map(planet => (
                        <div key={planet.url}>
                            <Link to={`/planets/${planet.url.split('/')[5]}`}>
                                {planet.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}