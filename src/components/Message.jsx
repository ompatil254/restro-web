import React, { useState } from "react";
import Styled from "styled-components";
import profile from "../Assets/Property 1=Image 19.png";
import icon1 from "../Assets/Property 1=phone.svg";
import icon2 from "../Assets/Property 1=video-camera.svg";
import icon3 from "../Assets/Option.svg";
import face1 from "../Assets/Group 3465380.svg";
import mic from "../Assets/Group 3465393.svg";
import clip from "../Assets/attachment 2.svg";
import { Outlet, useNavigate, useLocation } from "react-router";
import Contact from "./Contact";

export default function Message() {
  const location = useLocation();
  const icons = [icon1, icon2, icon3];
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleInputEnter = (event) => {
    if (event.key === "Enter" && inputText.trim() !== "") {
      setMessages([...messages, inputText]);
      setInputText("");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="absolute w-[92rem] md:relative flex-1 flex top-0 bottom-0 left-0 right-0">
      <Mdiv className="h-screen flex-1">
        <Top
          className="h-[55px] cursor-pointer"
          onClick={() => navigate(`${location.pathname}/contact`)}
        >
          <Left>
            <Img src={profile} className="profile" />
            <Div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <Span style={{ fontSize: "1rem", fontWeight: "600" }}>
                {location.pathname.split("/")[1]}
              </Span>
              <Span
                style={{ fontSize: "0.65rem", fontWeight: "600", color: "" }}
              >
                Online
              </Span>
            </Div>
          </Left>
          <Right>
            <Ul className="right">
              {icons.map((icons, index) => (
                <Li key={index} className="right">
                  <Img src={icons} className="icons" />
                </Li>
              ))}
            </Ul>
          </Right>
        </Top>
        <hr
          className="w-full"
          style={{ width: "100%", borderTop: "1.5px solid #242c2e" }}
        />
        <Mid className="w-full flex flex-col gap-4 overflow-y-auto">
          <Span>Today</Span>
          <div className="w-full float-left">
            <div className="w-fit flex flex-col gap-2">
              <div className="w-fit px-3 py-2 text-sm sm:text-base float-left rounded-r-lg rounded-b-lg bg-[#242c2e]">
                Hello
              </div>
              <div className="flex justify-between w-full">
                <div className=""></div>
                <div className="text-xs">12:45 PM</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2"></div>
          <div className="w-full">
            <div className="w-fit flex flex-col gap-2 float-right">
              <div className="w-fit px-3 py-2 text-sm sm:text-base float-left rounded-l-lg rounded-b-lg bg-[#48a5c4] text-black">
                Hi!
              </div>
              <div className="w-full">
                <div className="text-xs">12:45 PM</div>
              </div>
            </div>
          </div>
          {messages.map((message, index) => (
            <div className="w-full" key={index}>
              <div className="w-fit max-w-[50%] flex flex-col gap-2 float-right">
                <div className="w-fit px-3 py-2 text-sm sm:text-base float-left rounded-l-lg rounded-b-lg bg-[#48a5c4] text-black">
                  <div className="bg-inherit text-black">{message}</div>
                </div>
                <div className="w-full">
                  <div className="text-xs">12:45 PM</div>
                </div>
              </div>
            </div>
          ))}
        </Mid>
        <Bottom className="h-[60px] border-t-1 p-1">
          <Ul className="flex gap-5 w-full justify-between items-center">
            <Li className="w-fit">
              <Img src={clip} />
            </Li>
            <Li className="w-full">
              <Div className="flex items-center justify-between bg-inherit gap-2 rounded-xl bg-slate-700 p-2">
                <Input
                  placeholder="Message to Teddy..."
                  className="w-full p-1 bg-inherit"
                  value={inputText}
                  onChange={handleInputChange}
                  onKeyDown={handleInputEnter}
                />
                <div className="p-1 rounded-full bg-white">
                  <Img src={face1} />
                </div>
              </Div>
            </Li>
            <Li className="w-fit">
              <Img src={mic} />
            </Li>
          </Ul>
        </Bottom>
      </Mdiv>
      <Outlet />
    </div>
  );
}

const Mdiv = Styled.div`
  color: white;
  padding: 5px 0;
  border-right: 1.5px solid #242c2e;
`;

const Top = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

const Mid = Styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: calc(100vh - 125px);
  padding: 0 10px;
`;

const Bottom = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

const Left = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = Styled.div``;

const Div = Styled.div``;

const Ul = Styled.ul`
  &.right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Li = Styled.li`
  &.right {
    border: 1.5px solid #242c2e;
    border-radius: 50%;
    padding: 10px;
  }
`;

const Span = Styled.span``;

const Img = Styled.img`
  background: inherit;
  &.icons {
    width: 20px;
  }
  &.profile {
    width: 50px;
  }
`;

const Input = Styled.input``;
