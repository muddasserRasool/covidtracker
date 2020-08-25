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

export default function FrontGrid({ CountryCode }) {
  const classes = useStyles();
  const [GlobalKey, setGlobalKey] = useState([]);
  const CountryApi = "https://api.thevirustracker.com/free-api?countryTotal=" + CountryCode;



  useEffect(() => {
    console.log(CountryApi)
    async function getData() {
      let GlobalFetch = "https://api.thevirustracker.com/free-api?global=stats";
      if (CountryCode === '') {
        let response = await fetch(GlobalFetch)
        let data = await response.json()
        console.log(data)
        delete data.results[0].source;
        delete data.results[0].total_new_cases_today;
        delete data.results[0].total_new_deaths_today;
        delete data.results[0].total_serious_cases;
        delete data.results[0].total_active_cases;
        console.log(data.results[0].total_cases)
        setGlobalKey(Object.entries(data.results[0]))

      } else {
        let response = await fetch(CountryApi)
        let data = await response.json()
        delete data.countrydata[0].info;
        delete data.countrydata[0].total_danger_rank;
        console.log(data)
        setGlobalKey(Object.entries(data.countrydata[0]))
      }
    }
    getData();
  }, [CountryApi])


  return (
    <div className={classes.root}>

      {console.log(GlobalKey)}


      <Grid container spacing={3}>
        {GlobalKey.map((keys, ind) => {
          return (
            <Grid item xs={6} sm={3} key={ind}>
              <Paper elevation={3} className={classes.paper}>
                <h3 className={classes.title}>{keys[0].replace(/_/g, ' ')}</h3>
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
