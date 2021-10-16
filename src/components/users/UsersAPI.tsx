import React, {PureComponent} from 'react';
import {UsersAPIPropsType} from "./UsersContainer";
import axios from "axios";
import Users from "./Users";

class UsersAPI extends PureComponent<UsersAPIPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            })
    }

    render() {
        const {
            users,
            followUnfollow,
            pageSize,
            totalUsersCount,
            currentPage,
            setCurrentPage,
            setUsers,
            isFetching,
            setIsFetching
        } = this.props;
        const onPageChanged = (page: number): void => {
            setCurrentPage(page);
            setIsFetching(true);
            axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`)
                .then(response => {
                    setIsFetching(false);
                    setUsers(response.data.items);
                })
        }
        return (<>
                <Users users={users}
                       followUnfollow={followUnfollow}
                       pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       isFetching={isFetching}
                />
            </>
        );
    }
}

export default UsersAPI;