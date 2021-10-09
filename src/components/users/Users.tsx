import React, {PureComponent} from 'react';
import style from "./Users.module.scss"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

class Users extends PureComponent<UsersPropsType> {

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
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
            setUsers
        } = this.props;
        const pagesCount = Math.ceil(totalUsersCount / pageSize);
        const pages: Array<number> = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        const onPageChanged = (page: number): void => {
            setCurrentPage(page);
            axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                .then(response => {
                    setUsers(response.data.items);
                })
        }
        return (
            <div className={style.users}>
                <div className={style.title__container}>
                    <div className={style.title__title}>Who to follow</div>
                    <nav>{pages.map((page) =>
                        <span className={currentPage === page ? style.title__selectedPage : ""}
                              onClick={() => {
                                  onPageChanged(page)
                              }}
                        >{page}</span>)}
                    </nav>
                    <button className={style.title__button}>Refresh</button>
                </div>
                <div className={style.wrapper}>
                    {users.map((u) => {
                        return (<div key={u.id} className={style.user}>
                                <div className={style.user__info}>
                                    <div
                                        className={u.photos.small ? style.user__photo : style.user__photo_mock}>
                                        {u.photos.small}
                                    </div>
                                    <div className={style.user__name}>{u.name}</div>
                                    <div className={style.user__status}>{u.status}</div>
                                </div>
                                <div>{u.followed ?
                                    <button className={style.user__button}
                                            onClick={() => {
                                                followUnfollow(u.id)
                                            }}>Unfollow</button>
                                    : <button className={style.user__button}
                                              onClick={() => {
                                                  followUnfollow(u.id)
                                              }}>Follow</button>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Users;