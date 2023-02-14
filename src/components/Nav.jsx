import React from "react";
import Image from "next/image";

function Nav() {
  return (
    <nav>
      <div className="nav-items">
        <p className="page-title">
          <p className="l">l</p>
          <Image src="/images/tittle-love.svg" width={30} height={40} />{" "}
          <p className="baze">yalbaze</p>
        </p>
        <div className="get-div">
          <button className="request">Get Priority Access</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
