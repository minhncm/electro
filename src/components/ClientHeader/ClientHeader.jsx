import { Link } from "react-router-dom";
import Container from "~/components/Container/Container";
import ElectroLogo from "~/components/ElectroLogo/ElectroLogo";
import TextInput from "~/components/common/TextInput";
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
import Button from "../common/Button";
import Tooltip from "../common/Tooltip";
import Badge from "../common/Bagde";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../common/DropdownMenu";
import Popover from "../common/Popover";
import CategoryHeader from "./CategoryHeader";

const categories = {
  content: [
    {
      categoryName: "Laptop",
      categorySlug: "laptop",
      categoryChildren: [],
    },
    {
      categoryName: "Loa",
      categorySlug: "loa",
      categoryChildren: [],
    },
    {
      categoryName: "Bàn phím",
      categorySlug: "ban-phim",
      categoryChildren: [],
    },
    {
      categoryName: "Máy chơi game",
      categorySlug: "may-choi-game",
      categoryChildren: [],
    },
    {
      categoryName: "Chuột",
      categorySlug: "chuot",
      categoryChildren: [],
    },
    {
      categoryName: "CPU",
      categorySlug: "cpu",
      categoryChildren: [],
    },
    {
      categoryName: "PC",
      categorySlug: "pc",
      categoryChildren: [],
    },
    {
      categoryName: "Balo",
      categorySlug: "balo",
      categoryChildren: [],
    },
  ],
  totalElements: 8,
};

function ClientHeader() {
  const user = true;
  return (
    <header className="bg-header mb-8 shadow-[0px_3px_8px_-7px]">
      <Container>
        <div className="flex flex-col">
          <div className="flex items-center justify-between py-4 g-4">
            <Link to="/">
              <ElectroLogo />
            </Link>

            <TextInput
              icon={<Search size={16} />}
              placeholder="Bạn tìm gì..."
              width={600}
              className="bg-surface focus:border-primary"
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
                      <DropdownMenuItem component={Link} to={"/user"} icon={<User size={14} />}>
                        Tài khoản
                      </DropdownMenuItem>
                      <DropdownMenuItem component={Link} to={"/user/setting"} icon={<Settings size={14} />}>
                        Thiết đặt
                      </DropdownMenuItem>
                      <DropdownMenuItem component={Link} to={"/user/review"} icon={<Star size={14} />}>
                        Đáng giá sản phẩm
                      </DropdownMenuItem>
                      <DropdownMenuItem component={Link} to={"/user/wishlist"} icon={<Heart size={14} />}>
                        Sản phẩm yêu thích
                      </DropdownMenuItem>
                      <DropdownMenuItem component={Link} to={"/user/reward"} icon={<Award size={14} />}>
                        Điểm thưởng
                      </DropdownMenuItem>
                      <DropdownMenuItem component={Link} to={"/user/preorder"} icon={<Alarm size={14} />}>
                        Đặt trước sản phẩm
                      </DropdownMenuItem>
                      <DropdownMenuItem component={Link} to={"/user/chat"} icon={<MessageCircle size={14} />}>
                        Yêu cầu tư vấn
                      </DropdownMenuItem>
                      <DropdownMenuItem component={Link} to={"/user"} icon={<Logout size={14} />}>
                        Đăng xuất
                      </DropdownMenuItem>
                    </>
                  )}
                  {!user && (
                    <>
                      <DropdownMenuItem component={Link} to={"user/"} icon={<Login size={14} />}>
                        Đăng nhập
                      </DropdownMenuItem>
                      <DropdownMenuItem component={Link} to={"user/"} icon={<Fingerprint size={14} />}>
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

              <Button variant="text" size="sm" className="text-c-green hover:bg-c-green-hover">
                Sản phẩm xu hướng
              </Button>

              <Button variant="text" size="sm" className="text-c-pink hover:bg-c-pink-hover">
                Khuyến mãi
              </Button>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-start gap-2.5">
              <Badge>HOT</Badge>
              <span className="text-sm text-[#868e96]">Miễn phí giao hàng cho đơn hàng trên 1 triệu đồng</span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default ClientHeader;
