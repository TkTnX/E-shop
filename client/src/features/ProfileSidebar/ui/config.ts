export const PROFILE_SIDEBAR_ITEMS = [
  {
    title: "Manage My Account",
    items: [
      {
        title: "My Profile",
        value: "editProfile",
        href: null,
      },
      {
        title: "Address Book",
        value: "editAddress",
        href: null,
      },
    ],
  },
  {
    title: "My Orders",
    items: [
      {
        title: "My Returns",
        value: null,
        href: "/checkout",
      },
      {
        title: "My Cancellations",
        value: null,
        href: "/checkout",
      },
    ],
  },
  {
    title: "Favorites",
    items: [
      {
        title: "My favorites",
        value: null,
        href: "/favorites",
      },
    ],
  },
];
