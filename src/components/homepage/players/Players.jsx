import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, setCoin, coin }) => {
  const players = use(playerPromise);

  const [selectedType, setSelectedType] = useState("available");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto my-22">
      <div className="flex justify-between items-center mb-8">
        {selectedType === "available" ? (
          <h2 className="font-bold text-[28px]">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Players ({selectedPlayers.length}/{players.length})
          </h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn cursor-pointer ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-[#FFFFFF] text-[#13131360]"} font-bold rounded-r-none rounded-l-2xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn cursor-pointer ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-[#FFFFFF] text-[#13131360]"} font-bold rounded-l-none rounded-r-2xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;