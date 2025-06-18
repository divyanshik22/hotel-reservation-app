import { useState } from "react";
import { MdDeliveryDining } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import { TbBuildingStore } from "react-icons/tb";
import { MdLocalDining } from "react-icons/md";
import "./SelectionBar.css"
const SelectionBar = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    function handleTabs(id){
        setSelectedTab(id);
        console.log(selectedTab);
    }
    return (
        <div className="selection-bar">
            <div className={`selection-bar-item ${selectedTab === 1 ? 'selected' : ''}`} onClick={() => handleTabs(1)}>
                <div className="selection-bar-item-icon">
                    <MdDeliveryDining className="selection-bar-item-icon-icon " />
                </div>
                <div className="selection-bar-item-text">
                    <p className="selection-bar-item-text-p">Delivery</p>
                </div>
            </div>
            <div className={`selection-bar-item ${selectedTab === 2 ? 'selected' : ''}`} onClick={() => handleTabs(2)}>
                <div className="selection-bar-item-icon">
                    <MdLocalDining className="selection-bar-item-icon-icon " />
                </div>
                <div className="selection-bar-item-text">
                    <p className="selection-bar-item-text-p">Dining</p>
                </div>
            </div>
            <div className={`selection-bar-item ${selectedTab === 3 ? 'selected' : ''}`} onClick={() => handleTabs(3)}>
                <div className="selection-bar-item-icon">
                    <LuPartyPopper className="selection-bar-item-icon-icon " />
                </div>
                <div className="selection-bar-item-text">
                    <p className="selection-bar-item-text-p">Party</p>
                </div>
            </div>
            <div className={`selection-bar-item ${selectedTab === 4 ? 'selected' : ''}`} onClick={() => handleTabs(4)}>
                <div className="selection-bar-item-icon">
                    <TbBuildingStore className="selection-bar-item-icon-icon " />
                </div>
                <div className="selection-bar-item-text">
                    <p className="selection-bar-item-text-p">Event</p>
                </div>
            </div>


        </div>
    )
}

export default SelectionBar;
