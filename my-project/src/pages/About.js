import React from "react";
import "../css/About.css";
import mern from "../assets/mern.jpg";

export default function About() {
  return (
    <div className="container mt-3">
      <div className="card p-3 mb-3 main-body">
        <div className="banner bg-warning">
          <h1>Hello, Welcome to our About Page!</h1>
        </div>
        <div className="mt-3 d-flex mern">
          <img src={mern} className="mb-3 mr-3" alt="MERN" />
          <p>
            WordIt is a MERN Blogging App. MERN stands for MongoDB, Express,
            React, Node, after the four key technologies that make up the stack.
            <ul>
              <li>MongoDB - document database.</li>
              <li> Express(.js) - Node.js web framework.</li>
              <li>React(.js) - a client-side JavaScript framework.</li>
              <li>Node(.js) - the premier JavaScript web server.</li>
            </ul>
          </p>
        </div>
        <div className="mt-3">
          <h5>React.js Front End</h5>
          <p>
            The top tier of the MERN stack is React.js, the declarative
            JavaScript framework for creating dynamic client-side applications
            in HTML. React lets you build up complex interfaces through simple
            Components, connect them to data on your backend server, and render
            them as HTML.
          </p>
        </div>
        <div className="mt-3">
          <h5>Express.js and Node.js Server Tier</h5>
          <p>
            he next level down is the Express.js server-side framework, running
            inside a Node.js server. Express.js bills itself as a “fast,
            unopinionated, minimalist web framework for Node.js,” and that is
            indeed exactly what it is. Express.js has powerful models for URL
            routing (matching an incoming URL with a server function), and
            handling HTTP requests and responses.
          </p>
        </div>
        <div className="mt-3 mb-3">
          <h5>MongoDB Database Tier</h5>
          <p>
            MongoDB comes in: JSON documents created in your React.js front end
            can be sent to the Express.js server, where they can be processed
            and (assuming they’re valid) stored directly in MongoDB for later
            retrieval. Again, if you’re building in the cloud, you’ll want to
            look at Atlas. If you’re looking to set up your own MERN stack, read
            on!
          </p>
        </div>
      </div>
    </div>
  );
}
