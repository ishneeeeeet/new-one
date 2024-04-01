import { combineReducers } from 'redux'

import contactsReducer from './Contacts/reducer'

import layoutReducer from "./Layout/reducer"

// Calendar
import calendarReducer from "./Calendar/reducer";

//Chat
import chatReducer from "./Chat/reducer";

//register
import registerReducer from "./Auth/Register/reducer";

//login
import loginReducer from "./Auth/Login/reducer";

//project
import projectsReducer from "./Projects/reducer";

// // User Profile 
import profileReducer from "./Auth/Profile/reducer";

// //kanban
import kanbanboardsReducer from "./Kanbanboards/reducer"

// // Forget Password
import forgetPasswordReducer from "./Auth/Forgetpwd/reducer";

// // Vendors
import vendorReducer from "./Purchase/Vendors/reducer";

// // Warehouse
import warehouseReducer from "./Purchase/Warehouses/reducer";

// // POMgmt
import purchaseReducer from "./Purchase/POMgmt/reducer";

// // Inventory Adjustment
import inventoryAdjmtReducer from "./Inventory/InventoryAdjmt/reducer";

// // Inventory Product 
import { productReducer, categoryReducer, unitsReducer } from "./Inventory/Products/reducer";

// Product Grps
import productGrpReducer from "./Inventory/ProductGrps/reducer";

// Leads
import leadsReducer from "./Sales/Leads/reducer"

// //Invoices
import invoiceReducer from "./Sales/Invoices/reducer";

// //Customers
import customersReducer from "./Sales/Customers/reducer";

//Lead-Conversion
import leadConversionSlice from "./Sales/Lead-conversion/reducer";

import contractorsSlice from "./Sales/Contractor/reducer"

import salesReturnsReducer from "./Sales/Returns/reducer"

const rootReducer = combineReducers({
    contacts: contactsReducer,
    Layout: layoutReducer,
    calendar: calendarReducer,
    // chat: chatReducer,
    register: registerReducer,
    login: loginReducer,
    forgetPassword: forgetPasswordReducer,
    // projects: projectsReducer,
    profile: profileReducer,
    kanbanboards: kanbanboardsReducer,
    vendors: vendorReducer,
    purchase: purchaseReducer,
    warehouse: warehouseReducer,
    products: productReducer,
    categories: categoryReducer,
    units: unitsReducer,
    adjustment: inventoryAdjmtReducer,
    productGrps: productGrpReducer,
    leads: leadsReducer,
    invoices: invoiceReducer,
    customers:customersReducer,
    conversion:leadConversionSlice,
    contractor:contractorsSlice,
    returns: salesReturnsReducer
})

export default rootReducer