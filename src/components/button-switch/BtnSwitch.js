import React, { useState, useEffect } from 'react';

function BtnSwitch({ toggleTheme }) {

    const [isCheck, setIsCheck] = useState(false)

    useEffect(() => {
        const isStatus = localStorage.getItem('theme')
        if (isStatus === "dark-themes") {
            setIsCheck(true)
        } else {
            setIsCheck(false)
        }
    }, [isCheck])
    const handleChangeToggle = (e) => {
        toggleTheme(e.target.checked)
        setIsCheck(e.target.checked)
    }
    return (
        <div className="btn-switch">
            <input type="checkbox" className="checkbox" id="chk" checked={isCheck} onChange={handleChangeToggle} />
            <label className="label" htmlFor="chk">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball"></div>
            </label>
        </div>
    );
}

export default BtnSwitch;