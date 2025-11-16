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
              </Route>
            </Routes>
          </div>
        </ModalsProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
