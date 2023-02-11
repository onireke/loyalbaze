import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <main className="footer-main">
      <hr />
      <section className="footer-section">
        <div className="footer-left">
          <Image src="./images/footer-image.svg" width={20} height={20} />
          <div className="begining">
            <p className="begin-content">
              2nd Floor, The Garnet Building, KM14
            </p>
            <p className="begin-content">
              Lekki Epe Expressway, Lagos, Nigeria.
            </p>
          </div>
        </div>
        <p className="footer-middle">Loyalbaze is almost here.</p>

        <div className="footer-right">
          <Image src="./images/phone-icon.svg" width={20} height={20} />
          <p className="phone-number">+234 903 618 9485</p>
        </div>
      </section>
    </main>
  );
}

export default Footer;
