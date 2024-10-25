import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/index";

const icecreamContainer = (props) => {
  return (
    <div>
      <h2>Number of icecreams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.icecream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(icecreamContainer);
