import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Grid, GridItem } from "@chakra-ui/react";


export interface ResultsProps {
  state : {
    data: any,
    background: string
  }
}

export default function ResultsPage() {
  // const { state } = useLocation();
  const location = useLocation();
  const data = (location as ResultsProps)
  const [backgroundStyle, setBackgroundStyle] = useState<any>();


  const handleButtonClick = () => {
    console.log(backgroundStyle);
  };

  useEffect(() => {
    setBackgroundStyle(data.state.background)
  },[data])

  return (
    <div>
      <div className="main-results-div">
        <Grid h="100vh" gap={5}>
          <GridItem colSpan={2} bg={backgroundStyle}>
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={handleButtonClick}
            />
          </GridItem>
          <GridItem colSpan={2} bg={backgroundStyle} />
          <GridItem colSpan={4} bg={backgroundStyle} />
        </Grid>
      </div>
    </div>
  );
}
