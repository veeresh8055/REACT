import React, { useState } from "react";


const App = () => {
 const [theme , setTheme] = useState(false);

  let  changeTheme = ()=>{
    setTheme(!theme)
   }

  return (

    <div className={ theme ? "light" :"dark"}>
      <h1>THEME SWITCHER</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        dignissimos fugit consectetur aspernatur non asperiores error atque
        cupiditate dolores reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, modi
        vel! Cum minima, pariatur iure fugit repellat enim libero modi?
      </p>

      <button onClick={changeTheme }> change Theme</button>
    </div>
  );
};

export default App;
