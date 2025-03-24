import {
  DashBoard,
  Settings,
  Location,
  Internal,
  External,
  Hub,
  Fulhub,
  Delivery,
  Invoice,
  Issue,
  Notice,
} from "@/components/svg";

export const menusConfig = {
  sidebarNav: {
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
      {
        title: "Internal User",
        icon: Internal,
        href: "#",
        // isOpen: false,
        // isHide: false,
        child: [
          {
            title: "Users",
            href: "/users",
          },
          {
            title: "Add User",
            href: "/add-user",
          },
        ],
      },

      {
        title: "External User",
        icon: External,
        href: "#",
        // isOpen: false,
        // isHide: false,
        child: [
          {
            title: "Merchants",
            href: "/merchants",
          },
          {
            title: "Stores",
            href: "/store",
          },
          {
            title: "New Stores",
            href: "/new-store",
          },
          {
            title: "Customers",
            href: "/customers",
          },
        ],
      },
      {
        title: "Hub",
        icon: Hub,
        href: "#",
        // isOpen: false,
        // isHide: false,
        child: [
          {
            title: "Hub List",
            href: "/hub-list",
          },
          {
            title: "Hub Users",
            href: "/hub-users",
          },
          {
            title: "Riders",
            href: "/riders",
          },
        ],
      },

      {
        title: "Fulfilment Hub",
        icon: Fulhub,
        href: "#",
      },
      {
        title: "Parcel",
        icon: Delivery,
        href: "/parcel",
      },
      {
        title: "Reports",
        icon: Issue,
        href: "#",
      },
      {
        title: "Notice",
        icon: Notice,
        href: "/notice",
      },
      {
        title: "Invoice",
        icon: Invoice,
        href: "/invoice-list",
      },
      {
        title: "Location",
        icon: Location,
        href: "#",
      },

      {
        title: "Settings",
        icon: Settings,
        href: "#",
        // isOpen: false,
        // isHide: false,
        child: [
          {
            title: "Weight Charge",
            href: "#",
          },
          {
            title: "Delivery Charge",
            href: "#",
          },
          {
            title: "Servise Type",
            href: "/service-type",
          },
          {
            title: "Item Type",
            href: "#",
          },
        ],
      },
    ],
  },
};
