import { AuthService } from "../services";

export default function() {
  const user = AuthService.getProfile();
  const roles = user ? user.roles : [];

  return [
    {
      title: "Dashboard",
      to: "/app",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: "",
      allowed: roles.includes("ROLE_ADMIN")
    },
    {
      title: "Category",
      htmlBefore: '<i class="material-icons">list</i>',
      to: "/categories",
     allowed:roles.includes("ROLE_ADMIN") || roles.includes("ROLE_STAFF")
    },
    {
      title: "Subcategory",
      htmlBefore: '<i class="material-icons">list</i>',
      to: "/subcategories",
      allowed:roles.includes("ROLE_ADMIN") || roles.includes("ROLE_STAFF")
    },
    {
      title: "Items",
      htmlBefore: '<i class="material-icons">layers</i>',
      to: "/items",
      allowed:roles.includes("ROLE_ADMIN") || roles.includes("ROLE_STAFF") ||roles.includes("ROLE_USER")
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">people_alt</i>',
      to: "/users",
      allowed:roles.includes("ROLE_ADMIN")
    },
    {
      title: "Requests",
      htmlBefore: '<i class="material-icons">money</i>',
      to: "/requests",
      allowed:roles.includes("ROLE_USER")
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile",
       allowed:roles.includes("ROLE_ADMIN") || roles.includes("ROLE_STAFF") ||roles.includes("ROLE_USER")
    }
  ];
}
