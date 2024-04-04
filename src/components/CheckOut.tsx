import { useState } from "react";
import General from "./paymentFirstscreen/buttomComponent/general";
// import StatusLine from "./topComponent/statusLine";
import { ShippingAndInsurance } from "./shipping&insurance";
import { Confirmation } from "./confirmation";
import { Payment } from "./payment";
import { FundingOptions } from "./fundingOptions";
import { useLocation } from "react-router";
import { CheckoutRouting } from "./checkout-routing";
import { Link, Outlet } from "react-router-dom";


export const CheckOut: React.FC = () => {

    enum Pages {
        GENERAL = 'general',
        SHIPING_AND_INSURANCE = 'shipping & Insurance',
        FUNDING_OPTIONS = 'Funding options',
        PAYMENT = 'Payment',
        CONFIRMATION = 'Confirmation',
    }
    const checkoutPages = [
        {
            label: Pages.GENERAL,
            text: 'General',
            component: <General />
        },
        {
            label: Pages.SHIPING_AND_INSURANCE,
            text: 'ShippingAndInsurance',
            component: <ShippingAndInsurance />
        },
        {
            label: Pages.FUNDING_OPTIONS,
            text: 'FundingOptions',
            component: <FundingOptions />
        },
        {
            label: Pages.PAYMENT,
            text: 'Payment',
            component: <Payment />
        },
        {
            label: Pages.CONFIRMATION,
            text: 'Confirmation',
            component: <Confirmation />
        },


    ]

    const [currentPage, setCurrentPage] = useState<Pages>(Pages.GENERAL);
    const [myCurrent, setMyCurrent] = useState<boolean>(false);
    const clickCurrentPage = (page: Pages) => {
        setCurrentPage(page)
    }
    const location = useLocation();
    const currentLocation = location.pathname;
    return (
        <>
            <div style={{ marginLeft: 132, width: 1400, height: 50, justifyContent: 'space-between', alignItems: 'center', alignContent: 'start', display: 'inline-flex' }}>
                {
                    checkoutPages.map((page, i) => (
                        <Link to={page.text}>
                            <Circle current={location.pathname.endsWith(`/${page.text}`) ? true : false} />
                        </Link>

                    ))
                }

                <div style={{ zIndex: -1, width: 1360, height: 0, position: 'absolute', border: '4px #0000FF solid' }}></div>

            </div>
            {
                checkoutPages.map((page, i) => (
                    <Line current={location.pathname.endsWith(`/${page.text}`) ? true : false} text={`${page.text}`} />
                ))
            }


            <Outlet />
        </>);
};


const Circle: React.FC<{ current: boolean }> = ({ current }) => {

    return (<div>
        {current ? <div style={{ width: 50, height: 50, position: 'relative' }}>
            <div style={{ width: 50, height: 50, left: 0, top: 0, position: 'absolute', background: '#B4B4FF', borderRadius: 9999 }} />
            <div style={{ width: 32, height: 32, left: 9, top: 9, position: 'absolute', background: '#0000FF', borderRadius: 9999, border: '0px #E6E6E6 solid' }} />
        </div> :
            <div style={{ width: 34, height: 34, background: '#C0C0FF', borderRadius: 9999 }} />}
    </div>
    )
}

const Line: React.FC<{ current: boolean, text: string }> = ({ current, text }) => {
    return (
        <div style={{ marginLeft: 5, padding: 69, marginTop: -270, display: 'inline-flex' }}>
            {current ? <div style={{ width: 190, height: 30, textAlign: 'center', marginTop: -60, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 29.86, wordWrap: 'break-word' }}>{text}</div> :
                <div style={{ width: 190, height: 27, textAlign: 'center', color: 'rgba(3, 4, 6, 0.80)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 26.87, wordWrap: 'break-word' }}>{text}</div>
            }
        </div>
    )
}

