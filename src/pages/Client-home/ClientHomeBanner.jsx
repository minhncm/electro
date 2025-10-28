import { Car, HeartHandshake, Stars } from "tabler-icons-react";
import ClientCarousel from "~/components/ClientCarousel/ClientCarousel";

function ClientHomeBanner() {
  return (
    <div className="grid grid-cols-3 m-[-8px]">
      <div className="col-span-2 p-2">
        <ClientCarousel>
          <div className="h-[315px] bg-gradient-to-t from-[#63e6be] to-[#c0eb75]"></div>
          <div className="h-[315px] bg-gradient-to-t from-[#91a7ff] to-[#66d9e8]"></div>
          <div className="h-[315px] bg-gradient-to-t from-[#ffc078] to-[#ffa8a8]"></div>
        </ClientCarousel>
      </div>
      <div className="col-span-1 p-2">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-surface rounded-lg px-4 py-3 flex justify-start items-center gap-4">
            <Car size={65} strokeWidth={1} />
            <div className="flex flex-col items-stretch gap-[5px] text-c-black leading-[1.55]">
              <span className="font-medium">Miễn phí vận chuyển</span>
              <p className="text-sm">
                100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
              </p>
            </div>
          </div>

          <div className="bg-surface rounded-lg px-4 py-3 flex justify-start items-center gap-4">
            <Stars size={65} strokeWidth={1} />
            <div className="flex flex-col items-stretch gap-[5px] text-c-black leading-[1.55]">
              <span className="font-medium">Bảo hành tận tâm</span>
              <p className="text-sm">
                Bất kể giấy tờ thế nào, công ty luôn cam kết sẽ hỗ trợ khách
                hàng tới cùng.
              </p>
            </div>
          </div>

          <div className="bg-surface rounded-lg px-4 py-3 flex justify-start items-center gap-4">
            <HeartHandshake size={65} strokeWidth={1} />
            <div className="flex flex-col items-stretch gap-[5px] text-c-black leading-[1.55]">
              <span className="font-medium">Đổi trả 1-1 hoặc hoàn tiền</span>
              <p className="text-sm">
                Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được
                nhu cầu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientHomeBanner;
