import React from "react";
import Nav from "../Nav";
import coverImage from "../../assets/salo.png";


function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row ">
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <div class="test">
        <img
          src={coverImage}
          className="test"
          style={{ width: "100%" }}
          alt="cover"
        />
      </div>
    </div>
  );
}

export default Header;