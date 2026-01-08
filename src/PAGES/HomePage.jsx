import Hero from "../COMPONENTS/Hero";
import PlayerListings from "../COMPONENTS/PlayerListings";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PlayerListings isHome={true}/>
    </>
  );
};

export default HomePage;
