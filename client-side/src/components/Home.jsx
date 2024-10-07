import React, { Fragment } from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (<Fragment>
    <div className="static h-20 bg-slate-100 flex flex-row">
      <div className="h-20 w-3/5  flex items-center justify-between">
        <div className="h-20 w-2/6 flex items-center">
          <div className="ml-14 h-16 w-32 ">
            <img
              className="h-16 w-32"
              src="https://t4.ftcdn.net/jpg/07/52/95/85/240_F_752958510_wlFIoFXaStwqxNuNkE3NXbjm7zNl2uQT.jpg"
              alt="Logo"
            />
          </div>
        </div>
        <div className="h-10 w-4/6 rounded-xl flex items-center border border-gray-300 overflow-hidden">
          <div className="p-2">
          <CiSearch />
          </div>
          <input
            type="text"
            className="w-full p-2 outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="h-20 w-2/5 right-0 flex flex-row items-center justify-around">
        <div className="h-10 w-1/5 rounded-xl flex items-center cursor-pointer hover:bg-blue-500 transition-colors">
          <div className="p-2">
            <FaUser />
          </div>
          <select
            name="Login"
            id="Login"
            className="bg-transparent rounded-lg w-4/6 cursor-pointer border-collapse"
          >
            <option value="Login">Login</option>
            <option value="Login">User</option>
            <option value="Login">Admin</option>
          </select>
        </div>
        <div className="h-10 w-1/5 rounded-xl flex items-center cursor-pointer hover:bg-green-500 transition-colors">
          <div className="p-2 w-2/5">
            <FaCartShopping />
          </div>
          <p>Cart</p>
        </div>
        <div className="h-10 w-1/5 rounded-xl flex items-center cursor-pointer hover:bg-red-500 transition-colors">
          <button className="ml-9">About</button>
        </div>
        <div className="h-10 w-1/5 rounded-xl flex items-center cursor-pointer hover:bg-yellow-500 transition-colors">
          <button className="ml-8">Contact</button>
        </div>
      </div>
    </div>
    
    <div className="h-60 mt-5 flex justify-center items-center">
        <div className="h-4/5 w-11/12 flex items-center justify-around">
            <div className="h-full w-1/5 rounded-lg flex flex-col items-center justify-center cursor-pointer">
                <img src="https://media.istockphoto.com/id/1253886250/photo/farmer-spraying-vegetable-green-plants-in-the-garden-with-herbicides-pesticides-or.jpg?s=612x612&w=0&k=20&c=aTjsSRDB1BeTq3_AeujmBjc0l0nltsi1wHbSUBG1n5Q=" alt="Pesticides Image" className="rounded-lg h-3/4 w-4/5" />
                <button className="border-collapse">Pesticides</button>
            </div>
            <div className="h-full w-1/5 rounded-lg flex flex-col items-center justify-center">
                <img src="https://media.istockphoto.com/id/1284379612/photo/indian-farmer-spreading-fertilizer-in-the-green-banana-field.jpg?s=612x612&w=0&k=20&c=0REGneTrOcvYy7_LhT47mp1As70NBxrRWnm2lNWmPK4=" alt="Pesticides Image" className="rounded-lg h-3/4 w-4/5" />
                <button className="border-collapse">Fertlizers</button>
            </div>
            <div className="h-full w-1/5 rounded-lg flex flex-col items-center justify-center">
                <img src="https://imgs.search.brave.com/pbB_B069wTDLkxJ7hQLnP27S5wT8etUFni2WFyTVcYo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI3/MjI5NjQ0L3Bob3Rv/L3BsYW50aW5nLXNl/ZWRzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz00MmNfOU1J/d2w1OV84b2g0ZktD/VzFtLUJEbGhaTGkz/MXRUUDNfc1JZb1dr/PQ" alt="Pesticides Image" className="rounded-lg h-3/4 w-4/5" />
                <button className="border-collapse">Seeds</button>
            </div>
            <div className="h-full w-1/5 rounded-lg flex flex-col items-center justify-center">
                <img src="https://plus.unsplash.com/premium_photo-1664299650802-c61f55b00c96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlc3RpY2lkZXN8ZW58MHx8MHx8fDA%3D" alt="Pesticides Image" className="rounded-lg h-3/4 w-4/5" />
                <button className="border-collapse">See All</button>
            </div>
            
        </div>
    </div>

    </Fragment>
  );
};

export default Home;
