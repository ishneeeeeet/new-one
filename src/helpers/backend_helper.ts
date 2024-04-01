import axios from "axios";
import * as url from "./url_helper";
import { ApiCore } from "./api_axios_helper";

const api = new ApiCore();
// Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

//is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
const postFakeRegister = (data: any) => {
  return api
    .create(url.POST_FAKE_REGISTER, data)
    .then(response => {
      if (response.status >= 200 || response.status <= 299)
        return response.data;
      throw response.data;
    })
    .catch(err => {
      let message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
const postFakeLogin = (data: any) => {
  return api.create(url.POST_FAKE_LOGIN, data);
};
// postForgetPwd
const postFakeForgetPwd = (data: any) => {
  return api.create(url.POST_FAKE_PASSWORD_FORGET, data);
};
// Edit profile
const postJwtProfile = (data: any) => {
  return api.create(url.POST_EDIT_JWT_PROFILE, data);
};
const postFakeProfile = (data: any) => {
  return api.create(url.POST_EDIT_PROFILE, data);
};
// Register Method
const postJwtRegister = (url: string, data: any) => {
  return api
    .create(url, data)
    .then(response => {
      if (response.status >= 200 || response.status <= 299)
        return response.data;
      throw response.data;
    })
    .catch(err => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
const postJwtLogin = (data: any) => {
  return api.create(url.POST_FAKE_JWT_LOGIN, data);
};

// postForgetPwd
const postJwtForgetPwd = (data: any) => {
  return api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);
};

// postSocialLogin
const postSocialLogin = (data: any) => {
  return api.create(url.SOCIAL_LOGIN, data);
};

//=============================================================
/** New Working Funtion */
// Vendors

// Get Vendor list
const getVendors = () => {
  return api.get(`${url.VENDRORS}?sort[0]=updatedAt:desc`);
};

// Add Vendor
const addNewVendor = (data: any) => {
  return api.create(url.VENDRORS, data);
};

// Update Vendor
const updateVendor = (data: any) => {
  return api.update(`${url.VENDRORS}/${data.id}`, data);
};

// Update Vendor Status
const updateVendorStatus = (data: any) => {
  return api.update(`${url.VENDRORS}/${data.id}`, data);
};

// Get Active Vendors list
const getActiveVendors = () => {
  return api.get(`${url.VENDRORS}?filters[v_status][$eq]=true&sort[0]=updatedAt:desc`);
};

// Get Active Vendors list
const getActiveWarehouse = () => {
  return api.get(`${url.WAREHOUSES}?filters[w_status][$eq]=true&sort[0]=updatedAt:desc`);
};

// Get Warehouse list
const getWarehouses = () => {
  return api.get(`${url.WAREHOUSES}?sort[0]=updatedAt:desc`);
};

// Add New Warehouse 
const addNewWarehouse = (data: any) => {
  return api.create(url.WAREHOUSES, data);
};


// Update Warehouse
const updateWarehouse = (data: any) => {
  return api.update(`${url.WAREHOUSES}/${data.id}`, data);
};

// Update Warehouse Status
const updateWarehouseStatus = (data: any) => {
  return api.update(`${url.WAREHOUSES}/${data.id}`, data);
};


// Add New ProductAdjustment 
const addNewAdjustment = (data: any) => {
  return api.create(url.INVENTORY_ADJUSTMENT, data);
};

// Get ProductAdjustment list
const getProductAdjmtList = () => {
  return api.get(`${url.INVENTORY_ADJUSTMENT}?populate=*&sort[0]=updatedAt:desc`);
};

// Get Product Adjmt
const productAdjmtDetailsById = (id: any) => {
  return api.get(`${url.INVENTORY_ADJUSTMENT}/${id}?populate=*`);
};

// Get Product Stock Update
const updateProductStock = (event: any) => {
  return api.update(`${url.PRODUCTS}/${event.id}`, event);
};



// ----------------- Products -------------------------- //
const getProducts = () => {
  return api.get(`${url.PRODUCTS}/?populate=*&sort[0]=updatedAt:desc`);
};

const getProductDetailsById = (id: any) => {
  return api.get(`${url.PRODUCTS}/${id}?populate=*`);
}

// Get Active Products
const getActiveProducts = () => {
  return api.get(`${url.PRODUCTS}/?filters[p_status][$eq]=true&sort[0]=updatedAt:desc`);
};

// Add Product
const addNewProduct = (data: any) => {
  return api.create(url.PRODUCTS, data);
};

// Update Product
const updateProduct = (data: any) => {
  return api.update(`${url.PRODUCTS}/${data.id}`, data);
}

const getCategories = () => {
  return api.get(`${url.CATEGORIES}?sort[0]=updatedAt:desc`);
};

const addNewCategory = (data: any) => {
  return api.create(url.CATEGORIES, data);
};

const getUnits = () => {
  return api.get(`${url.UNITS}?sort[0]=updatedAt:desc`);
};

const addNewUnit = (data: any) => {
  return api.create(url.UNITS, data);
};

// ----------------- Product Group-------------------------- //
const getProductGrps = () => {
  return api.get(`${url.PRODUCT_GROUP}?populate=*&sort[0]=updatedAt:desc`);
};

const getProductGrpDetails = (id: any) => {
  return api.get(`${url.PRODUCT_GROUP}/${id}?populate=*`);
}

// Add Product
const addNewProductGrp = (data: any) => {
  return api.create(url.PRODUCT_GROUP, data);
};

// Update Product
const updateProductGrp = (data: any) => {
  return api.update(`${url.PRODUCT_GROUP}/${data.id}`, data);
}
// ----------------- Purchase Order-------------------------- //
const getPurchaseOrder = () => {
  return api.get(`${url.PURCHASE_ORDER}?populate[po_products][populate][pp_product]=*&populate[po_vendor][fields][0]=v_name&populate[po_ship_to][fields][0]=w_name&sort[0]=updatedAt:desc`);
};

const getActivePurchaseOrders = () => {
  return api.get(`${url.PURCHASE_ORDER}?populate[po_products][populate][pp_product][fields][0]=p_name&populate[po_products][populate][pp_product][fields][1]=p_opening_stock&populate[po_products][populate][pp_product][fields][2]=p_color&populate[po_products][populate][pp_location_in_warehouse][fields][0]=w_name&populate[po_vendor][fields][0]=v_name&populate[po_ship_to][fields][0]=w_name&filters[po_status][$eq]=true&sort[0]=updatedAt:desc`);
}

const getPOProductDetailsById = (id: any) => {
  return api.get(`${url.PURCHASE_ORDER}/${id}?populate[po_products][populate][pp_product][fields][0]=p_name&populate[po_vendor][fields][0]=v_name&populate[po_ship_to][fields][0]=w_name`);
};

const getMaxPoNumber = () => {
  return api.get(`${url.PURCHASE_ORDER}?fields[0]=po_number&sort[0]=id:desc&pagination[pageSize]=1`)
}

const addPurchaseOrderProduct = (data: any) => {
  return api.create(url.PURCHASE_ORDER_PRODUCT, data);
};

const addPurchaseOrder = (data: any) => {
  return api.create(url.PURCHASE_ORDER, data);
};

// Update PO Status 
const updatePurchaseOrder = (data: any) => {
  return api.update(`${url.PURCHASE_ORDER}/${data.id}`, data);
}

const updatePOProduct = (data: any) => {
  return api.update(`${url.PURCHASE_ORDER_PRODUCT}/${data.id}`, data);
}

// Goods Received
const getShipmentReceiveds = () => {
  return api.get(`${url.SHIPMENT_RECEIVED}?populate=*&sort[0]=updatedAt:desc`);
}

const addShipmentReceiveds = (data: any) => {
  return api.create(url.SHIPMENT_RECEIVED, data);
}

// Get Active Products
const getActiveLeads = () => {
  return api.get(`${url.LEADS}?filters[ld_status][$ne]=DELETED&sort[0]=updatedAt:desc`);
};

// Get Active Products
const getActiveLeadWithEstimated = () => {
  return api.get(`${url.LEADS}?populate=*&filters[ld_status][$eq]=PENDING&filters[ld_estimated][$eq]=false&sort[0]=updatedAt:desc`);
};

const getLeads = () => {
  return api.get(`${url.LEADS}?populate=*&sort[0]=updatedAt:desc`);
};

const getMaxLeadNumber = () => {
  return api.get(`${url.LEADS}?fields[0]=ld_number&sort[0]=id:desc&pagination[pageSize]=1`)
}

const getLeadDetailsById = (id: any) => {
  return api.get(`${url.LEADS}/${id}?populate=*`);
};

const addLead = (data: any) => {
  return api.create(url.LEADS, data);
}

const updateLead = (data: any) => {
  return api.update(`${url.LEADS}/${data.id}`, data);
};

const getInvoices = () => {
  return api.get(`${url.INVOICES}?populate[iv_products][populate][product][fields][0]=p_name&populate[iv_products][populate][product][fields][1]=p_color&populate[iv_estimate_id]=*&populate[iv_contractor]=*&sort[0]=updatedAt:desc`);
};

const getMaxInvoiceNumber = () => {
  return api.get(`${url.INVOICES}?fields[0]=iv_number&sort[0]=id:desc&pagination[pageSize]=1`)
}

const getInvoiceDetailsById = (id: any) => {
  return api.get(`${url.INVOICES}/${id}?populate=*`);
};

const addInvoice = (data: any) => {
  return api.create(url.INVOICES, data);
}

const addInvoiceProducts = (data: any) => {
  return api.create(url.INVOICE_PRODUCTS, data);
};

const updateInvoiceProducts = (data: any) => {
  return api.update(`${url.INVOICE_PRODUCTS}/${data.id}`, data);
};

const updateEstimateWithInvoiced =(data:any) =>{
  return api.update(`${url.LEAD_CONVERSION}/${data.iv_estimate_id}`, {invoice_created:true});
}

const updateInvoice = (data: any) => {
  return api.update(`${url.INVOICES}/${data.id}?populate=*`, data);
};

// -----------------Customers-------------------------- //
// Customers
const getCustomers = () => {
  return api.get(`${url.CUSTOMERS}?sort[0]=updatedAt:desc`);
};

// Update Customer Status
const updateCustomerStatus = (data: any) => {
  return api.update(`${url.CUSTOMERS}/${data.id}`, data);
};

// Add Customer
const addNewCustomer = (data: any) => {
  return api.create(url.CUSTOMERS, data);
};
// Update Customer
const updateCustomer = (data: any) => {
  return api.update(`${url.CUSTOMERS}/${data.id}`, data);
};

// Get Active Customer list
const getActiveCustomers = () => {
  return api.get(`${url.CUSTOMERS}?filters[c_status][$eq]=true&sort[0]=updatedAt:desc`);
};

// ----------------- Lead-Conversion ------------------------- //
const getLeadConversion = () => {
  return api.get(`${url.LEAD_CONVERSION}?populate[lead][fields][0]=ld_number&populate[lead][populate][ld_customer][fields][0]=c_name&populate[lead][populate][ld_customer][fields][1]=c_address&populate[contractor][fields][0]=co_name&populate[lead_conversion_products][populate][product][fields][0]=p_name&populate[lead_conversion_products][populate][product][fields][1]=p_color&sort[0]=updatedAt:desc`);
};

const getActiveEstimates = () => {
  return api.get(`${url.LEAD_CONVERSION}?populate[contractor][fields][0]=co_name&populate[lead_conversion_products][populate][product][fields][0]=p_name&filters[lc_drafted][$eq]=false&filters[invoice_created][$eq]=false&sort[0]=updatedAt:desc`)
}

const getMaxEstimateNumber = () => {
  return api.get(`${url.LEAD_CONVERSION}?fields[0]=lc_estimate_id&sort[0]=id:desc&pagination[pageSize]=1`)
}

// Customers
const getActiveContractor = () => {
  return api.get(`${url.CONTRACTORS}?filters[co_status][$eq]=true&sort[0]=updatedAt:desc`);
};

const addLeadEstimateProduct = (data: any) => {
  return api.create(url.LEAD_CONVERSION_PRODUCTS, data);
};

const addLeadConversion = (data: any) => {
  return api.create(url.LEAD_CONVERSION, data);
};

const updateLeadWithEstimated = (data:any) => {
  return api.update(`${url.LEADS}/${data.lead}`, {ld_estimated:true});
}

const getSalesReturns = () => {
  return api.get(`${url.SALES_RETURNS}?populate[rt_products][populate][product][fields][0]=p_name&populate[rt_products][populate][product][fields][1]=p_color&populate[invoice_number][fields][0]=iv_number&sort[0]=updatedAt:desc`);
}

const getReturnDetailsById = (id: any) => {
  return api.get(`${url.SALES_RETURNS}/${id}?populate=*`);
};

const addSalesReturns = (data: any) => {
  return api.create(url.SALES_RETURNS, data);
}

export {
  getLoggedInUser,
  isUserAuthenticated,
  postFakeRegister,
  postFakeLogin,
  postFakeProfile,
  postFakeForgetPwd,
  postJwtRegister,
  postJwtLogin,
  postJwtForgetPwd,
  postJwtProfile,
  postSocialLogin,

  //Working
  getVendors,
  addNewVendor,
  updateVendor,
  updateVendorStatus,
  getWarehouses,
  addNewWarehouse,
  updateWarehouse,
  updateWarehouseStatus,
  getProducts,
  getActiveProducts,
  getProductDetailsById,
  addNewProduct,
  updateProduct,
  addNewAdjustment,
  getProductAdjmtList,
  productAdjmtDetailsById,
  updateProductStock,
  getCategories,
  addNewCategory,
  getUnits,
  addNewUnit,
  getProductGrps,
  getProductGrpDetails,
  addNewProductGrp,
  updateProductGrp,
  getActiveVendors,
  getActiveWarehouse,
  getPurchaseOrder,
  getActivePurchaseOrders,
  getMaxPoNumber,
  addPurchaseOrderProduct,
  addPurchaseOrder,
  getShipmentReceiveds,
  getPOProductDetailsById,
  updatePurchaseOrder,
  updatePOProduct,
  addShipmentReceiveds,
  getActiveLeads,
  getLeads,
  getLeadDetailsById,
  getMaxLeadNumber,
  addLead,
  updateLead,
  getInvoices,
  getInvoiceDetailsById,
  getMaxInvoiceNumber,
  addInvoice,
  addInvoiceProducts,
  updateInvoiceProducts,
  updateEstimateWithInvoiced,
  updateInvoice,
  getCustomers,
  updateCustomerStatus,
  addNewCustomer,
  updateCustomer,
  getActiveCustomers,
  getLeadConversion,
  getActiveEstimates,
  getMaxEstimateNumber,
  getActiveContractor,
  addLeadEstimateProduct,
  addLeadConversion,
  updateLeadWithEstimated,
  getActiveLeadWithEstimated,
  getSalesReturns,
  getReturnDetailsById,
  addSalesReturns
};