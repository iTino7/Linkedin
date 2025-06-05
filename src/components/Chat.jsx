const Chat = () => {
  const me = JSON.parse(localStorage.getItem("me"));
  return (
    <div
      className="d-flex bg-white fixed-bottom border rounded-2 align-items-center shadow ms-auto me-1 p-3"
      style={{ width: 300 }}
    >
      <img
        src={me?.image}
        alt=""
        className="rounded-circle "
        width={20}
        height={20}
      />
      <span className="ms-2">Messaggistica</span>
      <div className="d-flex gap-2 ms-auto">
        <span>i</span>
        <span>i</span>
        <span>i</span>
      </div>
    </div>
  );
};
export default Chat;
