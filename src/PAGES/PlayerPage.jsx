import PlayerListings from "../COMPONENTS/PlayerListings";

const PlayerPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6 ">
      <PlayerListings isHome={true}/>
    </section>
  );
};

export default PlayerPage;
