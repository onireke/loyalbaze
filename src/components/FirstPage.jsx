import React from "react";

function FirstPage() {
  return (
    <main className="firstpage-main relative">
      <section className="fans-words">
        <h1 className="loyal-fans">Turn your best customers</h1>

        <div className="purple-white">
          <h1 className="loyal-fans">into</h1>
          <h1 className="loyal-fans color-purple">Loyal fans</h1>
        </div>
      </section>

      <article className="intro">
        <p className="intro-words">
          Get ready to revolutionize the way you interact with your customers
          and drive sales with
        </p>
        <p className="intro-words">
          {" "}
          Loyalbaze. Join the waiting list now to be among the first to
          experience the future of{" "}
        </p>
        <p className="intro-words">customer loyalty.</p>
      </article>
    </main>
  );
}

export default FirstPage;
