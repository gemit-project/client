import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link, Outlet, useNavigate } from "react-router-dom";
import boldCircle from './icons/boldCircle.svg'
import simpleCircle from './icons/simpleCircle.svg'

export const CheckOut: React.FC = () => {
    const checkoutPages = [

        { text: 'General Details', nav: 'General' },
        { text: 'Shipping & Insurance', nav: 'ShippingAndInsurance' },
        { text: 'Funding Options', nav: 'FundingOptions' },
        { text: 'Payment', nav: 'Payment' },
        { text: 'Confirmation', nav: 'Confirmation' }
    ]
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        navigate('General')
    }, [])

    return (

        <><div>
            <div style={{ marginLeft: '5.1vw', width: '87vw', height: '4vh', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', alignContent: 'center' }}>
                <div style={{ marginLeft: '3vw', zIndex: -1, width: '81vw', position: 'absolute', border: '0.5vh #0000FF solid' }}></div>
                {
                    checkoutPages.map((page, i) => (
                        <Link to={page.nav}>
                            <Circle current={location.pathname.endsWith(`/${page.nav}`) ? true : false} text={page.text} def={location.pathname.endsWith(`/CheckOut`) && page.text === 'General' ? true : false} />
                        </Link>

                    ))
                }
            </div>
        </div>
            <Outlet />
        </>);
};

const Circle: React.FC<{ current: boolean, text: string, def: boolean }> = ({ current, text, def }) => {

    return (
        <div style={{ marginLeft: '-1vw', marginBottom: '-10vh', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', position: 'relative', alignContent: 'center' }}>
            {current || def ? <div style={{ width: '3vw', height: '3vw', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'start', display: 'inline-flex' }}>
                <img src={boldCircle.toString()}></img>
            </div> :
                <img src={simpleCircle.toString()}></img>}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {current || def ? <div style={{ marginTop: '0.6vh', textAlign: 'center', color: 'black', fontSize: '20px', fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div> :
                    <div style={{ marginTop: '1.3vh', textAlign: 'center', color: 'black', fontSize: '18px', fontFamily: 'Poppins', fontWeight: '450', wordWrap: 'break-word', position: 'relative' }}>{text}</div>
                }
            </div>
        </div>
    )
}


