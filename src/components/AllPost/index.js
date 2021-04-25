import React from 'react'
import {useSelector} from 'react-redux'
import EditPost from '../EditPost'

import Post from '../Post'

const AllPost = () => {

    const allPost = useSelector(state=>state.posts)

    return (
        <div>
            <h1
            style={{
                textAlign:'center',
                fontSize:40
            }}>ALL POST</h1>
            <div className="AllPostContainer">
                {
                    allPost.map(post=>post.edit?(
                        <EditPost key={post.id} post={post} />
                    ):(
                        <Post key={post.id} post={post} />
                    ))
                }
            </div>
        </div>
    )
}

export default AllPost
