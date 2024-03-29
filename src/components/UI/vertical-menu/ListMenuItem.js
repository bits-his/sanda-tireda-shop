import React from "react";
import { useLocation, Link } from "react-router-dom";
import { primaryColor } from "variables";
import { routeHelper } from "views/app/routes/helpers";

function ListMenuItem(props) {
  const location = useLocation();
  const active = location.pathname.includes(props.route);
  return (
    <Link
      to={routeHelper(location, props.route)}
      className="list-group-item list-group-item-action py-2"
      style={
        active
          ? { backgroundColor: "#eee", borderLeft: `3px solid ${primaryColor}` }
          : null
      }
    >
      {props.children}
    </Link>
  );
}

export default ListMenuItem;
