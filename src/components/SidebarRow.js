import React from 'react'
import './SidebarRow.css'

const SidebarRow = ({secondary, selected, Icon, title}) => {
    return (
        <a className={`sidebarRow ${selected && 'selected'} ${secondary && 'secondary'}`}>
            <Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{title}</h2>
        </a>
    )
}

export default SidebarRow
