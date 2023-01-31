"use client";
import React from "react";

function TimeOfAction({ props }) {
  const current = new Date();
  const sec = 1000;
  const seconds = Math.floor((current - props.actiondate) / sec);
  const mins = Math.trunc(seconds / 60);
  const hours = Math.trunc(seconds / 60 / 60);
  const days = Math.trunc(seconds / 60 / 60 / 24);
  const weeks = Math.trunc(seconds / 60 / 60 / 24 / 7);

  if (seconds > 1209600) {
    return <div>{weeks} weeks ago</div>;
  } else if (seconds > 604800) {
    return <div>{weeks} week ago</div>;
  } else if (seconds > 172800) {
    return <div>{days} days ago</div>;
  } else if (seconds > 86400) {
    return <div>{days} day ago</div>;
  } else if (seconds > 3600) {
    return <div>{hours}h ago</div>;
  } else if (seconds > 59) {
    return <div>{mins}m ago</div>;
  } else {
    return <div>{seconds}s ago </div>;
  }
}

export default TimeOfAction;
