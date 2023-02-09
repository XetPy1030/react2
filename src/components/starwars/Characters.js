import {useFetch} from "../../api/hook";
import {heroes_url} from "../../api/const";
import {Link} from "react-router-dom";

export function Characters() {
const {data, error, isPending} = useFetch(heroes_url);

    return (
        <div>
            <h1>Characters</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <div>
                    {data.results.map(character => (
                        <div key={character.url}>
                            <Link to={`/heroes/${character.url.split('/')[5]}`}>
                                {character.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}