import YTLogo from '../images/youtube_logo_icon_167938.png'
import Notification from '../images/Bell_icon-icons.com_52259.png'
import video from '../images/videocamera_5631.png'
import letter from '../images/v_letter_alphabet_letters_icon_208974.png'

import '../styles/navbar.css'
function Navbar(){
    return (
        <div className="navbar">
            <div className="logo">
            <img width={110} height={90} src={YTLogo} alt=""/>
            </div>
            <div className="searchBar">
            <input type="text" placeholder='Search'/>
            </div>
            <div className="userOption">
                <img width={35} src={video} alt=""/>
            <img width={35} src={Notification} alt=""/>
            <h4>V</h4>

            </div>
        </div>
    )
}
export default Navbar;