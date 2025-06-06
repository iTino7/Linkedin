import { useState } from "react";
import { Row } from "react-bootstrap";
import { ChevronCompactDown, ChevronCompactUp, PencilSquare, ThreeDots } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Chat = () => {
  const [openChat, setOpenChat] = useState(false);
  const me = useSelector((state) => state.me.me);
  return (
    <div
      className="d-flex bg-white fixed-bottom border rounded-2 align-items-center shadow ms-auto me-1 p-3"
      style={{ width: 300 }}
      onClick={() => setOpenChat(!openChat)}
    >
      <div className="position-relative">
        <img src={me?.image} alt="" className="rounded-circle " width={20} height={20} />
        <div
          className="bg-success rounded-pill position-absolute "
          style={{ width: "6px", height: "6px", top: "18px", right: "-2px", boxShadow: "0px 0px 0 2px white" }}
        ></div>
      </div>
      <span className="ms-2">Messaggistica</span>
      <div className="d-flex gap-2 ms-auto">
        <ThreeDots />
        <PencilSquare />
        {openChat ? <ChevronCompactDown /> : <ChevronCompactUp />}
      </div>
    </div>
  );
};
export default Chat;
