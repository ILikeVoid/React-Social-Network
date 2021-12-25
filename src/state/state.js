import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

let state = {
    profilePage: {
        posts: [
            {id: 1, massage: 'Hi, How are you?', likesCount: 100},
            {id: 2, massage: 'This`is my new post', likesCount: 83},
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi', avatar: img1},
            {id: 2, message: 'How are you?',avatar: img2},
            {id: 3, message: 'Do you spek English?', avatar: img1},
        ],
        dialogs: [
            {id: 1, name: 'Dauren', avatar: img1},
            {id: 2, name: 'Dima', avatar: img2},
            {id: 3, name: 'Nurzhan', avatar: img3},
            {id: 4, name: 'Madara', avatar: img4},
        ]
    },
}


export default state;