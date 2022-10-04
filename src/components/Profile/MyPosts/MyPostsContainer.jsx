import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profilePage-reducer";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts)

export default MyPostsContainer;