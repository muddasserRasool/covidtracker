import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import '../App.css';



export default function Chart({ CountryCode }) {
    const TimelineApi = "https://api.thevirustracker.com/free-api?countryTimeline=" + CountryCode;
    const [Labels, SetLabels] = useState([])
    const [CoronaCases, SetCoronaCases] = useState(0)



    useEffect(() => {
        console.log(TimelineApi)
        async function getData() {
            if (CountryCode !== '') {
                let response = await fetch(TimelineApi)
                let data = await response.json()
                delete data.countrytimelinedata;
                console.log(data)
                SetLabels(Object.keys(data.timelineitems[0]))
                SetCoronaCases(Object.values((data.timelineitems[0])).map(temp=>temp.new_daily_cases))

            //    let NewArray= CoronaCases.map((tempdata, ind) =>(
                    
            //             [tempdata[ind].new_daily_cases]
                    
            //    ))
            //     console.log(NewArray)
               
                
                // setGlobalKey(Object.entries(data.results[0]))
            }
        }
        getData();
    }, [TimelineApi])



    const data = {
        labels: Labels,
        datasets: [
            {
                label: 'Daily New Cases',
                backgroundColor: '#3f51b5',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: CoronaCases,
            }
        ]
    };

    return (
        <div className="chart" >
             
            {console.log(CoronaCases)}
            <h2 className="NewCases" >Daily New Cases:</h2>
            <hr />
            <Bar
                data={data}
                width={100}
                height={150}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
}