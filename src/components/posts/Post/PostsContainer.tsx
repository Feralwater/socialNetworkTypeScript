import React from 'react';
import {
    addPostActionCreator,
    initialStatePostsType,
    updateNewPostTextActionCreator
} from "../../../redux/posts-reducer";
import Posts from "../Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsType = initialStatePostsType
export type MapDispatchToPropsType = {
    addPostActionCreator: () => void
    updateNewPostTextActionCreator: (text: string | undefined) => void
}
export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.postsReducer.posts,
        newPostText: state.postsReducer.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPostActionCreator: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostTextActionCreator: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    }
}
export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)