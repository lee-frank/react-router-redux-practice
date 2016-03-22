import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease, updateName } from '../actions/count'

const Home = ({ number, name, newName, increase, decrease, updateName }) => {
  return (
    <div>
      <label>Name: </label>
      <input type="text" name="name" value={name} onChange={(e) => updateName(e.target.value)}></input>

      <br /><br />
      Name State change: {name}
      <br /><br />
      Some state changes: {number}

      <br /><br />
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>

    </div>
  );
};

export default connect(
  state => ({
    number: state.count.number,
    name: state.count.name
  }),
  {
    increase,
    decrease,
    updateName
  })(Home)
