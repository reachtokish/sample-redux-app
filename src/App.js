import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './actions/counter';

function AppComponent(props) {
  return (
    <div>
      <button onClick={props.onIncrementClick}>+</button>
      <button onClick={props.onDecrementClick}>-</button>
      <br />
      {props.counter.value}
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementClick() {
    dispatch(incrementCounter());
  },
  onDecrementClick() {
    dispatch(decrementCounter());
  }
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
