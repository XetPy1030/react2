import {useFetch} from "../../api/hook";
import {Link} from "react-router-dom";

export function Starships() {
    const {data, error, isPending} = useFetch("https://swapi.dev/api/starships/");

    return (
        <div>
            <h1>Starships</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <div>
                    {data.results.map(starship => (
                        <div key={starship.url}>
                            <Link to={`/starships/${starship.url.split('/')[5]}`}>
                                {starship.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}