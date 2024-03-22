import React, { useReducer } from "react";
import "./GridLayout.css";
import Tooltip from "@mui/material/Tooltip";

const LikeSVG = ({ liked }) => {
  return liked ? (
    <Tooltip title="Remove from favioraites">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="like-svg"
      >
        <path
          d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </Tooltip>
  ) : (
    <Tooltip title="Add to favoraites">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="like-svg"
      >
        <path
          d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </Tooltip>
  );
};

const Tag = () => {
  return <code className="gc-tag">List</code>;
};

const TagList = () => {
  return (
    <div className="gc-tag-list">
      {Array(3)
        .fill()
        .map((item, idx) => {
          return <Tag item={item} key={idx} />;
        })}
    </div>
  );
};

const GridCell = ({ index }) => {
  const videoRef = React.useRef(index);
  return (
    <div className="grid-cell-wrap">
      <div className="gc-video">
        <video
          ref={videoRef}
          className="video-gc"
          autoPlay
          loop
          src={
            "https://imharsh.s3.eu-north-1.amazonaws.com/CubertoDesign_Compressed.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCmFwLXNvdXRoLTEiRzBFAiEAlBZXV4oj%2FXSlwA15%2Bo4AmxtOciqsaq6JrddxeZFNkesCIGWIgBE1lvSIOfa6N6QON4Qa045CuIRAyS4XVwpjGZrYKuQCCEoQARoMMTI0MjU3NDMxMTExIgwdO5DH8izdNgOR7S0qwQIQCqa0sCwJLN1UafeISjnjNtDNY%2FxPwS49vm8TZo2FYnkiFqwhbyOWNh3vxtzP7o%2BX6GkLgYNhQ3NMPVMnR%2BNvDKjvTUIpVkhLYNRxFJR6PbYKOdTUq3WGEjAo9JtjFj81uYO6dE4XMCZNoax246ySp2AQCAT9J8lRGf8P1jf%2BhAihifsqE72i4Nx99WjjzgCtY7uy8KgvZ3JW3fGRJAvN1fsG%2BoW4aFAcCqL%2BtBxWDZ9Jl0reUP2t2g7dXK99qo2bvvUpFr6ug%2BL5G7sVgW02FKnqakXu00enEjP0vLlna9aZ3ZzIHXaYLdBqoQ%2FO%2Br7Av1IV8pb4NOYVgkMZaB%2BACKDgRbHFFyF6JF21mwIu87cYDD8zvXqt3IjE1bgF5IpNRG251YpZJLq7AZFhGjYJXJeFvdsEMa9UQchsO%2F2MA9kwhef2rwY6swI%2BecKTrt%2BKkdtX7VqDeTbO4n3OcNOn5fe3NeB%2FGnDxYqjyuwWxjPw%2FXTvVfqJo5Hy3kwZ2I4FT%2FAHkF78bVw8JPNr%2BIaT1svz6VuSXrbhRz8VA7UcGDD44dpr62NLY31ObbgGfLFNEJjONcPWwhFZq4As9aVY4LHfKveshCxP9pJrvHm2JOfk7jhyOl7Jt8Lk2K%2FCn27O6Gwm%2BGtrT3ZdYUJ7Z60su%2FMGsxme%2FffKaG5AWstGeHIyhgkYfIvrjvBfjbbFlZ84gDMeQ9Iaxq4oFAItBPLkwipgGbOELuU3ATdZbLEKMzfX6x8xxDZ3MCZpHeQhESgFmxXhngsgYoO95dtWwdcKDjQzzIxRl1QRX7h6ebOcm0p1H488n94V8zAgQa7gW1EyxCgm971hhsCmVBq1X&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240322T224115Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARZ3SR5ZDSMLB3UUJ%2F20240322%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=0bf3bad98ade12d84743a12ec87624a1629a9d8b92b104b0ea899baaa0a42ff1"
          }
        />
      </div>
      <div className="gc-header-section">
        <h3 className="gc-title">Kemari Work</h3>
        <LikeSVG className="like-svg" liked={false} />
      </div>

      <p className="gc-description">A list of items with human interctions</p>
      <TagList />
    </div>
  );
};

const GridLayout = () => {
  return (
    <div className="grid-layout">
      {Array(10)
        .fill()
        .map((gc, index) => {
          return <GridCell key={index} />;
        })}
    </div>
  );
};

export default GridLayout;
