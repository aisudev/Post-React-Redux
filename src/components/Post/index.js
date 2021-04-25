import React from 'react'

const Post = () => {
    return(
        <div className='PostContainer'>
            <div className="authorNameWrap">
                <label htmlFor="authorLabel" className="authorNameLabel">Author: </label>
                <h3 className="author">xxx</h3>
            </div>
            <div className="msgTextWrap">
                <label htmlFor="msgLabel" className="msgTextLabel">Message: </label>
                <p className="msg">xxx....</p>
            </div>
            <div className="btnWrap">
                <button className="btn">EDIT</button>
                <button className="btn">DELETE</button>
            </div>
        </div>
    )
}

export default Post
