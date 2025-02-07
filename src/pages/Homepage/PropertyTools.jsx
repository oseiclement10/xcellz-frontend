import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PropertyTools = () => {
    return (
        <section>
            <div className="flex justify-end space-x-4">
                <BasicSelect label=" Select Currency" options={[{ value: "GHS", label: "Ghana Cedis ₵" }, { value: "USD", label: "United States Dollars $" }]} />
                <BasicSelect label=" Select Tool" options={[{ value: "mortgage", label: "Mortgage Calculator" }]} />
            </div>
        </section>
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