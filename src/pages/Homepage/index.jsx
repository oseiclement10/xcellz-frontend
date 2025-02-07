import walletImg from "@/assets/walletAlt.png";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import TransitionWrapper from "@/components/TransitionWrapper";
import PropertyNews from "./PropertyNews";
import PropertyGuides from "./PropertyGuides";
import PropertyTools from "./PropertyTools";

const Homepage = () => {

    const [value, setValue] = useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <section className="pt-16 bg-stone-100 min-h-dvh">
            <header className="relative flex flex-col w-1/2 mx-auto mb-5 ">
                <h2 className="mb-2 text-4xl font-semibold text-slate-800 font-dmsans">Resources to get Started with Property</h2>
                <p className="w-5/6" >Learn all about Real Estate in Ghana and beyond and download various property guides and insights. Property resources easily at your disposal. See all here.</p>
                <img src={walletImg} alt="wallet" className="absolute right-6 -top-4 max-w-24 rotate-[-23deg]" />
            </header>

            <section>
                <Tabs value={value} onChange={handleChange} textColor="primary"  aria-label="available resources" TabIndicatorProps={{ style:{backgroundColor:"orange"} }} centered color="orange">
                    <Tab label="Property News" className="font-semibold" sx={{ textTransform:"none", color:"black", fontSize:"16px" }} />
                    <Tab label="Property Guides" sx={{ textTransform:"none", color:"black",fontSize:"16px" }} />
                    <Tab label="Property Tools" sx={{ textTransform:"none", color:"black",fontSize:"16px" }} />
                </Tabs>
            </section>
            <section className='pt-5 mx-auto min-h-[300px] lg:w-[68%]'>
                {value == 0 && ( <TransitionWrapper> <PropertyNews /></TransitionWrapper>)}
                {value == 1 && ( <TransitionWrapper> <PropertyGuides /> </TransitionWrapper> )}
                {value == 2 && ( <TransitionWrapper> <PropertyTools /> </TransitionWrapper> )}
           
            </section>
            
        </section>
    )
}






export default Homepage