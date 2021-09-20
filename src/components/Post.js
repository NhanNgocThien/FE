import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {addPost, postSelector} from '../features/postSlice';

export default function Post() {
    const posts = useSelector(postSelector);
    const dispatch = useDispatch();

    const [post, setPost] = useState({
        title: '',
        author: '',
    })
    
    const handleChange = (e) => {
        setPost(prevValues => {
            return {
                ...prevValues,
                [e.target.name] : e.target.value
            }
        })
    }

    const renderedPostList = posts.map(post => {
        return (
            <div style={{marginTop: '50px'}} key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.author}</p>
                <Link to={`/post/ + ${post.id}`}>View Post</Link>
            </div>
        )
    })

    const canAdd = Boolean(post.title) && Boolean(post.author);

    return (
        <div>
            <h1>Add a new post</h1>
            <input 
                type="text" 
                style={{width: '50px'}} 
                name="title"
                value={post.title}
                onChange={handleChange}/>
            <span>Title</span>
            <input 
                type="text" 
                style={{width: '50px'}} 
                name="author"
                value={post.author}
                onChange={handleChange}/>
            <span>Author</span>
            <button 
                onClick={() => {
                    dispatch(addPost(post))
                    setPost({
                        title: '',
                        author: '',
                    })
                }} 
                disabled={!canAdd}>Save post</button>
            {renderedPostList}
        </div>
    )
}
