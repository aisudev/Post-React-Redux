import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {EDIT_POST, SAVE_POST} from '../../utils/Action'

const EditPost = ({post}) => {

    const dispatch = useDispatch()

    const [author, setAuthor] = useState(post.author)
    const [msg, setMsg] = useState(post.msg)

    const handleCancelEdit=(e)=>{
        e.preventDefault()
        dispatch(EDIT_POST(post.id))
    }

    const handleSaveEdit=(e)=>{
        e.preventDefault()
        dispatch(SAVE_POST(post.id, {
            author:author,
            msg:msg
        }))
    }

    return(
        <div className='PostContainer'>
            <div className="authorNameWrap">
                <label htmlFor="authorLabel" className="authorNameLabel">Author: </label>
                <input 
                    type="text"
                    className='authorInput'
                    value={author}
                    onChange={e=>setAuthor(e.target.value)}
                />
            </div>
            <div className="msgWrap">
                <label htmlFor="msgLabel" className="msgTextLabel">Message: </label>
                <textarea 
                    cols={30}
                    rows={10}
                    className='msgInput'
                    value={msg}
                    onChange={e=>setMsg(e.target.value)}
                />
            </div>
            <div className="btnWrap">
                <button className="btn" onClick={handleSaveEdit}>SAVE</button>
                <button className="btn" onClick={handleCancelEdit}>CANCEL</button>
            </div>
        </div>
    )
}

export default EditPost