const initState = {
    posts:[

    ]
}

export default function Reducer(state=initState, action){
    switch(action.type){
        case 'CREATE_POST':
            return {
                posts:[
                    action.post,
                    ...state.posts
                ]
            }
        case 'DELETE_POST':
            return{
                posts:state.posts.filter(post=>post.id !== action.id )
            }
        case 'EDIT_POST':
            return {
                posts:state.posts.map(post=>post.id===action.id?{...post, edit:!post.edit}:post)
            }
        case 'SAVE_POST':
            return{
                posts:state.posts.map(post=>post.id===action.id?{
                    ...post, 
                    author:action.data.author, 
                    msg:action.data.msg, 
                    edit:!post.edit
                }:post)
            }
        default:
            return state
    }
}