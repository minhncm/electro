import {
  BrandFacebook,
  BrandInstagram,
  BrandMastercard,
  BrandTiktok,
  BrandVisa,
  BrandYoutube,
  BuildingBank,
  CurrencyDong,
  Headset,
  Moon,
  Sun,
} from "tabler-icons-react";
import Container from "~/components/Container/Container";
import ElectroLogo from "~/components/ElectroLogo/ElectroLogo";
import { Link } from "react-router-dom";

function ClientFooter() {
  return (
    <footer className="mt-12 py-12 bg-alt border-t border-solid border-[#e9ecef] text-c-black">
      <Container>
        <div className="grid grid-cols-2 m-[-8px]">
          <div className="p-2">
            <div className="flex flex-col items-stretch gap-[35px]">
              <ElectroLogo width={135} />
              <div className="flex flex-wrap items-center justify-start gap-4">
                <Headset size={52} stroke="#228be6" strokeWidth={1.25} />
                <div className="flex flex-col items-stretch gap-[2.5px] flex-grow-0 text-start">
                  <p className="text-sm text-muted">Tổng đài hỗ trợ</p>
                  <p className="text-xl">(024) 3535 7272, (028) 35 111 222</p>
                </div>
              </div>
              <div className="flex flex-col items-stretch gap-[5px] text-start">
                <p className="font-medium">Địa chỉ liên hệ</p>
                <p>Tòa nhà Bitexco, Quận 1, Thành phố Hồ Chí Minh</p>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-3">
                <div
                  className="flex items-center justify-center text-primary 
                            bg-soft w-11 h-11 rounded-full hover:bg-[#d0ebffa6] cursor-pointer"
                >
                  <BrandFacebook strokeWidth={1.5} />
                </div>
                <div
                  className="flex items-center justify-center text-primary 
                            bg-soft w-11 h-11 rounded-full hover:bg-[#d0ebffa6] cursor-pointer"
                >
                  <BrandYoutube strokeWidth={1.5} />
                </div>
                <div
                  className="flex items-center justify-center text-primary 
                            bg-soft w-11 h-11 rounded-full hover:bg-[#d0ebffa6] cursor-pointer"
                >
                  <BrandInstagram strokeWidth={1.5} />
                </div>
                <div
                  className="flex items-center justify-center text-primary 
                            bg-soft w-11 h-11 rounded-full hover:bg-[#d0ebffa6] cursor-pointer"
                >
                  <BrandTiktok strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="grid grid-cols-2 m-[-8px]">
              <div className="p-2">
                <div className="flex flex-col items-stretch gap-4 text-start">
                  <p className="font-medium">Hỗ trợ khách hàng</p>
                  <div className="flex flex-col items-stretch gap-2.5 text-primary">
                    <Link className="hover:underline" to="/">
                      Câu hỏi thường gặp
                    </Link>
                    <Link className="hover:underline" to="/">
                      Hướng dẫn đặt hàng
                    </Link>
                    <Link className="hover:underline" to="/">
                      Phương thức vận chuyển
                    </Link>
                    <Link className="hover:underline" to="/">
                      Chính sách đổi trả
                    </Link>
                    <Link className="hover:underline" to="/">
                      Chính sách thanh toán
                    </Link>
                    <Link className="hover:underline" to="/">
                      Giải quyết khiếu nại
                    </Link>
                    <Link className="hover:underline" to="/">
                      Chính sách bảo mật
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-2">
                <div className="flex flex-col items-stretch justify-between gap-4 h-full">
                  <div className="flex flex-col items-stretch gap-4 text-start">
                    <p className="font-medium">Giới thiệu</p>
                    <div className="flex flex-col items-stretch gap-2.5 text-primary">
                      <Link className="hover:underline" to="/">
                        Về Công ty
                      </Link>
                      <Link className="hover:underline" to="/">
                        Tuyển dụng
                      </Link>
                      <Link className="hover:underline" to="/">
                        Hợp tác
                      </Link>
                      <Link className="hover:underline" to="/">
                        Liên hệ mua hàng
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-start gap-4">
                    <div className="relative inline-flex w-auto bg-surface dark:bg-black rounded overflow-hidden p-1 flex-grow-0">
                      <div className="relative flex-1 z-[2] rounded">
                        <div className="bg-white dark:bg-surface text-c-black rounded font-medium text-xs cursor-pointer text-center px-1.5 py-[3px]">
                          <div className="flex items-center justify-center">
                            <Sun size={14} strokeWidth={1.5} />
                            <span className="ml-2.5">Sáng</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative flex-1 z-[2] rounded">
                        <div className="dark:text-[#f1f3f5] rounded font-medium text-xs cursor-pointer text-center px-1.5 py-[3px]">
                          <div className="flex items-center justify-center">
                            <Moon size={14} strokeWidth={1.5} />
                            <span className="ml-2.5">Tối</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-6 border-t border-solid border-[#e9ecef]">
          <div className="text-[#868e96] text-sm">
            © 2022 Electro Corporation. Bảo lưu mọi quyền.
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2.5">
            <div
              className="inline-flex items-center justify-center w-[50px] h-[30px] 
                            rounded text-[#868e96] border border-solid border-[#868e96]"
            >
              <BrandVisa strokeWidth={1.5} />
            </div>
            <div
              className="inline-flex items-center justify-center w-[50px] h-[30px] 
                            rounded text-[#868e96] border border-solid border-[#868e96]"
            >
              <BrandMastercard strokeWidth={1.5} />
            </div>
            <div
              className="inline-flex items-center justify-center w-[50px] h-[30px] 
                            rounded text-[#868e96] border border-solid border-[#868e96]"
            >
              <BuildingBank strokeWidth={1.5} />
            </div>
            <div
              className="inline-flex items-center justify-center w-[50px] h-[30px] 
                            rounded text-[#868e96] border border-solid border-[#868e96]"
            >
              <CurrencyDong strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default ClientFooter;
