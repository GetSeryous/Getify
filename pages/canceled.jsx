import React from "react";
import { useRouter } from "next/router";
import { GiCancel } from "react-icons/gi";

export default function canceled() {
  const router = useRouter();

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => router.push("/")}
      className="success-wrapper"
    >
      <div className="success">
        <p className="icon">
          <GiCancel style={{color: "red"}} />
        </p>
        <h2 className="">Go to the back home page</h2>
      </div>
    </div>
  );
}
