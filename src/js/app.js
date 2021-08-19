import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthRoute } from "./components/authRoute";

import api from "../utils/api";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Resources from "./pages/resources";
import Resource from "./pages/resource";

import Layout from "./components/layout";
import Loans from "./pages/loans";

const App = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);
  console.log('app ????',appState )

  useEffect(async () => {
    dispatch({ type: "APP_INIT" });
    dispatch({ type: "USER_FETCH" });

    try {
      let result = await api.get("/admin/me");
      dispatch({ type: "USER_SET", payload: result.data });
      // console.log('result user data', result.data);
    } catch (err) {
      console.error(err);
      dispatch({ type: "USER_RESET" });
    }

    dispatch({ type: "APP_READY" });

    // setTimeout(() => {
    //   dispatch({ type: 'APP_READY' });
    // }, 2000);
  }, []);

  if (appState.loading) return <p>loading, attendez patiemment, merci</p>;

  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/resources" component={Resources} />
          <Route path="/resources/:id" component={Resource} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <AuthRoute path="/dashboard" exact component={Home} />
          <AuthRoute path="/loans" exact component={Loans} />
        </Layout>
      </Switch>
    </Router>
  );
};
export default App;
