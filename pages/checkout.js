import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import uuid from "uuid";

import ShopBanner from "../components/helpers/utils/ShopBanner";
import {
  placeOrder,
  errorMessagesTemplate,
} from "../components/helpers/checkout/CheckoutActions";
import Loading from "../components/helpers/utils/Loading";
// import Error from "../components/helpers/utils/Error";
import Message from "../components/helpers/utils/Message";

var errorMessages = { ...errorMessagesTemplate };

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const Checkout = ({ checkout, placeOrder }) => {
  const classes = useStyles();
  const { citiesStates, expMonths, expYears, checkoutData } = checkout;
  const [userData, setUserData] = useState(checkoutData);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);

  const [triggerError, setTriggerError] = useState(false);
  const excludeFromValidation = ["specialInstructions"];

  const validateData = () => {
    errorMessages = { ...errorMessagesTemplate };

    Object.entries(userData).filter((entry) => {
      if (!excludeFromValidation.includes(entry[0])) {
        console.log("entry", entry);
        if (!isLength(entry[1], { min: 1 })) {
          errorMessages[entry[0]].error = true;
          errorMessages[entry[0]].errorMsg = `${entry[0]} is required`;
        } else {
          errorMessages[entry[0]].error = false;
          errorMessages[entry[0]].errorMsg = "";
        }

        if (entry[0] === "email") {
          if (!isEmail(entry[1])) {
            errorMessages[entry[0]].error = true;
            errorMessages[entry[0]].errorMsg =
              "Please enter a legitimate email";
          } else {
            errorMessages[entry[0]].error = false;
            errorMessages[entry[0]].errorMsg = "";
          }
        }

        if (entry[0] === "cw") {
          if (!isLength(entry[1], { min: 3, max: 3 })) {
            errorMessages[entry[0]].error = true;
            errorMessages[
              entry[0]
            ].errorMsg = `${entry[0]} must be 3 characters long`;
          } else {
            errorMessages[entry[0]].error = false;
            errorMessages[entry[0]].errorMsg = "";
          }
        }
      }
    });

    setTriggerError(!triggerError);
    isError(errorMessages);
  };

  const isError = (errorMessages) => {
    const errorobj = Object.entries(errorMessages).find(
      (entry) => errorMessages[entry[0]].error === true
    );

    if (errorobj === undefined) {
      return false;
    } else {
      setMessage("Please enter all required information!");
      return true;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name, value", name, value);
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("userData", userData);
    setOpenMessage(false);
    setMessage("");
    validateData();

    if (!isError(errorMessages)) {
      try {
        setLoading(true);
        const message = await placeOrder(userData);
        setSuccess(message);
        console.log("message", message);
        setMessage(message);
        setOpenMessage(true);
      } catch (error) {
        console.log("error", error);
        console.log("error.message", error.message);
        setMessage(error.message);
        setOpenMessage(true);
      } finally {
        setLoading(false);
      }
    } else {
      setOpenMessage(true);
    }
  };

  const resetMessage = () => {
    setOpenMessage(false);
    setMessage("");
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <Container>
        <ShopBanner />
      </Container>
      <Container maxWidth="sm" className={classes.container1}>
        <Message
          message={message}
          openMessage={openMessage}
          resetMessage={resetMessage}
        />

        <form noValidate>
          <Typography variant="h5" className={classes.header}>
            DELIVERY
          </Typography>
          <Grid container className={classes.formGrid}>
            <Grid item className={classes.mt2}>
              <TextField
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                label="First Name"
                size="medium"
                error={errorMessages.firstName.error}
                helpertext={errorMessages.firstName.errorMsg}
              />
            </Grid>
            <Grid item className={classes.mt2}>
              <TextField
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                label="Last Name"
                error={errorMessages.lastName.error}
                helpertext={errorMessages.lastName.errorMsg}
              />
              {JSON.stringify(errorMessages.lastName.errorMsg)}
            </Grid>
          </Grid>
          <Grid container className={classes.formGrid}>
            <Grid item className={classes.mt2}>
              <TextField
                name="email"
                value={userData.email}
                onChange={handleChange}
                label="Email"
                error={errorMessages.email.error}
                helpertext={errorMessages.email.errorMsg}
              />
            </Grid>
            <Grid item className={classes.mt2}>
              <TextField
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                label="Phone"
                error={errorMessages.phone.error}
                helpertext={errorMessages.phone.errorMsg}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.formGrid}>
            <Grid item className={(classes.w100, classes.mt2)}>
              <TextField
                name="shippingAddress"
                value={userData.shippingAddress}
                onChange={handleChange}
                fullWidth
                label="Shipping Address"
                error={errorMessages.shippingAddress.error}
                helpertext={errorMessages.shippingAddress.errorMsg}
                // className={classes.w100}
              />
            </Grid>
            <Grid item className={classes.mt2}>
              <TextField
                id="city"
                select
                label="City"
                name="cityState"
                value={userData.cityState}
                onChange={handleChange}
                error={errorMessages.cityState.error}
                helpertext={errorMessages.cityState.errorMsg}
                className={classes.select}
              >
                {citiesStates.map((cityState) => (
                  <MenuItem key={uuid()} value={cityState.value}>
                    {cityState.text}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid container className={classes.formGrid}>
            <Grid item className={classes.mt2}>
              <TextField
                name="zipCode"
                value={userData.zipCode}
                onChange={handleChange}
                label="Zip Code"
                error={errorMessages.zipCode.error}
                helpertext={errorMessages.zipCode.errorMsg}
              />
            </Grid>
            <Grid item className={(classes.w100, classes.mt2)}>
              <TextField
                id="date"
                name="deliveryDate"
                label="Delivery Date"
                type="date"
                value={userData.deliveryDate}
                onChange={handleChange}
                className={(classes.textField, classes.date)}
                InputLabelProps={{
                  shrink: true,
                }}
                error={errorMessages.deliveryDate.error}
                helpertext={errorMessages.deliveryDate.errorMsg}
              />
            </Grid>
          </Grid>

          <TextField
            name="specialInstructions"
            value={userData.specialInstructions}
            onChange={handleChange}
            label="Special Instructions"
            multiline
            rows={3}
            fullWidth
            className={classes.mt2}
          />
          <Typography variant="h5" className={classes.payment}>
            PAYMENT
          </Typography>
          {/* <Grid container className={(classes.formGrid, classes.mt2)}> */}
          <FormControl component="fieldset" className={classes.mt2}>
            <RadioGroup
              aria-label="paymentType"
              name="paymentType"
              value={userData.paymentType}
              onChange={handleChange}
            >
              <FormControlLabel
                value="credit card"
                control={<Radio />}
                label="Credit Card"
              />
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="PayPal"
              />
            </RadioGroup>
          </FormControl>
          {/* </Grid> */}

          <Grid container className={classes.formGrid}>
            <Grid item className={classes.mt2}>
              <TextField
                name="cardNumber"
                value={userData.cardNumber}
                onChange={handleChange}
                label="Card Number"
                size="medium"
                error={errorMessages.cardNumber.error}
                helpertext={errorMessages.cardNumber.errorMsg}
              />
            </Grid>
          </Grid>

          <Grid container className={(classes.formGrid, classes.cardExp)}>
            <Grid item>
              <TextField
                id="expMonth"
                select
                label="Exp. Month"
                name="expMonth"
                value={userData.expMonth}
                onChange={handleChange}
                error={errorMessages.expMonth.error}
                helpertext={errorMessages.expMonth.errorMsg}
                className={classes.select}
              >
                {expMonths.map((expMonth) => (
                  <MenuItem key={uuid()} value={expMonth.value}>
                    {expMonth.text}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item className={(classes.mt2, classes.select)}>
              <TextField
                id="expYear"
                select
                label="Exp. Year"
                name="expYear"
                value={userData.expYear}
                onChange={handleChange}
                error={errorMessages.expYear.error}
                helpertext={errorMessages.expYear.errorMsg}
                className={classes.select}
              >
                {expYears.map((expYear) => (
                  <MenuItem key={uuid()} value={expYear.value}>
                    {expYear.text}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <TextField
              name="cw"
              value={userData.cw}
              onChange={handleChange}
              label="CW"
              size="medium"
              error={errorMessages.cw.error}
              helpertext={errorMessages.cw.errorMsg}
            />
          </Grid>
          <Grid item className={classes.mt2}>
            <Grid item className={classes.mt2}>
              <Button
                variant="contained"
                className={classes.placeOrder}
                onClick={handleSubmit}
              >
                PLACE ORDER
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container1: {
    marginTop: "3rem",
  },
  header: {
    borderBottom: "3px solid #ff5555",
  },
  formGrid: {
    display: "flex",
    justifyContent: "space-between",
  },
  w100: {
    width: "100%",
  },
  specialInstructions: {
    width: "100%",
    marginTop: "1.5rem",
  },
  cityState: {
    width: "10rem",
  },
  mt2: {
    marginTop: "1.5rem",
  },
  payment: {
    marginTop: "3rem",
    borderBottom: "3px solid #ff5555",
  },
  placeOrder: {
    background: "#303030 !important",
    color: "white !important",
  },
  cardExp: {
    justifyContent: "space-between",
    marginTop: "3rem",
  },
  select: {
    minWidth: "12rem",
  },
  date: {
    minWidth: "12rem",
  },
}));

const mapStateToProps = (state) => ({
  // checkout: state.checkout.checkout,
  checkout: state.checkout,
});

export default connect(mapStateToProps, { placeOrder })(Checkout);
