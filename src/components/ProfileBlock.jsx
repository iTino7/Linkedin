import { useEffect, useState } from "react";

import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { notScrollAction, profileAction } from "../redux/action";
import MyModals from "./MyModals";
import MyExperiences from "./MyExperiences";

const ProfileBlock = () => {
  const profile = useSelector((state) => state.profile.user);
  const img = useSelector((state) => state.image.img);

  const dispatch = useDispatch();
  const [big, setBig] = useState(false);

  const bigToggle = () => {
    setBig(!big);
    dispatch(notScrollAction());
  };

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0";

  useEffect(() => {
    dispatch(profileAction(TOKEN, "me"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);

  return (
    <>
      <Card className="mx-auto mt-3 rounded overflow-hidden">
        <div className="bg-light" style={{ height: "58px", position: "relative" }}>
          <div
            className="rounded-circle bg-secondary border border-white"
            style={{
              width: "72px",
              height: "72px",
              position: "absolute",
              bottom: "-40px",
              left: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              color: "white",
            }}
          >
            {profile.image ? (
              <img src={profile.image} alt="profile" className="rounded-circle" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <i className="bi bi-person-circle p-1"></i>
            )}
          </div>
        </div>
        <Card.Body className="pt-5">
          <h5 className="fw-bold d-flex align-items-center gap-2 mb-0">
            {profile.name} {profile.surname}
          </h5>
          <p className="mb-0 text-muted">{profile.title}</p>
          <p className="text-muted small">
            {profile.area} · <span className="text-decoration-underline"></span>
          </p>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProfileBlock;
