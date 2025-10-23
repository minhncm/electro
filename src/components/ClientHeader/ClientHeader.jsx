import { Link } from "react-router-dom";
import Container from "../Container/Container";
import ElectroLogo from "../ElectroLogo/ElectroLogo";
import TextInput from "../ui/TextInput";
import Tippy from "@tippyjs/react/headless";
import {
  Bell,
  FileBarcode,
  List,
  ShoppingCart,
  UserCircle,
} from "tabler-icons-react";
import Button from "../ui/Button";
import WrapperTooltip from "../ui/WrapperTooltip";

function ClientHeader() {
  return (
    <header className="bg-white mb-8 border border-solid border-[#e9ecef] shadow-[0px_3px_8px_-7px]">
      <Container>
        <div className="flex flex-col">
          <div className="flex items-center justify-between py-4 g-4">
            <Link to="/">
              <ElectroLogo />
            </Link>

            <TextInput />

            <div className="flex flex-wrap items-center justify-start gap-[10px]">
              <Tippy
                render={(attrs) => (
                  <WrapperTooltip {...attrs}>Giỏ hàng</WrapperTooltip>
                )}
                duration={[0, 0]}
                offset={[0, 4]}
                delay={[150, 0]}
              >
                <Link to={"/cart"}>
                  <div
                    className="flex flex-row items-center justify-start gap-[10px] 
                                bg-[#f8f9fa] rounded-lg px-3 py-[10px] hover:bg-[#e9ecef]"
                  >
                    <ShoppingCart strokeWidth={1} />
                    <span className="font-medium text-sm">0</span>
                  </div>
                </Link>
              </Tippy>

              <Tippy
                render={(attrs) => (
                  <WrapperTooltip {...attrs}>Đơn hàng</WrapperTooltip>
                )}
                duration={[0, 0]}
                offset={[0, 4]}
                delay={[150, 0]}
              >
                <Link to={"/order"}>
                  <div
                    className="flex flex-row items-center justify-start gap-[10px] 
                                bg-[#f8f9fa] rounded-lg px-3 py-[10px] hover:bg-[#e9ecef]"
                  >
                    <FileBarcode strokeWidth={1} />
                  </div>
                </Link>
              </Tippy>

              <Tippy
                render={(attrs) => (
                  <WrapperTooltip {...attrs}>Thông báo</WrapperTooltip>
                )}
                duration={[0, 0]}
                offset={[0, 4]}
                delay={[150, 0]}
              >
                <Link to={"/user/notification"}>
                  <div
                    className="flex flex-row items-center justify-start gap-[10px] 
                                bg-[#f8f9fa] rounded-lg px-3 py-[10px] hover:bg-[#e9ecef]"
                  >
                    <Bell strokeWidth={1} />
                  </div>
                </Link>
              </Tippy>

              <Tippy
                render={(attrs) => (
                  <WrapperTooltip {...attrs}>Tài khoản</WrapperTooltip>
                )}
                duration={[0, 0]}
                offset={[0, 4]}
                delay={[150, 0]}
              >
                <Link to={"/cart"}>
                  <div
                    className="flex flex-row items-center justify-start gap-[10px] 
                                bg-[#f8f9fa] rounded-lg px-3 py-[10px] hover:bg-[#e9ecef]"
                  >
                    <UserCircle strokeWidth={1}  />
                  </div>
                </Link>
              </Tippy>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-row flex-wrap items-center justify-start gap-[5px] flex-grow-0">
              <div className="relative inline-block">
                <Button size="sm">
                  <span className="flex items-center mr-2.5">
                    <List width={16} />
                  </span>
                  <span className="flex items-center h-full overflow-hidden whitespace-nowrap">
                    Danh mục sản phẩm
                  </span>
                </Button>
              </div>

              <Button variant="text" size="sm">
                Sản phẩm mới
              </Button>

              <Button
                variant="text"
                size="sm"
                className="text-[#40c057] hover:bg-[#ebfbee]"
              >
                Sản phẩm xu hướng
              </Button>

              <Button
                variant="text"
                size="sm"
                className="text-[#e64980] hover:bg-[#fff0f6]"
              >
                Khuyến mãi
              </Button>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-start gap-2.5">
              <div className="bg-[#e64890] text-white h-4 text-[9px] rounded-[32px] font-bold inline-flex items-center justify-center px-1.5 leading-[14px]">
                <span>HOT</span>
              </div>
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
