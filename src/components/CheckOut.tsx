
import { useState } from "react";
import General from "./paymentFirstscreen/buttomComponent/general";
import { ShippingAndInsurance } from "./shipping&insurance";
import { Confirmation } from "./confirmation";
import { Payment } from "./payment";
import { FundingOptions } from "./fundingOptions";
import { useLocation } from "react-router";
import { CheckoutRouting } from "./checkout-routing";
import { Link, Outlet } from "react-router-dom";
import { text } from "stream/consumers";


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


    const location = useLocation();
    return (
        <><div style={{}}>
            <div style={{ marginLeft: '5.2vw', width: '83vw', height: '4vh', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ marginLeft: '0.8vw', zIndex: -1, width: '80vw', position: 'absolute', border: '0.5vh #0000FF solid' }}></div>
                {
                    checkoutPages.map((page, i) => (
                        <Link to={page.text}>
                            <Circle current={location.pathname.endsWith(`/${page.text}`) ? true : false} text={page.text} />
                        </Link>

                    ))
                }
            </div>
        </div>
            <Outlet />
        </>);
};

const Circle: React.FC<{ current: boolean, text: string }> = ({ current, text }) => {

    return (<div style={{ marginLeft: '-1vw', marginBottom: '-10vh', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', position: 'relative', alignContent: 'center' }}>
        {current ? <div style={{ width: '3vw', height: '3vw', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'start', display: 'inline-flex' }}>
            <div style={{ width: '2.8vw', height: '2.8vw', position: 'absolute', background: '#B4B4FF', borderRadius: 9999 }} />
            <div style={{ alignItems: 'center', width: '1.7vw', height: '1.7vw', position: 'absolute', background: '#0000FF', borderRadius: 9999, border: '0px #E6E6E6 solid' }} />
        </div> :
            <div style={{ width: '1.7vw', height: '1.7vw', background: '#C0C0FF', borderRadius: 9999, position: 'relative' }} />}
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {current ? <div style={{ textAlign: 'center', color: 'black', fontSize: '2.2vh', fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div> :
                <div style={{ textAlign: 'center', color: 'black', fontSize: '2vh', fontFamily: 'Poppins', fontWeight: '450', wordWrap: 'break-word', position: 'relative' }}>{text}</div>
            }
        </div>
    </div>
    )
}


