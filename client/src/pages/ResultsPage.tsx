import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";


export default function ResultsPage() {
    const state = useLocation();
    const navigate = useNavigate();

    const data = state || undefined;


    const handleButtonClick = () => {
        console.log(state)
    }

    return(
        <div>
            <Button onClick={handleButtonClick}/>
        </div>
    )
}