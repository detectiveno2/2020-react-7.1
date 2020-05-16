import React, { Component } from "react";
import "./../css/TabMenu.css";

class TabMenu extends Component {
  render() {
    return (
      <div className="TabMenu">
        <ul>
          <li>
            <a href="#">
              <svg
                id="i-home"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                stroke="currentcolor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
              </svg>
              <br />
              HOME
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                id="i-gift"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                stroke="currentcolor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M4 14 L4 30 28 30 28 14 M2 9 L2 14 30 14 30 9 2 9 Z M16 9 C 16 9 14 0 8 3 2 6 16 9 16 9 16 9 18 0 24 3 30 6 16 9 16 9" />
              </svg>
              <br />
              DEALS
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                id="i-upload"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                stroke="currentcolor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 18 L16 14 21 18 M16 14 L16 29" />
              </svg>
              <br />
              UPLOAD
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                id="i-telephone"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                stroke="currentcolor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" />
                <circle cx="16" cy="21" r="4" />
              </svg>
              <br />
              WORK
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                id="i-settings"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                stroke="currentcolor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />
                <circle cx="16" cy="16" r="4" />
              </svg>
              <br />
              SETTINGS
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TabMenu;
