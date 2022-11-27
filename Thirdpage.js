import React from 'react'
import { Button } from 'react-bootstrap'
import logo from "./logo.jpeg"
import { useState, useEffect } from "react";



const Thirdpage = () => {
    const [showPosts, setshowPosts] = useState()
    const apiUrl = "https://jsonplaceholder.typicode.com/posts"
    let displayData

    function pulljason() {
        fetch(apiUrl)
            .then(Response => Response.json())
            .then(ResponseData => {
                displayData = ResponseData.map(function (todo) {
                    return (
                        <>
                            <div class="card" style={{marginTop:"10px"}}>
                                <div class="card-body">
                                    <img src={logo} height={80} width={80} ></img>
                                    <h4 key={todo.id} style={{ marginLeft: "150px", marginTop: "-80px" }}>{todo.title}</h4>
                                    <p style={{ marginLeft: "150px" }}>{todo.body}</p>
                                </div>

                            </div>
                        </>
                    )
                })

                setshowPosts(displayData)
            })
    }
    useEffect(() => {
        pulljason()
    }, [])


    return (
        <div style={{ backgroundColor: "lightblue", margin: "20px" }}><br /><br />
            <input style={{ borderRadius: "25px", }} type="search" id="form1" class="form-control" placeholder="Search by category, company, or" aria-label="Search" /><br /><br />
            <Button variant="primary" style={{ borderRadius: "25px", margin: "20px" }}>UI Designer</Button>
            <Button variant="light" style={{ borderRadius: "25px", margin: "20px" }}>UX Designer</Button>
            <Button variant="primary" style={{ borderRadius: "25px", margin: "20px" }}>Product Designer</Button>
            <a href='#' style={{ textDecorationLine: "none", margin: "10px" }}>Clear Filters</a><br /><br />
            <h4 style={{ margin: "20px" }}>Jobs for You&nbsp;<a style={{ color: "blue" }}>Popular </a></h4>
            <>

                    {showPosts}

                    </>


               

            

        </div>
    )
}

export default Thirdpage