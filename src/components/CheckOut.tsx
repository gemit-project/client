import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const CheckOut: React.FC = () => {
    const checkoutPages = ['General', 'ShippingAndInsurance', 'FundingOptions', 'Payment', 'Confirmation']
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        navigate('General')
    },[])

    return (

        <><div>
            <div style={{ marginLeft: '5.2vw', width: '83vw', height: '4vh', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ marginLeft: '0.8vw', zIndex: -1, width: '80vw', position: 'absolute', border: '0.5vh #0000FF solid' }}></div>
                {
                    checkoutPages.map((page, i) => (
                        <Link to={checkoutPages[i]}>
                            <Circle current={location.pathname.endsWith(`/${checkoutPages[i]}`) ? true : false} text={checkoutPages[i]} def={location.pathname.endsWith(`/CheckOut`) && checkoutPages[i] === 'General' ? true : false} />
                        </Link>

                    ))
                }
            </div>
        </div>
            <Outlet />
        </>);
};

const Circle: React.FC<{ current: boolean, text: string, def: boolean }> = ({ current, text, def }) => {

    return (<div style={{ marginLeft: '-1vw', marginBottom: '-10vh', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', position: 'relative', alignContent: 'center' }}>
        {current || def ? <div style={{ width: '3vw', height: '3vw', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'start', display: 'inline-flex' }}>
            <div style={{ width: '2.8vw', height: '2.8vw', position: 'absolute', background: '#B4B4FF', borderRadius: 9999 }} />
            <div style={{ alignItems: 'center', width: '1.7vw', height: '1.7vw', position: 'absolute', background: '#0000FF', borderRadius: 9999, border: '0px #E6E6E6 solid' }} />
        </div> :
            <div style={{ width: '1.7vw', height: '1.7vw', background: '#C0C0FF', borderRadius: 9999, position: 'relative' }} />}
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {current || def ? <div style={{ textAlign: 'center', color: 'black', fontSize: '17px', fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>{text}</div> :
                <div style={{ textAlign: 'center', color: 'black', fontSize: '15px', fontFamily: 'Poppins', fontWeight: '450', wordWrap: 'break-word', position: 'relative' }}>{text}</div>
            }
        </div>
    </div>
    )
}


