import React from "react";
import { FaBarcode, FaBolt, FaCalendarAlt, FaCar, FaCarSide, FaChargingStation, FaCheckCircle, FaCircle, FaClipboard, FaClipboardList, FaCogs, FaCouch, FaDollarSign, FaDoorOpen, FaFileContract, FaGasPump, FaHorseHead, FaIdCard, FaIndustry, FaMoneyBillAlt, FaRoad, FaRulerCombined, FaTachometerAlt, FaTag, FaTags, FaTruckMoving, FaWrench } from "react-icons/fa";
const iconMAp ={
    FaClipboardList: <FaClipboardList/>,
    FaTag: <FaTag/>,
    FaDollarSign: <FaDollarSign/>,
    FaMoneyBillAlt: <FaMoneyBillAlt/>,
    FaCar: <FaCar/>,
    FaCheckCircle: <FaCheckCircle/>,
    FaChargingStation: <FaChargingStation/>,
    FaRoad: <FaRoad/>,
    FaIndustry: <FaIndustry/>,
    FaCarSide: <FaCarSide/>,
    FaCalendarAlt:<FaCalendarAlt/>,
    FaRoad:<FaRoad/>,
    FaWrench: <FaWrench/>,
    FaCircle: <FaCircle/>,
    FaGasPump: <FaGasPump/>,
    FaIdCard: <FaIdCard/>,
    FaBarcode: <FaBarcode/>,
    FaTachometerAlt: <FaTachometerAlt/>,
    FaDoorOpen:<FaDoorOpen/>,
    FaHorseHead:<FaHorseHead/>,
    FaCogs:<FaCogs/>,
    FaTachometerAlt: <FaTachometerAlt/>,
    FaBolt:<FaBolt/>,
    FaRulerCombined: <FaRulerCombined/>,
    FaCouch:<FaCouch/>,
    FaTruckMoving:<FaTruckMoving/>,
    FaFileContract: <FaFileContract/>,
    FaTags: <FaTags/>,
    FaClipboard:<FaClipboard/>
}
function IconField({icon}){
    return (
        <div className=" text-primary bg-blue-100 p-2 rounded-full"> 
           {iconMAp[icon]}
        </div>
    )
}

export default IconField