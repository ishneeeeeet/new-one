interface MenuItemsProps {
    id: number;
    novidade?: any;
    label: string;
    icon?: string;
    link?: string;
    badge?: string;
    badgecolor?: string;
    subItems?: any;
    isHeader?: boolean
}

const menuItems: Array<MenuItemsProps> = [
    {
        id: 1,
        label: "Analytics",
        isHeader: true
    },
    {
        id: 2,
        label: "Dashboard",
        icon: "monitor",
        link: "/dashboard",
        // badge: "5+",
        // badgecolor: "badge-soft-secondary"
    },
    {
        id: 3,
        label: "Pages",
        isHeader: true
    },
    {
        id: 4,
        label: "Job Board",
        icon: "trello",
        link: "/job-board"
    },
    {
        id: 5,
        label: "Calendar",
        icon: "calendar",
        link: "/installation-schedule"
    },
    {
        id: 6,
        novidade: false,
        label: "Inventory",
        link: "/inventory",
        icon: "box",
        subItems: [
            {
                id: 7,
                label: "Product List",
                link: "/inventory/products",
                parentId: 6
            },
            {
                id: 8,
                label: "Product Groups",
                link: "/inventory/product-groups",
                parentId: 6
            },
            {
                id: 9,
                label: "Adjustments",
                link: "/inventory/inventory-adjustment/new",
                parentId: 6
            },
        ]
    },
    {
        id: 10,
        label: "Purchase",
        link: "/purchase",
        icon: "home",
        subItems: [
            {
                id: 11,
                label: "Purchase Orders",
                link: "/purchase/purchase-orders",
                parentId: 10
            },
            {
                id: 12,
                label: "Goods Received",
                link: "/purchase/goods-received",
                parentId: 10
            },
            {
                id: 13,
                label: "Vendors",
                link: "/purchase/vendors",
                parentId: 10
            },
            {
                id: 14,
                label: "Warehouses",
                link: "/purchase/warehouses",
                parentId: 10
            }
        ]
    },
    {
        id: 15,
        label: "Sales",
        link: "/sales",
        icon: "file",
        subItems: [
            {
                id: 16,
                label: "Customers",
                link: "/customers",
                parentId: 15
            },
            {
                id: 17,
                label: "Leads",
                link: "/sales/leads",
                parentId: 15
            },
            {
                id: 18,
                label: "Estimates",
                link: "/sales/estimates",
                parentId: 15
            },
            {
                id: 19,
                label: "Invoices",
                link: "/sales/invoices",
                parentId: 15
            },
            {
                id: 20,
                label: "Sales Return",
                link: "/sales/return",
                parentId: 15
            }
        ]
    },
    {
        id: 21,
        label: "User Management",
        link: "/users",
        icon: "user-check",
        subItems: [
            {
                id: 22,
                label: "User List",
                link: "/users",
                parentId: 21
            },
            {
                id: 23,
                label: "Role Manager",
                link: "/roles",
                parentId: 21
            }
        ]
    },
    // {
    //     id: 12,
    //     label: "Warehouse",
    //     link: "/warehouse",
    //     icon: "home",
    //     subItems: [
    //         {
    //             id: 13,
    //             label: "Warehouse Locations",
    //             link: "/warehouse/locations",
    //             parentId: 12
    //         },
    //         {
    //             id: 14,
    //             label: "Shipment Tracking",
    //             link: "/shipment",
    //             parentId: 12,
    //             subItems: [
    //                 {
    //                     id: 15,
    //                     label: "Shipment Received",
    //                     link: "/warehouse/shipment-recieved",
    //                     parentId: 14
    //                 },
    //                 {
    //                     id: 16,
    //                     label: "Products Shipped",
    //                     link: "/warehouse/products-shipped",
    //                     parentId: 14
    //                 },

    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 17,
    //     label: "Invoice Management",
    //     link: "/invoice",
    //     icon: "file",
    //     subItems: [
    //         {
    //             id: 18,
    //             label: "Generate Lead",
    //             link: "/invoice/lead",
    //             parentId: 17
    //         },
    //         {
    //             id: 19,
    //             label: "Lead Conversion",
    //             link: "/invoice/lead-conversion",
    //             parentId: 17
    //         },
    //         {
    //             id: 20,
    //             novidade: false,
    //             label: "Invoice Processing",
    //             link: "/#",
    //             subItems: [
    //                 {
    //                     id: 21,
    //                     label: "Create Invoice",
    //                     link: "/invoices-list",
    //                     parentId: 20
    //                 },
    //                 {
    //                     id: 22,
    //                     label: "Adjust Invoice(s)",
    //                     link: "/invoices-detail",
    //                     parentId: 20
    //                 },
    //                 // {
    //                 //     id: 23,
    //                 //     label: "Assign Invoice",
    //                 //     link: "/invoice/assign",
    //                 //     parentId: 20
    //                 // }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 23,
    //     label: "Customers",
    //     link: "/customers",
    //     icon: "users",
    // },
   
    // {
    //     id: 139,
    //     label: "Analytics",
    //     icon: "pie-chart",
    //     link: "/dashboards-analytics"
    // },
    // {
    //     id: 3,
    //     label: "Applications",
    //     isHeader : true
    // },
    // {
    //     id: 4,
    //     label: "Calendar",
    //     icon: "calendar",
    //     link: "/calendar"
    // },
    // {
    //     id: 5,
    //     label: "Chat",
    //     icon: "message-square",
    //     link: "/chat",
    //     badge:"Hot",
    //     badgecolor:"badge-soft-danger"
    // },
    // {
    //     id: 6,
    //     label: "Kanban Board",
    //     icon: "trello",
    //     link: "/kanban-board"
    // },
    // {
    //     id: 7,
    //     label: "File Manager",
    //     icon: "folder",
    //     link: "/file-manager"
    // },
    // {
    //     id: 8,
    //     novidade: false,
    //     label: "Email",
    //     icon: "mail",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 9,
    //             label: "Inbox",
    //             link: "/inbox",
    //             parentId: 8
    //         },
    //         {
    //             id: 10,
    //             label: "Read Email",
    //             link: "/read-email",
    //             parentId: 8
    //         }
    //     ]
    // },
    // {
    //     id: 11,
    //     novidade: false,
    //     label: "Contacts",
    //     icon: "book",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 12,
    //             label: "User Grid",
    //             link: "/user-grid",
    //             parentId: 11
    //         },
    //         {
    //             id: 13,
    //             label: "User List",
    //             link: "/user-list",
    //             parentId: 11
    //         },
    //         {
    //             id: 140,
    //             label: "User Settings",
    //             link: "/user-settings",
    //             parentId: 11
    //         }
    //     ]
    // },
    // {
    //     id: 14,
    //     label: "Gallery",
    //     icon: "image",
    //     link: "/gallery"
    // },
    // {
    //     id: 15,
    //     novidade: false,
    //     label: "Projects",
    //     icon: "briefcase",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 16,
    //             label: "Projects Grid",
    //             link: "/projects-grid",
    //             parentId: 15
    //         },
    //         {
    //             id: 17,
    //             label: "Projects List",
    //             link: "projects-list",
    //             parentId: 15
    //         },
    //         {
    //             id: 18,
    //             label: "Project Overview",
    //             link: "projects-overview",
    //             parentId: 15
    //         },
    //         {
    //             id: 19,
    //             label: "Create New",
    //             link: "projects-create",
    //             parentId: 15
    //         }
    //     ]
    // },
    // {
    //     id: 21,
    //     label: "Pages",
    //     isHeader : true
    // },
    // {
    //     id: 22,
    //     novidade: false,
    //     label: "Authentication",
    //     icon: "user",
    //     link: "/#",
    //     badge:"9",
    //     badgecolor:"bg-info",
    //     subItems: [
    //         {
    //             id: 23,
    //             label: "Sign In",
    //             link: "/#",
    //             parentId: 22,
    //             subItems: [
    //                 {
    //                     id: 24,
    //                     label: "Basic",
    //                     link: "/auth-signin-basic",
    //                     parentId: 23
    //                 },
    //                 {
    //                     id: 26,
    //                     label: "Cover",
    //                     link: "/auth-signin-cover",
    //                     parentId: 23
    //                 }
    //             ]
    //         },
    //         {
    //             id: 27,
    //             label: "Sign Up",
    //             link: "/#",
    //             parentId: 22,
    //             subItems: [
    //                 {
    //                     id: 28,
    //                     label: "Basic",
    //                     link: "/auth-signup-basic",
    //                     parentId: 22
    //                 },
    //                 {
    //                     id: 29,
    //                     label: "Cover",
    //                     link: "/auth-signup-cover",
    //                     parentId: 22
    //                 }
    //             ]
    //         },
    //         {
    //             id: 30,
    //             label: "Sign Out",
    //             link: "/#",
    //             parentId: 22,
    //             subItems: [
    //                 {
    //                     id: 31,
    //                     label: "Basic",
    //                     link: "/auth-signout-basic",
    //                     parentId: 30
    //                 },
    //                 {
    //                     id: 32,
    //                     label: "Cover",
    //                     link: "/auth-signout-cover",
    //                     parentId: 30
    //                 }
    //             ]
    //         },
    //         {
    //             id: 33,
    //             label: "Lock Screen",
    //             link: "/#",
    //             parentId: 22,
    //             subItems: [
    //                 {
    //                     id: 34,
    //                     label: "Basic",
    //                     link: "/auth-lockscreen-basic",
    //                     parentId: 33
    //                 },
    //                 {
    //                     id: 35,
    //                     label: "Cover",
    //                     link: "/auth-lockscreen-cover",
    //                     parentId: 33
    //                 }
    //             ]
    //         },
    //         {
    //             id: 36,
    //             label: "Forgot Password",
    //             link: "/#",
    //             parentId: 22,
    //             subItems: [
    //                 {
    //                     id: 37,
    //                     label: "Basic",
    //                     link: "/auth-forgotpassword-basic",
    //                     parentId: 36
    //                 },
    //                 {
    //                     id: 38,
    //                     label: "Cover",
    //                     link: "/auth-forgotpassword-cover",
    //                     parentId: 36
    //                 }
    //             ]
    //         },
    //         {
    //             id: 39,
    //             label: "Reset Password",
    //             link: "/#",
    //             parentId: 22,
    //             subItems: [
    //                 {
    //                     id: 40,
    //                     label: "Basic",
    //                     link: "/auth-resetpassword-basic",
    //                     parentId: 39
    //                 },
    //                 {
    //                     id: 41,
    //                     label: "Cover",
    //                     link: "/auth-resetpassword-cover",
    //                     parentId: 39
    //                 }
    //             ]
    //         },
    //         {
    //             id: 42,
    //             label: "Email Verification",
    //             link: "/#",
    //             parentId: 22,
    //             subItems: [
    //                 {
    //                     id: 43,
    //                     label: "Basic",
    //                     link: "/auth-emailverification-basic",
    //                     parentId: 42
    //                 },
    //                 {
    //                     id: 44,
    //                     label: "Cover",
    //                     link: "/auth-emailverification-cover",
    //                     parentId: 42
    //                 }
    //             ]
    //         },
    //         {
    //             id: 45,
    //             label: "2-step Verification",
    //             link: "/#",
    //             parentId: 22,
    //             subItems: [
    //                 {
    //                     id: 46,
    //                     label: "Basic",
    //                     link: "/auth-2step-basic",
    //                     parentId: 45
    //                 },
    //                 {
    //                     id: 47,
    //                     label: "Cover",
    //                     link: "/auth-2step-cover",
    //                     parentId: 45
    //                 }
    //             ]
    //         },
    //         {
    //             id: 48,
    //             label: "Thank you",
    //             link: "/#",
    //             parentId: 22,
    //             subItems: [
    //                 {
    //                     id: 49,
    //                     label: "Basic",
    //                     link: "/auth-thankyou-basic",
    //                     parentId: 48
    //                 },
    //                 {
    //                     id: 50,
    //                     label: "Cover",
    //                     link: "/auth-thankyou-cover",
    //                     parentId: 48
    //                 }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: 51,
    //     novidade: false,
    //     label: "Error Pages",
    //     icon: "alert-circle",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 52,
    //             label: "404 Basic",
    //             link: "/error-404-basic",
    //             parentId: 51
    //         },
    //         {
    //             id: 53,
    //             label: "404 Cover",
    //             link: "/error-404-cover",
    //             parentId: 51
    //         },
    //         {
    //             id: 54,
    //             label: "500 Basic",
    //             link: "/error-500-basic",
    //             parentId: 51
    //         },
    //         {
    //             id: 55,
    //             label: "500 Cover",
    //             link: "/error-500-cover",
    //             parentId: 51
    //         },
    //     ]
    // },
    // {
    //     id: 56,
    //     novidade: false,
    //     label: "Utility",
    //     icon: "file-text",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 57,
    //             label: "Starter Page",
    //             link: "/pages-starter",
    //             parentId: 56
    //         },
    //         {
    //             id: 58,
    //             label: "Profile",
    //             link: "/pages-profile",
    //             parentId: 56
    //         },
    //         {
    //             id: 59,
    //             label: "Maintenance",
    //             link: "/pages-maintenance",
    //             parentId: 56
    //         },
    //         {
    //             id: 60,
    //             label: "Coming Soon",
    //             link: "/pages-comingsoon",
    //             parentId: 56
    //         },
    //         {
    //             id: 61,
    //             label: "FAQs",
    //             link: "/pages-faqs",
    //             parentId: 56
    //         },
    //     ]
    // },
    // {
    //     id: 62,
    //     novidade: false,
    //     label: "Pricing",
    //     icon: "tag",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 63,
    //             label: "Basic",
    //             link: "/pricing-basic",
    //             parentId: 62
    //         },
    //         {
    //             id: 64,
    //             label: "Table",
    //             link: "/pricing-table",
    //             parentId: 62
    //         },
    //     ]
    // },
    // {
    //     id: 65,
    //     novidade: false,
    //     label: "Invoices",
    //     icon: "file",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 66,
    //             label: "Invoice List",
    //             link: "/invoices-list",
    //             parentId: 65
    //         },
    //         {
    //             id: 67,
    //             label: "Invoice Detail",
    //             link: "/invoices-detail",
    //             parentId: 65
    //         },
    //     ]
    // }
    // {
    //     id: 68,
    //     novidade: false,
    //     label: "Timeline",
    //     icon: "award",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 69,
    //             label: "Center View",
    //             link: "/timeline-center",
    //             parentId: 68
    //         },
    //         {
    //             id: 70,
    //             label: "Left View",
    //             link: "/timeline-left",
    //             parentId: 68
    //         },
    //         {
    //             id: 71,
    //             label: "Horizontal View",
    //             link: "/timeline-horizontal",
    //             parentId: 68
    //         },
    //     ]
    // },
    // {
    //     id: 72,
    //     label: "Components",
    //     isHeader : true
    // },
    // {
    //     id: 73,
    //     novidade: false,
    //     label: "UI Elements",
    //     icon: "package",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 74,
    //             label: "Alerts",
    //             link: "/ui-alerts",
    //             parentId: 73
    //         },
    //         {
    //             id: 75,
    //             label: "Buttons",
    //             link: "/ui-buttons",
    //             parentId: 73
    //         },
    //         {
    //             id: 76,
    //             label: "Cards",
    //             link: "/ui-cards",
    //             parentId: 73
    //         },
    //         {
    //             id: 77,
    //             label: "Carousel",
    //             link: "/ui-carousel",
    //             parentId: 73
    //         },
    //         {
    //             id: 78,
    //             label: "Dropdowns",
    //             link: "/ui-dropdowns",
    //             parentId: 73
    //         },
    //         {
    //             id: 79,
    //             label: "Grid",
    //             link: "/ui-grid",
    //             parentId: 73
    //         },
    //         {
    //             id: 80,
    //             label: "Images",
    //             link: "/ui-images",
    //             parentId: 73
    //         },
    //         {
    //             id: 81,
    //             label: "Modals",
    //             link: "/ui-modals",
    //             parentId: 73
    //         },
    //         {
    //             id: 82,
    //             label: "Offcanvas",
    //             link: "/ui-offcanvas",
    //             parentId: 73
    //         },
    //                     {
    //             id: 150,
    //             label: "Placeholders",
    //             link: "/ui-placeholders",
    //             parentId: 73
    //         },
    //         {
    //             id: 83,
    //             label: "Progress Bars",
    //             link: "/ui-progressbars",
    //             parentId: 73
    //         },
    //         {
    //             id: 84,
    //             label: "Tabs & Accordions",
    //             link: "/ui-tabs-accordions",
    //             parentId: 73
    //         },
    //         {
    //             id: 85,
    //             label: "Typography",
    //             link: "/ui-typography",
    //             parentId: 73
    //         },
    //         {
    //             id: 86,
    //             label: "Video",
    //             link: "/ui-video",
    //             parentId: 73
    //         },
    //         {
    //             id: 87,
    //             label: "General",
    //             link: "/ui-general",
    //             parentId: 73
    //         },
    //         {
    //             id: 88,
    //             label: "Colors",
    //             link: "/ui-colors",
    //             parentId: 73
    //         },
    //         {
    //             id: 89,
    //             label: "Utilities",
    //             link: "/ui-utilities",
    //             parentId: 73
    //         },
    //     ]
    // },
    // {
    //     id: 90,
    //     novidade: false,
    //     label: "Extended UI",
    //     icon: "cpu",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 91,
    //             label: "Lightbox",
    //             link: "/extended-lightbox",
    //             parentId: 90
    //         },
    //         {
    //             id: 92,
    //             label: "Range Slider",
    //             link: "/extended-rangeslider",
    //             parentId: 90
    //         },
    //         {
    //             id: 93,
    //             label: "SweetAlert 2",
    //             link: "/extended-sweet-alert",
    //             parentId: 90
    //         },
    //         {
    //             id: 94,
    //             label: "Rating",
    //             link: "/extended-rating",
    //             parentId: 90
    //         },
    //         {
    //             id: 95,
    //             label: "Notifications",
    //             link: "/extended-notifications",
    //             parentId: 90
    //         },
    //         {
    //             id: 96,
    //             label: "Swiper Slider",
    //             link: "/extended-swiperslider",
    //             parentId: 90
    //         },
    //     ]
    // },
    // {
    //     id: 97,
    //     label: "Widgets",
    //     icon: "grid",
    //     link: "/widgets",
    // },
    // {
    //     id: 98,
    //     novidade: false,
    //     label: "Forms",
    //     icon: "edit-3",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 99,
    //             label: "Basic Elements",
    //             link: "/form-elements",
    //             parentId: 98
    //         },
    //         {
    //             id: 100,
    //             label: "Validation",
    //             link: "/form-validation",
    //             parentId: 98
    //         },
    //         {
    //             id: 101,
    //             label: "Advanced Plugins",
    //             link: "/form-advanced",
    //             parentId: 98
    //         },
    //         {
    //             id: 102,
    //             label: "Editors",
    //             link: "/form-editors",
    //             parentId: 98
    //         },
    //         {
    //             id: 103,
    //             label: "File Upload",
    //             link: "/form-uploads",
    //             parentId: 98
    //         },
    //         {
    //             id: 104,
    //             label: "Wizard",
    //             link: "/form-wizard",
    //             parentId: 98
    //         },
    //         {
    //             id: 105,
    //             label: "Mask",
    //             link: "/form-mask",
    //             parentId: 98
    //         },
    //     ]
    // },
    // {
    //     id: 106,
    //     novidade: false,
    //     label: "Tables",
    //     icon: "database",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 107,
    //             label: "Bootstrap Basic",
    //             link: "/tables-basic",
    //             parentId: 106
    //         },
    //         {
    //             id: 108,
    //             label: "Advance Tables",
    //             link: "/tables-advanced",
    //             parentId: 106
    //         },
    //     ]
    // },
    // {
    //     id: 107,
    //     novidade: false,
    //     label: "Apex Charts",
    //     icon: "bar-chart-2",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 108,
    //             label: "Line",
    //             link: "/charts-line",
    //             parentId: 107
    //         },
    //         {
    //             id: 109,
    //             label: "Area",
    //             link: "/charts-area",
    //             parentId: 107
    //         },
    //         {
    //             id: 110,
    //             label: "Column",
    //             link: "/charts-column",
    //             parentId: 107
    //         },
    //         {
    //             id: 111,
    //             label: "Bar",
    //             link: "/charts-bar",
    //             parentId: 107
    //         },
    //         {
    //             id: 112,
    //             label: "Mixed",
    //             link: "/charts-mixed",
    //             parentId: 107
    //         },
    //         {
    //             id: 113,
    //             label: "Timeline",
    //             link: "/charts-timeline",
    //             parentId: 107
    //         },
    //         {
    //             id: 114,
    //             label: "Candlestick",
    //             link: "/charts-candlestick",
    //             parentId: 107
    //         },
    //         {
    //             id: 115,
    //             label: "Boxplot",
    //             link: "/charts-boxplot",
    //             parentId: 107
    //         },
    //         {
    //             id: 116,
    //             label: "Bubble",
    //             link: "/charts-bubble",
    //             parentId: 107
    //         },
    //         {
    //             id: 117,
    //             label: "Scatter",
    //             link: "/charts-scatter",
    //             parentId: 107
    //         },
    //         {
    //             id: 118,
    //             label: "Heatmap",
    //             link: "/charts-heatmap",
    //             parentId: 107
    //         },
    //         {
    //             id: 119,
    //             label: "Treemap",
    //             link: "/charts-treemap",
    //             parentId: 107
    //         },
    //         {
    //             id: 120,
    //             label: "Pie",
    //             link: "/charts-pie",
    //             parentId: 107
    //         },
    //         {
    //             id: 121,
    //             label: "Radialbar",
    //             link: "/charts-radialbar",
    //             parentId: 107
    //         },
    //         {
    //             id: 122,
    //             label: "Radar",
    //             link: "/charts-radar",
    //             parentId: 107
    //         },
    //         {
    //             id: 123,
    //             label: "Polararea",
    //             link: "/charts-polararea",
    //             parentId: 107
    //         },

    //     ]
    // },
    // {
    //     id: 124,
    //     novidade: false,
    //     label: "Icons",
    //     icon: "archive",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 125,
    //             label: "Unicons",
    //             link: "/icons-unicons",
    //             parentId: 124
    //         },
    //         {
    //             id: 126,
    //             label: "Feather icons",
    //             link: "/icons-feathericons",
    //             parentId: 124
    //         },
    //         {
    //             id: 127,
    //             label: "Boxicons",
    //             link: "/icons-boxicons",
    //             parentId: 124
    //         },
    //         {
    //             id: 128,
    //             label: "Material Design",
    //             link: "/icons-materialdesign",
    //             parentId: 124
    //         },
    //         {
    //             id: 129,
    //             label: "Font Awesome 5",
    //             link: "/icons-fontawesome",
    //             parentId: 124
    //         },
    //     ]
    // },
    // {
    //     id: 130,
    //     novidade: false,
    //     label: "Maps",
    //     icon: "map-pin",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 131,
    //             label: "Google",
    //             link: "/maps-google",
    //             parentId: 130
    //         },
    //         {
    //             id: 132,
    //             label: "Vector",
    //             link: "/maps-vector",
    //             parentId: 130
    //         },
    //         {
    //             id: 133,
    //             label: "Leaflet",
    //             link: "/maps-leaflet",
    //             parentId: 130
    //         },
    //     ]
    // },
    // {
    //     id: 134,
    //     novidade: false,
    //     label: "Multi Level",
    //     icon: "share-2",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 135,
    //             label: "Level 1.1",
    //             link: "/#",
    //             parentId: 134
    //         },
    //         {
    //             id: 136,
    //             label: "Level 1.2",
    //             link: "/#",
    //             parentId: 134,
    //             subItems: [
    //                 {
    //                     id: 137,
    //                     label: "Level 2.1",
    //                     link: "/#",
    //                     parentId: 136
    //                 },
    //                 {
    //                     id: 138,
    //                     label: "Level 2.2",
    //                     link: "/#",
    //                     parentId: 136
    //                 }
    //             ]
    //         }
    //     ]
    // },
];

export { menuItems };
