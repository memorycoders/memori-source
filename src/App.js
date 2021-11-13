import React, { useState, useEffect, useMemo, Suspense, lazy } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { history } from "./utils/history";
import './App.scss';

// const Post = lazy(() => import('./components/Post'))
const Home = lazy(() => import('./pages/Home'))
const BtnSwitch = lazy(() => import('./components/button-switch/BtnSwitch'))
// const Login = lazy(() => import('./components/Login'))
// const Notes = lazy(() => import('./components/Notes'))

const getStorageTheme = () => {
    let theme = 'dark-themes'
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme")
    }
    return theme
}
function App() {
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        const checkLogin = async () => {
            const token = localStorage.getItem('tokenStore')
            if (token) {
                const verified = await axios.get('/users/verify', {
                    headers: { Authorization: token }
                })
                console.log(verified)
                setIsLogin(verified.data)
                if (verified.data === false) return localStorage.clear()
            } else {
                setIsLogin(false)
            }
        }
        checkLogin()
    }, [])

    const themGlobal = useMemo(() => {
        return getStorageTheme()
    }, [])
    const [theme, setTheme] = useState(themGlobal)
    const toggleTheme = (value) => {
        if (value) {
            setTheme("dark-themes")
        } else {
            setTheme("light-themes")
        }
    }
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme)
    }, [theme])


    return (
        <Router >
            <Suspense fallback={<div></div>}>
                <div className="App">
                    <div className="container">
                        {/* <Switch>
                            <Route exact path="/" component={Home}></Route>
                        </Switch> */}
                        {/* <div className="App">
                    {
                        isLogin
                            ? <Notes setIsLogin={setIsLogin} />
                            : <Login setIsLogin={setIsLogin} />
                    }
                      </div> */}
                        {/* <button className="btn" onClick={toggleTheme}>
                        {
                            theme === "dark-theme" ? "Dark" : "Light"
                        }
                    </button> */}

                        {/* <Post></Post> */}
                        <Home />
                        <BtnSwitch toggleTheme={toggleTheme} />
                    </div>
                </div>
            </Suspense>
        </Router>
    );
}

export default App;
