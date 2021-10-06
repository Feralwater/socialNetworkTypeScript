import React from 'react';
import style from "./App.module.scss"
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import SideBar from "./components/sidebar/SideBar";
import Title from "./components/title/Title";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import ProfilePage from "./components/profile/profilePage";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {PostsContainer} from "./components/posts/Post/PostsContainer";
import {ExploreContainer} from "./components/explore/ExploreContainer";
import {UsersContainer} from "./components/users/UsersContainer";

const App = () => {
    return (
        <div className={style.wrapper}>
            <Header/>
            <SideBar/>
            <Title/>
            <Route path={"/feed"} render={() => (
                <>
                    <PostsContainer/>
                    <UsersContainer/>
                    <Info/>
                </>)}/>
            <Route path={"/dialogs"} render={() => (
                <DialogsContainer/>)}/>
            <Route path={"/explore"} render={() => <ExploreContainer/>}/>
            <Route path={"/news"} render={() => <News/>}/>
            <Route path={"/music"} render={() => <Music/>}/>
            <Route path={"/settings"} render={() => <Settings/>}/>
            <Route path={"/profile"} render={() => <ProfilePage/>}/>
        </div>
    );
}

export default App;
