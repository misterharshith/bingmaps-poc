import React from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  TextField,
  Input,
  Select,
  Checkbox,
  Button,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  ListItemText,
  Switch,
  Grid,
  Divider
} from "@material-ui/core";
import MultiselectWithCheckbox from './MultiselectWithCheckbox'

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    color: "#fff"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  flexWrap: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  initialCol:{
    flexBasis:'95%'
  },
  textField: {
    flexBasis: "45%"
  },
  mainColor: {
    backgroundColor: "#009688"
  },
  checkboxLabel: {
    fontSize: "13px"
  },
  expandIcon: {
    color: "#fff"
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const hazardousMaterials = [
  "Combustable",
  "Corrosive",
  "Explosive",
  "Flammable",
  "FlammableSolid",
  "Gas",
  "GoodsHarmfulToWater",
  "Organic",
  "Other",
  "Poison",
  "PoisonousInhalation",
  "Radioactive"
];

const hazardousPermits = [
  "AllAppropriateForLoad",
  "Combustable",
  "Corrosive",
  "Explosive",
  "Flammable",
  "FlammableSolid",
  "Gas",
  "Organic",
  "Poison",
  "PoisonousInhalation",
  "Radioactive"
];

const avoid = [
  'highways',
  'tolls',
  'minimizeHighways',
  'minimizeTolls',
  'borderCrossing'
]

function FilterHead(props) {
  const { classes, stateValues } = props;
  const {
    vehicleHazardousMaterialsArray,
    vehicleHazardousPermitsArray,
    routeMode,
    avoidArray
  } = stateValues;

  console.log(props.avoidArray);
  

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.mainColor}
        >
          <div className={classes.column}>
            <Typography variant="h2" className={classes.heading}>
              Search Filter
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            <div className={classes.flexWrap}>
              <TextField
                name="originLocation"
                id="originLocation"
                label="Origin Location"
                className={clsx(classes.margin, classes.initialCol)}
                onChange={props.handleChange}
              />
              <TextField
                name="destinationLocation"
                id="destinationLocation"
                label="Destination Location"
                className={clsx(classes.margin, classes.initialCol)}
                onChange={props.handleChange}
              />

              {/* <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel id="route-mode">Dimension Unit</InputLabel>
                <Select
                  name="dimensionUnit"
                  labelId="dimension-unit"
                  id="dimension-unit"
                  // value={age}
                  onChange={props.handleChange}
                >
                  <MenuItem value="m">Meter</MenuItem>
                  <MenuItem value="ft">Foot</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel id="route-mode">Weight Unit</InputLabel>
                <Select
                  name="weightUnit"
                  labelId="weight-unit"
                  id="weight-unit"
                  // value={age}
                  onChange={props.handleChange}
                >
                  <MenuItem value="kg">Kilogram</MenuItem>
                  <MenuItem value="lb">Pound </MenuItem>
                </Select>
              </FormControl> */}

              {/* <FormControl className={clsx(classes.margin, classes.textField)}>
                <FormControlLabel
                  className={classes.checkboxLabel}
                  control={
                    <Checkbox
                      name="showPreviousRoute"
                      onChange={props.handleCheckboxChange}
                      value="showPreviousRoute"
                      color="primary"
                      className={classes.checkboxLabel}
                    />
                  }
                  label="Show Previous Route"
                />
              </FormControl> */}

              {/* <FormControl className={clsx(classes.margin, classes.textField)}>
                <Typography component="div">
                  <Grid
                    component="label"
                    container
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>Truck</Grid>
                    <Grid item>
                      <Switch
                        name="routeMode"
                        checked={routeMode}
                        onChange={props.handleRouteChange}
                        value="checkedB"
                        color="primary"
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    </Grid>
                    <Grid item>Driving</Grid>
                  </Grid>
                </Typography>
              </FormControl> */}
            </div>
          </div>

          <div className={clsx(classes.column, classes.helper)}>
            <div className={classes.flexWrap}>
              <TextField
                name="vehicleHeight"
                id="vehicleHeight"
                label="Height"
                className={clsx(
                  classes.margin,
                  classes.textField,
                  classes.textInput
                )}
                onChange={props.handleChange}
              />
               <TextField
                name="vehicleTrailers"
                id="vehicleTrailers"
                label="Trailers"
                className={clsx(classes.margin, classes.textField)}
                onChange={props.handleChange}
              />
              <TextField
                name="vehicleWidth"
                id="vehicleWidth"
                label="Width"
                className={clsx(classes.margin, classes.textField)}
                onChange={props.handleChange}
              />
             
              <TextField
                name="vehicleWeight"
                id="vehicleWeight"
                label="Weight"
                className={clsx(classes.margin, classes.textField)}
                onChange={props.handleChange}
              />
               <TextField
                name="vehicleLength"
                id="vehicleLength"
                label="Length"
                className={clsx(classes.margin, classes.textField)}
                onChange={props.handleChange}
              />
              <TextField
                name="vehicleAxles"
                id="vehicleAxles"
                label="Axles"
                className={clsx(classes.margin, classes.textField)}
                onChange={props.handleChange}
              />
            </div>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <div className={classes.flexWrap}>
             
              <TextField
                name="vehicleMaxGradient"
                id="vehicleMaxGradient"
                label="Max Gradient"
                className={clsx(classes.margin, classes.textField)}
                onChange={props.handleChange}
              />
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <MultiselectWithCheckbox 
                  label='Hazardous Materials'
                  name="vehicleHazardousMaterialsArray"
                  labelId='hazardous-materials'
                  arrayValue={vehicleHazardousMaterialsArray}
                  options={hazardousMaterials}
                  onChange={props.handleMaterialChange}
                />
              </FormControl>

              <FormControl className={clsx(classes.margin, classes.textField)}>
                <MultiselectWithCheckbox 
                  label='Hazardous Permits'
                  name="vehicleHazardousPermitsArray"
                  labelId='hazardous-permits'
                  arrayValue={vehicleHazardousPermitsArray}
                  options={hazardousPermits}
                  onChange={props.handlePermitChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <MultiselectWithCheckbox 
                  label='Avoid'
                  name="avoidArray"
                  labelId='avoid'
                  arrayValue={avoidArray}
                  options={avoid}
                  onChange={props.handleAvoidChange}
                />
              </FormControl>
              
              <TextField
                name="vehicleMinTurnRadius"
                id="vehicleMinTurnRadius"
                label="Min Turn Radius"
                className={clsx(classes.margin, classes.textField)}
                onChange={props.handleChange}
              />
            </div>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  name="vehicleSemi"
                  onChange={props.handleCheckboxChange}
                  value="vehicleSemi"
                  color="primary"
                />
              }
              label="Semi"
            />

            <FormControlLabel
              className={classes.checkboxLabel}
              control={
                <Checkbox
                  name="vehicleAvoidCrossWind"
                  onChange={props.handleCheckboxChange}
                  value="vehicleAvoidCrossWind"
                  color="primary"
                  className={classes.checkboxLabel}
                />
              }
              label="Avoid Cross Wind"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="vehicleAvoidGroundingRisk"
                  onChange={props.handleCheckboxChange}
                  value="vehicleAvoidCrossWind"
                  color="primary"
                />
              }
              label="Avoid Grounding Risk"
            />
            <FormControl style={{margin:'0 20px 0 20px'}}>
              <Typography component="div">
                <Grid
                  component="label"
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>Truck</Grid>
                  <Grid item>
                    <Switch
                      name="routeMode"
                      checked={routeMode}
                      onChange={props.handleRouteChange}
                      value="checkedB"
                      color="primary"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </Grid>
                  <Grid item>Driving</Grid>
                </Grid>
              </Typography>
            </FormControl>
          </FormGroup>

          <Button
            onClick={props.handleFilterSubmit}
            // size="small"
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(FilterHead);
