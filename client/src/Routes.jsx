import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home"
import Login from "./components/Login"
import UserAccount from "./components/UserAccount"
import BooksOrder from "./components/books/BooksOrder"
import NotFound from "./components/NotFound"



function Routes(props) {

    const { logIn, setLogIn } = props

    return (

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={UserAccount} />

            <Route path="/orders" component={BooksOrder} />

            {/* <Route path="/books"
                render={(props) =>
                    <BooksList {...props} logIn={logIn} setLogIn={setLogIn} />} /> */}

            <Route path="/login"
                render={(props) =>
                    <Login {...props} logIn={logIn} setLogIn={setLogIn} />} />
            <Route component={NotFound} />
        </Switch>

    )
}

export default Routes