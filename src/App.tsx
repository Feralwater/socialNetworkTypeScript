import React from 'react';
import style from "./App.module.scss"
import Header from "./components/header/Header";
import Followers from "./components/followers/Followers";
import Info from "./components/info/Info";
import Posts from "./components/posts/Posts";
import SideBar from "./components/sidebar/SideBar";
import Title from "./components/title/Title";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import ProfilePage from "./components/profile/profilePage";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {PostsContainer} from "./components/posts/Post/PostsContainer";

const App = () => {
    return (
        <div className={style.wrapper}>
            <Header/>
            <SideBar/>
            <Title/>
            <Route path={"/feed"} render={() => (
                <>
                    <PostsContainer/>
                    <Followers/>
                    <Info/>
                </>)}/>
            <Route path={"/dialogs"} render={() => (
                <DialogsContainer/>)}/>
            {/*<Route path={"/explore"} render={() => <Explore/>}/>*/}
            <Route path={"/news"} render={() => <News/>}/>
            <Route path={"/music"} render={() => <Music/>}/>
            <Route path={"/settings"} render={() => <Settings/>}/>
            <Route path={"/profile"} render={() => <ProfilePage/>}/>
        </div>
    );
}

export default App;
