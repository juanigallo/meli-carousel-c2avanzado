import React from "react";
import sites from "../../data/sites.json";
import { Link } from "react-router-dom";

class Sites extends React.Component {
  render() {
    return (
      <ul>
        {sites.map((site, key) => {
          return (
            <li>
              <Link to={`/carousel/${site.site}`}>{site.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Sites;
