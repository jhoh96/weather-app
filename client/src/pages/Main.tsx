import React, { useState, useEffect } from "react";
import { Input, Button, Tooltip } from "@chakra-ui/react";
import { TbCurrentLocation } from "react-icons/tb";

// Page imports
import MainBackground from "../components/MainBackground";
import "./pageStyle.css";

// Date / Time imports
const date = new Date();
const time = date.getHours();

export default function Main() {
  const [backgroundColor, setBackgroundColor] = useState(""); // This will be assigned as currentTime to change background depending on time of day
  const [currentTime, setCurrentTime] = useState<any>(); // Set this to current time of day when (maybe location search is executed) or maybe just next page
  const [inputColor, setInputColor] = useState<string>();
  const [putClouds, setPutClouds] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<any>();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setCurrentTime(time);
    if (7 <= time || time >= 18) {
      setBackgroundColor(
        "linear-gradient(0deg, rgba(4,81,152,1) 0%, rgba(89,195,255,1) 100%)"
      );
      setPutClouds(true);
    }
    if (19 <= time || time >= 17) {
      setBackgroundColor(
        "linear-gradient(0deg, rgba(231,84,5,1) 0%, rgba(255,228,42,1) 100%)"
      );
      setInputColor("#F05800");
      setPutClouds(false);
    }
    setBackgroundColor(
      "linear-gradient(0deg, rgba(2,2,85,1) 0%, rgba(64,62,103,1) 100%)"
    );
    setInputColor("#95C8F0");
    setPutClouds(true);
  }, [currentTime, backgroundColor]);

  const handleClick = () => {
    if(currentLocation) {
        console.log(currentLocation)
    } else {
        console.log(searchInput)
    }
  };

  const handleClickReset = () => {
    setCurrentLocation(null);
    setSearchInput('')
  }

  const handleGPSClick = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
        var latitude:Number = pos.coords.latitude;
        var longitude:Number = pos.coords.longitude;
        setCurrentLocation({latitude, longitude})
    })
    console.log(currentLocation)
  }


  return (
    <div className="main-page-div" style={{ background: backgroundColor }}>
      <div className="input-div">
        <Input
          id="location-input"
          variant="filled"
          placeholder='Please enter your city'
          style={{ background: inputColor }}
          value={currentLocation ? 'your location' : searchInput}
          onChange={e => setSearchInput(e.currentTarget.value)}
        />
        <Tooltip hasArrow label="Use my location" bg={inputColor}>
          <Button
            id="get-location-button"
            rightIcon={<TbCurrentLocation />}
            colorScheme="teal"
            variant="solid"
            onClick={handleGPSClick}
          />
        </Tooltip>
      </div>
      <div className='button-div'>
        <Button
          id="input-button"
          colorScheme="blue"
          variant="solid"
          size="lg"
          onClick={handleClick}
          style={{ background: inputColor }}
        >
          Search
        </Button>
        <Button
          id="reset-button"
          colorScheme="blue"
          variant="solid"
          size="lg"
          onClick={handleClickReset}
          style={{ background: inputColor }}
        >
          Reset 
        </Button>
      </div>
      {putClouds ? <MainBackground /> : null}
    </div>
  );
}