import PostList from "./PostList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../modules/posts";

function PostListContainer() {

    const {data, loading, error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error!!!</div>
    if (!data) return null;
    return <PostList posts={data}/>;
}

export default PostListContainer;