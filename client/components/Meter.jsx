import React from 'react'

const Meter = (props) => {

    //get collective monkey satiation and add together
    //then divide by num of monkeys.
    //use that to work out percent ?

    var {
        percent = 0,        //number: 0-1, inclusive. fill%
        width = 100,        //width of the meter
        height = 10,        //height of the meter
        color = '#0078bc',  //fill colour
        label = null       //a label for accessibility
    } = props
    var w = percent ? Math.max(height, width * Math.min(percent, 1)) : 0;
    return(
        <div>
            <svg width={width} height={height} aria-label={label}>
                <rect width={width} height={height} fill="#ccc" />
                <rect width={w} height={height} fill={color} />
            </svg>
        </div>
    )
}

export default Meter
