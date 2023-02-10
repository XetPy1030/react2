import {useFetch} from "../api/hook";
import {base_url} from "../api/const";
import {Link, useParams} from "react-router-dom";



export const HomePost = ({posts, setPosts, isPending, error}) => {
    const {id} = useParams();
    const {data: comments, isPending: isPendingComments, error: errorComments} = useFetch({url: base_url + "comments?postId=" + id});

    const data = posts.find((post) => post.id == id);

    return (
        <div>
            <Link to={"/"}>Назад</Link>
            <h2>HomePost</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && (
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                </div>
            )}
            <h3>Comments</h3>
            {errorComments && <div>{errorComments}</div>}
            {isPendingComments && <div>Loading...</div>}
            {comments && (
                <div>
                    {comments.map((comment) => (
                        <div key={comment.id}>
                            <h5>{comment.name}</h5>
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}