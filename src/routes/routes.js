import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, SecondaryLayout } from "../layouts";

// Route Views
import ErrorPage from "../widgets/user/ErrorPage";

import Signin from "../widgets/user/Signin";
import Signup from "../widgets/user/Signup";

import UserProfile from "../widgets/user/UserProfile";

import User from "../widgets/user/User";
import items from "../widgets/items/items";
import UserList from "../widgets/user/UserList";
import addItem from "../widgets/items/AddItem";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/signin" />,
    restricted: false
  },
  {
    path: "/error",
    layout: DefaultLayout,
    component: ErrorPage,
    restricted: false
  },

  {
    path: "/signin",
    layout: DefaultLayout,
    component: Signin,
    restricted: true
  },
  {
    path: "/signup",
    layout: DefaultLayout,
    component: Signup,
    restricted: true
  },

  {
    path: "/app",
    layout: SecondaryLayout,
    component: items
  },
  {
    path: "/items",
    layout: SecondaryLayout,
    component: items
  },

  {
    path: "/add/item",
    layout: SecondaryLayout,
    component: addItem
  },
  {
    path: "/users",
    layout: SecondaryLayout,
    component: UserList
  },

  {
    path: "/user/:id",
    layout: SecondaryLayout,
    component: User
  },

  {
    path: "/user-profile",
    layout: SecondaryLayout,
    component: UserProfile
  }
];
