import profilePageReducer, {addPost, deletePost} from "./profilePage-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, How  are you?', likesCount: 100},
        {id: 2, message: 'This`is my new post', likesCount: 83},
    ]
}

test('length of posts should e incremented', () => {
    let action = addPost('templar')
    let newState = profilePageReducer(state, action)

    expect(newState.posts.length).toBe(3)
});

test('message of new post should e correct', () => {
    let action = addPost('templar')
    let newState = profilePageReducer(state, action)

    expect(newState.posts[2].message).toBe('templar')
});

test('after deleting length of messages should e decrement', () => {
    let action = deletePost(2)
    let newState = profilePageReducer(state, action)

    expect(newState.posts.length).toBe(1)
});

