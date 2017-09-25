import React from 'react';

import { 
         FlatButton,
         RadioButton } from 'material-ui';
// import { fullWhite } from 'material-ui/styles/colors';

// import InputFormContainer from '../containers/InputFormContainer';

// code for the "drawer" component that expands on right-hand side of the app
const positionMe = {
    position: 'absolute',
    zIndex: 1,
    right: 0
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.info = true;
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const { main, mainfunc } = this.props
    return (
      <div>
        {/* button on main page which shows drawer when clicked */}
        <FlatButton
        labe='HELLO'
          style={positionMe}
        />
      </div>
    );
  }
}