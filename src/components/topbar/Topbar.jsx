import {NotificationsNone, Language, Settings} from '@mui/icons-material';
import './topbar.css'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>TB Admin</span>
        </div>
        <div className='topRight'>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src='https://tammibriggs-portfolio.netlify.app/static/media/my_picture.d93a4389.jpg' className='topAvatar' alt=''/>
        </div>
      </div>
    </div>
  )
}
