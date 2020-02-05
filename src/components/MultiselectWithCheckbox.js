import  React from "react";
import {
  Input,
  Select,
  Checkbox,
  MenuItem,
  InputLabel,
  ListItemText
} from "@material-ui/core";

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

const MultiselectWithCheckbox = props => {
  return (
    <React.Fragment>
    <InputLabel id={props.labelId}>{props.label}</InputLabel>
      <Select
        name={props.name}
        labelId={props.labelId}
        multiple
        value={props.arrayValue}
        onChange={props.onChange}
        input={<Input />}
        renderValue={selected => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {props.options.map(type => {
          return (
            <MenuItem key={type} value={type}>
              <Checkbox
                checked={props.arrayValue.indexOf(type) > -1}
              />
              <ListItemText primary={type} />
            </MenuItem>
          );
        })}
      </Select>
    </React.Fragment>
  );
};

export default MultiselectWithCheckbox;