import React from 'react';
import './App.css';
import UserSlider from '../src/components/UserSlides/UserSlides.js';
import AppBar from '../src/components/AppBar/AppBar.js';
import HomeScreen from '../src/components/HomeScreen/HomeScreen.js';
import UserShortDetails from '../src/components/UserShortDetails/UserShortDetail.js';
import { MapProvider } from "../src/components/UserShortDetails/hooks/mapHook.js";
import Footer from '../src/components/Footer/Footer.js';
import MobileUserCards from '../src/components/MobileUserCards/MobileUserCards.js';

function App() {
  return (
    <section className="App">
      <div className="app-bar">
        <AppBar />
      </div>
      <div className="app-home-screen">
        <HomeScreen />
      </div>
      <div className="hidden sm:block app-user-slider mt-56 sm:mt-0">
        <UserSlider />
      </div>
      <div className='sm:hidden app-mobile-cards'>
        <MobileUserCards />
      </div>
      <div className="app-user-slider mt-56 sm:mt-0">
        <MapProvider>
          <UserShortDetails />
        </MapProvider>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </section>
  );
}

export default App;
