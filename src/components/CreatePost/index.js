import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {v4 as uuid} from 'uuid'
import {CREATE_POST} from '../../utils/Action'

const CreatePost = () => {

    const dispatch = useDispatch()

    const [author, setAuthor] = useState('')
    const [msg, setMsg] = useState('')

    const handleCreatePost=(e)=>{
        e.preventDefault()
        dispatch(CREATE_POST({
            id:uuid(),
            author:author,
            msg:msg,
            edit:false
        }))
        setAuthor('')
        setMsg('')
    }


    return (
        <div className='CreateContainer'>
            <form 
                onSubmit={handleCreatePost}
            >
                <div className="authorWrap">
                    <label htmlFor="authorLabel" className="authorLabel">Author:</label>
                    <input 
                        type="text" 
                        className="authorInput"
                        value={author}
                        onChange={e=>setAuthor(e.target.value)}
                    />
                </div>
                <div className="msgWrap">
                    <label htmlFor="msgLabel" className="msgLabel">Message:</label>
                    <textarea 
                        cols="30" 
                        rows="10" 
                        className="msgInput"
                        value={msg}
                        onChange={e=>setMsg(e.target.value)}
                    />
                </div>
                <div className="postBtnWrap">
                    <button type="submit" className='postBtn'>POST</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost