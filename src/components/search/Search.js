import React, { useState } from 'react'
import './Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import { Button } from '@material-ui/core';

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.setEndDate);
    }

    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]
            } onChange={handleSelect}
            />
        </div>
    )
}

export default Search
