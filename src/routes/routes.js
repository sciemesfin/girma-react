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
import Requests from "../widgets/requests/requests";
import CategoryList from "../widgets/category/CategoryList";
import AddCategory from "../widgets/category/AddCategory";
import SubcategoryList from "../widgets/category/SubcategoryList";
import AddSubcategory from "../widgets/category/AddSubcategory";

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
    path: "/add/user",
    layout:SecondaryLayout,
    component: Signup,
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
    path: "/categories",
    layout: SecondaryLayout,
    component: CategoryList
  },
  {
    path: "/category/create",
    layout: SecondaryLayout,
    component: AddCategory
  },
  {
    path: "/subcategories",
    layout: SecondaryLayout,
    component: SubcategoryList
  },
  {
    path: "/subcategory/create",
    layout: SecondaryLayout,
    component: AddSubcategory
  },
  {
    path: "/requests",
    layout: SecondaryLayout,
    component: Requests
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
