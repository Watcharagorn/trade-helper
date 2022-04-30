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
  const positionSize = 0;
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: "auto" }}
          mr={{ xs: "auto", lg: "auto" }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
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
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Wallet's Balance"
                      InputLabelProps={{ shrink: true }}
                      type="number"
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
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    ~ 20 USD
                  </Grid>
                  <Grid item xs={4}>
                    <MKInput
                      variant="standard"
                      label="Entry Point"
                      InputLabelProps={{ shrink: true }}
                      type="number"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <c
                      variant="standard"
                      color="success"
                      label="TP*"
                      InputLabelProps={{ shrink: true }}
                      type="number"
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
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <div>
                        Position Size:
                        <b style={{ marginLeft: 5, marginRight: 10 }}>{positionSize}</b>
                        <CopyToClipboard text={positionSize}>
                          <MKButton
                            variant="gradient"
                            color={success ? "success" : "warning"}
                            size="small"
                            // sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
                            onClick={() => setSuccess(true)}
                          >
                            <MKBox
                              color="white"
                              mr={0.5}
                              className={success ? "fa fa-check" : "fas fa-copy"}
                            />
                            Copy!
                          </MKButton>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default PositionSizing;
