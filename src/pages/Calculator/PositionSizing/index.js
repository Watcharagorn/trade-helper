/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState, useEffect } from "react";

// react-copy-to-clipboard components
import { CopyToClipboard } from "react-copy-to-clipboard";

// @mui material components
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function PositionSizing() {
  // eslint-disable-next-line
  const [success, setSuccess] = useState(false);
  const [walletBalance, setwalletBalance] = useState(0);
  const [riskPercent, setRiskPercent] = useState(2);
  const [riskAmount, setRiskAmount] = useState("");
  const [entryPrice, setEntryPrice] = useState([100]);
  const [tpPrice, setTpPrice] = useState(120);
  const [slPrice, setSlPrice] = useState(95);
  const [copyStatus, setCopyStatus] = useState([false]);
  const [orderPerAsset, setorderPerAsset] = useState(1);
  // const portBreakPercent = 1
  const focusAsset = 1;

  const calRiskAmount = () => {
    const roundRiskAmount = Math.round(walletBalance * (riskPercent / 100));
    setRiskAmount(roundRiskAmount);
  };

  const calPositionSize = (price) => {
    const loss = price - slPrice;
    const lossPerOrder = riskAmount / (focusAsset * orderPerAsset);
    let size = (price / loss) * lossPerOrder;
    size = Math.round(size);
    return size;
  };

  // useEffect(() => {
  //   let newCopyStatus = [...copyStatus];
  //   // eslint-disable-next-line
  //   newCopyStatus = copyStatus.map( x => false);
  //   setTimeout(() => setSuccess(newCopyStatus), 3000);
  // }, [success]);

  useEffect(() => {
    calRiskAmount();
  }, [walletBalance, riskPercent, entryPrice, slPrice, riskAmount]);

  const walletBalanceChangeHandler = (e) => {
    // eslint-disable-next-line
    const value = e.target.value;
    setwalletBalance(value);
  };

  const entryPriceChangeHandler = (e, index) => {
    // eslint-disable-next-line
    const value = e.target.value;
    const newEntryPrice = [...entryPrice];
    newEntryPrice[index] = parseInt(value, 10);
    setEntryPrice(newEntryPrice);
  };

  const tpPriceChangeHandler = (e) => {
    // eslint-disable-next-line
    const value = e.target.value;
    setTpPrice(value);
  };

  const slPriceChangeHandler = (e) => {
    // eslint-disable-next-line
    const value = e.target.value;
    setSlPrice(value);
  };

  const riskPercentChangeHandler = (e) => {
    // eslint-disable-next-line
    const value = e.target.value;
    setRiskPercent(value);
  };

  const addOrder = () => {
    const length = entryPrice.push(0);
    setEntryPrice(entryPrice);
    setorderPerAsset(length);
  };

  const removeOrder = (index) => {
    const newEntryPrice = [...entryPrice];
    newEntryPrice.splice(index, 1);
    setorderPerAsset(newEntryPrice.length);
    setEntryPrice(newEntryPrice);
  };

  const copySize = (index) => {
    const newCopyStatus = [...copyStatus];
    newCopyStatus[index] = true;
    setCopyStatus(newCopyStatus);
    setTimeout(() => {
      const newCopyStatus2 = [...copyStatus];
      newCopyStatus2.fill(false);
      newCopyStatus2[index] = false;
      setCopyStatus(newCopyStatus2);
      setSuccess(newCopyStatus2);
    }, 2000);
  };

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%" sx={{ zIndex: 100 }}>
        <DefaultNavbar routes={routes} />
      </MKBox>
      <Grid container spacing={3} alignItems="flex-start">
        <Grid
          item
          xs={12}
          md={5}
          xl={4}
          ml={{ xs: "auto", lg: "auto" }}
          mr={{ xs: "auto", lg: "unset" }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20 }}
            mb={{ xs: 1, sm: 2, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h5" color="white">
                Position Sizing Calculator
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKBox width="100%" component="form" method="post" autocomplete="off">
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Wallet's Balance"
                      InputLabelProps={{ shrink: true }}
                      type="number"
                      onChange={walletBalanceChangeHandler}
                      value={walletBalance}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <MKInput
                      type="number"
                      variant="standard"
                      label="Risk %"
                      placeholder="1 ~ 99"
                      InputLabelProps={{ shrink: true }}
                      onChange={riskPercentChangeHandler}
                      value={riskPercent}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    ~ {riskAmount} USD
                  </Grid>
                  <Grid item xs={4}>
                    <MKInput
                      variant="standard"
                      color="success"
                      label="TP*"
                      InputLabelProps={{ shrink: true }}
                      type="number"
                      onChange={tpPriceChangeHandler}
                      value={tpPrice}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <MKInput
                      variant="standard"
                      color="error"
                      label="SL**"
                      InputLabelProps={{ shrink: true }}
                      type="number"
                      onChange={slPriceChangeHandler}
                      value={slPrice}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          xl={4}
          ml={{ xs: "auto", lg: "unset" }}
          mr={{ xs: "auto", lg: "auto" }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            mt={{ xs: 1, sm: 2, md: 20 }}
            mb={{ xs: 1, sm: 2, md: 20 }}
            mx={3}
            p={3}
          >
            <Grid container item xs={12}>
              <Grid container item xs={12} spacing={1}>
                {entryPrice.map((value, index) => {
                  const positionSize = calPositionSize(value);
                  const elemKey = `sizeResult-${index}`;
                  return (
                    <Grid
                      container
                      item
                      className="sizeResultContainer"
                      key={elemKey}
                      xs={12}
                      spacing={1}
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Grid item xs={4}>
                        <MKInput
                          variant="standard"
                          label={`Entry Point #${index + 1}`}
                          InputLabelProps={{ shrink: true }}
                          type="number"
                          onChange={(e) => {
                            entryPriceChangeHandler(e, index);
                          }}
                          value={value}
                          fullWidth
                        />
                      </Grid>
                      <Grid container item xs={8} spacing={0.5}>
                        <Grid item>
                          <span>
                            <small>~ Size:</small>
                          </span>
                          <b style={{ marginLeft: 5, marginRight: 10 }}>{positionSize}</b>
                        </Grid>
                        <Grid item>
                          <Grid container spacing={0.5}>
                            <Grid item>
                              <CopyToClipboard text={positionSize}>
                                <MKButton
                                  variant="gradient"
                                  color={copyStatus[index] ? "success" : "warning"}
                                  size="small"
                                  onClick={() => copySize(index)}
                                >
                                  <MKBox
                                    color="white"
                                    className={copyStatus[index] ? "fa fa-check" : "fas fa-copy"}
                                  />
                                </MKButton>
                              </CopyToClipboard>
                            </Grid>
                            <Grid item>
                              <MKButton
                                variant="gradient"
                                color="error"
                                size="small"
                                onClick={() => removeOrder(index)}
                              >
                                <Icon>delete</Icon>
                              </MKButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
                <Grid item xs={12}>
                  <MKButton
                    size="small"
                    color="success"
                    onClick={() => addOrder(true)}
                    sx={{ my: 2 }}
                    circular
                  >
                    <Icon>add</Icon>&nbsp; New order
                  </MKButton>
                </Grid>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default PositionSizing;
