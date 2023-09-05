import React from "react";
import"./componants/style.css"
import { Cric } from "./componants/Cric";
import { Foot } from "./componants/Foot";
import { Hockey } from "./componants/Hockey"
import { Khokho } from "./Khokho";
import { Kabaddi } from "./componants/Kabaddi";
function App() {
  return (
<div className="main"> 
  <h3>Home</h3>
  <Cric/>
 <Foot/>
 <Hockey/>
 <Khokho/>
 <Kabaddi/>

</div>
  );
}

export default App;
