import React from 'react';
import style from "./Explore.module.scss"

export type ExplorePropsType = {
    users: any
    followUnfollow: (id: string) => void
}

const Explore: React.VFC<ExplorePropsType> = (
    {users, followUnfollow}
) => {
    return (
        <div className={style.cent}>
            {users.map((u: any) => {
                return (<div className={style.center}>
                        <div key={u.id}>{u.fullName}</div>
                        <div>{u.followed ?
                            <button onClick={() => {
                                followUnfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                followUnfollow(u.id)
                            }}>Follow</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Explore;