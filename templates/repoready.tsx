import React from "react"
import { TemplateProps } from "@flayyer/flayyer-types";
import classNames from "classnames";

import "../styles/tailwind.css";

import code from "../static/code_1.png";
import logo from "../static/logo.svg";
import refractor from "refractor";

console.log(refractor.highlight("*Emphasis*", 'markdown'));
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import atelierCaveDark from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";
function Layer({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={classNames("absolute inset-0", className)} />;
}

const Logo = ({ className, ...props }: React.ComponentPropsWithoutRef<"img">) => (
  <img src={logo} className={classNames("filter-white" /* custom */, "w-20 h-20", "object-contain", className)} {...props} />
);

function overFlowStyle(lines = 1): Record<string, string> {
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: lines.toString(),
    WebkitBoxOrient: 'vertical',
  };
}



// Make sure to 'export default' a React component
export default function MainTemplate({ agent, variables }: TemplateProps) {
  const {
    title = "Repository",
    image = code,
    description = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing',
    username = "username",
    stars = "42",
    forks = "42",
    codeString = `%3CLayer%20className%3D%22flex%20flex-col%20flex-grow-0%20flex-none%20justify-evenly%20items-center%20text-white%22%20style%3D%7B%7B%20backgroundColor%3A%20%22%23131b2c%22%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ch1%20className%3D%22text-7xl%20font-extrabold%20pt-5%20leading-tight%22%20style%3D%7BoverFlowStyle()%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Btitle%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fh1%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20className%3D%22text-4xl%20font-normal%20flex%20flex-row%20justify-between%20items-center%20w-full%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20className%3D%22flex%20flex-row%20justify-center%20items-center%20flex-1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Csvg%20width%3D%2250%25%22%20height%3D%2250%25%22%20viewBox%3D%220%200%2044%2042%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20%20fill%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20className%3D%22text-8xl%20m-0%20p-0%20ml-3%22%20style%3D%7BoverFlowStyle()%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bstars%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3C%2FLayer%3E`,
    language = "javascript",
  } = variables;

  if (agent.name === "whatsapp") {
    return (
      <>
        <Layer className="flex flex-col flex-grow-0 flex-none justify-evenly items-center text-white" style={{ backgroundColor: "#131b2c" }}>
          <h1 className="text-7xl font-extrabold pt-5 leading-tight" style={overFlowStyle()}>
            {title}
          </h1 >
          <div className="text-4xl font-normal flex flex-row justify-between items-center w-full">
            <div className="flex flex-row justify-center items-center flex-1">
              <svg width="50%" height="50%" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4196 14.7406L29.2783 12.8308L23.4038 0.921308C23.2433 0.595234 22.9794 0.331269 22.6533 0.17082C21.8355 -0.232891 20.8418 0.103535 20.4329 0.921308L14.5584 12.8308L1.41705 14.7406C1.05474 14.7924 0.723493 14.9632 0.46988 15.222C0.163276 15.5371 -0.00567736 15.9611 0.000145677 16.4007C0.00596871 16.8404 0.186091 17.2597 0.500935 17.5666L10.0088 26.8364L7.76256 39.926C7.70988 40.2305 7.74357 40.5436 7.85982 40.83C7.97606 41.1163 8.17021 41.3643 8.42023 41.5459C8.67026 41.7275 8.96617 41.8354 9.2744 41.8574C9.58263 41.8793 9.89085 41.8145 10.1641 41.6702L21.9183 35.4903L33.6725 41.6702C33.9934 41.841 34.3661 41.898 34.7232 41.8359C35.6238 41.6806 36.2294 40.8266 36.0741 39.926L33.8278 26.8364L43.3357 17.5666C43.5945 17.313 43.7653 16.9818 43.817 16.6195C43.9568 15.7137 43.3253 14.8752 42.4196 14.7406Z" fill="white" />
              </svg>
              <p className="text-8xl m-0 p-0 ml-3" style={overFlowStyle()}>
                {stars}
              </p>
            </div>
            <div className="flex flex-row justify-center items-center flex-1">
              <svg width="30%" height="40%" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.66667C0 2.08934 2.19944 0 4.9126 0C7.62582 0 9.82519 2.08934 9.82519 4.66667C9.82519 6.39399 8.83727 7.90214 7.3689 8.70903V25.7591H11.7694C14.4826 25.7591 16.6819 23.6696 16.6819 21.0924V18.1622C15.1856 17.3626 14.1748 15.8395 14.1748 14.0923C14.1748 11.515 16.3742 9.42562 19.0874 9.42562C21.8004 9.42562 24 11.515 24 14.0923C24 15.7995 23.0347 17.2926 21.5945 18.1062V21.0924C21.5945 26.247 17.1956 30.4257 11.7694 30.4257H7.3689V33.2911C8.83727 34.0979 9.82519 35.606 9.82519 37.3333C9.82519 39.9107 7.62582 42 4.9126 42C2.19944 42 0 39.9107 0 37.3333C0 35.606 0.987923 34.0979 2.4563 33.2911V8.70903C0.987923 7.90214 0 6.39399 0 4.66667Z" fill="white" />
              </svg>
              <p className="text-8xl m-0 p-0 ml-3" style={overFlowStyle()}>
                {forks}
              </p>
            </div>
          </div>
        </Layer>
      </>
    )
  }
 
  return (
    <>
      {/* Layer of background */}
      <Layer className="flex flex-row justify-end items-start h-full" style={{ backgroundColor: "#131b2c" }}>
        <svg className="h-full" viewBox="0 0 375 375" style={{ width: "55%" }}>
          <polygon points="0,375 50,0 413,0 413, 375" fill="#19171C"/>
          <foreignObject width="750" height="750" x="0" y="0" clipPath="url(#shape)">
            <SyntaxHighlighter className="overflow-hidden" customStyle={{overflow: "hidden"}} language={language} style={{...atelierCaveDark}}>
              {decodeURIComponent(codeString)}
            </SyntaxHighlighter>
          </foreignObject>
          {/* <image height="100" x="0" y="0" clipPath="url(#shape)" href={image} /> */}
          <defs>
            <clipPath id="shape">
              <polygon points="0,375 50,0 413,0 413, 375" />
            </clipPath>
          </defs>

        </svg>
      </Layer>
      {/* Layer of readable content */}
      <Layer className="flex flex-col justify-between py-20  text-white pl-16" style={{ width: "45%" }}>
        {/* Horizontal flex with logo and cross centered text */}
        <div className="flex flex-row justify-start items-center">
          <Logo className="w-24 h-24" />
          <h2 className="text-3xl font-medium ml-5" style={overFlowStyle()}>
            {username}
          </h2>
        </div>
        <h1 className="text-6xl font-medium" style={overFlowStyle()}>
          {title}
        </h1>
        <p className="text-3xl font-normal leading-snug" style={overFlowStyle(4)}>
          {description}
        </p>
        <div className="text-4xl font-normal flex flex-row justify-between items-center w-3/4">
          <div className="flex flex-row justify-start items-center flex-1">
            <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4196 14.7406L29.2783 12.8308L23.4038 0.921308C23.2433 0.595234 22.9794 0.331269 22.6533 0.17082C21.8355 -0.232891 20.8418 0.103535 20.4329 0.921308L14.5584 12.8308L1.41705 14.7406C1.05474 14.7924 0.723493 14.9632 0.46988 15.222C0.163276 15.5371 -0.00567736 15.9611 0.000145677 16.4007C0.00596871 16.8404 0.186091 17.2597 0.500935 17.5666L10.0088 26.8364L7.76256 39.926C7.70988 40.2305 7.74357 40.5436 7.85982 40.83C7.97606 41.1163 8.17021 41.3643 8.42023 41.5459C8.67026 41.7275 8.96617 41.8354 9.2744 41.8574C9.58263 41.8793 9.89085 41.8145 10.1641 41.6702L21.9183 35.4903L33.6725 41.6702C33.9934 41.841 34.3661 41.898 34.7232 41.8359C35.6238 41.6806 36.2294 40.8266 36.0741 39.926L33.8278 26.8364L43.3357 17.5666C43.5945 17.313 43.7653 16.9818 43.817 16.6195C43.9568 15.7137 43.3253 14.8752 42.4196 14.7406Z" fill="white" />
            </svg>
            <p className="m-0 p-0 ml-3" style={overFlowStyle()}>
              {stars}
            </p>
          </div>
          <div className="flex flex-row justify-start items-center flex-1">
            <svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4.66667C0 2.08934 2.19944 0 4.9126 0C7.62582 0 9.82519 2.08934 9.82519 4.66667C9.82519 6.39399 8.83727 7.90214 7.3689 8.70903V25.7591H11.7694C14.4826 25.7591 16.6819 23.6696 16.6819 21.0924V18.1622C15.1856 17.3626 14.1748 15.8395 14.1748 14.0923C14.1748 11.515 16.3742 9.42562 19.0874 9.42562C21.8004 9.42562 24 11.515 24 14.0923C24 15.7995 23.0347 17.2926 21.5945 18.1062V21.0924C21.5945 26.247 17.1956 30.4257 11.7694 30.4257H7.3689V33.2911C8.83727 34.0979 9.82519 35.606 9.82519 37.3333C9.82519 39.9107 7.62582 42 4.9126 42C2.19944 42 0 39.9107 0 37.3333C0 35.606 0.987923 34.0979 2.4563 33.2911V8.70903C0.987923 7.90214 0 6.39399 0 4.66667Z" fill="white" />
            </svg>
            <p className="m-0 p-0 ml-3" style={overFlowStyle()}>
              {forks}
            </p>
          </div>
        </div>
      </Layer>
    </>
  );
}
