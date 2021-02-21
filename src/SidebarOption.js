import React from "react"
import "./Assets/SidebarOption.css"

// capital I because we are passing in Icon components to render
function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;