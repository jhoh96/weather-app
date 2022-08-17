import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Grid, GridItem } from "@chakra-ui/react";

export default function ResultsPage() {
  const [data, setData] = useState<any>();
  const { state } = useLocation();
  // const dayTime:string = state.dayTime

  const handleButtonClick = () => {
    console.log(data.data);
    // console.log(dayTime)
  };

  useEffect(() => {
    setData(state);
  }, [state]);

  return (
    <div>
      <div className="main-results-div">
        <Grid h="100vh" gap={5}>
          <GridItem colSpan={2} bg="papayawhip">
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={handleButtonClick}
            />
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4} bg="tomato" />
        </Grid>
      </div>
    </div>
  );
}
