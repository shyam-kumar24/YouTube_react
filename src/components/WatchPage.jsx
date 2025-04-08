import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from './LiveChat'

function WatchPage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
    <div className="px-24 pt-10 flex w-full">
      <div>
        <iframe
          className="rounded-xl"
          width="695"
          height="391"
          src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full">
          <LiveChat />
      </div>
    </div>
    <CommentsContainer />
    </div>
  );
}

export default WatchPage;
