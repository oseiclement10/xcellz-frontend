import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';


// ₵ $

const PropertyTools = () => {
    const [currency, setCurrency] = React.useState('₵');
    return (
        <section className='w-5/6 mx-auto'>
            <div className="flex justify-end mb-8 space-x-4">
                <BasicSelect label=" Select Currency" options={[{ value: "GHS", label: "Ghana Cedis ₵" }, { value: "USD", label: "United States Dollars $" }]} />
                <BasicSelect label=" Select Tool" options={[{ value: "mortgage", label: "Mortgage Calculator" }]} />
            </div>
            <div className="grid grid-cols-7 gap-12">
                <div className="col-span-4 pb-8">
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-medium">Interest Rate</h2>
                            <h2 className='text-2xl font-semibold'>11.5%</h2>
                        </div>
                        <SliderSizes />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <h2 className='w-2/3 mb-3 text-sm'>Total Cost of Mortgage</h2>
                                <h2 className='text-3xl flex-2'> {currency} 0</h2>
                            </div>
                            <BasicInput placeholder={currency} />
                        </div>
                        <div className="">
                            <div className="flex items-center justify-between">
                                <h2 className='w-1/3 mb-3 text-sm'>Mortgage Amount</h2>
                                <h2 className='text-3xl flex-2'> {currency} 0</h2>
                            </div>
                            <BasicInput placeholder={currency} />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <p>Select Lease Period</p>
                        <h2 className="text-3xl font-semibold">20 Years</h2>
                    </div>
                    <SliderSizes />
                    <div className="flex justify-end mt-5">
                        <button className='px-10 py-2 text-sm text-white bg-black rounded-2xl' >Continue</button>
                    </div>

                </div>
                <div className="flex flex-col items-center justify-between col-span-3 overflow-hidden bg-slate-200/60 rounded-2xl">
                    <div className="p-10">
                        <h2 className='mb-8 text-3xl font-semibold text-center'>Results</h2>
                        <div className="flex flex-col items-center">
                            <h2 className='mb-2 font-medium'>Monthly Payment</h2>
                            <input type="number" className='p-3 rounded-lg max-w-[180px] border-2 border-gray-300' placeholder='GHS' />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-5 bg-slate-200/90">
                        <p className="mb-3 font-medium text-center">
                            Consider taking out a mortgage and want to find out how much you can actually borrow?
                        </p>
                        <Link to="#" className='px-5 py-2 text-xs bg-gray-300 hover:scale-105 transition-smooth active:opacity-20 rounded-2xl'>Get an Agreement in Principle</Link>
                    </div>


                </div>
            </div>
        </section>
    )
}



function SliderSizes() {
    return (
        <Box sx={{ width: "full" }}>
            <Slider
                aria-label="Always visible"
                defaultValue={11.5}
                step={2}
                getAriaValueText={valuetext}
                // valueLabelDisplay="on"
                marks={[{ value: 0, label: "0%" }, { value: 11.5, label: "11.5%" }, { value: 27, label: "27%" }, { value: 39, label: "39%" }]}
            />
            {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
        </Box>
    );
}




function valuetext(value) {
    return `${value} %`;
}




const BasicInput = ({ placeholder, value, onChange }) => {
    return (
        <input type="number" className='w-full p-3 border-2 border-gray-300 rounded-lg' placeholder={placeholder} />
    )
}


function BasicSelect({ label, options }) {

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [isOpen, setIsOpen] = React.useState(false);

    return (

        <div className='relative min-w-[200px]'>
            <label htmlFor='custom-select ' className='px-6 py-2 justify-between text-center flex items-center bg-white border border-gray-400 text-gray-700 cursor-pointer rounded-3xl hover:border-[orange] transition-smooth' onClick={() => setIsOpen(!isOpen)}>{label} <ChevronDown size={18} className='mt-1' /> </label>
            {isOpen && <div className='mt-1 bg-white rounded-lg shadow-sm'>
                {options?.map(elem => (<MenuItem value={elem.value} key={elem.value}>{elem.label}</MenuItem>))}
            </div>}

        </div>
    );
}



export default PropertyTools