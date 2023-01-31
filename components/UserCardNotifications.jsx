"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usersData } from "@/constants";
import Action from "./Action";
import CommentPhoto from "./CommentPhoto";

function UserCardNotifications() {
  const [notifications, setNotifications] = useState(usersData);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = notifications.filter((item) => item.viewed === false).length;
    setCounter(count);
  }, [notifications]);

  function viewNotification(id) {
    setNotifications((oldNotif) =>
      oldNotif.map((item) => {
        return item.id === id ? { ...item, viewed: !item.viewed } : item;
      })
    );
  }

  function changeMarking() {
    setNotifications((oldNotif) =>
      oldNotif.map((item) => {
        return { ...item, viewed: true };
      })
    );
  }

  return (
    <div className="m-4  max-w-sm xl:max-w-xl ">
      <div className="grid grid-cols-3  rounded-xl  align-text-top">
        <p className="text-xl font-extrabold">
          Notifications
          <span className="ml-2 w-min items-start rounded-lg bg-customblue px-3 py-1 text-sm text-white">
            {counter}
          </span>
        </p>
        <button
          onClick={() => changeMarking()}
          className="col-start-3 text-end text-sm text-darkgrayishblue hover:cursor-pointer hover:text-customblue"
        >
          Mark all as read
        </button>
      </div>
      {notifications.map((item) => (
        <div
          key={item.id}
          className={`my-3 grid h-auto w-full grid-flow-col grid-cols-[40px_1fr_36px] rounded-lg  py-4  ${
            item.viewed ? "bg-white" : "bg-verylightgrayishblue"
          } px-4 py-2 `}
          onClick={() => viewNotification(item.id)}
        >
          <Image
            src={item.userImg}
            alt="user profile picture"
            width={0}
            height={0}
            unoptimized
            className="mt-1 mr-2 h-9 w-9"
          />

          <div className="col-span-2 ml-2 inline w-full self-start text-sm leading-5 text-grayishblue">
            <p
              className={`relative inline font-bold text-verydarkblue hover:cursor-pointer hover:text-customblue`}
            >
              {item.name}{" "}
            </p>

            <Action notifications={item} />
          </div>

          <div className="justify-self-end">
            {item.action[0].commented && <CommentPhoto />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserCardNotifications;
