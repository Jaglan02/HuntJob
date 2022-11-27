import React from 'react'
import { FaHome, FaSearch } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BsBag, BsFillFileBarGraphFill } from "react-icons/bs";
import { TbWaveSawTool } from "react-icons/tb";




const Page = () => {
    return (
        <div>
            
                        <h2><b style={{ color: "blue" }}>Hunt </b><b>Jobs</b></h2>
                        <p style={{ marginTop: "80px" }}><FaHome />&nbsp;&nbsp;&nbsp;&nbsp;Home</p>
                        <p ><FaSearch />&nbsp;&nbsp;&nbsp;&nbsp;FindWorks</p>
                        <p><BsBag />&nbsp;&nbsp;&nbsp;&nbsp;My Jobs</p>
                        <p><TbWaveSawTool />&nbsp;&nbsp;&nbsp;&nbsp;My Activity</p>
                        <p><AiFillMessage />&nbsp;&nbsp;&nbsp;&nbsp;Messages</p>
                        <p><BsFillFileBarGraphFill />&nbsp;&nbsp;&nbsp;&nbsp;Reports</p>


                    

        </div>
    )
}

export default Page