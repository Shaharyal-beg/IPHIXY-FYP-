import logo from './3dlogo.png' 

export default function ApplicationLogo({ className }) {
    return (
        <div className='login-logo'>
        <img src={logo} alt="" style={{width:'12vw'}} />
    </div>
    );
}
