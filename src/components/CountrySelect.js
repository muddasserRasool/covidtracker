import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../App.css';


const useStyles = makeStyles((theme) => ({

    formControl: {
        marginLeft: 50,
        marginTop: 20,
        marginBottom: 20,
        minWidth: 120,
    },
}));

export default function CountrySelect({ CountryCode }) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    CountryCode[1](age)
    console.log(CountryCode)


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <span className="CountryName">Select country:</span>
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
                    <MenuItem value={'AF'}>Afghanistan</MenuItem>
                    <MenuItem value={'AL'}> Albania</MenuItem>
                    <MenuItem value={'DZ'}> Algeria</MenuItem>
                    <MenuItem value={'AO'}> Angola</MenuItem>
                    <MenuItem value={'AR'}> Argentina</MenuItem>
                    <MenuItem value={'AM'}> Armenia</MenuItem>
                    <MenuItem value={'AU'}> Australia</MenuItem>
                    <MenuItem value={'AT'}> Austria</MenuItem>
                    <MenuItem value={'AZ'}> Azerbaijan</MenuItem>
                    <MenuItem value={'BS'}> Bahamas</MenuItem>
                    <MenuItem value={'BD'}> Bangladesh</MenuItem>
                    <MenuItem value={'BY'}> Belarus</MenuItem>
                    <MenuItem value={'BE'}> Belgium</MenuItem>
                    <MenuItem value={'BZ'}> Belize</MenuItem>
                    <MenuItem value={'BJ'}> Benin</MenuItem>
                    <MenuItem value={'BT'}> Bhutan</MenuItem>
                    <MenuItem value={'BO'}> Bolivia</MenuItem>
                    <MenuItem value={'BA'}> Bosnia and Herzegovina</MenuItem>
                    <MenuItem value={'BW'}> Botswana</MenuItem>
                    <MenuItem value={'BR'}> Brazil</MenuItem>
                    <MenuItem value={'BN'}> Brunei Darussalam</MenuItem>
                    <MenuItem value={'BG'}> Bulgaria</MenuItem>
                    <MenuItem value={'BF'}> Burkina Faso</MenuItem>
                    <MenuItem value={'BI'}> Burundi</MenuItem>
                    <MenuItem value={'KH'}> Cambodia</MenuItem>
                    <MenuItem value={'CM'}> Cameroon</MenuItem>
                    <MenuItem value={'CA'}> Canada</MenuItem>
                    <MenuItem value={'CF'}> Central African Republic</MenuItem>
                    <MenuItem value={'TD'}> Chad</MenuItem>
                    <MenuItem value={'CL'}> Chile</MenuItem>
                    <MenuItem value={'CN'}> China</MenuItem>
                    <MenuItem value={'CO'}> Colombia</MenuItem>
                    <MenuItem value={'CG'}> Congo</MenuItem>
                    <MenuItem value={'CR'}> Costa Rica</MenuItem>
                    <MenuItem value={'HR'}> Croatia</MenuItem>
                    <MenuItem value={'CU'}> Cuba</MenuItem>
                    <MenuItem value={'CY'}> Cyprus</MenuItem>
                    <MenuItem value={'CZ'}> Czechia</MenuItem>
                    <MenuItem value={'CD'}> Democratic Republic of Congo</MenuItem>
                    <MenuItem value={'DK'}> Denmark</MenuItem>
                    <MenuItem value={'DP'}> Diamond Princess</MenuItem>
                    <MenuItem value={'DJ'}> Djibouti</MenuItem>
                    <MenuItem value={'DO'}> Dominican Republic</MenuItem>
                    <MenuItem value={'CD'}> DR Congo</MenuItem>
                    <MenuItem value={'EC'}> Ecuador</MenuItem>
                    <MenuItem value={'EG'}> Egypt</MenuItem>
                    <MenuItem value={'SV'}> El Salvador</MenuItem>
                    <MenuItem value={'GQ'}> Equatorial Guinea</MenuItem>
                    <MenuItem value={'ER'}> Eritrea</MenuItem>
                    <MenuItem value={'EE'}> Estonia</MenuItem>
                    <MenuItem value={'ET'}> Ethiopia</MenuItem>
                    <MenuItem value={'FK'}> Falkland Islands</MenuItem>
                    <MenuItem value={'FJ'}> Fiji</MenuItem>
                    <MenuItem value={'FI'}> Finland</MenuItem>
                    <MenuItem value={'FR'}> France</MenuItem>
                    <MenuItem value={'GF'}> French Guiana</MenuItem>
                    <MenuItem value={'TF'}> French Southern Territories</MenuItem>
                    <MenuItem value={'GA'}> Gabon</MenuItem>
                    <MenuItem value={'GM'}> Gambia</MenuItem>
                    <MenuItem value={'GE'}> Georgia</MenuItem>
                    <MenuItem value={'DE'}> Germany</MenuItem>
                    <MenuItem value={'GH'}> Ghana</MenuItem>
                    <MenuItem value={'GR'}> Greece</MenuItem>
                    <MenuItem value={'GL'}> Greenland</MenuItem>
                    <MenuItem value={'GT'}> Guatemala</MenuItem>
                    <MenuItem value={'GN'}> Guinea</MenuItem>
                    <MenuItem value={'GW'}> Guinea-Bissau</MenuItem>
                    <MenuItem value={'GY'}> Guyana</MenuItem>
                    <MenuItem value={'HT'}> Haiti</MenuItem>
                    <MenuItem value={'HN'}> Honduras</MenuItem>
                    <MenuItem value={'HK'}> Hong Kong</MenuItem>
                    <MenuItem value={'HU'}> Hungary</MenuItem>
                    <MenuItem value={'IS'}> Iceland</MenuItem>
                    <MenuItem value={'IN'}> India</MenuItem>
                    <MenuItem value={'ID'}> Indonesia</MenuItem>
                    <MenuItem value={'IR'}> Iran</MenuItem>
                    <MenuItem value={'IQ'}> Iraq</MenuItem>
                    <MenuItem value={'IE'}> Ireland</MenuItem>
                    <MenuItem value={'IL'}> Israel</MenuItem>
                    <MenuItem value={'IT'}> Italy</MenuItem>
                    <MenuItem value={'CI'}> Ivory Coast</MenuItem>
                    <MenuItem value={'JM'}> Jamaica</MenuItem>
                    <MenuItem value={'JP'}> Japan</MenuItem>
                    <MenuItem value={'JO'}> Jordan</MenuItem>
                    <MenuItem value={'KZ'}> Kazakhstan</MenuItem>
                    <MenuItem value={'KE'}> Kenya</MenuItem>
                    <MenuItem value={'KP'}> Korea</MenuItem>
                    <MenuItem value={'XK'}> Kosovo</MenuItem>
                    <MenuItem value={'KW'}> Kuwait</MenuItem>
                    <MenuItem value={'KG'}> Kyrgyzstan</MenuItem>
                    <MenuItem value={'LA'}> Lao</MenuItem>
                    <MenuItem value={'LV'}> Latvia</MenuItem>
                    <MenuItem value={'LB'}> Lebanon</MenuItem>
                    <MenuItem value={'LS'}> Lesotho</MenuItem>
                    <MenuItem value={'LR'}> Liberia</MenuItem>
                    <MenuItem value={'LY'}> Libya</MenuItem>
                    <MenuItem value={'LT'}> Lithuania</MenuItem>
                    <MenuItem value={'LU'}> Luxembourg</MenuItem>
                    <MenuItem value={'MK'}> Macedonia</MenuItem>
                    <MenuItem value={'MG'}> Madagascar</MenuItem>
                    <MenuItem value={'MW'}> Malawi</MenuItem>
                    <MenuItem value={'MY'}> Malaysia</MenuItem>
                    <MenuItem value={'ML'}> Mali</MenuItem>
                    <MenuItem value={'MR'}> Mauritania</MenuItem>
                    <MenuItem value={'MX'}> Mexico</MenuItem>
                    <MenuItem value={'MD'}> Moldova</MenuItem>
                    <MenuItem value={'MN'}> Mongolia</MenuItem>
                    <MenuItem value={'ME'}> Montenegro</MenuItem>
                    <MenuItem value={'MA'}> Morocco</MenuItem>
                    <MenuItem value={'MZ'}> Mozambique</MenuItem>
                    <MenuItem value={'MM'}> Myanmar</MenuItem>
                    <MenuItem value={'NA'}> Namibia</MenuItem>
                    <MenuItem value={'NP'}> Nepal</MenuItem>
                    <MenuItem value={'NL'}> Netherlands</MenuItem>
                    <MenuItem value={'NC'}> New Caledonia</MenuItem>
                    <MenuItem value={'NZ'}> New Zealand</MenuItem>
                    <MenuItem value={'NI'}> Nicaragua</MenuItem>
                    <MenuItem value={'NE'}> Niger</MenuItem>
                    <MenuItem value={'NG'}> Nigeria</MenuItem>
                    <MenuItem value={'KP'}> North Korea</MenuItem>
                    <MenuItem value={'NO'}> Norway</MenuItem>
                    <MenuItem value={'OM'}> Oman</MenuItem>
                    <MenuItem value={'PK'}> Pakistan</MenuItem>
                    <MenuItem value={'PS'}> Palestine</MenuItem>
                    <MenuItem value={'PA'}> Panama</MenuItem>
                    <MenuItem value={'PG'}> Papua New Guinea</MenuItem>
                    <MenuItem value={'PY'}> Paraguay</MenuItem>
                    <MenuItem value={'PE'}> Peru</MenuItem>
                    <MenuItem value={'PH'}> Philippines</MenuItem>
                    <MenuItem value={'PL'}> Poland</MenuItem>
                    <MenuItem value={'PT'}> Portugal</MenuItem>
                    <MenuItem value={'PR'}> Puerto Rico</MenuItem>
                    <MenuItem value={'QA'}> Qatar</MenuItem>
                    <MenuItem value={'XK'}> Republic of Kosovo</MenuItem>
                    <MenuItem value={'RO'}> Romania</MenuItem>
                    <MenuItem value={'RU'}> Russia</MenuItem>
                    <MenuItem value={'RW'}> Rwanda</MenuItem>
                    <MenuItem value={'SA'}> Saudi Arabia</MenuItem>
                    <MenuItem value={'SN'}> Senegal</MenuItem>
                    <MenuItem value={'RS'}> Serbia</MenuItem>
                    <MenuItem value={'SL'}> Sierra Leone</MenuItem>
                    <MenuItem value={'SG'}> Singapore</MenuItem>
                    <MenuItem value={'SK'}> Slovakia</MenuItem>
                    <MenuItem value={'SI'}> Slovenia</MenuItem>
                    <MenuItem value={'SB'}> Solomon Islands</MenuItem>
                    <MenuItem value={'SO'}> Somalia</MenuItem>
                    <MenuItem value={'ZA'}> South Africa</MenuItem>
                    <MenuItem value={'KR'}> South Korea</MenuItem>
                    <MenuItem value={'SS'}> South Sudan</MenuItem>
                    <MenuItem value={'ES'}> Spain</MenuItem>
                    <MenuItem value={'LK'}> Sri Lanka</MenuItem>
                    <MenuItem value={'SD'}> Sudan</MenuItem>
                    <MenuItem value={'SR'}> Suriname</MenuItem>
                    <MenuItem value={'SJ'}> Svalbard and Jan Mayen</MenuItem>
                    <MenuItem value={'SZ'}> Swaziland</MenuItem>
                    <MenuItem value={'SE'}> Sweden</MenuItem>
                    <MenuItem value={'CH'}> Switzerland</MenuItem>
                    <MenuItem value={'SY'}> Syrian Arab Republic</MenuItem>
                    <MenuItem value={'TW'}> Taiwan</MenuItem>
                    <MenuItem value={'TJ'}> Tajikistan</MenuItem>
                    <MenuItem value={'TZ'}> Tanzania</MenuItem>
                    <MenuItem value={'TH'}> Thailand</MenuItem>
                    <MenuItem value={'TL'}> Timor-Leste</MenuItem>
                    <MenuItem value={'TG'}> Togo</MenuItem>
                    <MenuItem value={'TT'}> Trinidad and Tobago</MenuItem>
                    <MenuItem value={'TN'}> Tunisia</MenuItem>
                    <MenuItem value={'TR'}> Turkey</MenuItem>
                    <MenuItem value={'TM'}> Turkmenistan</MenuItem>
                    <MenuItem value={'AE'}> UAE</MenuItem>
                    <MenuItem value={'UG'}> Uganda</MenuItem>
                    <MenuItem value={'UA'}> Ukraine</MenuItem>
                    <MenuItem value={'GB'}> United Kingdom</MenuItem>
                    <MenuItem value={'UY'}> Uruguay</MenuItem>
                    <MenuItem value={'US'}> USA</MenuItem>
                    <MenuItem value={'UZ'}> Uzbekistan</MenuItem>
                    <MenuItem value={'VU'}> Vanuatu</MenuItem>
                    <MenuItem value={'VE'}> Venezuela</MenuItem>
                    <MenuItem value={'VN'}> Vietnam</MenuItem>
                    <MenuItem value={'EH'}> Western Sahara</MenuItem>
                    <MenuItem value={'YE'}> Yemen</MenuItem>
                    <MenuItem value={'ZM'}> Zambia</MenuItem>
                    <MenuItem value={'ZW'}> Zimbabwe</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
