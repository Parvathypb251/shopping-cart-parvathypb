import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './Dialog.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Slide } from '@material-ui/core';
import { images } from 'helpers/groupImage';
import { makeStyles } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
});
const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    right: '26rem',
    top: '6.6rem',
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, icon, disableClose = false, ...other } = props;
  return (
    <div
      id="dialog_title_div"
      className={'width-100-perc height-100-perc display-flex align-item-center jstf-ctnt-center'}
    >
      {children}
    </div>
  );
});
const DialogBox = (props) => {
  const {
    open,
    handleClose = null,
    title = '',
    dialogId,
    customDialogAction = null,
    customStyle = '',
    showDivider = true,
    showClose = true,
    icon = null,
    diagStyle = { borderRadius: 0 },
    disableClose = false,
  } = props;
  const classes = useStyles();
  return (
    <Dialog
      onBackdropClick="false"
      open={open}
      onClose={handleClose}
      scroll={'paper'}
      maxWidth="false"
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby={dialogId}
      aria-describedby={dialogId}
      PaperProps={{
        style: diagStyle,
      }}
      classes={{
        paper: classes.dialog,
      }}
    >
      <DialogTitle
        id={dialogId}
        style={{ width: '100%' }}
        onClose={handleClose}
        showClose={showClose}
        icon={icon}
        disableClose={disableClose}
      >
        <div className="cart-count-div">
          <span className="myCart-label">MyCart</span>
          <span className="myCart-count">{`(${1} item)`}</span>
        </div>{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="close-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </DialogTitle>
      <div id="dialoge_body_div" className={`body_style ${customStyle}`}>
        <DialogContent dividers={showDivider} className="pad-0" id={dialogId}>
          {props.children}
        </DialogContent>
      </div>
      {customDialogAction && (
        <div id="dialog_action_div" className="display-flex align-item-center jstf-ctnt-center">
          {customDialogAction}
        </div>
      )}
    </Dialog>
  );
};

export default DialogBox;
