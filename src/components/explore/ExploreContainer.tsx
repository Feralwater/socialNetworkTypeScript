import React from 'react';
import Explore from "./Explore";
import {connect} from "react-redux";
import {followUnfollowActionCreator, setUsersActionCreator} from "../../redux/explore-reducer";

const mapStateToProps = (state: any) => {
    return {
        users: state.exploreReducer.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        followUnfollow: (userId: string) => {
            dispatch(followUnfollowActionCreator(userId))
        },
        setUsers: (users: []) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}
export const ExploreContainer = connect(mapStateToProps, mapDispatchToProps)(Explore);

