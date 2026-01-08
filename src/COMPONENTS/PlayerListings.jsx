import { players } from "../playerDetail.json";
import PlayerListing from "./PlayerListing";


const PlayerListings = ({isHome = false}) => {
  const PlayerListings = isHome ? players.slice(0, 4) : players;
  
  return (
    <section className="bg-black px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h1 className="text-5xl font-bold text-indigo-500 mb-6 mt-6 text-center">
          Players Prophile 
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        {PlayerListings.map((player) => (
          <PlayerListing key={player.id} player={player} /> 
        ))}
      </div>
      
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-white">
          
        </h2>
      </div>
    </section>
  );
};

export default PlayerListings;