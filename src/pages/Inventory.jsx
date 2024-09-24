// inventory.js
import React from "react";
import Boathouse from "../components/Boathouse";
import DownstairsFreezer from "../components/DownstairsFreezer";
import DownstairsFridge from "../components/DownstairsFridge";
import DownstairsShelves from "../components/DownstairsShelves";
import UpstairsFridge from "../components/UpstairsFridge";

function Inventory() {
  return (
    <div>
      <Boathouse />
      <DownstairsFreezer />
      <DownstairsFridge />
      <DownstairsShelves />
      <UpstairsFridge />
    </div>
  );
}

export default Inventory;
