import React from 'react'
import {useDispatch} from 'react-redux'
import {DELETE_POST, EDIT_POST} from '../../utils/Action'
const Post = ({post}) => {

    const dispatch = useDispatch()

    const handleDeletePost = (e) =>{
        e.preventDefault()
        dispatch(DELETE_POST(post.id))
    }

    const handleEditPost = (e) =>{
        e.preventDefault()
        dispatch(EDIT_POST(post.id))
    }

    return(
        <div className='PostContainer'>
            <div className="authorNameWrap">
                <label htmlFor="authorLabel" className="authorNameLabel">Author: </label>
                <h3 className="author">{post.author}</h3>
            </div>
            <div className="msgTextWrap">
                <label htmlFor="msgLabel" className="msgTextLabel">Message: </label>
                <p className="msg">{post.msg}</p>
            </div>
            <div className="btnWrap">
                <button className="btn" onClick={handleEditPost}>EDIT</button>
                <button className="btn" onClick={handleDeletePost}>DELETE</button>
            </div>
        </div>
    )
}

export default Post
