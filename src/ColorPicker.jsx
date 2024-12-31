import { useState } from 'react'

function ColorPicker(){
    const [color, setColor] = useState("#ffffff")

    function handleChangeColor(e){
        setColor(e.target.value)
    }

    return(
        <>
        <div className='container'>
            <h3 className='heading'>Color Picker</h3>
            <div className='color-box' style={{backgroundColor: color}} >
                <p  className='heading'>Selected color: {color}</p>
            </div>
            <label className='heading'>Select a color:</label>
            <input type="color" value={color} onChange={handleChangeColor}/>
        </div>
        </>
    )
}

export default ColorPicker;