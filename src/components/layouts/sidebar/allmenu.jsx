import { allRoutesPath } from "../../../router/routesPath";
import { FaCar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { CgSupport } from "react-icons/cg";
import { MdOutlineSpaceDashboard } from "react-icons/md";

export const Menus = [
  {
    id: 0,
    label: "New Product",
    link: allRoutesPath.NEWPRODUCT,
    icon: MdOutlineSpaceDashboard,
  },
  {
    id: 1,
    label: "Orders",
    link: allRoutesPath.ORDERS,
    icon: MdOutlineSpaceDashboard,
  },
];
