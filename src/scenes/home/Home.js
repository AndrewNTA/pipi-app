import React from 'react';
import NavBar from '../../components/NavBar';

const Home = () => {
  return (
    <div style={
      { backgroundImage: "url(https://www.vistaridgeumc.org/wp-content/uploads/sites/111/2016/12/welcome.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh"
      }}>
      <NavBar />
    </div>
  )
}

export default Home;