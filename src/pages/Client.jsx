import { Link } from "react-router-dom";
import ClientFooter from "../components/ClientFooter/ClientFooter";
import ClientHeader from "../components/ClientHeader/ClientHeader";
import { Messages } from "tabler-icons-react";

function Client() {
  return (
    <>
      <ClientHeader />
      <ClientFooter />
      <ChatButton />
    </>
  );
}

function ChatButton() {
  return (
    <div className="fixed bottom-5 right-5">
      <div
        className="relative p-2.5 rounded-full 
                  shadow-[0_1px_3px_rgba(0,0,0,0.05),_0_10px_15px_-5px_rgba(0,0,0,0.05),_0_7px_7px_-5px_rgba(0,0,0,0.04)]"
      >
        <div className="relative inline-block">
          <Link
            className="bg-[#e6fcf5] text-[#12b886] h-11 w-11 rounded-full flex items-center justify-center cursor-pointer"
            to="/user/chat"
          >
            <Messages />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Client;
