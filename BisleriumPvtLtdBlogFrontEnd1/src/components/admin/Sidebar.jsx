import { Text } from "@mantine/core";
import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router";
import { IoLogOut } from "react-icons/io5";


const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <section className="py-3 px-3 w-100 d-flex flex-column gap-5 ">
      <Text size="20px" fw={600}>
        Bislerium Blogs
      </Text>

      <div className="d-flex flex-column gap-4">
        <div className="d-flex gap-2 align-items-center cursor-pointer"
        onClick={()=> navigate('/admin/home')}
        >
          <AiFillDashboard />
          <Text>Dashboard</Text>
        </div>

        <div className="d-flex gap-2 align-items-center cursor-pointer"
        onClick={()=> navigate('/admin/add-admin')}
        >
          <IoIosAddCircle />
          <Text>Add Admin</Text>
        </div>

        <div className="d-flex gap-2 align-items-center cursor-pointer"
        onClick={()=> navigate('/admin/profile')}
        >
          <CgProfile />
          <Text>Profile</Text>
        </div>

        <div className="d-flex gap-2 align-items-center cursor-pointer text-danger"
        onClick={()=> {
          localStorage.removeItem('token')
          navigate('/login')}}
        >
          <IoLogOut/>
          <Text>Logout</Text>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
