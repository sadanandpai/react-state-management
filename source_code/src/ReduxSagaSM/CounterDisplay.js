import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return <div className="count-value">{props.state}</div>;
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Counter);
