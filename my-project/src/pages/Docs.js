import React from "react";
import "../css/Docs.css";

export default function Docs() {
  return (
    <div className="container mt-3">
      <div className="card p-3 mb-3">
        <div className="banner bg-warning">
          <h1>Hello, Welcome to our Docs!</h1>
        </div>
        <div className="mt-3">
          <h3>Info :</h3>
          <ul className="list">
            <li>WordIt is a MERN Blogging website.</li>
            <li>
              This is a blogging website where users cant create, edit ,delete
              and comment on the post
            </li>
            <li>
              Users are required to login first inorder to create and comment on
              posts.
            </li>
            <li>
              Frontend is created using React and have used Bootstrap for
              styling the website.
            </li>
            <li>
              Users can see all the Article posted on the website but in onder
              to comment login is required.
            </li>
            <li>
              No two user with same email address can login to the website.
              Email address must be unique.
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h3>Technologies Used :</h3>
          <p>
            Some of the technologies used in the development of this web
            application are as follow:
          </p>
          <ul className="list">
            <li>React - A JavaScript library for building user interfaces.</li>
            <li>
              MongoDB - A runtime environment to help build fast server
              applications using JS.
            </li>
            <li>
              Node js - Node.js is an open-source, cross-platform, back-end
              JavaScript runtime environment that runs on the V8 engine and
              executes JavaScript code outside a web browser.
            </li>
            <li>
              Express js - A popular Node.js framework to build scalable
              server-side for web applications.
            </li>
            <li>
              Html - HTML is the standard markup language for Web pages. With
              HTML you can create your own Website.{" "}
            </li>
            <li>
              CSS - CSS is the language we use to style an HTML document. CSS
              describes how HTML elements should be displayed.
            </li>
            <li>
              Bootstrap - Bootstrap is a free and open-source CSS framework
              directed at responsive, mobile-first front-end web development
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h3>Libraries Used :</h3>
          <p>
            Some of the libraries used in the development of this web
            application are as follow:
          </p>
          <ul className="list">
            <li>
              axios - Axios is a popular, promise-based HTTP client that sports
              an easy-to-use API and can be used in both the browser and Node.
              js.
            </li>
            <li>
              cors - Cross-Origin Resource Sharing (CORS) is an HTTP-header
              based mechanism that allows a server to indicate any other origins
              (domain, scheme, or port) than its own from which a browser should
              permit loading of resources.
            </li>
            <li>
              react-router-doms - A tool that allows you to handle routes in a
              web app, using dynamic routing. Dynamic routing takes place as the
              app is rendering on your machine, unlike the old routing
              architecture where the routing is handled in a configuration
              outside of a running app.
            </li>
            <li>
              react-icons - Include popular icons in your React projects easily
              with react-icons, which utilizes ES6 imports that allows you to
              include only the icons that your project is using.
            </li>
            <li>
              Dotenv - Dotenv is a zero-dependency module that loads environment
              variables from a . env file into process. env . Storing
              configuration in the environment separate from code is based on
              The Twelve-Factor App methodology.
            </li>
            <li>
              mongoose - An ODM(Object Data Modelling)library for MongoDB and
              Node.js
            </li>
            <li>
              nodemon - nodemon is a tool that helps develop node.js based
              applications by automatically restarting the node application when
              file changes in the directory
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
