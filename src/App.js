import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Post from "./Pages/Post/Post";
import Images from "./Pages/Images";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts/Contacts";


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";


export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/post">
            <Post author={{
              name: "Anakin Skywalker",
              photo: ANAKIN_IMAGE,
              nickname: "@dart_vader"
            }}
              content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
              image={RAY_IMAGE}
              date={"26 февр."}
            />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}