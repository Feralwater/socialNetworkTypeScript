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


const App = () => {
    return (<BrowserRouter>
        <div className={style.wrapper}>
            <Header/>
            <SideBar/>
            <Title/>
            <div className={style.main}>
                <Route path={"/feed"} render={() => <Posts/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
            <Route path={"/feed"} render={() => <Followers/>}/>
            <Route path={"/feed"} render={() => <Info/>}/>
            {/*<Followers/>*/}
            {/*<Info/>*/}
        </div>
    </BrowserRouter>);
}

export default App;
