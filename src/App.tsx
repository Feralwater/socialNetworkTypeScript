import React from 'react';
import style from "./App.module.scss"
import Header from "./components/header/Header";
import Followers from "./components/followers/Followers";
import Info from "./components/info/Info";
import Posts from "./components/posts/Posts";
import SideBar from "./components/sidebar/SideBar";
import Title from "./components/title/Title";


const App = () => {
    return (
        <div className={style.wrapper}>
            <Header/>
            <SideBar/>
            <Title/>
            <Posts/>
            <Followers/>
            <Info/>
        </div>
    );
}

export default App;
