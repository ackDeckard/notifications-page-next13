"use client";
import Image from "next/image";
import React from "react";
import PrivateMessage from "./PrivateMessage";
import TimeOfAction from "./TimeOfAction";

const posts = [
  {
    id: "1",
    title: "My first tournament today!",
  },
  {
    id: "2",
    title: "5 end-game strategies to increase your win rate",
  },
];

const groups = [
  {
    id: "1",
    title: "Chess Club",
  },
];

function Action({ notifications }) {
  return notifications.action.map((item) => (
    <div key={notifications.id} className="inline">
      {item.reaction && (
        <>
          <p className="relative inline">
            reacted to your recent post{" "}
            <span className="font-bold text-darkgrayishblue hover:cursor-pointer hover:text-customblue">
              {posts[0].title}
            </span>
            <span
              className={` ${
                notifications.viewed
                  ? null
                  : "absolute right-0 h-2 w-2 translate-x-3 translate-y-2 rounded-full border-2  bg-customred"
              }`}
            ></span>
          </p>
          <TimeOfAction props={notifications} />
        </>
      )}
      {item.followed && (
        <>
          <div className="inline">
            <p className="relative inline ">
              followed you{" "}
              <span
                className={` ${
                  notifications.viewed
                    ? null
                    : "absolute right-0 h-2 w-2 translate-x-3 translate-y-2 rounded-full border-2  bg-customred"
                }`}
              ></span>
            </p>
          </div>
          <TimeOfAction props={notifications} />
        </>
      )}
      {item.joined && (
        <>
          <p className="relative inline">
            has joined your group{" "}
            <span className="font-extrabold hover:cursor-pointer hover:text-customblue">
              {groups[0].title}
            </span>
            <span
              className={` ${
                notifications.viewed
                  ? null
                  : "absolute right-0 h-2 w-2 translate-x-3 translate-y-2 rounded-full border-2  bg-customred"
              }`}
            ></span>
          </p>
          <TimeOfAction props={notifications} />
        </>
      )}
      {item.directMessage && (
        <>
          <p className="relative inline">
            sent you a private message{" "}
            <span
              className={` ${
                notifications.viewed
                  ? null
                  : "absolute right-0 h-2 w-2 translate-x-3 translate-y-2 rounded-full border-2  bg-customred"
              }`}
            ></span>
          </p>
          <TimeOfAction props={notifications} />
          <PrivateMessage message={item.message} />
        </>
      )}
      {item.commented && (
        <>
          <p className="relative inline">
            commented on your picture{" "}
            <span
              className={` ${
                notifications.viewed
                  ? null
                  : "absolute right-0 h-2 w-2 translate-x-3 translate-y-2 rounded-full border-2  bg-customred"
              }`}
            ></span>
          </p>
          <TimeOfAction props={notifications} />
        </>
      )}
      {item.enteredgroup && (
        <>
          <p className="relative inline">
            reacted to your recent post{" "}
            <span className="font-extrabold text-darkgrayishblue hover:cursor-pointer hover:text-customblue">
              {posts[1].title}
            </span>
            <span
              className={` ${
                notifications.viewed
                  ? null
                  : "absolute right-0 h-2 w-2 translate-x-3 translate-y-2 rounded-full border-2  bg-customred"
              }`}
            ></span>
          </p>
          <TimeOfAction props={notifications} />
        </>
      )}
      {item.leftgroup && (
        <>
          <p className="relative inline">
            left the group{" "}
            <span className="inline font-extrabold text-darkgrayishblue ">
              {groups[0].title}
            </span>
            <span
              className={` ${
                notifications.viewed
                  ? null
                  : "absolute right-0 h-2 w-2 translate-x-3 translate-y-2 rounded-full border-2  bg-customred"
              }`}
            ></span>
          </p>
          <TimeOfAction props={notifications} />
        </>
      )}
    </div>
  ));
}

export default Action;
