import Head from 'next/head'
import { React, useState, useEffect } from 'react'
import Navbar from "../Components/NavbarA/Navbar";
import Form from "../Components/FormOtp/FormOtp";


function otpForm() {

    return (
        <div>
            <Head>
                <title>Learnbay Courses</title>
                <meta name="description" content="Learnbay Courses" />
                <link rel="icon" href="/Learnbay-Favicon-L.png" />
            </Head>
            <Navbar radio={true} />
            <h1>Hello Form</h1>
            <Form/>
           
        </div>
    )
}

export default otpForm