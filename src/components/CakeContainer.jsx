import React from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function CakeContainer(props) {
  console.log({ props });
  return (
    <div>
      <h2>Number of cakes: {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state, 22222);
  return {
    numberOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
