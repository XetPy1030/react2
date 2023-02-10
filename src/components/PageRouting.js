import {BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes} from "react-router-dom";
import {Home} from "./Home";
import {HomePostEdit} from "./HomePostEdit";
import {HomePost} from "./HomePost";
import {useState} from "react";
import {useFetch} from "../api/hook";
import {base_url} from "../api/const";

export const PageRouting = () => {
    const [localPosts, setLocalPosts] = useState([]);
    const {data, isPending, error} = useFetch({url: base_url + "posts"});
    const [isFilled, setIsFilled] = useState(false);

    if (!isPending && !isFilled) {
        setIsFilled(true);
        setLocalPosts(data);
    }



    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home posts={localPosts} setPosts={setLocalPosts} error={error} isPending={!isFilled} />} />
                    <Route path="/:id" element={<HomePost posts={localPosts} setPosts={setLocalPosts} error={error} isPending={!isFilled} />} />
                    <Route path="/edit/:id" element={<HomePostEdit posts={localPosts} setPosts={setLocalPosts} error={error} isPending={!isFilled} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}