import React, { useState } from "react";
import "./index.css";

var listOfWebSeries = {
  SiFi: [
    {
      name: "Wanda Vision",
      IMDb: "8.9",
      key: "1",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRa0Z8hMzYCH1lG-6Uk5uppTii_Xt8SWlQNGYsex9__r2W4bTYh",
      link: "https://www.hotstar.com/in/tv/wandavision/1260051344"
    },
    {
      name: "Dark",
      IMDb: "8.6",
      key: "2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAci3ZPn4Pu1BEqPsObJfMb_G02aJ_tzPxaGEmvEuAZ32LiwK",
      link: "https://www.netflix.com/in/title/80100172"
    },
    {
      name: "Black Mirror",
      IMDb: "8.8",
      key: "3",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYwfDf0a03KpTMTz75CgPfA9lApR7V4avwU-JtblGImgqladjb",
      link: "https://www.netflix.com/in/title/70264888"
    },
    {
      name: "Stranger Things",
      IMDb: "8.7",
      key: "4",
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
      link: "https://www.netflix.com/in/title/80057281"
    }
  ],
  Romance: [
    {
      name: "Friends",
      IMDb: "8.9",
      key: "5",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSHW7M_Pw-BVdUw5Mkw6imk1dteP1z0bQY73g9DJkfU-M-WM4Nq",
      link: "https://www.netflix.com/in/title/70153404"
    },
    {
      name: "Lucifer",
      IMDb: "8.5",
      key: "6",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb3pttMH9HTVcKBu6_dWasqryMYJPZQTAdmSqO0jTE22SHklSlaOQp0bWSsHK1tjKiod4&usqp=CAU",
      link: "https://www.netflix.com/in/title/80057918"
    },
    {
      name: "The Big Bang Theory",
      IMDb: "8.4",
      key: "7",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtC9eemY3y3TKXvkupIecZjCTteQW65ntB3zhUi1StR7brfDd",
      link: "https://www.netflix.com/in/title/70143830?source=35"
    },
    {
      name: "How I Met Your Mother",
      IMDb: "8.3",
      key: "8",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfSaVJADtNW0f28A0YJ1sGeS4oSMfpkZryxeNNZaUEVKgkeVpV",
      link: "https://www.hotstar.com/in/tv/how-i-met-your-mother/8323"
    }
  ],
  Action: [
    {
      name: "Daredevil",
      IMDb: "8.6",
      key: "9",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIdHgxdEH71SlZqK6-b4scTvnE2HkgHVnYbjIa5BzvDPjnFS-y",
      link: "https://www.netflix.com/in/title/80018294"
    },
    {
      name: "The Punisher",
      IMDb: "8.5",
      key: "10",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmDTJVZoOrJAJUqsTLOaXEARJ-dv-VfTY1wekUuHy9Ps1PASUi",
      link: "https://www.netflix.com/in/title/80117498"
    },
    {
      name: "The Walking Dead",
      IMDb: "8.2",
      key: "11",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2QqaItGM7rP3smZeWTfKy0DRBPpS4ut15KV2orLJJU6-pqt5W",
      link: "https://www.netflix.com/in/title/70177057"
    },
    {
      name: "Cobra Kai",
      IMDb: "8.6",
      key: "12",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWNW4yw1pNfseGOBncDJjCUpNwDHQDlEhxYnFV6iZ-ye86XWny",
      link: "https://www.netflix.com/in/title/81002370"
    }
  ]
};

function App() {
  var [activeGenre, setActiveGenre] = useState("SiFi");
  var tabLists = Object.keys(listOfWebSeries);


  
  function tabClickedHandler(current_tab) {
    console.log("clicked: ", current_tab);
    setActiveGenre(current_tab);
  }

  return (
    <div className="App">
      <header className="App-header">
      
<div className="App">
      <div className="app-content">
        <div className="app-container">
          {/* <img
            className="img"
            src="https://emojipedia-us.s3.amazonaws.com/content/2020/04/05/yt.png"
          ></img> */}

          <div className="pl-20">
            {/* help text */}
            <div className="text-gray mb-20">
              <p>Some Web Series form different Genre</p>
            </div>

            <div className="tabs mb-20">
              {tabLists.map((tab) => {
                // add active class
                var tabclasses = "tab";
                if (tab === activeGenre) {
                  tabclasses = "tab active";
                }

                // tab button
                return (
                  <button
                    key={tab}
                    onClick={() => tabClickedHandler(tab)}
                    className={tabclasses}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
            <div className="tab-content">
              {
                // typeof(listOfWebSeries)
                listOfWebSeries[activeGenre].map((genre) => {
                  return (
                    <div className="card" key={genre.name}>
                      <p className="video-title">{genre.name}</p>
                      
                      <div className="flex">
                        <div className="video-sub text-gray">
                          
                          &nbsp;&nbsp;
                          <img className="logo" src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" alt="IMDb"/> 
                          &nbsp;&nbsp; {genre.IMDb}
                        </div>
                        <div className="video-sub text-gray">
                          <a
                            href={genre.link}
                            className="btn-youtube"
                            title="Watch Now"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div>
                              <img className="imgs" src={genre.img} alt="img"/>
                            </div>     
                                                  
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center">
        © 2021{" "}
        <a
          href="https://bharatsharmaportfolio.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          Bharat Sharma Production
        </a>
      </footer>
  </div>

        
    </header>
     </div>
  );
}

export default App;
