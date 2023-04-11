/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";


import { Box1, Setting4, InfoCircle } from "iconsax-react";
import SystemConfig from "views/Admin/SystemConfig/SystemConfig";
import OrderManagement from "views/Admin/OrderManagement/OrderManagement";
// import HistoricalInvoices from "views/Admin/OrderManagement/HistoricalInvoices";
import HistoricalInvoices from "views/Admin/OrderManagement/OrderInvoice/HistoricalInvoices";
import { Route, Routes } from "react-router-dom";
// import CurrentInvoice from "views/Admin/OrderManagement/CurrentInvoices";
import CurrentInvoice from "views/Admin/OrderManagement/OrderInvoice/CurrentInvoices";
import ViewDetails from "views/Admin/OrderManagement/ViewDetails";
import OrderInvoice from "views/Admin/OrderManagement/OrderInvoice/OrderInvoice";
import OrderStatus from "views/Admin/OrderManagement/OrderStatus";
import EditDetails from "views/Admin/OrderManagement/EditOrder";
import HTMLPages from "views/Admin/HTMLpage/htmlPage";
import Email from "views/template/email";
import SandS from "views/template/S&S";
import OrderPDF from "views/template/OrderPDF";

var routes = [
  {
    path: "/ordermanagement",
    name: "Order Management",
    component: OrderManagement,
    layout: "/admin",
    icon: <Box1 />,
    menuList: true
  },
  {
    path: "/systemconfig",
    name: "System Config",
    component: SystemConfig,
    layout: "/admin",
    icon: <Setting4 variant="Outline" />,
    menuList: true
  },
  {
    path: "/invoice",
    name: "Invoices",
    component: OrderInvoice,
    layout: "/admin",
    icon: <InfoCircle variant="Outline" />,
    menuList: true
  },
  {
    path: "/historicalConfig",
    name: "Order Management - Order Invoice",
    component: HistoricalInvoices,
    layout: "/admin",
    // icon: <Setting4 variant="Outline"/>
    menuList: false
  },
  {
    path: "/orderinvoice",
    name: "Order Management - Order Invoice",
    component: OrderInvoice,
    layout: "/admin",
    // icon: <Setting4 variant="Outline"/>
    menuList: false
  },
  {
    path: "/viewDetails",
    name: "Order Management - Order # 221213210452458",
    component: ViewDetails,
    layout: "/admin",
    // icon: <Setting4 variant="Outline"/>
    menuList: false
  },
  {
    path: "/editDetails",
    name: "Order Management - Order # 221213210452458",
    component: EditDetails, 
    layout: "/admin",
    // icon: <Setting4 variant="Outline"/>
    menuList: false
  },
  {
    path: "/orderStatus",
    name: "Order Status", 
    component: OrderStatus,
    layout: "/admin",
    menuList: false
  },
  {
    path: "/email",
    name: "Email",
    component: Email,
    layout: "/admin",
    menuList: false
  },
  {
    path: "/s&s",
    name: "S&S",
    component: SandS,
    layout: "/admin",
    menuList: false
  },
  {
    path: "/orderpdf",
    name: "OrderPDF",
    component: OrderPDF,
    layout: "/admin",
    menuList: false
  },
];
export default routes;
