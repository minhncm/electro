import { Route, BrowserRouter, Routes } from "react-router-dom";
import ClientHome from "~/pages/Client-home/ClientHome";
import ClientCart from "~/pages/Client-cart/ClientCart";
import Client from "~/pages/Client";
import ClientOrder from "~/pages/Client-order/ClientOrder";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ClientOrderDetail from "~/pages/Client-order-detail/ClientOrderDetail";
import { ModalsProvider } from "@mantine/modals";
import ClientUser from "~/pages/Client-user/ClientUser";
import ClientSetting from "~/pages/Client-setting/ClientSetting";
import ClientSettingPersonal from "~/pages/Client-setting-personal/ClientSettingPersonal";
import ClientSettingPhone from "~/pages/Client-setting-phone";
import ClientSettingEmail from "~/pages/Client-setting-email";
import ClientSettingPassword from "~/pages/Client-setting-password";
import ClientNotification from "~/pages/Client-notification";
import ClientReview from "~/pages/Client-review";
import ClientWishlist from "~/pages/Client-wishlist";
import ClientReward from "~/pages/Client-reward";
import ClientPreorder from "~/pages/Client-preorder";
import ClientChat from "~/pages/Client-chat";
import ClientProduct from "~/pages/Client-product";
import ClientAllCategories from "~/pages/Client-all-category";
import ClientSearch from "~/pages/Client-search";
import ClientCategory from "~/pages/Client-category";
import ClientSignin from "~/pages/Client-signin";
import ClientSignup from "~/pages/Client-signup";
import Admin from "~/pages/Admin";
import AddressManage from "~/pages/Admin-address";
import AddressCreate from "~/pages/Admin-address/AddressCreate";
import AddressUpdate from "~/pages/Admin-address/AddressUpdate";
import ProvinceManage from "~/pages/Admin-province";
import ProvinceCreate from "~/pages/Admin-province/ProvinceCreate";
import ProvinceUpdate from "~/pages/Admin-province/ProvinceUpdate";
import DistrictManage from "~/pages/Admin-district";
import DistrictCreate from "~/pages/Admin-district/DistrictCreate";
import DistrictUpdate from "~/pages/Admin-district/DistrictUpdate";
import UserManager from "~/pages/Admin-user";
import UserCreate from "~/pages/Admin-user/UserCreate";
import UserUpdate from "~/pages/Admin-user/UserUpdate";
import ManagerPath from "~/constants/ManagerPath";
import RoleManage from "~/pages/Admin-role";
import RoleCreate from "~/pages/Admin-role/RoleCreate";
import RoleUpdate from "~/pages/Admin-role/RoleUpdate";
import EmployeeManage from "~/pages/Admin-employee/EmployeeManage";
import EmployeeCreate from "~/pages/Admin-employee/EmployeeCreate";
import EmployeeUpdate from "~/pages/Admin-employee/EmployeeUpdate";
import OfficeManage from "~/pages/Admin-office";
import OfficeCreate from "~/pages/Admin-office/OfficeCreate";
import OfficeUpdate from "~/pages/Admin-office/OfficeUpdate";
import DepartmentManage from "~/pages/Admin-department";
import DepartmentCreate from "~/pages/Admin-department/DepartmentCreate";
import DepartmentUpdate from "~/pages/Admin-department/DepartmentUpdate";
import JobTypeManage from "~/pages/Admin-jobType";
import JobTypeCreate from "~/pages/Admin-jobType/JobTypeCreate";
import JobTypeUpdate from "~/pages/Admin-jobType/JobTypeUpdate";
import JobLevelManage from "~/pages/Admin-jobLevel";
import JobLevelCreate from "~/pages/Admin-jobLevel/JobLevelCreate";
import JobLevelUpdate from "~/pages/Admin-jobLevel/JobLevelUpdate";
import JobTitleManage from "~/pages/Admin-jobTitle";
import JobTitleCreate from "~/pages/Admin-jobTitle/JobTitleCreate";
import JobTitleUpdate from "~/pages/Admin-jobTitle/JobTitleUpdate";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
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
                <Route path={ManagerPath.USER} element={<UserManager />} />
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
              </Route>
            </Routes>
          </div>
        </ModalsProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
