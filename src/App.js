import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManagerPath from "~/constants/ManagerPath";
import Admin from "~/pages/Admin";
import AddressManage from "~/pages/Admin-address";
import AddressCreate from "~/pages/Admin-address/AddressCreate";
import AddressUpdate from "~/pages/Admin-address/AddressUpdate";
import BrandManage from "~/pages/Admin-brand";
import BrandCreate from "~/pages/Admin-brand/BrandCreate";
import BrandUpdate from "~/pages/Admin-brand/BrandUpdate";
import CategoryManage from "~/pages/Admin-category";
import CategoryCreate from "~/pages/Admin-category/CategoryCreate";
import CategoryUpdate from "~/pages/Admin-category/CategoryUpdate";
import CountManage, { CountCreate, CountUpdate } from "~/pages/Admin-count";
import CustomerManage from "~/pages/Admin-customer";
import CustomerGroupManage from "~/pages/Admin-customer-group";
import CustomerGroupCreate from "~/pages/Admin-customer-group/CustomerGroupCreate";
import CustomerGroupUpdate from "~/pages/Admin-customer-group/CustomerGroupUpdate";
import CustomerResourseManage from "~/pages/Admin-customer-resource";
import CustomerResourseCreate from "~/pages/Admin-customer-resource/CustomerResourseCreate";
import CustomerResourseUpdate from "~/pages/Admin-customer-resource/CustomerResourseUpdate";
import CustomerStatusManage from "~/pages/Admin-customer-status";
import CustomerStatusCreate from "~/pages/Admin-customer-status/CustomerStatusCreate";
import CustomerStatusUpdate from "~/pages/Admin-customer-status/CustomerStatusUpdate";
import CustomerCreate from "~/pages/Admin-customer/CustomerCreate";
import CustomerUpdate from "~/pages/Admin-customer/CustomerUpdate";
import DepartmentManage from "~/pages/Admin-department";
import DepartmentCreate from "~/pages/Admin-department/DepartmentCreate";
import DepartmentUpdate from "~/pages/Admin-department/DepartmentUpdate";
import DestinationManage, { DestinationCreate, DestinationUpdate } from "~/pages/Admin-destination";
import DistrictManage from "~/pages/Admin-district";
import DistrictCreate from "~/pages/Admin-district/DistrictCreate";
import DistrictUpdate from "~/pages/Admin-district/DistrictUpdate";
import DocketManage, { DocketCreate, DocketUpdate } from "~/pages/Admin-docket";
import EmployeeCreate from "~/pages/Admin-employee/EmployeeCreate";
import EmployeeManage from "~/pages/Admin-employee/EmployeeManage";
import EmployeeUpdate from "~/pages/Admin-employee/EmployeeUpdate";
import GuaranteeManage, { GuaranteeCreate, GuaranteeUpdate } from "~/pages/Admin-guarantee";
import InventoryManage from "~/pages/Admin-inventory";
import JobLevelManage from "~/pages/Admin-jobLevel";
import JobLevelCreate from "~/pages/Admin-jobLevel/JobLevelCreate";
import JobLevelUpdate from "~/pages/Admin-jobLevel/JobLevelUpdate";
import JobTitleManage from "~/pages/Admin-jobTitle";
import JobTitleCreate from "~/pages/Admin-jobTitle/JobTitleCreate";
import JobTitleUpdate from "~/pages/Admin-jobTitle/JobTitleUpdate";
import JobTypeManage from "~/pages/Admin-jobType";
import JobTypeCreate from "~/pages/Admin-jobType/JobTypeCreate";
import JobTypeUpdate from "~/pages/Admin-jobType/JobTypeUpdate";
import OfficeManage from "~/pages/Admin-office";
import OfficeCreate from "~/pages/Admin-office/OfficeCreate";
import OfficeUpdate from "~/pages/Admin-office/OfficeUpdate";
import OrderManage, { OrderCreate, OrderUpdate } from "~/pages/Admin-order";
import OrderCancellationReasonManage, {
  OrderCancellationReasonCreate,
  OrderCancellationReasonUpdate,
} from "~/pages/Admin-order-cancellation-reason";
import OrderResourceManage, { OrderResourceCreate, OrderResourceUpdate } from "~/pages/Admin-order-resourse";
import ProductManage from "~/pages/Admin-product";
import ProductCreate from "~/pages/Admin-product/ProductCreate";
import ProductUpdate from "~/pages/Admin-product/ProductUpdate";
import PropertyManage, { PropertyCreate, PropertyUpdate } from "~/pages/Admin-property";
import ProvinceManage from "~/pages/Admin-province";
import ProvinceCreate from "~/pages/Admin-province/ProvinceCreate";
import ProvinceUpdate from "~/pages/Admin-province/ProvinceUpdate";
import RoleManage from "~/pages/Admin-role";
import RoleCreate from "~/pages/Admin-role/RoleCreate";
import RoleUpdate from "~/pages/Admin-role/RoleUpdate";
import SpecificationManage, { SpecificationCreate, SpecificationUpdate } from "~/pages/Admin-specification";
import SupplierManage from "~/pages/Admin-supplier";
import SupplierCreate from "~/pages/Admin-supplier/SupplierCreate";
import SuppilerUpdate from "~/pages/Admin-supplier/SupplierUpdate";
import TagManage, { TagCreate, TagUpdate } from "~/pages/Admin-tag";
import TransferManage, { TransferCreate, TransferUpdate } from "~/pages/Admin-transfer";
import UnitCreate from "~/pages/Admin-unit/UnitCreate";
import UnitManage from "~/pages/Admin-unit/UnitManage";
import UnitUpdate from "~/pages/Admin-unit/UnitUpdate";
import UserManage from "~/pages/Admin-user";
import UserCreate from "~/pages/Admin-user/UserCreate";
import UserUpdate from "~/pages/Admin-user/UserUpdate";
import WarehouseManage, { WarehouseCreate, WarehouseUpdate } from "~/pages/Admin-warehouse";
import Client from "~/pages/Client";
import ClientAllCategories from "~/pages/Client-all-category";
import ClientCart from "~/pages/Client-cart/ClientCart";
import ClientCategory from "~/pages/Client-category";
import ClientChat from "~/pages/Client-chat";
import ClientHome from "~/pages/Client-home/ClientHome";
import ClientNotification from "~/pages/Client-notification";
import ClientOrderDetail from "~/pages/Client-order-detail/ClientOrderDetail";
import ClientOrder from "~/pages/Client-order/ClientOrder";
import ClientPreorder from "~/pages/Client-preorder";
import ClientProduct from "~/pages/Client-product";
import ClientReview from "~/pages/Client-review";
import ClientReward from "~/pages/Client-reward";
import ClientSearch from "~/pages/Client-search";
import ClientSettingEmail from "~/pages/Client-setting-email";
import ClientSettingPassword from "~/pages/Client-setting-password";
import ClientSettingPersonal from "~/pages/Client-setting-personal/ClientSettingPersonal";
import ClientSettingPhone from "~/pages/Client-setting-phone";
import ClientSetting from "~/pages/Client-setting/ClientSetting";
import ClientSignin from "~/pages/Client-signin";
import ClientSignup from "~/pages/Client-signup";
import ClientUser from "~/pages/Client-user/ClientUser";
import ClientWishlist from "~/pages/Client-wishlist";
import DocketReasonManage, { DocketReasonCreate, DocketReasonUpdate } from "./pages/Admin-docket-reason";
import PurchaseOrderManage, { PurchaseOrderCreate, PurchaseOrderUpdate } from "./pages/Admin-purchase-order";
import WaybillManage, { WaybillCreate, WaybillUpdate } from "~/pages/Admin-waybill";
import ReviewManage from "~/pages/Admin-review";
import RewardStartegyManage from "~/pages/Admin-reward-strategy";
import VoucherManage from "~/pages/Admin-voucher";
import PaymentMethodManage from "~/pages/Admin-payment-method";
import PromotionManage, { PromotionCreate, PromotionUpdate } from "~/pages/Admin-promotion";
import AdminNotification from "~/pages/admin-notification";
import AdminAccount from "~/pages/admin-account";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Notifications />
        <ModalsProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Client />}>
                <Route index element={<ClientHome />} />
                <Route path="/cart" element={<ClientCart />} />
                <Route path="/order" element={<ClientOrder />} />
                <Route path="/order/detail/:code" element={<ClientOrderDetail />} />
                <Route path="/user/" element={<ClientUser />} />
                <Route path="/user/setting" element={<ClientSetting />} />
                <Route path="/user/setting/personal" element={<ClientSettingPersonal />} />
                <Route path="/user/setting/phone" element={<ClientSettingPhone />} />
                <Route path="/user/setting/email" element={<ClientSettingEmail />} />
                <Route path="/user/setting/password" element={<ClientSettingPassword />} />
                <Route path="/user/notification" element={<ClientNotification />} />
                <Route path="/user/review" element={<ClientReview />} />
                <Route path="/user/reward" element={<ClientReward />} />
                <Route path="/user/wishlist" element={<ClientWishlist />} />
                <Route path="/user/preorder" element={<ClientPreorder />} />
                <Route path="/user/chat" element={<ClientChat />} />
                <Route path="/product/:slug" element={<ClientProduct />} />
                <Route path="/all-categories" element={<ClientAllCategories />} />
                <Route path="/category/:slug" element={<ClientCategory />} />
                <Route path="/search" element={<ClientSearch />} />
                <Route path="/signin" element={<ClientSignin />} />
                <Route path="/signup" element={<ClientSignup />} />
              </Route>
              <Route path="/admin" element={<Admin />}>
                <Route path={ManagerPath.ADDRESS} element={<AddressManage />} />
                <Route path={ManagerPath.ADDRESS + "/create"} element={<AddressCreate />} />
                <Route path={ManagerPath.ADDRESS + "/update/:id"} element={<AddressUpdate />} />
                <Route path={ManagerPath.PROVINCE} element={<ProvinceManage />} />
                <Route path={ManagerPath.PROVINCE + "/create"} element={<ProvinceCreate />} />
                <Route path={ManagerPath.PROVINCE + "/update/:id"} element={<ProvinceUpdate />} />
                <Route path={ManagerPath.DISTRICT} element={<DistrictManage />} />
                <Route path={ManagerPath.DISTRICT + "/create"} element={<DistrictCreate />} />
                <Route path={ManagerPath.DISTRICT + "/update/:id"} element={<DistrictUpdate />} />
                <Route path={ManagerPath.USER} element={<UserManage />} />
                <Route path={ManagerPath.USER + "/create"} element={<UserCreate />} />
                <Route path={ManagerPath.USER + "/update/:id"} element={<UserUpdate />} />
                <Route path={ManagerPath.ROLE} element={<RoleManage />} />
                <Route path={ManagerPath.ROLE + "/create"} element={<RoleCreate />} />
                <Route path={ManagerPath.ROLE + "/update/:id"} element={<RoleUpdate />} />
                <Route path={ManagerPath.EMPLOYEE} element={<EmployeeManage />} />
                <Route path={ManagerPath.EMPLOYEE + "/create"} element={<EmployeeCreate />} />
                <Route path={ManagerPath.EMPLOYEE + "/update/:id"} element={<EmployeeUpdate />} />
                <Route path={ManagerPath.OFFICE} element={<OfficeManage />} />
                <Route path={ManagerPath.OFFICE + "/create"} element={<OfficeCreate />} />
                <Route path={ManagerPath.OFFICE + "/update/:id"} element={<OfficeUpdate />} />
                <Route path={ManagerPath.DEPARTMENT} element={<DepartmentManage />} />
                <Route path={ManagerPath.DEPARTMENT + "/create"} element={<DepartmentCreate />} />
                <Route path={ManagerPath.DEPARTMENT + "/update/:id"} element={<DepartmentUpdate />} />
                <Route path={ManagerPath.JOB_TYPE} element={<JobTypeManage />} />
                <Route path={ManagerPath.JOB_TYPE + "/create"} element={<JobTypeCreate />} />
                <Route path={ManagerPath.JOB_TYPE + "/update/:id"} element={<JobTypeUpdate />} />
                <Route path={ManagerPath.JOB_LEVEL} element={<JobLevelManage />} />
                <Route path={ManagerPath.JOB_LEVEL + "/create"} element={<JobLevelCreate />} />
                <Route path={ManagerPath.JOB_LEVEL + "/update/:id"} element={<JobLevelUpdate />} />
                <Route path={ManagerPath.JOB_TITLE} element={<JobTitleManage />} />
                <Route path={ManagerPath.JOB_TITLE + "/create"} element={<JobTitleCreate />} />
                <Route path={ManagerPath.JOB_TITLE + "/update/:id"} element={<JobTitleUpdate />} />
                <Route path={ManagerPath.CUSTOMER} element={<CustomerManage />} />
                <Route path={ManagerPath.CUSTOMER + "/create"} element={<CustomerCreate />} />
                <Route path={ManagerPath.CUSTOMER + "/update/:id"} element={<CustomerUpdate />} />
                <Route path={ManagerPath.CUSTOMER_GROUP} element={<CustomerGroupManage />} />
                <Route path={ManagerPath.CUSTOMER_GROUP + "/create"} element={<CustomerGroupCreate />} />
                <Route path={ManagerPath.CUSTOMER_GROUP + "/update/:id"} element={<CustomerGroupUpdate />} />
                <Route path={ManagerPath.CUSTOMER_RESOURCE} element={<CustomerResourseManage />} />
                <Route path={ManagerPath.CUSTOMER_RESOURCE + "/create"} element={<CustomerResourseCreate />} />
                <Route path={ManagerPath.CUSTOMER_RESOURCE + "/update/:id"} element={<CustomerResourseUpdate />} />
                <Route path={ManagerPath.CUSTOMER_STATUS} element={<CustomerStatusManage />} />
                <Route path={ManagerPath.CUSTOMER_STATUS + "/create"} element={<CustomerStatusCreate />} />
                <Route path={ManagerPath.CUSTOMER_STATUS + "/update/:id"} element={<CustomerStatusUpdate />} />
                <Route path={ManagerPath.PRODUCT} element={<ProductManage />} />
                <Route path={ManagerPath.PRODUCT + "/create"} element={<ProductCreate />} />
                <Route path={ManagerPath.PRODUCT + "/update/:id"} element={<ProductUpdate />} />
                <Route path={ManagerPath.CATEGORY} element={<CategoryManage />} />
                <Route path={ManagerPath.CATEGORY + "/create"} element={<CategoryCreate />} />
                <Route path={ManagerPath.CATEGORY + "/update/:id"} element={<CategoryUpdate />} />
                <Route path={ManagerPath.BRAND} element={<BrandManage />} />
                <Route path={ManagerPath.BRAND + "/create"} element={<BrandCreate />} />
                <Route path={ManagerPath.BRAND + "/update/:id"} element={<BrandUpdate />} />
                <Route path={ManagerPath.SUPPLIER} element={<SupplierManage />} />
                <Route path={ManagerPath.SUPPLIER + "/create"} element={<SupplierCreate />} />
                <Route path={ManagerPath.SUPPLIER + "/update/:id"} element={<SuppilerUpdate />} />
                <Route path={ManagerPath.UNIT} element={<UnitManage />} />
                <Route path={ManagerPath.UNIT + "/create"} element={<UnitCreate />} />
                <Route path={ManagerPath.UNIT + "/update/:id"} element={<UnitUpdate />} />
                <Route path={ManagerPath.TAG} element={<TagManage />} />
                <Route path={ManagerPath.TAG + "/create"} element={<TagCreate />} />
                <Route path={ManagerPath.TAG + "/update/:id"} element={<TagUpdate />} />
                <Route path={ManagerPath.GUARANTEE} element={<GuaranteeManage />} />
                <Route path={ManagerPath.GUARANTEE + "/create"} element={<GuaranteeCreate />} />
                <Route path={ManagerPath.GUARANTEE + "/update/:id"} element={<GuaranteeUpdate />} />
                <Route path={ManagerPath.PROPERTY} element={<PropertyManage />} />
                <Route path={ManagerPath.PROPERTY + "/create"} element={<PropertyCreate />} />
                <Route path={ManagerPath.PROPERTY + "/update/:id"} element={<PropertyUpdate />} />
                <Route path={ManagerPath.SPECIFICATION} element={<SpecificationManage />} />
                <Route path={ManagerPath.SPECIFICATION + "/create"} element={<SpecificationCreate />} />
                <Route path={ManagerPath.SPECIFICATION + "/update/:id"} element={<SpecificationUpdate />} />
                <Route path={ManagerPath.INVENTORY} element={<InventoryManage />} />
                <Route path={ManagerPath.WAREHOUSE} element={<WarehouseManage />} />
                <Route path={ManagerPath.WAREHOUSE + "/create"} element={<WarehouseCreate />} />
                <Route path={ManagerPath.WAREHOUSE + "/update/:id"} element={<WarehouseUpdate />} />
                <Route path={ManagerPath.PURCHASE_ORDER} element={<PurchaseOrderManage />} />
                <Route path={ManagerPath.PURCHASE_ORDER + "/create"} element={<PurchaseOrderCreate />} />
                <Route path={ManagerPath.PURCHASE_ORDER + "/update/:id"} element={<PurchaseOrderUpdate />} />
                <Route path={ManagerPath.DESTINATION} element={<DestinationManage />} />
                <Route path={ManagerPath.DESTINATION + "/create"} element={<DestinationCreate />} />
                <Route path={ManagerPath.DESTINATION + "/update/:id"} element={<DestinationUpdate />} />
                <Route path={ManagerPath.DOCKET} element={<DocketManage />} />
                <Route path={ManagerPath.DOCKET + "/create"} element={<DocketCreate />} />
                <Route path={ManagerPath.DOCKET + "/update/:id"} element={<DocketUpdate />} />
                <Route path={ManagerPath.DOCKET_REASON} element={<DocketReasonManage />} />
                <Route path={ManagerPath.DOCKET_REASON + "/create"} element={<DocketReasonCreate />} />
                <Route path={ManagerPath.DOCKET_REASON + "/update/:id"} element={<DocketReasonUpdate />} />
                <Route path={ManagerPath.COUNT} element={<CountManage />} />
                <Route path={ManagerPath.COUNT + "/create"} element={<CountCreate />} />
                <Route path={ManagerPath.COUNT + "/update/:id"} element={<CountUpdate />} />
                <Route path={ManagerPath.TRANSFER} element={<TransferManage />} />
                <Route path={ManagerPath.TRANSFER + "/create"} element={<TransferCreate />} />
                <Route path={ManagerPath.TRANSFER + "/update/:id"} element={<TransferUpdate />} />
                <Route path={ManagerPath.ORDER} element={<OrderManage />} />
                <Route path={ManagerPath.ORDER + "/create"} element={<OrderCreate />} />
                <Route path={ManagerPath.ORDER + "/update/:id"} element={<OrderUpdate />} />
                <Route path={ManagerPath.ORDER_RESOURCE} element={<OrderResourceManage />} />
                <Route path={ManagerPath.ORDER_RESOURCE + "/create"} element={<OrderResourceCreate />} />
                <Route path={ManagerPath.ORDER_RESOURCE + "/update/:id"} element={<OrderResourceUpdate />} />
                <Route path={ManagerPath.ORDER_CANCELLATION_REASON} element={<OrderCancellationReasonManage />} />
                <Route
                  path={ManagerPath.ORDER_CANCELLATION_REASON + "/create"}
                  element={<OrderCancellationReasonCreate />}
                />
                <Route
                  path={ManagerPath.ORDER_CANCELLATION_REASON + "/update/:id"}
                  element={<OrderCancellationReasonUpdate />}
                />
                <Route path={ManagerPath.WAYBILL} element={<WaybillManage />} />
                <Route path={ManagerPath.WAYBILL + "/create"} element={<WaybillCreate />} />
                <Route path={ManagerPath.WAYBILL + "/update/:id"} element={<WaybillUpdate />} />

                <Route path={ManagerPath.REVIEW} element={<ReviewManage />} />

                <Route path={ManagerPath.REWARD_STRATEGY} element={<RewardStartegyManage />} />

                <Route path={ManagerPath.VOUCHER} element={<VoucherManage />} />
                <Route path={ManagerPath.PAYMENT_METHOD} element={<PaymentMethodManage />} />

                <Route path={ManagerPath.PROMOTION} element={<PromotionManage />} />
                <Route path={ManagerPath.PROMOTION + "/create"} element={<PromotionCreate />} />
                <Route path={ManagerPath.PROMOTION + "/update/:id"} element={<PromotionUpdate />} />

                <Route path={ManagerPath.NOTIFICATION} element={<AdminNotification />} />

                <Route path={ManagerPath.ACCOUNT} element={<AdminAccount />} />
              </Route>
            </Routes>
          </div>
        </ModalsProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
