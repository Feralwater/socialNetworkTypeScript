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
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
}
const App = (props: AppPropsType) => {
    const {postsPage, dialogPage} = props.state
    return (<BrowserRouter>
        <div className={style.wrapper}>
            <Header/>
            <SideBar/>
            <Title/>
            <Route path={"/feed"} render={() => (
                <>
                    <Posts posts={postsPage.posts}/>
                    <Followers/>
                    <Info/>
                </>)}/>
            <Route path={"/dialogs"} render={() => (
                <Dialogs
                    dialogItemData={dialogPage.dialogItemData}
                    messages={dialogPage.messages}
                />)}/>
            <Route path={"/news"} render={() => <News/>}/>
            <Route path={"/music"} render={() => <Music/>}/>
            <Route path={"/settings"} render={() => <Settings/>}/>
        </div>
    </BrowserRouter>)
        ;
}

export default App;
