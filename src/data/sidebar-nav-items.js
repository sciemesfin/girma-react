export default function() {
  return [
    {
      title: "Dashboard",
      to: "/app",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "Items",
      htmlBefore: '<i class="material-icons">notifications</i>',
      to: "/items"
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">people_alt</i>',
      to: "/users"
    },
    {
      title: "Requests",
      htmlBefore: '<i class="material-icons">money</i>',
      to: "/requests"
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile"
    }
  ];
}
