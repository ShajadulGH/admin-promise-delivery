import {
  DashBoard,
  Delivery,
  Invoice,
  Store,
  Issue,
  Taka,
  Coverage,
  Operator,
  Promo,
  Api,
  Notice,
  Support,
} from "@/components/svg";

export const menusConfig = {
  mainNav: [
    {
      title: "dashboard",
      icon: DashBoard,
      href: "/dashboard",
    },

    // {
    //   title: "Menu",
    //   icon: DashBoard,
    //   child: [
    //     {
    //       title: "dashboard",
    //       icon: DashBoard,
    //       href: "/dashboard",
    //     },
    //     {
    //       title: "deliveries",
    //       icon: Envelope,
    //       href: "/deliveries",
    //     },
    //     {
    //       title: "invoice",
    //       icon: Messages,
    //       href: "/chat",
    //     },
    //     {
    //       title: "store",
    //       icon: Envelope,
    //       href: "/email",
    //     },
    //   ],
    // },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Menu",
        icon: DashBoard,
        child: [
          {
            title: "dashboard",
            icon: DashBoard,
            href: "/dashboard",
          },
        ],
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "dashboard",
        icon: DashBoard,
        href: "/dashboard",
      },
    ],
  },
};
