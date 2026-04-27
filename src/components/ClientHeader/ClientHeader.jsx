import { LoadingOverlay, TextInput } from "@mantine/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Alarm,
  Award,
  Bell,
  FileBarcode,
  Fingerprint,
  Heart,
  List,
  Login,
  Logout,
  MessageCircle,
  Search,
  Settings,
  ShoppingCart,
  Star,
  User,
  UserCircle,
} from "tabler-icons-react";
import Container from "~/components/Container/Container";
import ElectroLogo from "~/components/ElectroLogo/ElectroLogo";
import { useLogoutApi } from "~/hooks/client/use-auth-api";
import { useGetAllCategories } from "~/hooks/client/use-category-api";
import Badge from "../common/Bagde";
import Button from "../common/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../common/DropdownMenu";
import Popover from "../common/Popover";
import Tooltip from "../common/Tooltip";
import CategoryHeader from "./CategoryHeader";
import useAuthStore from "~/stores/use-auth-store";

function ClientHeader() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const { data: categories } = useGetAllCategories();
  const { user } = useAuthStore();

  const handleSearchInput = (event) => {
    if (event.key === "Enter" && search.trim() !== "") {
      setSearch("");
      navigate("/search?q=" + search.trim());
    }
  };

  const logoutApi = useLogoutApi();
  const handleLogout = () => {
    logoutApi.mutate();
  };

  if (!categories) return <LoadingOverlay />;

  return (
    <header className="bg-header mb-8 shadow-[0px_3px_8px_-7px]">
      <Container>
        <div className="flex flex-col">
          <div className="flex items-center justify-between py-4 g-4">
            <Link to="/">
              <ElectroLogo />
            </Link>

            <TextInput
              leftSection={<Search size={16} />}
              placeholder="Bạn tìm gì..."
              w={600}
              size="md"
              radius="md"
              value={search || ""}
              onChange={(event) => setSearch(event.currentTarget.value)}
              onKeyDown={handleSearchInput}
            />

            <div className="flex flex-wrap items-center justify-start gap-[10px]">
              {user && (
                <>
                  <Tooltip content="Giỏ hàng">
                    <Link to={"/cart"}>
                      <div
                        className="flex flex-row items-center justify-start gap-[10px] text-c-black 
                                bg-alt rounded-lg px-3 py-[10px] hover:bg-alt-hover"
                      >
                        <ShoppingCart strokeWidth={1} />
                        <span className="font-medium text-sm">0</span>
                      </div>
                    </Link>
                  </Tooltip>

                  <Tooltip content="Đơn hàng">
                    <Link to={"/order"}>
                      <div
                        className="flex flex-row items-center justify-start gap-[10px] text-c-black 
                                  bg-alt rounded-lg px-3 py-[10px] hover:bg-alt-hover"
                      >
                        <FileBarcode strokeWidth={1} />
                      </div>
                    </Link>
                  </Tooltip>
                </>
              )}

              <Tooltip content="Thông báo">
                <Link to={"/user/notification"}>
                  <div
                    className="flex flex-row items-center justify-start gap-[10px] text-c-black 
                                  bg-alt rounded-lg px-3 py-[10px] hover:bg-alt-hover"
                  >
                    <Bell strokeWidth={1} />
                  </div>
                </Link>
              </Tooltip>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Tooltip content="Tài khoản">
                    <div
                      className="flex flex-row items-center justify-start gap-[10px] text-c-black 
                                bg-alt rounded-lg px-3 py-[10px] hover:bg-alt-hover"
                    >
                      <UserCircle strokeWidth={1} />
                    </div>
                  </Tooltip>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {user && (
                    <>
                      <DropdownMenuItem
                        component={Link}
                        to={"/user"}
                        icon={<User size={14} />}
                      >
                        Tài khoản
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        component={Link}
                        to={"/user/setting"}
                        icon={<Settings size={14} />}
                      >
                        Thiết đặt
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        component={Link}
                        to={"/user/review"}
                        icon={<Star size={14} />}
                      >
                        Đáng giá sản phẩm
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        component={Link}
                        to={"/user/wishlist"}
                        icon={<Heart size={14} />}
                      >
                        Sản phẩm yêu thích
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        component={Link}
                        to={"/user/reward"}
                        icon={<Award size={14} />}
                      >
                        Điểm thưởng
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        component={Link}
                        to={"/user/preorder"}
                        icon={<Alarm size={14} />}
                      >
                        Đặt trước sản phẩm
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        component={Link}
                        to={"/user/chat"}
                        icon={<MessageCircle size={14} />}
                      >
                        Yêu cầu tư vấn
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={handleLogout}
                        icon={<Logout size={14} />}
                      >
                        Đăng xuất
                      </DropdownMenuItem>
                    </>
                  )}
                  {!user && (
                    <>
                      <DropdownMenuItem
                        component={Link}
                        to={"/signin"}
                        icon={<Login size={14} />}
                      >
                        Đăng nhập
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        component={Link}
                        to={"/signup"}
                        icon={<Fingerprint size={14} />}
                      >
                        Đăng ký
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-row flex-wrap items-center justify-start gap-[5px] flex-grow-0">
              <Popover
                trigger={
                  <Button size="sm">
                    <span className="flex items-center mr-2.5">
                      <List width={16} />
                    </span>
                    <span className="flex items-center h-full overflow-hidden whitespace-nowrap">
                      Danh mục sản phẩm
                    </span>
                  </Button>
                }
              >
                <CategoryHeader categories={categories} />
              </Popover>

              <Button variant="text" size="sm">
                Sản phẩm mới
              </Button>

              <Button
                variant="text"
                size="sm"
                className="text-c-green hover:bg-c-green-hover"
              >
                Sản phẩm xu hướng
              </Button>

              <Button
                variant="text"
                size="sm"
                className="text-c-pink hover:bg-c-pink-hover"
              >
                Khuyến mãi
              </Button>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-start gap-2.5">
              <Badge>HOT</Badge>
              <span className="text-sm text-[#868e96]">
                Miễn phí giao hàng cho đơn hàng trên 1 triệu đồng
              </span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default ClientHeader;
