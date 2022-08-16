import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function ResultsPage() {
  const [data, setData] = useState<any>();
  const { state } = useLocation();

  const handleButtonClick = () => {
    console.log(data.data.main);
  };

  useEffect(() => {
    setData(state);
  }, [state]);

  return (
    <div>
      <Button onClick={handleButtonClick} />
    </div>
  );
}
