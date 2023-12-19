import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import CardParyer from "./CardParyer";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../App.css";
import axios from "axios";
import moment from "moment/moment";
import "moment/locale/ar-dz";
moment.locale("ar");

function MainContnet() {

  // FetchApi
  const [timings, setTimings] = useState({
    Fajr: "05:15",
    Dhuhr: "12:48",
    Asr: "16:16",
    Maghrib: "18:53",
    Isha: "20:23",
  });
   const [selectCity, setSelectedCity] = useState({
     displayName: "القاهرة",
     apiname: "cairo",
   });

   const [today,setToday]=useState("");
  const getTimings = () => {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${selectCity.apiname}&country=egypt&method=8`
    )
      .then((res) => res.json())
      .then((timings) => setTimings(timings.data.timings));
   
  };

  useEffect(() => {
    getTimings();
    const date = moment().format("MMMM Do YYYY | h:mm");
    setToday(date)
  }, [selectCity]);

 
  const availableCity = [
    {
      displayName: "القاهرة",
      apiname: "cairo",
    },
    {
      displayName: "بني سويف",
      apiname: "beniseuf",
    },
    {
      displayName: "الاسكندريه",
      apiname: "alexandria",
    },
    {
      displayName: "اسوان",
      apiname: "aswan",
    },
  ];

  const handleChange = (event) => {
    const cityObject=availableCity.find((city)=>{
      return city.apiname==event.target.value
    })
    setSelectedCity(cityObject);

  };

  return (
    <>
      <div className="container">
        {/* HeaderContent */}
        <div className="row">
          <div className="col-7">
            <div className="headerContent text-white mt-5">
              <h2 className="lead">{today}</h2>
              <h2>{selectCity.displayName}</h2>
            </div>
          </div>
          <div className="col-4">
            <div className="headerContent text-white mt-5">
              <h2 className="lead">متبقي حتي صلاة العصر</h2>
              <h2>10:00:10</h2>
            </div>
          </div>
        </div>

        {/* Dividers */}
        <Divider style={{ borderColor: "white", marginTop: "10px" }}></Divider>

        {/* Prayer Cards */}

        <div className="row  mt-5 justify-content-around ">
          <div className="col-md-2">
            <CardParyer
              name="الفجر"
              time={timings.Fajr}
              Img="https://u-static.fotor.com/images/text-to-image/result/PRO-4a458e95b6344456afe25b247e6e109f.jpg"
            />
          </div>
          <div className="col-md-2">
            <CardParyer
              name="الظهر"
              time={timings.Dhuhr}
              Img="https://u-static.fotor.com/images/text-to-image/result/PRO-4a458e95b6344456afe25b247e6e109f.jpg"
            />
          </div>
          <div className="col-md-2">
            <CardParyer
              name="العصر"
              time={timings.Asr}
              Img="https://u-static.fotor.com/images/text-to-image/result/PRO-4a458e95b6344456afe25b247e6e109f.jpg"
            />
          </div>
          <div className="col-md-2">
            <CardParyer
              name="المغرب"
              time={timings.Maghrib}
              Img="https://u-static.fotor.com/images/text-to-image/result/PRO-4a458e95b6344456afe25b247e6e109f.jpg"
            />
          </div>
          <div className="col-md-2">
            <CardParyer
              name="العشاء"
              time={timings.Isha}
              Img="https://u-static.fotor.com/images/text-to-image/result/PRO-4a458e95b6344456afe25b247e6e109f.jpg"
            />
          </div>
        </div>

        {/* SelectCity  */}
        <div className="selectCity d-flex justify-content-center mt-5">
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              المدينة
            </InputLabel>
            <Select
              style={{ color: "white" }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value=""
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              {availableCity.map((city) => {
                return (
                  <MenuItem key={city} value={city.apiname}>
                    {city.displayName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}

export default MainContnet;
