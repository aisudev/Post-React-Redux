
const CREATE_POST = (post) =>{
    return{
        type:'CREATE_POST',
        post:post
    }
}

const DELETE_POST = (id) =>{
    return{
        type:'DELETE_POST',
        id:id
    }
}

const EDIT_POST = (id) =>{
    return{
        type:'EDIT_POST',
        id:id
    }
}

const SAVE_POST = (id, data) =>{
    return{
        type:'SAVE_POST',
        id:id,
        data:data
    }
}

export {
    CREATE_POST,
    DELETE_POST,
    EDIT_POST,
    SAVE_POST
}