import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    margin: 50,
    


  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 140,

  },
  title: {
    color: '#3f51b5',
    textTransform: 'uppercase'
  }
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
            <Grid item xs={6} sm={3} key={ind}>
              <Paper className={classes.paper}>
                <h3 className={classes.title}>{keys[0].replace(/_/g,' ')}</h3>
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
