// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withTheme, withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import logo from './logo.svg';
import Typography from 'material-ui/Typography';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import { pure, compose } from 'recompose';

import { showDialog, hideDialog } from 'actions/app';

const mapStateToProps = state => ({
  isDialogOpen: state.app.isDialogOpen
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showDialog,
      hideDialog
    },
    dispatch
  );

const styles = theme => ({
  app: {
    textAlign: 'center'
  },
  logo: {
    animation: 'spin infinite 20s linear',
    height: '80px'
  },
  header: {
    height: '150px',
    padding: '20px'
  },
  intro: {
    fontSize: 'large'
  },
  button: {
    margin: '1em'
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
});

type Props = {
  classes: Object,
  isDialogOpen: boolean,
  showDialog: () => void,
  hideDialog: () => void
};

class App extends Component<Props> {
  static displayName = 'App';

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Dialog open={this.props.isDialogOpen} onClose={this.props.hideDialog}>
          <DialogTitle>Dialog!</DialogTitle>
        </Dialog>
        <div className={classes.header}>
          <img src={logo} className={classes.logo} alt="logo" />
          <Typography type="display2">Welcome to React</Typography>
        </div>
        <Button
          raised
          className={classes.button}
          color="primary"
          onTouchTap={() => this.props.showDialog()}
        >
          Click me!
        </Button>
        <Typography className={classes.intro}>
          If you can't tell how to get started from all the breadcrumbs, IDK
          what to tell you.
        </Typography>
      </div>
    );
  }
}

const enhance = compose(
  withWidth(),
  withStyles(styles),
  withTheme(),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  pure
);

export default enhance(App);
