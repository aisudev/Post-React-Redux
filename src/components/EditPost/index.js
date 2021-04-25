import React from 'react'

const EditPost = () => {
    return(
        <div className='PostContainer'>
            <div className="authorNameWrap">
                <label htmlFor="authorLabel" className="authorNameLabel">Author: </label>
                <input 
                    type="text"
                    className='authorInput'

                />
            </div>
            <div className="msgWrap">
                <label htmlFor="msgLabel" className="msgTextLabel">Message: </label>
                <textarea 
                    cols={30}
                    rows={10}
                    className='msgInput'
                />
            </div>
            <div className="btnWrap">
                <button className="btn">SAVE</button>
                <button className="btn">CANCEL</button>
            </div>
        </div>
    )
}

export default EditPost