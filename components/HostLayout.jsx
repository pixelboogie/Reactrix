import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink to="/host" end className={({isActive}) => isActive ? activeStyles : null} >Dashboard </NavLink>
                <NavLink to="/host/income" className={({isActive}) => isActive ? activeStyles : null} > Income </NavLink>
                <NavLink to="/host/vans" className={({isActive}) => isActive ? activeStyles : null} > Vans </NavLink>
                <NavLink to="/host/reviews" className={({isActive}) => isActive ? activeStyles : null} > Reviews </NavLink>                
            </nav>
            <Outlet />
        </>
    )
}