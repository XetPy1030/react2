import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import {useFetch} from "../api/hook";
import {base_url} from "../api/const";
import {AlbumDetail, Home, Likes, Login, Registrations} from "./Home";

export const PageRouting = () => {
    const [likes, setLikes] = useState([]);
    const [albums, setAlbums] = useState([]);
    const {data, isPending, error} = useFetch({url: base_url + "albums"});
    const [isFilled, setIsFilled] = useState(false);

    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);

    if (!isPending && !isFilled) {
        setIsFilled(true);
        setAlbums(data);
    }



    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Home likes={likes} albums={albums} setAlbums={setAlbums} error={error} isPending={!isFilled} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers}
                        />
                    } />
                    <Route path="/album/:id" element={
                        <AlbumDetail albums={albums} setAlbums={setAlbums} likes={likes} setLikes={setLikes} />
                    } />
                    <Route path="/likes" element={
                        <Likes likes={likes} setLikes={setLikes} />
                    } />
                    <Route path="/register" element={
                        <Registrations users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} />
                    } />
                    <Route path="/login" element={
                        <Login setCurrentUser={setCurrentUser} users={users} />
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}