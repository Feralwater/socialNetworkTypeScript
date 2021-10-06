import React from 'react';
import style from "./Users.module.scss"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";


const Users: React.VFC<UsersPropsType> = (
    {users, followUnfollow, setUsers}
) => {
    if (users.length === 0) {
        axios.get<any>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            setUsers(response.data.items)
        })
    }

    return (
        <div className={style.users}>
            <div className={style.title__container}>
                <div className={style.title__title}>Who to follow</div>
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
};

export default Users;