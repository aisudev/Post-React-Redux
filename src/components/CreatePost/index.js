import React, {useState} from 'react'

const CreatePost = () => {

    const [author, setAuthor] = useState('')
    const [msg, setMsg] = useState('')

    return (
        <div className='CreateContainer'>
            <form action="">
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
