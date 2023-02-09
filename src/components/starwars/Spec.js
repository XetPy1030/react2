import {useParams} from "react-router-dom";
import {useFetch} from "../../api/hook";
import {species_url} from "../../api/const";

export function Species() {
    const {id} = useParams();
    const {data, error, isPending} = useFetch(`${species_url}${id}/`);

    return (
        <div>
            <h1>Species</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.name}</h2>
                    <p>Classification: {data.classification}</p>
                    <p>Designation: {data.designation}</p>
                    <p>Average height: {data.average_height}</p>
                </article>
            )}
        </div>
    )
}