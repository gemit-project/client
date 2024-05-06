import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link, Outlet, useNavigate } from "react-router-dom";
import boldCircle from "../../../assets/icons/Checkout-icons/boldCircle.svg";
import simpleCircle from "../../../assets/icons/Checkout-icons/simpleCircle.svg";
import "./StatusLine.css";

export const StatusLine: React.FC = () => {
  const checkoutPages = [
    { text: "General Details", nav: "General" },
    { text: "Shipping & Insurance", nav: "ShippingAndInsurance" },
    { text: "Funding Options", nav: "FundingOptions" },
    { text: "Payment", nav: "Payment" },
    { text: "Confirmation", nav: "Confirmation" },
  ];
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("General");
  }, []);

  return (
    <>
      <div>
        <div className="line">
          <div className="moreAttributesToLine"></div>
          {checkoutPages.map((page, i) => (
            <Link to={page.nav}>
              <Circle
                current={
                  location.pathname.endsWith(`/${page.nav}`) ? true : false
                }
                text={page.text}
                def={
                  location.pathname.endsWith(`/CheckOut`) &&
                  page.text === "General"
                    ? true
                    : false
                }
              />
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

const Circle: React.FC<{ current: boolean; text: string; def: boolean }> = ({
  current,
  text,
  def,
}) => {
  return (
    <div className="circlesPosition">
      {current || def ? (
        <div className="bold">
          <img src={boldCircle.toString()}></img>
        </div>
      ) : (
        <div className="simple">
          <img src={simpleCircle.toString()}></img>
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center" }}>
        {current || def ? (
          <div className="currentPage">{text}</div>
        ) : (
          <div className="otherPage">{text}</div>
        )}
      </div>
    </div>
  );
};
