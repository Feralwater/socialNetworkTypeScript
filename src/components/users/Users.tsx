import React from 'react';
import style from "./Users.module.scss"
import {UserType} from "../../redux/users-reducer";
import Preloader from "../preloader/Preloader";

type UsersPropsType = {
    users: Array<UserType>
    followUnfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (page: number) => void
    isFetching: boolean
}

const Users: React.VFC<UsersPropsType> = ({
                                              users,
                                              followUnfollow,
                                              pageSize,
                                              totalUsersCount,
                                              currentPage,
                                              onPageChanged,
                                              isFetching
                                          }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
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
                {isFetching && <Preloader/>}
                {users.map((u) => {
                    return (<div key={u.id} className={style.user}>
                            <div className={style.user__info}>
                                <div>
                                    <img className={style.user__photo}
                                         src={u.photos.small || "/img/user-mock.png"}
                                         alt="user photo"
                                    />
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
};

export default Users;