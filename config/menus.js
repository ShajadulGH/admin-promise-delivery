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
            href: "/dashboard",
          },
          {
            title: "Stores",
            href: "#",
          },
          {
            title: "Customers",
            href: "#",
          },
        ],
      },
      {
        title: "Hub",
        icon: Hub,
        href: "#",
      },
      {
        title: "Fulfilment Hub",
        icon: Fulhub,
        href: "#",
      },
      {
        title: "Parcel",
        icon: Delivery,
        href: "#",
      },
      {
        title: "Reports",
        icon: Issue,
        href: "#",
      },
      {
        title: "Notice",
        icon: Notice,
        href: "#",
      },
      {
        title: "Invoice",
        icon: Invoice,
        href: "#",
      },
      {
        title: "Location",
        icon: Location,
        href: "#",
      },

      {
        title: "Settings",
        icon: Settings,
        href: "/dashboard",
        // isOpen: false,
        // isHide: false,
        child: [
          {
            title: "Weight Charge",
            href: "/dashboard",
          },
          {
            title: "Delivery Charge",
            href: "#",
          },
          {
            title: "Servise Type",
            href: "#",
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
