import { At, Mailbox } from "tabler-icons-react";
import TextInput from "~/components/common/TextInput";

function ClientHomeNewsletter() {
  return (
    <div
      className="relative overflow-hidden rounded-lg 
         shadow-[0_1px_3px_rgba(0,0,0,0.05),_0_10px_15px_-5px_rgba(0,0,0,0.05),_0_7px_7px_-5px_rgba(0,0,0,0.04)]
         bg-primary text-white p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-start gap-4 flex-grow-0">
          <Mailbox size={40} strokeWidth={1} />
          <div className="text-xl font-medium">Đăng ký nhận tin</div>
          <div>và cập nhật khuyến mãi liên tục...</div>
        </div>

        <div className="w-[450px]">
          <div className="relative">
            <div className="absolute z-[1] left-0 top-0 bottom-0 flex items-center justify-center w-[42px] text-white">
              <At size={16} />
            </div>
            <input
              placeholder="Địa chỉ email"
              className="w-full h-[42px] block text-left min-h-[42px] px-[14px] pl-[42px]
                        rounded-lg border-none bg-[rgba(208,235,255,0.25)] text-white
                        placeholder-[#ddd] outline-none"
            />
            {/* <TextInput icon={<At size={16} />} placeholder="Địa chỉ email" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientHomeNewsletter;
