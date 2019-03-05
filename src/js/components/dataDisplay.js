import React from 'react';
import { connect } from "react-redux";
import { v4 } from 'uuid';

const mapStateToProps = state => {
  return { waveHeight: state.waveHeight};
};

const DataDisplay = ({waveHeight}) => (
    waveHeight.map(el => (
      <li key={v4()}>
        {el.waveHeight}
      </li>
    ))
  );

export default connect(mapStateToProps)(DataDisplay);
