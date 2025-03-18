import React from 'react'
import { CiSearch } from 'react-icons/ci'

function Header() {
  return (
  <>
    <div className="right_side  w-5/5">
                <div className="nav_bar bg-blue-100 w-full h-19  py-5 px-10 flex items-center justify-between">
                    <div
                        className="search_bar rounded-4xl bg-gray-100 w-4/6 h-12 px-10 py-5 mx-35 flex justify-start items-center ">
                            <CiSearch className="text-2xl text-black"/>
                        <input className="border-none" type="text" id="search" placeholder="Search Inventory"/>
                    </div>
                    <div className="notification_btn text-2xl px-3 py-2 rounded-full mx-3">
                        <a href="notification.html"><i className="fa-solid fa-bell"></i></a>
                    </div>
                    <div className="user_profile  text-2xl px-2 py-2 rounded-full mx-3">
                        <a href="user_profile.html"><i className="fa-solid fa-user "></i></a>
                    </div>
                </div>
            </div>
    </>
  )
}
    

export default Header
