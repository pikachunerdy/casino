import React from "react";

export default function DateHelper(dateString) {
  let newDate = new Date(dateString).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return <div>{newDate}</div>;
}
