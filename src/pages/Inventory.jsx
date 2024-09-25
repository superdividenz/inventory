// inventory.js
import React from "react";
import Boathouse from "../components/Boathouse";
import DownstairsFreezer from "../components/downstairsFreezer";
import DownstairsFridge from "../components/downstairsFridge";
import DownstairsShelves from "../components/downstairsShelves";
import UpstairsFridge from "../components/upstairsFridge";

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
