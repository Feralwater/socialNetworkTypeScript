import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/posts-reducer";
import Posts from "../Posts";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        posts: state.postsReducer.posts,
        newPostText: state.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPostActionCreator: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostTextActionCreator: (text: any) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    }
}
export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)