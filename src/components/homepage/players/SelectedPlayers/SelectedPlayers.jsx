import React from "react";
import SelectedCard from "../../../ui/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeleteSelectedPlayers = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };

  return (
    <div>
      <div className="space-y-5">
        {selectedPlayers.length === 0 ? (
          <div className="h-100 flex items-center justify-center flex-col gap-4">
            <h2 className="font-semibold text-xl text-[#13131360]">
              No players selected yet
            </h2>
            <p className="text-[#13131360]">
              Go to Available tab to select players
            </p>
          </div>
        ) : (
          selectedPlayers.map((player, index) => {
            return (
              <SelectedCard
                key={index}
                player={player}
                handleDeleteSelectedPlayers={handleDeleteSelectedPlayers}
              ></SelectedCard>
            );
          })
        )}
      </div>
      <div className="p-2 mt-2 rounded-2xl w-44 border border-[#E7FE29]">
        <button className="btn ml-1 rounded-xl text-[#131313] bg-[#E7FE29]">
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
