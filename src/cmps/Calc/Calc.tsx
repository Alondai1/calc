import { ChangeEvent, useEffect, useState } from 'react'
import { initialData, calc } from '../../services/dataService'
import './Calc.scss'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'



export const Calc = () => {

    useEffect(() => {
        setData({ ...data, daysUntil: daysUntilNext9th() })
    }, [])


    const [data, setData] = useState(initialData)
    const [res, setRes] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onCalc = () => {
        setRes(calc(data))
    }



    const daysUntilNext9th = () => {
        const today = new Date();
        const currentDay = today.getDate();
        let next9th;
        if (currentDay <= 9) {
            next9th = new Date(today.getFullYear(), today.getMonth(), 8);
        } else {
            next9th = new Date(today.getFullYear(), today.getMonth() + 1, 8);
        }
        const timeDiff = next9th.getTime() - today.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
        return daysDiff;
    };

    return (
        <div className='calc'>


            <TextField

                label="Current Amount"
                type="number"
                value={data.currAmount}
                name="currAmount"
                onChange={handleChange}
            />

            <TextField
                label='Rent'
                type="number"
                value={data.rent}
                name="rent"
                onChange={handleChange}
            />




            <TextField
                label='Days Until'
                type="number"
                value={data.daysUntil}
                name="daysUntil"
                onChange={handleChange}
            />


            <TextField
                label="Osh"
                type="number"
                value={data.osh}
                name="osh"
                onChange={handleChange}
            />

            <TextField
                label="Salary"
                type="number"
                value={data.salary}
                name="salary"
                onChange={handleChange}
            />
            <Button variant="outlined" onClick={onCalc} >חשב</Button>
            {
                res && res
            }

        </div>
    )
}
