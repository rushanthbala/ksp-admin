import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      {!data.subMenu ? (
        <li>
          <NavLink to={data.link} className="link link-box">
            {data.icon ? (
              <data.icon  size={20} className="min-w-max"   />
            ) : (
              <AiOutlineAppstore
                size={23}
                className="min-w-max tran "
                style={{ color: "transparent" }}
              />
            )}
            {data.label}
          </NavLink>
        </li>
      ) : (
        <li
          className={`link link-box ${pathname.includes(data.link) && "active"}`}
          onClick={() => setSubMenuOpen(!subMenuOpen)}
          
        >
          {data.icon ? (
            <data.icon  size={20} className="min-w-max"   />
          ) : (
            <IoIosArrowDown
              size={23}
              className="min-w-max tran "
              style={{ color: "transparent" }}
            />
          )}
          {/* <data.icon size={23} className="min-w-max" /> */}
          <p className="flex-1 capitalize">{data.label}</p>
          <IoIosArrowDown
            className={` ${subMenuOpen && "rotate-180"} duration-200 `}
          />
        </li>
      )}

      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col text-[0.8rem] font-normal overflow-hidden"
        style={{
          backgroundColor:"#484848",
          borderRadius:"10px"
        }}
      >
        {data.subMenu?.map((menu) => (
          <li key={menu} >
            <NavLink
              to={`${data.link}${menu.link}`}
              className="link  capitalize link-boxs pl-14"
             
            >
              <div  className=" pl-14 mt-1">
              {menu.label}
              </div>
            
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
