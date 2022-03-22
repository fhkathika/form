import React from 'react'
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';
import './Form.css'
import Information from '../Information/Information';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [datevalue, setDatevalue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (newValue) => {
        setDatevalue(newValue);
    };
    const onSubmit = data => {
      
        addInfo(data.id)
        addInfo(data.date)
        addInfo(data.Modèle)
        console.log(data)};
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div className='general_form'>
       
  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="General Form" {...a11yProps(0)} />
    <Tab label="Information" {...a11yProps(1)} />
    <Tab label="Discussion" {...a11yProps(2)} />
    <Tab label="Collabarators" {...a11yProps(3)} />
  </Tabs>

<TabPanel value={value} index={0}>
   <form  onSubmit={handleSubmit(onSubmit)}>
       <h1>General Information</h1> 
      <input className='general_form_input' type="number"  {...register("id", { required: true })} placeholder='id'/>
  
      <select className='general_form_input' {...register("Statut", { required: true })} placeholder='Statut' >
      <option value="En Attente d’approbation...1">En Attente d’approbation...1</option>
        <option value="En Attente d’approbation...2">En Attente d’approbation...2</option>
        <option value="En Attente d’approbation...3">En Attente d’approbation...3</option>
      </select>
      <input className='general_form_input' {...register("Modèle", { required: true })} placeholder='Modèle' />
      <input className='general_form_input' {...register("Dossier", { required: true })} placeholder='Dossier' />
     
      {errors.id && <span className='error'>Id field is required</span>}
      {errors.Statut && <span className='error'>Statut field is required</span>}
      {errors.Dossier && <span className='error'>Dossier field is required</span>}
      
      <h1>Important Dates</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}  >
      <Stack spacing={3}>
    
        <DateTimePicker
        {...register("date")}
          label="Date&Time picker"
          value={datevalue}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
    
    <input className='submit_btn' type="submit"  />
    </form> 
</TabPanel>
<TabPanel value={value} index={1}>
Information
<Information></Information>
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel>
       
    </div>
  )
}

const getInfo=()=>{
   const info=localStorage.getItem('info') 
   let infoObj;
   if(info){
    infoObj=JSON.parse(info)
   }
   else{
    infoObj={}
   }
   return infoObj
}

const addInfo=(id,date,Modèle)=>{
    const information=getInfo()
    information[id]=1
    information[date]=1
    information[Modèle]=1
  const infoStringified=JSON.stringify(information)
  localStorage.setItem('info',infoStringified)
}
const displayInfo=()=>{
    const info=getInfo();
    for(const detail in info ){
        <Information detail={detail}></Information>
    }
}
displayInfo()