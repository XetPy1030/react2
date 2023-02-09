import {films_url} from "./const";

export function base_request(url, options) {
    return fetch(url, options)
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        });
}

export function get_films() {
    return base_request(films_url);
}