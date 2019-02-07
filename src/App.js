import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact render={() => <h1>Home</h1> }/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
