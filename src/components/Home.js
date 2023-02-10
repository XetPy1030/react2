import {base_url} from "../api/const";
import {Link} from "react-router-dom";
import {useState} from "react";

function AddPost({posts, setPosts}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, body};
        fetch(base_url + "posts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(() => {
            post.is_local = true;
            post.id = Math.floor(Math.random() * 10000+100);
            setPosts([post, ...posts]);
        })
    }

    return (
        <div>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Post body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}/>
                <button>Add Post</button>
            </form>
        </div>
    )
}

export function Home({posts, setPosts, error, isPending}) {
    return (
        <div>
            <h2>Home</h2>
            <AddPost posts={posts} setPosts={setPosts} />
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {posts && (
                <div>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <Link to={"/edit/" + post.id}>Редактировать</Link>
                            <Link to={"/" + post.id}>Подробнее</Link>
                            <button onClick={() => {
                                fetch(base_url + "posts/" + post.id, {
                                    method: "DELETE"
                                }).then(() => {
                                    setPosts(posts.filter((p) => p.id != post.id));
                                })
                            }
                            }>Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}