import React from "react";
import "./error.css";

const error = () => {
  return (
    <div>
      <p>
        Error! This page does not currently exist. This may be a problem with
        the routing on the main page.
      </p>
      <p>
        Please open a{" "}
        <a
          href="https://github.com/nhcarrigan/react-test/issues/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Issue
        </a>{" "}
        with the steps that led you to this error so we can fix the problem.
      </p>
    </div>
  );
};

export default error;
