import { Redirect } from "react-router-dom";

//Sales
import Dashboard from "../pages/Dashboard";
//Analytics
// import Analytics from  ;
//KanbanBoard
import KanbanBoard from "../pages/KanbanBoard";
//FileManager
import FileManager from "../pages/FileManager";
// //Contacts
// import UserGrid from "../pages/Contacts/UserGrid";
// import UserList from "../pages/Contacts/UsertList";
// import UsertSetting from "../pages/Contacts/UsertSetting";

//profile
import UserProfile from "../pages/Authentication/user-profile"

//  Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login1";
import Login2 from "../pages/AuthenticationInner/Login2";
import Register1 from "../pages/AuthenticationInner/Register1";
import Register2 from "../pages/AuthenticationInner/Register2";
import Signout1 from "../pages/AuthenticationInner/Signout1";
import Signout2 from "../pages/AuthenticationInner/Signout2";
import ForgotPassword1 from "../pages/AuthenticationInner/ForgotPassword1";
import ForgotPassword2 from "../pages/AuthenticationInner/ForgotPassword2";
import ResetPassword1 from "../pages/AuthenticationInner/ResetPassword1";
import ResetPassword2 from "../pages/AuthenticationInner/ResetPassword2";

import EmailVerification1 from "../pages/AuthenticationInner/EmailVerification1";
import EmailVerification2 from "../pages/AuthenticationInner/EmailVerification2";
import TwoStep1 from "../pages/AuthenticationInner/TwoStep1";
import TwoStep2 from "../pages/AuthenticationInner/TwoStep2";
import LockScreen1 from "../pages/AuthenticationInner/LockScreen1";
import LockScreen2 from "../pages/AuthenticationInner/LockScreen2";
import Thankyou1 from "../pages/AuthenticationInner/Thankyou1";
import Thankyou2 from "../pages/AuthenticationInner/Thankyou2";

//Error
import Error1 from "../pages/Error/Error1";
import Error2 from "../pages/Error/Error2";
import ErrorBasic from "../pages/Error/ErrorBasic";
import ErrorCover from "../pages/Error/ErrorCover";

//Contact
// import Inbox from "../pages/Email/Inbox";
// import EmailRead from "../pages/Email/email-read";

// //Gallery
// import Gallery from "../pages/Gallery";

// //projects
// import ProjectGrid from "../pages/Projects/ProjectGrid";
// import ProjectList from "../pages/Projects/ProjectList";
// import ProjectOverview from "../pages/Projects/ProjectOverview";
// import ProjectCreate from "../pages/Projects/ProjectCreate";

//Authentication pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//utility
import PageStarter from "../pages/Utility/PageStarter";
import PagesComingsoon from "../pages/Utility/PageComingsoon";
import PageMaintenance from "../pages/Utility/PageMaintenance";
import PageFaqs from "../pages/Utility/PageFAQs";
import Profile from "../pages/Utility/Profile";


//pricing
import PricingBasic from "../pages/Pricing/PricingBasic";
import PricingCover from "../pages/Pricing/PricingCover";

//Invoice
import InvoiceList from "../pages/Sales/Invoices/invoice-list";

//TimeLine
import TimeLineCenter from "../pages/Timeline/TimeLineCenter";
import TimeLineLeft from "../pages/Timeline/TimeLineLeft";
import TimeLineHorizontal from "../pages/Timeline/TimeLineHorizontal";
 
//UI Components
import UiAlert from "../pages/UiComponents/UiAlert";
import UiButton from "../pages/UiComponents/UiButton";
import UiCard from "../pages/UiComponents/UiCard";
import UiCarousel from "../pages/UiComponents/UiCarousel";
import UiDropdowns from "../pages/UiComponents/UiDropdowns";
import UiGrid from "../pages/UiComponents/UiGrid";
import UiModal from "../pages/UiComponents/UiModals";
import UiImages from "../pages/UiComponents/UiImages";
import UiDrawer from "../pages/UiComponents/UiDrawer";
import UiProgressbar from "../pages/UiComponents/UiProgressbar";
import UiGeneral from "../pages/UiComponents/UiGeneral";
import UiColors from "../pages/UiComponents/UiColors";
import UiTypography from "../pages/UiComponents/UiTypography";
import UiVideo from "../pages/UiComponents/UiVideo";
import UiTabsAccordions from "../pages/UiComponents/UiTabsAccordions";
import Utilities from "../pages/UiComponents/Utilities";
import UiPlaceholders from "../pages/UiComponents/UiPlaceholders";

//Forms pages
import FormElements from "../pages/Forms/FormElements";
import FormValidation from "../pages/Forms/FormValidation";
import AdvancedPlugins from "../pages/Forms/AdvancedPlugins";
import FormEditors from "../pages/Forms/FormEditors";
import FormUpload from "../pages/Forms/FormUpload";
import FormWizard from "../pages/Forms/FormWizard";
import FormMask from "../pages/Forms/FormMask";

//Tables
import BasicTable from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";

//Charts
import ChartsArea from "../pages/Charts/ChartsArea";
import ChartsBar from "../pages/Charts/ChartsBar";
import ChartsBoxplot from "../pages/Charts/ChartsBoxplot";
import ChartsBubble from "../pages/Charts/ChartsBubble";
import ChartsCandlestick from "../pages/Charts/ChartsCandlestick";
import ChartsColumn from "../pages/Charts/ChartsColumn";
import ChartsHeatmap from "../pages/Charts/ChartsHeatmap";
import ChartsLine from "../pages/Charts/ChartsLine";
import ChartsMixed from "../pages/Charts/ChartsMixed";
import ChartsPie from "../pages/Charts/ChartsPie";
import ChartsPolararea from "../pages/Charts/ChartsPolararea";
import Chartsradar from "../pages/Charts/Chartsradar";
import ChartsRadialbar from "../pages/Charts/ChartsRadialbar";
import ChartsScatter from "../pages/Charts/ChartsScatter";
import ChartsTimeline from "../pages/Charts/ChartsTimeline";
import ChartsTreemap from "../pages/Charts/ChartsTreemap";

//Icons
import IconUnicon from "../pages/Icons/IconUnicon";
import Feathericons from "../pages/Icons/Feathericons";
import IconBoxicons from "../pages/Icons/IconBoxicons";
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import IconFontawesome from "../pages/Icons/IconFontawesome";

//Extended pages
import UiLightbox from "../pages/Extended/Lightbox";
import RangeSlider from "../pages/Extended/Rangeslider";
import UiSweetAlert from "../pages/Extended/SweetAlert";
import UiRating from "../pages/Extended/UiRating";
import Notifications from "../pages/Extended/Notifications";
import Swiperslider from '../pages/Extended/Swiperslider';

// Maps
import MapsGoogle from "../pages/Maps/MapsGoogle";
import MapsVector from "../pages/Maps/MapsVector";
import MapsLeaflet from "../pages/Maps/MapsLeaflet";
import VendorsMgmt from "src/pages/Purchase/Vendors";
import POMgmt from "src/pages/Purchase/POMgmt";
import ProductDetails from "src/pages/InventoryTracking/ProductMgmt/ProductDetails";
import ProductGroups from "src/pages/InventoryTracking/ProductMgmt/ProductGroups";

// Pages
import WareHouseLocation from "../pages/Purchase/Warehouses";
import GoodReceived from "src/pages/Purchase/GoodReceived";
import ProductShipped from "../pages/WarehouseManagement/ShipmentTracking/ProductShipped";
import Customers from "../pages/Sales/Customers";
import Leads from "src/pages/Sales/Leads";
import InventoryAdjustments from "src/pages/InventoryTracking/InventoryAdjustments";
// import Chat from "src/pages/Chat";
import AddEditPurchaseOrder from "src/pages/Purchase/POMgmt/CreateOrEditPurchaseOrder";
import Calender from "src/pages/Calendar";
import AddEditGoodsReceived from "src/pages/Purchase/GoodReceived/CreateOrEditGoodsReceived";
import LeadConversion from "src/pages/Sales/LeadConversion";
import AddEditLeadConversion from "src/pages/Sales/LeadConversion/add-edit-lead-conversion";
import CreateOrEditInventoryAdjmt from "src/pages/InventoryTracking/InventoryAdjustments/CreateOrEditInventoryAdjmt";
import ViewPurchaseOrder from "src/pages/Purchase/POMgmt/viewPurchaseOrder";
import CreateOrEditLead from "src/pages/Sales/Leads/CreateOrEdit";
import CreateOrEditProduct from "src/pages/InventoryTracking/ProductMgmt/ProductDetails/CreateOrEdit";
import CreateOrEditProductGrp from "src/pages/InventoryTracking/ProductMgmt/ProductGroups/CreateOrEdit";
import CreateOrEditInvoice from "src/pages/Sales/Invoices/CreateOrEdit";
import SalesReturnList from "src/pages/Sales/Return";
import CreateOrEditReturn from "src/pages/Sales/Return/CreateOrEdit";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const userRoutes: Array<RouteProps> = [
  //dashboard
  { path: "/dashboard", component: Dashboard },
  { path: "/chat", component: Error1 },
  { path: "/job-board", component: KanbanBoard },

  //pages
  { path: "/purchase/warehouses", component: WareHouseLocation },
  { path: "/warehouse/shipment-recieved", component: ProductShipped },
  { path: "/purchase/goods-received", component: GoodReceived },
  { path: "/purchase/goods-received/new", component: AddEditGoodsReceived },
  { path: "/purchase/goods-received/view/:id", component: GoodReceived },
  { path: "/customers", component: Customers },
  { path: "/purchase/vendors", component: VendorsMgmt },
  { path: "/inventory/products", component: ProductDetails },
  { path: "/inventory/products/new", component: CreateOrEditProduct },
  { path: "/inventory/products/edit/:id", component: CreateOrEditProduct },
  { path: "/inventory/product-groups", component: ProductGroups },
  { path: "/inventory/product-groups/new", component: CreateOrEditProductGrp },
  { path: "/inventory/product-groups/edit/:id", component: CreateOrEditProductGrp },
  { path: "/inventory/inventory-adjustment", component: InventoryAdjustments },
  { path: "/inventory/inventory-adjustment/new", component: CreateOrEditInventoryAdjmt },
  { path: "/purchase/purchase-orders", component: POMgmt },
  { path: "/purchase/purchase-orders/new", component: AddEditPurchaseOrder },
  { path: "/purchase/purchase-orders/view/:id", component: ViewPurchaseOrder },
  { path: "/kanban-board", component: KanbanBoard },
  { path: "/sales/estimates", component: LeadConversion },
  { path: "/sales/estimates/new", component: AddEditLeadConversion },
  { path: "/sales/estimates/edit/:id", component: AddEditLeadConversion },
  { path: "/sales/leads", component: Leads },
  { path: "/sales/leads/edit/:id", component: CreateOrEditLead },
  { path: "/sales/leads/new", component: CreateOrEditLead },
  { path: "/invoice/assign", component: Error1 },
  { path: "/users", component: Error1 },
  { path: "/roles", component: Error1 },
  { path: "/installation-schedule", component: Calender },
  //Widgets
  // { path: "/widgets", component: Widgets },

  //UI Components
  { path: "/ui-alerts", component: UiAlert },
  { path: "/ui-buttons", component: UiButton },
  { path: "/ui-cards", component: UiCard },
  { path: "/ui-carousel", component: UiCarousel },
  { path: "/ui-dropdowns", component: UiDropdowns },
  { path: "/ui-grid", component: UiGrid },
  { path: "/ui-modals", component: UiModal },
  { path: "/ui-images", component: UiImages },
  { path: "/ui-offcanvas", component: UiDrawer },
  { path: "/ui-progressbars", component: UiProgressbar },
  { path: "/ui-general", component: UiGeneral },
  { path: "/ui-colors", component: UiColors },
  { path: "/ui-typography", component: UiTypography },
  { path: "/ui-video", component: UiVideo },
  { path: "/ui-tabs-accordions", component: UiTabsAccordions },
  { path: "/ui-utilities", component: Utilities },
  { path: "/ui-placeholders", component: UiPlaceholders },

  //Extended pages
  { path: "/extended-lightbox", component: UiLightbox },
  { path: "/extended-rangeslider", component: RangeSlider },
  { path: "/extended-sweet-alert", component: UiSweetAlert },
  { path: "/extended-rating", component: UiRating },
  { path: "/extended-notifications", component: Notifications },
  { path: "/extended-swiperslider", component: Swiperslider },

  //Utility
  { path: "/pages-starter", component: PageStarter },
  { path: "/pages-faqs", component: PageFaqs },
  { path: "/pages-profile", component: Profile },

  //pricing
  { path: "/pricing-basic", component: PricingBasic },
  { path: "/pricing-table", component: PricingCover },


  //Invoice
  { path: "/sales/invoices", component: InvoiceList },
  { path: "/sales/invoices/new", component: CreateOrEditInvoice },
  { path: "/sales/return", component: SalesReturnList },
  { path: "/sales/return/new", component: CreateOrEditReturn },

  //Timeline
  { path: "/timeline-center", component: TimeLineCenter },
  { path: "/timeline-left", component: TimeLineLeft },
  { path: "/timeline-horizontal", component: TimeLineHorizontal },

  // Forms pages
  { path: "/form-elements", component: FormElements },
  { path: "/form-validation", component: FormValidation },
  { path: "/form-advanced", component: AdvancedPlugins },
  { path: "/form-editors", component: FormEditors },
  { path: "/form-uploads", component: FormUpload },
  { path: "/form-wizard", component: FormWizard },
  { path: "/form-mask", component: FormMask },

  //tables
  { path: "/tables-basic", component: BasicTable },
  { path: "/tables-advanced", component: DatatableTables },

  //charts
  { path: "/charts-area", component: ChartsArea },
  { path: "/charts-bar", component: ChartsBar },
  { path: "/charts-boxplot", component: ChartsBoxplot },
  { path: "/charts-bubble", component: ChartsBubble },
  { path: "/charts-candlestick", component: ChartsCandlestick },
  { path: "/charts-column", component: ChartsColumn },
  { path: "/charts-heatmap", component: ChartsHeatmap },
  { path: "/charts-line", component: ChartsLine },
  { path: "/charts-mixed", component: ChartsMixed },
  { path: "/charts-pie", component: ChartsPie },
  { path: "/charts-polararea", component: ChartsPolararea },
  { path: "/charts-radar", component: Chartsradar },
  { path: "/charts-radialbar", component: ChartsRadialbar },
  { path: "/charts-scatter", component: ChartsScatter },
  { path: "/charts-timeline", component: ChartsTimeline },
  { path: "/charts-treemap", component: ChartsTreemap },


  //Icons
  { path: "/icons-boxicons", component: IconBoxicons },
  { path: "/icons-feathericons", component: Feathericons },
  { path: "/icons-materialdesign", component: IconMaterialdesign },
  { path: "/icons-fontawesome", component: IconFontawesome },
  { path: "/icons-unicons", component: IconUnicon },


  // //profile
  { path: "/profile", component: UserProfile },

  // Maps
  { path: "/maps-google", component: MapsGoogle },
  { path: "/maps-vector", component: MapsVector },
  { path: "/maps-leaflet", component: MapsLeaflet },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const authRoutes: Array<RouteProps> = [
  //Authentication pages
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },
  { path: "/forgot-password", component: ForgetPwd },

  // Authentication Inner
  { path: "/auth-signin-basic", component: Login1 },
  { path: "/auth-signin-cover", component: Login2 },
  { path: "/auth-signup-basic", component: Register1 },
  { path: "/auth-signup-cover", component: Register2 },
  { path: "/auth-signout-basic", component: Signout1 },
  { path: "/auth-signout-cover", component: Signout2 },
  { path: "/auth-lockscreen-basic", component: LockScreen1 },
  { path: "/auth-lockscreen-cover", component: LockScreen2 },
  { path: "/auth-forgotpassword-basic", component: ForgotPassword1 },
  { path: "/auth-forgotpassword-cover", component: ForgotPassword2 },
  { path: "/auth-resetpassword-basic", component: ResetPassword1 },
  { path: "/auth-resetpassword-cover", component: ResetPassword2 },
  { path: "/auth-emailverification-basic", component: EmailVerification1 },
  { path: "/auth-emailverification-cover", component: EmailVerification2 },
  { path: "/auth-2step-basic", component: TwoStep1 },
  { path: "/auth-2step-cover", component: TwoStep2 },
  { path: "/auth-thankyou-basic", component: Thankyou1 },
  { path: "/auth-thankyou-cover", component: Thankyou2 },

  { path: "/error-404-basic", component: Error1 },
  { path: "/error-404-cover", component: Error2 },
  { path: "/error-500-basic", component: ErrorBasic },
  { path: "/error-500-cover", component: ErrorCover },

  //utility page
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-maintenance", component: PageMaintenance },
];

export { userRoutes, authRoutes };
