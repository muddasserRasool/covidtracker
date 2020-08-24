import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
 
  formControl: {
    marginLeft:50,
    marginTop: 20,
    marginBottom: 20,
    minWidth: 120,
  },
}));

export default function CountrySelect({CountryCode}) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  CountryCode[1](age)
  console.log(CountryCode)
  

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Global</em>
          </MenuItem>
          <MenuItem value={'PK'}>Pakistan</MenuItem>
          <MenuItem value={'SA'}>Saudi Arabia</MenuItem>
          <MenuItem value={'US'}>United States</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
