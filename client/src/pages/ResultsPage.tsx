import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Grid, GridItem } from "@chakra-ui/react";

export default function ResultsPage() {
  const [data, setData] = useState<any>();
  const { state } = useLocation();

  const handleButtonClick = () => {
    console.log(data.data);
  };

  useEffect(() => {
    setData(state);
  }, [state]);

  return (
    <div>
      <div className="main-results-div">
        <Grid
          h="100vh"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem colSpan={2} bg="papayawhip">
            <Button onClick={handleButtonClick} />
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4} bg="tomato" />
        </Grid>
      </div>
    </div>
  );
}
