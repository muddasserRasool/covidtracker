import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,


  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: grey,
  },
}));

export default function FrontGrid() {
  const classes = useStyles();
  const [GlobalKey, setGlobalKey] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await fetch("https://api.thevirustracker.com/free-api?global=stats")
      let data = await response.json()
      console.log(data)
      delete data.results[0].source;
      console.log(data.results[0].total_cases)
      setGlobalKey(Object.entries(data.results[0]))
     
    }
    getData()

  },[])

  return (
    <div className={classes.root}>

    {console.log(GlobalKey)}
    

      <Grid container spacing={3}>
        {GlobalKey.map((keys, ind) => {
          return (
            <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper}>
                <h3>{keys[0]}</h3>
                <h3>{keys[1]}</h3>
              </Paper>
            </Grid>
          )
        })

        }
      </Grid>
    </div>
  );
}
