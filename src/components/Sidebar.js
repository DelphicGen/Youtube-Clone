import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
            <hr />
            <SidebarRow secondary={true} Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow secondary={true} Icon={HistoryIcon} title="History" />
            <SidebarRow secondary={true} Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow secondary={true} Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow secondary={true} Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow secondary={true} Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr />
        </div>
    )
}

export default Sidebar
