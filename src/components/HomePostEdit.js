import {Link, useParams} from "react-router-dom";
import {useState} from "react";

export const HomePostEdit = ({posts, setPosts, error, isPending}) => {
    const {id} = useParams();
    const data = posts.find((post) => post.id == id);

    const [title, setTitle] = useState(data.title);
    const [body, setBody] = useState(data.body);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.is_local) {
            const newPosts = posts.map((post) => (post.id === data.id ? {...data, title, body} : post));
            setPosts(newPosts);
            return;
        }
        const post = {title, body};
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(post),
        })
            .then((res) => res.json())
            .then((data) => {
                const newPosts = posts.map((post) => (post.id === data.id ? data : post));
                setPosts(newPosts);
            });
    };

    return (
        <div>
            <Link to={"/"}>Назад</Link>
            <h2>HomePostEdit</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor="body">Body</label>
                        <textarea
                            id="body"
                            name="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )}
        </div>
    );
}