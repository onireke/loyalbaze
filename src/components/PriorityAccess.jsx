import React from "react";
import Image from "next/image";

function PriorityAccess() {
  return (
    <div className="priority-access">
      <h1 className="priority">Priority Access</h1>
      <Image
        src="/images/priority-line.svg"
        width={150}
        height={150}
        className="priority-line"
      />
      <p className="priority-words">
        Get ready to revolutionize the way you interact with your customers and
        drive sales with Loyalbaze. Skip the waitlist and get exclusive priority
        access to LoyalBaze. Limited slots available. Please tell us a bit about
        your business and needs and of our consultants will be in
        touch Immediately!
      </p>
    </div>
  );
}

export default PriorityAccess;
