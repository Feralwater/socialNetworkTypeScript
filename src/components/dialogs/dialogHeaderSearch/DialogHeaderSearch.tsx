import style from "./DialogHeaderSearch.module.scss";
import React from "react";

const DialogHeaderSearch = () => {
    return <div className={style.search}>
        <input type="text" placeholder={"Search"}/>
    </div>;
}
export default DialogHeaderSearch;