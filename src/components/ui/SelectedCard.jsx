import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ player, handleDeleteSelectedPlayers }) => {
  return (
    <div className="flex items-center gap-6 justify-between p-6 rounded-2xl border border-[#13131310]">
      <div className="flex items-center gap-6">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-18.75 w-20 rounded-md"
        />
        <div className="flex flex-col gap-1 items-center">
          <h2 className="flex items-center gap-2 font-semibold text-2xl">
            <FaUser /> {player.playerName}
          </h2>
          <p className="text-[#13131360]">{player.playerType}</p>
        </div>
      </div>
      <button
        className="btn text-red-500"
        onClick={() => handleDeleteSelectedPlayers(player)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedCard;