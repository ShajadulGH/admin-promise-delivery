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
        title: "Parcel",
        icon: Delivery,
        href: "/parcel",
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
        // isOpen: false,
        // isHide: false,
        child: [
          {
            title: "Fulfilment Hub List",
            href: "/fulfilment-hub-list",
          },
          {
            title: "Fulfilment Hub Users",
            href: "/fulfilment-hub-users",
          },
        ],
      },

      {
        title: "Reports",
        icon: Issue,
        href: "/reports",
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
        // isOpen: false,
        // isHide: false,
        child: [
          {
            title: "Country",
            href: "/country",
          },
          {
            title: "Division",
            href: "/division",
          },
          {
            title: "District",
            href: "/district",
          },
          {
            title: "Zone",
            href: "/zone",
          },
          {
            title: "Area",
            href: "/area",
          },
        ],
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
            title: "Service Type",
            href: "/service-type",
          },
          {
            title: "Item Type",
            href: "/item-type",
          },
        ],
      },
    ],
  },
};
