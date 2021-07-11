import React from "react";
import "./PopularProducts.css";
// import image from '../../../../images/sonyBravia-banner.png'
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import ps5Image from "../../../../Images/—Pngtree—cartoon simple book design_3600081.png";

const labels = {
  1.5: "Poor",

  2.5: "Ok",

  3.5: "Good",

  4.5: "Excellent",
};
const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
    margintop:".3rem"
  },
});
export default function PopularProducts() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  return (
    <div id="popularProducts">
      <div className="sectionHeader">
        <h2 className="sectionHead">Popular Books</h2>
        <p className="viewMore">VIEW MORE</p>
      </div>
      <div className="productsRow" id="scrollingContainer">
        <div className="productCard">
          <img src={ps5Image} className="popularProductImage"alt="imag"></img>
          <div class="form-check form-switch ppToggler">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
          <div className="popularProductDescription">
            <p className="popularProductBrand">Author Name</p>
            <div style={{ marginTop: "-1rem", marginRight: "-4px" }}>
              <p className="ppName">Book Name </p>

              <br/>
              <div>
                <div className={classes.root}>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {value !== null && (
                    <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productCard">
          <img src={ps5Image} className="popularProductImage" alt="imag"></img>
          <div class="form-check form-switch ppToggler">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
          <div className="popularProductDescription">
            <p className="popularProductBrand">Book name</p>
            <div style={{ marginTop: "-1rem", marginRight: "-4px" }}>
              <p className="ppName">Playstation 5 bundle</p>

              <br />
              <div className={classes.root}>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {value !== null && (
                  <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="productCard">
          <img src={ps5Image} className="popularProductImage"alt="imag"></img>
          <div class="form-check form-switch ppToggler">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
          <div className="popularProductDescription">
            <p className="popularProductBrand">Sony</p>
            <div style={{ marginTop: "-1rem", marginRight: "-4px" }}>
              <p className="ppName">Playstation 5 bundle</p>

              <br />
              <div className={classes.root}>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {value !== null && (
                  <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="productCard">
          <img src={ps5Image} className="popularProductImage"alt="imag"></img>
          <div class="form-check form-switch ppToggler">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
          <div className="popularProductDescription">
            <p className="popularProductBrand">Sony</p>
            <div style={{ marginTop: "-1rem", marginRight: "-4px" }}>
              <p className="ppName">Harrypotter</p>

              <br />
              <div className={classes.root}>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {value !== null && (
                  <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="productCard">
          <img src={ps5Image} className="popularProductImage"alt="imag"></img>
          <div class="form-check form-switch ppToggler">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
          <div className="popularProductDescription">
            <p className="popularProductBrand">Author name</p>
            <div style={{ marginTop: "-1rem", marginRight: "-4px" }}>
              <p className="ppName">harrypotter</p>

              <br />
              <div className={classes.root}>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {value !== null && (
                  <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="productCard">
          <img src={ps5Image} className="popularProductImage" alt="imag"></img>
          <div class="form-check form-switch ppToggler">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
          <div className="popularProductDescription">
            <p className="popularProductBrand">author name</p>
            <div style={{ marginTop: "-1rem", marginRight: "-4px" }}>
              <p className="ppName">harrypotter</p>

              <br />
              <div className={classes.root}>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {value !== null && (
                  <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="productCard">
          <img src={ps5Image} className="popularProductImage" alt="imag"></img>
          <div class="form-check form-switch ppToggler">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
          <div className="popularProductDescription">
            <p className="popularProductBrand">Author name</p>
            <div style={{ marginTop: "-1rem", marginRight: "-4px" }}>
              <p className="ppName">harrypotter</p>
             
              <br />
              <div className={classes.root}>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {value !== null && (
                  <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="productCard">
          <img src={ps5Image} className="popularProductImage" alt="imag"></img>
          <div class="form-check form-switch ppToggler">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
          <div className="popularProductDescription">
            <p className="popularProductBrand">Author name</p>
            <div style={{ marginTop: "-1rem", marginRight: "-4px" }}>
              <p className="ppName">harrypotter</p>
            
              <br />
              <div className={classes.root}>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {value !== null && (
                  <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
