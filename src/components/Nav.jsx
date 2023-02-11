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
        <div className="request-div">
          <p className="request">Get Priority Access</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
