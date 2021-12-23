import React, { useEffect, useState } from 'react'
import { MoonFill, SunFill } from 'react-bootstrap-icons'

function Dark() {
    const [dark, setdark] = useState(true)

    useEffect(() => {
        if (localStorage.theme === "dark" || (!('theme' in localStorage))) {
            document.body.className="dark"
        } else {
            document.body.className=""
            setdark(false)
        }
    }, [])

    function toggleDarkMode() {
        if (dark) {
            document.body.className=""
            setdark(false)
            localStorage.theme="light"
        } else {
            document.body.className="dark"
            setdark(true)
            localStorage.theme="dark"
        }
        console.log("haha yes")
    }

    return (
        <div className='btn btn-ghost btn-circle' onClick={toggleDarkMode}>
            {(dark) ? <SunFill className='h-[50%] w-[50%]' /> : <MoonFill className='h-[50%] w-[50%] text-black' />}
        </div>
    )
}

export default Dark
