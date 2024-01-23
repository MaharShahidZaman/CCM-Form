import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Modal, Paper, Radio, RadioGroup, Select, TextField, TextareaAutosize, Typography, } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WcIcon from '@mui/icons-material/Wc';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import ReplyIcon from '@mui/icons-material/Reply';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import axios from 'axios';




export const Ccmform = () => {

  //Insurance info
  const [checkBox, setCheckBox] = useState({
    copd: true,
    atrial_fibrillation: false,
    congestive_heart_failure: false,
    coronory_artry_disease: false,
    liver_Cirrhosis: false,
    chronic_Kidney: false,
    anemia: false,
    hypothyroidism: false,
    dyslipidemia: false,
    hypertension: false,
  });

  const stringValue = {
    copd: checkBox.copd.toString(),
    atrial_fibrillation: checkBox.atrial_fibrillation.toString(),
    congestive_heart_failure: checkBox.congestive_heart_failure.toString(),
    coronory_artry_disease: checkBox.coronory_artry_disease.toString(),
    liver_Cirrhosis: checkBox.liver_Cirrhosis.toString(),
    anemia: checkBox.anemia.toString(),
    chronic_Kidney: checkBox.chronic_Kidney.toString(),
    hypothyroidism: checkBox.hypothyroidism.toString(),
    hypertension: checkBox.hypertension.toString(),
    dyslipidemia: checkBox.dyslipidemia.toString(),
  }
  // console.log(stringValue.atrial_fibrillation)
  // const type = typeof stringValue.atrial_fibrillation
  // console.log(type)

  const handleCheckBox = (e) => {
    setCheckBox({
      ...checkBox,
      [e.target.name]: e.target.checked,
    });
  };


  // MA Details

  const [sumission_Date, setSumission_Date] = useState(dayjs('2022-04-17'));
  const [time_Spent, setTime_Spent] = useState(dayjs('2022-04-17T15:30'));

  // Format the date and time to ISO 8601
  const formattedDate = time_Spent.toISOString();
  const formattedTime = time_Spent.toISOString();

  const [created_By, setCreated_By] = useState('')
  const targetValues = (e) => {
    setCreated_By(e.target.value)
  }

  // Chronic Condition
  const [a_Status, setA_Status] = useState('');
  const handleTarget = (e) => {
    setA_Status(e.target.value)
  };


  // cronic data a
  const [cronicData, setCronicData] = useState({
    a_Plan: '',
    a_Diagones: '',
    a_Measurable_Goal: ''
  })


  const targetCronicData = (e) => {
    setCronicData({
      ...cronicData,
      [e.target.name]: e.target.value
    })
  }

  // cronic condition h
  const [h_Status, setH_Status] = useState('');
  const handleTargetH = (e) => {
    setH_Status(e.target.value)
  };

  // cronic data h
  const [cronicDataH, setCronicDataH] = useState({
    h_Plan: '',
    h_Diagones: '',
    h_Measurable_Goal: ''
  })

  const targetCronicDataH = (e) => {
    setCronicDataH({
      ...cronicDataH,
      [e.target.name]: e.target.value
    })
  }

  // Allergies-Review
  const [allergies_Reviewed, setAllergies_Reviewed] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, impedit.')
  const targetAllergies = (e) => {
    setAllergies_Reviewed(e.target.value)
  }
  
  // Current Symptoms
  const [current_Symptoms, setCurrent_Symptoms] = useState('Allergies-Review.')
  const targetSymptoms = (e) => {
    setCurrent_Symptoms(e.target.value)
  }

  // Medication
  const [medications, setMedications] = useState('Antibiotic')
  const targetMedication = (e) => {
    setMedications(e.target.value)
  }

  // Preventive care

  const [flue_Vaccine, setFlue_Vaccine] = useState('')
  const handlevalueRadio1 = (e) => {
    setFlue_Vaccine(e.target.value)
  }

  const [pneumonia_Vaccine, setPneumonia_Vaccine] = useState('')
  const handlevalueRadio2 = (e) => {
    setPneumonia_Vaccine(e.target.value)
  }

  const [for_Males_Only, setFor_Males_Only] = useState('')
  const handlevalueRadio3 = (e) => {
    setFor_Males_Only(e.target.value)
  }

  const [colonoscopy, setColonoscopy] = useState('')
  const handlevalueRadio4 = (e) => {
    setColonoscopy(e.target.value)
  }

  const [mammorgram, setMammorgram] = useState('')
  const handlevalueRadio5 = (e) => {
    setMammorgram(e.target.value)
  }

  // Care Taker Name 
  const [careTaker, setCareTaker] = useState({
    care_Taker_Name: '',
    care_Taker_Contact: '',
  })

  const targetCareTaker = (e) => {
    setCareTaker({
      ...careTaker,
      [e.target.name]: e.target.value
    })
  }

  // Health Care
  const [healthCare, setHealthCare] = useState({
    health_Care_Name: '',
    first_Visit: '',
    specialty: '',
    last_Visit: '',

  })

  const targetHealthCare = (e) => {
    setHealthCare({
      ...healthCare,
      [e.target.name]: e.target.value
    })
  }

  // Health care quetions
  const [radioValue, setRadioValue] = useState({
    hospitalized_Or_Not: 'no',
    changes_In_Medicine: 'no',
    any_Surgeries: 'no'
  });

  const handleRadioValue = (e) => {
    setRadioValue({
      ...radioValue,
      [e.target.name]: e.target.value
    })
  };

  // Psycho Social
  const [radioPsycho, setRadioPsycho] = useState({
    patient_CareG: 'no',
    patient_LivesAt: 'no',
    pateint_Livesw: 'no',
    patient_Activities: 'no'
  });

  const handleRadioPsycho = (e) => {
    setRadioPsycho({
      ...radioPsycho,
      [e.target.name]: e.target.value
    })
  };

  // Other Probs
  const [other_Prob, setOther_Prob] = useState('ds')
  const targetOther_Prob = (e) => {
    setOther_Prob(e.target.value)
  }

  // Modal
  const [openModal, setOpenModal] = useState(false)

  // haldle open
  const handleOpen = () => {
    setOpenModal(true)
  }

  // haldle close
  const handleClose = () => {
    setOpenModal(false)
  }

  const [data, setData] = useState([])
  const singleData = data[0]

  // console.log(singleData)
  const profile_ID = singleData?.profile_ID
  // console.log(profile_ID)

  const getData = async () => {
    try {
      const responce = await axios.get(`http://192.168.10.72/api/Profile/GetProfile?`)
      setData(responce.data.result)
      setPatientID(data.patientID)
    } catch (error) {
      alert('Api Error')
    }
  }


  // handle form
  const handleForm = (e) => {
    e.preventDefault()
    postData()
  }

  //  combine multiple states data for post data 

  const combinedData = {
    "profile_ID": profile_ID,
    "sumission_Date": formattedDate,
    "time_Spent": formattedTime,
    "created_By": created_By,
    "a_Status": a_Status,
    "a_Diagones": cronicData.a_Diagones,
    "a_Measurable_Goal": cronicData.a_Measurable_Goal,
    "a_Plan": cronicData.a_Plan,
    "h_Status": h_Status,
    "h_Diagones": cronicDataH.h_Diagones,
    "h_Measurable_Goal": cronicDataH.h_Measurable_Goal,
    "h_Plan": cronicDataH.h_Plan,
    "hypertension": stringValue.hypertension,
    "coronory_artry_disease": stringValue.coronory_artry_disease,
    "congestive_heart_failure": stringValue.congestive_heart_failure,
    "atrial_fibrillation": stringValue.atrial_fibrillation,
    "copd": stringValue.copd,
    "dyslipidemia": stringValue.dyslipidemia,
    "hypothyroidism": stringValue.hypothyroidism,
    "anemia": stringValue.anemia,
    "chronic_Kidney": stringValue.chronic_Kidney,
    "liver_Cirrhosis": stringValue.liver_Cirrhosis,
    "allergies_Reviewed": allergies_Reviewed,
    "current_Symptoms": current_Symptoms,
    "medications": medications,
    "flue_Vaccine": flue_Vaccine,
    "pneumonia_Vaccine": pneumonia_Vaccine,
    "for_Males_Only": for_Males_Only,
    "colonoscopy": colonoscopy,
    "mammorgram": mammorgram,
    "care_Taker_Name": careTaker.care_Taker_Name,
    "care_Taker_Contact": careTaker.care_Taker_Contact,
    "health_Care_Name": healthCare.health_Care_Name,
    "first_Visit": healthCare.first_Visit,
    "specialty": healthCare.specialty,
    "last_Visit": healthCare.last_Visit,
    "changes_In_Medicine": radioValue.changes_In_Medicine,
    "hospitalized_Or_Not": radioValue.hospitalized_Or_Not,
    "any_Surgeries": radioValue.any_Surgeries,
    "other_Prob": other_Prob,
    "patient_CareG": radioPsycho.patient_CareG,
    "patient_LivesAt": radioPsycho.patient_LivesAt,
    "pateint_Livesw": radioPsycho.pateint_Livesw,
    "patient_Activities": radioPsycho.patient_Activities

  };

  const postData = async () => {
    try {
      await axios.post('http://192.168.10.72/api/Profile/AddPatientDetails', combinedData)
      alert('Success')
    } catch (error) {
      alert('Api Arror')
    }
  }

  // Get All User data 
  const [patientID, setPatientID] = useState(null)

  const getAllData = async () => {
    try {
      const responce = await axios.get(`http://192.168.10.72/api/Profile/GetUserByID?profileid=${profile_ID}`)
      setPatientID(responce.data.result)

    } catch (error) {
    }
  }

  const updateModal=(par)=>{
    const time_Spent = dayjs(par.time_Spent)
    const sumission_Date = dayjs(par.sumission_Date)
    setOther_Prob(
      par.other_Prob
    )
    setRadioPsycho({
      patient_Activities:par.patient_Activities,
      pateint_Livesw:par.pateint_Livesw,
      patient_LivesAt:par.patient_LivesAt,
      patient_CareG:par.patient_CareG,
     
    })
    setRadioValue({
      any_Surgeries:par.any_Surgeries,
      changes_In_Medicine:par.changes_In_Medicine,
      hospitalized_Or_Not:par.hospitalized_Or_Not,
    })
    setHealthCare({
      last_Visit:par.last_Visit,
      specialty:par.specialty,
      first_Visit:par.first_Visit,
      health_Care_Name:par.health_Care_Name
    })
    setCareTaker({
      care_Taker_Contact:par.care_Taker_Contact,
      care_Taker_Name:par.care_Taker_Name
    })
    setFlue_Vaccine(
      par.flue_Vaccine
    )
    setPneumonia_Vaccine(
      par.pneumonia_Vaccine
    )
    setFor_Males_Only(
      par.for_Males_Only
    )
    setColonoscopy(
      par.colonoscopy
    )
    setMammorgram(
      par.mammorgram
    )
    setAllergies_Reviewed(
      par.allergies_Reviewed
    )
    setCurrent_Symptoms(
      par.current_Symptoms
    )
    setMedications(
      par.medications
    )
    setCronicDataH({
      h_Measurable_Goal:par.h_Measurable_Goal,
      h_Diagones:par.h_Diagones,
      h_Plan:par.h_Plan,
    })
    setH_Status(par.h_Status)
    setCronicData({
      a_Measurable_Goal:par.a_Measurable_Goal,
      a_Diagones:par.a_Diagones,
      a_Plan:par.a_Plan
    })
    setA_Status(par.a_Status)
    setCreated_By(par.created_By)
    setTime_Spent(time_Spent)
    setSumission_Date(sumission_Date)
    setCheckBox({
      hypertension:par.hypertension,
      dyslipidemia:par.dyslipidemia,
      hypothyroidism:par.hypothyroidism,
      anemia:par.anemia,
      chronic_Kidney:par.chronic_Kidney,
      liver_Cirrhosis:par.liver_Cirrhosis,
      coronory_artry_disease:par.coronory_artry_disease,
      atrial_fibrillation:par.atrial_fibrillation,
      congestive_heart_failure:par.congestive_heart_failure,
      copd:par.copd
    })
  }

 if(patientID !== null){
      getAllData()
    }
  useEffect(() => {
   
    getData()
     
  },[])
  

  return (
    <>
      <Box>
        <Button variant='contained' onClick={handleOpen}>
          Click Here
        </Button>
        <Modal open={openModal}>

          <Box >
            <Paper elevation={8} sx={{ width: '96%', m: '10px auto', borderRadius: '1rem' }}>
              {/* Header */}
              <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 1rem', borderTopRightRadius: '1rem', borderTopLeftRadius: '1rem' }}>
                <Typography sx={{ color: 'white' }}>
                  CCM Form
                </Typography>
                <IconButton onClick={handleClose}>
                  <HighlightOffIcon sx={{ color: 'white' }} />
                </IconButton>
              </Box>

              {/* content */}

              <Box sx={{
                m: '10px 1rem', height: '540px',
                overflowY: { md: 'auto', lg: 'hidden', sm: 'auto', xs: 'auto', xl: 'hidden' },
                scrollbarWidth: 'thin',
                scrollbarColor: '#a0a0a0 #f0f0f0',
                '&::-webkit-scrollbar': {
                  width: '5px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#a0a0a0',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f0f0f0',
                },
              }}>
                <Grid container spacing={2}>

                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paper elevation={12} sx={{ padding: '5px', borderRadius: '8px' }}>

                      <Grid container item spacing={2}>
                        <Grid item lg={5} md={12} sm={12} xs={12}>

                          <Box sx={{ display: 'flex', flexDirection: { lg: 'row', md: 'column', sm: 'column', xs: 'column' }, justifyContent: { md: 'center', sm: 'center', xs: 'center' }, gap: '1rem', mt: '15px' }}>

                            <Avatar sx={{ bgcolor: '#01619B', ml: '10px', mt: '5px' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                              <Typography variant='h6' sx={{ color: '#01619B', fontWeight: 'bold', ml: '10px' }}>
                                {singleData?.p_Name}
                              </Typography>

                              <Box sx={{ display: 'flex', gap: '0px' }}>

                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                                  <Box sx={{ display: 'flex', gap: '8px' }}>
                                    <IconButton>
                                      <MaleOutlinedIcon sx={{ color: '#01619B' }} />
                                    </IconButton>
                                    <Typography sx={{ mt: '10px', color: 'gray' }}>
                                      {singleData?.p_Gender}
                                    </Typography>
                                  </Box>
                                  <Box>
                                    <Box sx={{ display: 'flex', gap: '8px' }}>
                                      <IconButton>
                                        <CalendarMonthOutlinedIcon sx={{ color: '#2B5690' }} />
                                      </IconButton>
                                      <Typography sx={{ mt: '10px', color: 'gray' }}>
                                        {singleData?.p_DOB}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                  <Box sx={{ display: 'flex', gap: '8px' }}>
                                    <IconButton>
                                      <LocalPhoneOutlinedIcon sx={{ color: '#01619B' }} />
                                    </IconButton>
                                    <Typography sx={{ mt: '10px', color: 'gray' }}>
                                      {singleData?.p_Contact}
                                    </Typography>
                                  </Box>
                                  <Box>
                                    <Box sx={{ display: 'flex', gap: '8px' }}>
                                      <IconButton>
                                        <EmailOutlinedIcon sx={{ color: '#01619B' }} />
                                      </IconButton>
                                      <Typography sx={{ mt: '10px', color: 'gray' }}>
                                        {singleData?.p_Email}
                                      </Typography>
                                    </Box>
                                  </Box>

                                </Box>
                              </Box>
                            </Box>
                            <Divider sx={{
                              display: { md: 'none', lg: 'block', sm: 'none', xs: 'none' },
                              backgroundColor: 'lightgray',
                              width: '2px',
                              height: '130px',
                              margin: 'auto 0px auto auto'

                            }} />
                          </Box>

                        </Grid>

                        <Divider orientation='horizontal' sx={{
                          display: { md: 'block', lg: 'none', sm: 'block', xs: 'block' },
                          backgroundColor: 'lightgray',
                          width: '93%',
                          height: '1px',
                          margin: '10px auto auto auto'

                        }} />

                        <Grid item xl={4} lg={4} md={5} sm={6} xs={12}>

                          <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', ml: '10px', mt: '10px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                              <Typography sx={{ mt: '10px', fontWeight: 'bold' }}>
                                Address:
                              </Typography>
                              <Typography sx={{ fontWeight: 'bold' }}>
                                Zip Code:
                              </Typography>
                              <Typography sx={{ fontWeight: 'bold' }}>
                                State:
                              </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                              <Typography sx={{ mt: '10px', }}>
                                {singleData?.p_Address}
                              </Typography>
                              <Typography >
                                {singleData?.p_ZipCode}
                              </Typography>
                              <Typography >
                                {singleData?.p_State}
                              </Typography>
                            </Box>
                            <Divider sx={{
                              display: { md: 'block', lg: 'block', sm: 'none', xs: 'none' },
                              backgroundColor: 'lightgray',
                              width: '1.5px',
                              height: '130px',
                              margin: 'auto 5px auto auto'
                            }} />
                          </Box>

                        </Grid>
                        <Divider orientation='horizontal' sx={{
                          display: { md: 'none', lg: 'none', sm: 'block', xs: 'block' },
                          backgroundColor: 'lightgray',
                          width: '93%',
                          height: '1px',
                          margin: '10px auto auto auto'

                        }} />


                        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                          <Box>
                            <Typography sx={{ mt: '10px', ml: '11px' }}>
                              Provider Detail
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '8px' }}>
                              <IconButton>
                                <PersonOutlineOutlinedIcon sx={{ color: '#01619B' }} />
                              </IconButton>
                              <Typography sx={{ mt: '10px', color: 'gray' }}>
                                {singleData?.doctor_Name}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '8px' }}>
                              <IconButton>
                                <LocalPhoneOutlinedIcon sx={{ color: '#01619B' }} />
                              </IconButton>
                              <Typography sx={{ mt: '10px', color: 'gray' }}>
                                {singleData?.doctor_Contact}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '8px' }}>
                              <IconButton>
                                <EmailOutlinedIcon sx={{ color: '#01619B' }} />
                              </IconButton>
                              <Typography sx={{ mt: '10px', color: 'gray' }}>
                                {singleData?.doctor_Email}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                    <Grid container spacing={3}>
                      <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>

                        <Paper>
                          <Box sx={{
                            height: '270px', m: '8px 0', overflowY: 'auto', scrollbarWidth: 'thin',
                            scrollbarColor: '#a0a0a0 #f0f0f0',
                            '&::-webkit-scrollbar': {
                              width: '5px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                              background: '#a0a0a0',
                              borderRadius: '4px',
                            },
                            '&::-webkit-scrollbar-track': {
                              background: '#f0f0f0',
                            },
                          }}>
                            <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1px 8px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}>
                              <Typography sx={{ color: 'white' }}>
                                Previous Form
                              </Typography>
                              <IconButton>
                                <HighlightOffIcon sx={{ color: 'white' }} />
                              </IconButton>
                            </Box>

                            {patientID?.map((item, key) => {
                              return (
                                <Box key={key}>
                                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: '10px', mt: '10px' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                      <Typography sx={{ color: '#01619B' }}>
                                        {item?.sumission_Date}
                                      </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                     
                                      <IconButton onClick={()=>{updateModal(item)}}>
                                        <AdsClickIcon sx={{ color: '#29D227' }} />
                                      </IconButton>
                               
                                    </Box>
                                  </Box>
                                  <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', ml: '10px', mt: '10px' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                      <Typography sx={{ fontWeight: 'bold' }}>
                                        Created By:
                                      </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                      <Typography >
                                        {item?.created_By}
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <hr />
                                </Box>
                              )
                            })}
                           
                          </Box>
                        </Paper>
                      </Grid>

                      <Grid item xl={9} lg={9} md={12} sm={12} xs={12}>
                        <Paper elevation={8} sx={{
                          borderRadius: '10px', mb: '8px', height: '280px', overflowY: 'auto', scrollbarWidth: 'thin',
                          scrollbarColor: '#a0a0a0 #f0f0f0',
                          '&::-webkit-scrollbar': {
                            width: '5px',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            background: '#a0a0a0',
                            borderRadius: '4px',
                          },
                          '&::-webkit-scrollbar-track': {
                            background: '#f0f0f0',
                          },
                        }}>

                          <Grid container item spacing={1}>

                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>

                              <Box sx={{ m: '5px 5px 0px 10px', }}>
                                <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', }}>

                                  <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '10px 10px' }}>
                                    <Typography sx={{ color: 'white' }}>
                                      Insurance Info
                                    </Typography>
                                  </Box>

                                  <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', ml: '10px', mt: '1.5rem', p: '10px 0 1rem 0' }}>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                      <Typography sx={{ fontSize: '16px' }}>
                                        Primary Insurance Name:
                                      </Typography>
                                      <Typography sx={{ fontSize: '16px' }}>
                                        Primary Insurance ID:
                                      </Typography>
                                      <Typography sx={{ fontSize: '16px' }}>
                                        Secondary Insurance Name:
                                      </Typography>
                                      <Typography sx={{ fontSize: '16px' }}>
                                        Secondary Insurance ID:
                                      </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                      <Typography sx={{ color: 'gray' }}>
                                        {singleData?.primery_Insurance_Name}
                                      </Typography>
                                      <Typography sx={{ color: 'gray' }}>
                                        {singleData?.primery_Insurance_Id}
                                      </Typography>
                                      <Typography sx={{ color: 'gray' }}>
                                        {singleData?.secondary_Insurance_Name}
                                      </Typography>
                                      <Typography sx={{ color: 'gray' }}>
                                        {singleData?.secondary_Insurance_Id}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Paper>
                              </Box>
                            </Grid>

                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                              <Box sx={{ minHeight: '200px', m: '5px 10px 0 5px' }}>
                                <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '7px' }}>

                                  <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '10px 10px' }}>
                                    <Typography sx={{ color: 'white' }}>
                                      MA details
                                    </Typography>
                                  </Box>

                                  <Box sx={{ display: 'flex', gap: '1.5rem', alignItems: 'center', m: '10px 0 10px 10px' }}>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                      <Typography sx={{ fontSize: '1rem' }}>
                                        Submition Date:
                                      </Typography>
                                      <Typography sx={{ fontSize: '1rem' }}>
                                        Created By:
                                      </Typography>
                                      <Typography sx={{ fontSize: '1rem' }}>
                                        Time Spend:
                                      </Typography>

                                    </Box>
                                    <form>
                                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                          <DemoContainer components={['DatePicker', 'DatePicker']}>
                                            <DatePicker
                                              label="Controlled picker"
                                              value={sumission_Date}
                                              onChange={(newValue) => setSumission_Date(newValue)}
                                              slotProps={{ textField: { size: 'small' } }}
                                            />
                                          </DemoContainer>
                                        </LocalizationProvider>

                                        <TextField
                                          value={created_By}
                                          onChange={targetValues}
                                          name='medicare'
                                          type='text'
                                          size='small'
                                          label='Medicare'
                                        />

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                          <DemoContainer components={['TimePicker', 'TimePicker']}>
                                            <TimePicker
                                              slotProps={{ textField: { size: 'small' } }}
                                              label="Controlled picker"
                                              value={time_Spent}
                                              onChange={(newValue) => setTime_Spent(newValue)}
                                            />
                                          </DemoContainer>
                                        </LocalizationProvider>
                                      </Box>
                                    </form>
                                  </Box>
                                </Paper>
                              </Box>

                            </Grid>

                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                              <Box sx={{ m: '5px 5px 0 10px' }}>
                                <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '12px' }}>

                                  <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '4px 10px' }}>
                                    <Typography sx={{ color: 'white' }}>
                                      Chronic Condition
                                    </Typography>
                                    <IconButton>

                                      <AutorenewIcon sx={{ color: 'white' }} />
                                    </IconButton>
                                  </Box>

                                  <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column', m: '5px 8px' }}>
                                    <Typography sx={{ fontWeight: 'bold', m: '6px 0' }}>
                                      1-Anesthesia
                                    </Typography>
                                    <form>
                                      <Grid container spacing={1}>
                                        <Grid item lg={6} md={6} sm={6} xs={12}>
                                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', }}>
                                            <FormControl sx={{ minWidth: 120 }} size="small">
                                              <InputLabel id="demo-select-small-label">Status</InputLabel>
                                              <Select
                                                size='large'
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={a_Status}
                                                label="status"
                                                onChange={handleTarget}
                                              >
                                                <MenuItem value="">
                                                  <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={'One'}>One</MenuItem>
                                                <MenuItem value={'Two'}>Two</MenuItem>
                                                <MenuItem value={'Three'}>Three</MenuItem>
                                              </Select>
                                            </FormControl>
                                            <TextField value={cronicData.a_Measurable_Goal} onChange={targetCronicData} name='a_Measurable_Goal' type='text' label='Measureable Goal' />
                                          </Box>
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            <TextField onChange={targetCronicData} value={cronicData.a_Diagones} name='a_Diagones' type='text' label='Diagnosis' />
                                            <TextField onChange={targetCronicData} name='a_Plan' value={cronicData.a_Plan} type='text' label='Plane' />
                                          </Box>
                                        </Grid>
                                      </Grid>
                                    </form>
                                  </Box>

                                  <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column', m: '10px 8px' }}>
                                    <Typography sx={{ fontWeight: 'bold', m: '6px 0 ' }}>
                                      1-Hypertantion
                                    </Typography>
                                    <form>
                                      <Grid container spacing={1}>
                                        <Grid item lg={6} md={6} sm={6} xs={12}>
                                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', }}>
                                            <FormControl sx={{ minWidth: 120 }} size="small">
                                              <InputLabel id="demo-select-small-label">Status</InputLabel>
                                              <Select
                                                size='large'
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={h_Status}
                                                label="status"
                                                onChange={handleTargetH}
                                              >
                                                <MenuItem value="">
                                                  <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={'Ten'}>Ten</MenuItem>
                                                <MenuItem value={'Twenty'}>Twenty</MenuItem>
                                                <MenuItem value={'Thirty'}>Thirty</MenuItem>
                                              </Select>
                                            </FormControl>
                                            <TextField value={cronicDataH.h_Measurable_Goal} onChange={targetCronicDataH} name='h_Measurable_Goal' type='text' label='Measureable Goal' />
                                          </Box>
                                        </Grid>

                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            <TextField value={cronicDataH.h_Diagones} onChange={targetCronicDataH} name='h_Diagones' type='text' label='Diagnosis' />
                                            <TextField value={cronicDataH.h_Plan} onChange={targetCronicDataH} name='h_Plan' type='text' label='plane' />
                                          </Box>
                                        </Grid>
                                      </Grid>
                                    </form>
                                  </Box>
                                </Paper>
                              </Box>
                            </Grid>

                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                              <Box sx={{ minHeight: '300px', m: '5px 10px 0 5px' }}>
                                <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '7px' }}>

                                  <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '4px 10px' }}>
                                    <Typography sx={{ color: 'white' }}>
                                      Insurance Info
                                    </Typography>
                                    <IconButton>
                                      <AutorenewIcon sx={{ color: 'white' }} />
                                    </IconButton>
                                  </Box>

                                  <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', }}>
                                    <form>
                                      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                        <FormControlLabel

                                          label={
                                            <Typography variant="body2" style={{ fontSize: '15px' }}>
                                              Hypertention
                                            </Typography>}
                                          control={<Checkbox size='small' checked={checkBox.hypertension} onChange={handleCheckBox} name='hypertension' />}
                                        />

                                        <FormControlLabel
                                          label={
                                            <Typography variant="body2" style={{ fontSize: '15px' }}>
                                              Coronary artary disease
                                            </Typography>}
                                          control={<Checkbox size='small' checked={checkBox.coronory_artry_disease} onChange={handleCheckBox} name='coronory_artry_disease' />}
                                        />

                                        <FormControlLabel
                                          label={
                                            <Typography variant="body2" style={{ fontSize: '15px' }}>

                                              Atrial fibration
                                            </Typography>}
                                          control={<Checkbox size='small' checked={checkBox.atrial_fibrillation} onChange={handleCheckBox} name='atrial_fibrillation' />}
                                        />

                                        <FormControlLabel
                                          label={
                                            <Typography variant="body2" style={{ fontSize: '15px' }}>

                                              COPD
                                            </Typography>}
                                          control={<Checkbox size='small' checked={checkBox.copd} onChange={handleCheckBox} name='copd' />}
                                        />

                                        <FormControlLabel
                                          label={
                                            <Typography variant="body2" style={{ fontSize: '15px' }}>

                                              Dislipidemia
                                            </Typography>}
                                          control={<Checkbox size='small' checked={checkBox.dyslipidemia} onChange={handleCheckBox} name='dyslipidemia' />}
                                        />

                                        <FormControlLabel
                                          label={
                                            <Typography variant="body2" style={{ fontSize: '15px' }}>
                                              Hypothyroidism

                                            </Typography>}
                                          control={<Checkbox size='small' checked={checkBox.hypothyroidism} onChange={handleCheckBox} name='hypothyroidism' />}
                                        />

                                        <FormControlLabel
                                          label={
                                            <Typography variant="body2" style={{ fontSize: '15px' }}>
                                              Anemia
                                            </Typography>}
                                          control={<Checkbox size='small' checked={checkBox.anemia} onChange={handleCheckBox} name='anemia' />}
                                        />

                                        <FormControlLabel
                                          label={
                                            <Typography variant="body2" style={{ fontSize: '15px' }}>
                                              Congative heart failer
                                            </Typography>}
                                          control={<Checkbox size='small' checked={checkBox.congestive_heart_failure} onChange={handleCheckBox} name='congestive_heart_failure' />}
                                        />

                                        <FormControlLabel
                                          label={
                                            <Typography variant="body2" style={{ fontSize: '15px' }}>
                                              Liver Cirrhosis
                                            </Typography>}
                                          control={<Checkbox size='small' checked={checkBox.liver_Cirrhosis} onChange={handleCheckBox} name='liver_Cirrhosis' />} />

                                        <FormControlLabel
                                          label={
                                            <Typography variant="body2" style={{ fontSize: '15px' }}>
                                              Chronic Kidny Desease
                                            </Typography>}
                                          control={<Checkbox size='small' checked={checkBox.chronic_Kidney} onChange={handleCheckBox} name='chronic_Kidney' />}
                                        />
                                      </Box>
                                    </form>
                                  </Box>
                                </Paper>
                              </Box>

                            </Grid>

                            <Grid container item>

                              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                <Box sx={{ m: '5px 5px 0 10px' }}>
                                  <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '7px', minHeight: '250px' }}>

                                    <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '4px 10px' }}>

                                      <Typography sx={{ color: 'white' }}>
                                        Allergies-Review

                                      </Typography>
                                      <IconButton>
                                        <AutorenewIcon sx={{ color: 'white' }} />
                                      </IconButton>
                                    </Box>

                                    <Box >
                                      <TextareaAutosize
                                        value={allergies_Reviewed}
                                        onChange={targetAllergies}

                                        minRows={12}
                                        aria-multiline
                                        style={{ width: '98%', height: '100%', border: 'none' }}
                                      />
                                    </Box>
                                  </Paper>
                                </Box>
                              </Grid>

                              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                <Box sx={{ m: '5px 5px' }}>
                                  <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '7px', minHeight: '250px' }}>

                                    <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '4px 10px' }}>
                                      <Typography sx={{ color: 'white' }}>
                                        Current Symptoms
                                      </Typography>
                                      <IconButton>
                                        <AutorenewIcon sx={{ color: 'white' }} />
                                      </IconButton>
                                    </Box>

                                    <Box >
                                      <TextareaAutosize
                                        value={current_Symptoms}
                                        onChange={targetSymptoms}
                                        minRows={12}
                                        aria-multiline
                                        style={{ width: '98%', height: '100%', border: 'none' }}
                                      />
                                    </Box>

                                  </Paper>
                                </Box>
                              </Grid>

                              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                <Box sx={{ m: '5px 10px 0 5px' }}>
                                  <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '7px', minHeight: '250px' }}>

                                    <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '4px 10px' }}>
                                      <Typography sx={{ color: 'white' }}>
                                        Medication
                                      </Typography>
                                      <IconButton>
                                        <AutorenewIcon sx={{ color: 'white' }} />
                                      </IconButton>
                                    </Box>

                                    <Box >
                                      <TextareaAutosize
                                        value={medications}
                                        onChange={targetMedication}
                                        minRows={12}
                                        aria-multiline
                                        style={{ width: '98%', height: '100%', border: 'none' }}
                                      />
                                    </Box>

                                  </Paper>
                                </Box>
                              </Grid>

                              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Box sx={{ m: '5px 5px 10px 10px' }}>
                                  <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '7px', minHeight: '250px' }}>

                                    <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '10px 10px' }}>
                                      <Typography sx={{ color: 'white' }}>
                                        Preventive Care
                                      </Typography>

                                    </Box>
                                    <Box sx={{ m: '0px 10px', display: 'flex', justifyContent: 'space-between' }}>
                                      <FormLabel sx={{ fontSize: '14px', display: 'flex', alignItems: 'center' }} id="demo-radio-buttons-group-label">Flue Vaccine</FormLabel>
                                      <FormControl>
                                        <RadioGroup
                                          aria-labelledby="demo-radio-buttons-group-label"
                                          value={flue_Vaccine}
                                          onChange={handlevalueRadio1}
                                          name="radio-buttons-group"
                                        >
                                          <Box>
                                            <FormControlLabel value="Yes" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                Yes
                                              </Typography>} />
                                            <FormControlLabel value="No" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                No
                                              </Typography>} />
                                            <FormControlLabel value="NA" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                NA
                                              </Typography>} />

                                          </Box>
                                        </RadioGroup>
                                      </FormControl>
                                    </Box>
                                    <Box sx={{ m: '0px 10px', display: 'flex', justifyContent: 'space-between' }}>
                                      <FormLabel sx={{ fontSize: '14px', display: 'flex', alignItems: 'center' }} id="demo-radio-buttons-group-label">Pneumonia Vaccine</FormLabel>
                                      <FormControl>
                                        <RadioGroup
                                          value={pneumonia_Vaccine}
                                          onChange={handlevalueRadio2}
                                          aria-labelledby="demo-radio-buttons-group-label"
                                          name="radio-buttons-group"
                                        >
                                          <Box>
                                            <FormControlLabel value="Yes" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                Yes
                                              </Typography>} />
                                            <FormControlLabel value="No" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                No
                                              </Typography>} />
                                            <FormControlLabel value="NA" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                NA
                                              </Typography>} />

                                          </Box>
                                        </RadioGroup>
                                      </FormControl>
                                    </Box>
                                    <Box sx={{ m: '0px 10px', display: 'flex', justifyContent: 'space-between' }}>
                                      <FormLabel sx={{ fontSize: '14px', display: 'flex', alignItems: 'center' }} id="demo-radio-buttons-group-label">For Males only PSA Checked</FormLabel>
                                      <FormControl>
                                        <RadioGroup
                                          aria-labelledby="demo-radio-buttons-group-label"
                                          value={for_Males_Only}
                                          onChange={handlevalueRadio3}
                                          name="radio-buttons-group"
                                        >
                                          <Box>
                                            <FormControlLabel size='small' value="Yes" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                Yes
                                              </Typography>} />
                                            <FormControlLabel value="No" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                No
                                              </Typography>} />
                                            <FormControlLabel value="NA" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                NA
                                              </Typography>} />

                                          </Box>
                                        </RadioGroup>
                                      </FormControl>
                                    </Box>
                                    <Box sx={{ m: '0px 10px', display: 'flex', justifyContent: 'space-between' }}>
                                      <FormLabel sx={{ fontSize: '14px', display: 'flex', alignItems: 'center' }} id="demo-radio-buttons-group-label">Colonoscopy</FormLabel>
                                      <FormControl>
                                        <RadioGroup
                                          aria-labelledby="demo-radio-buttons-group-label"
                                          value={colonoscopy}
                                          onChange={handlevalueRadio4}
                                          name="radio-buttons-group"
                                        >
                                          <Box>
                                            <FormControlLabel value="Yes" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                Yes
                                              </Typography>} />
                                            <FormControlLabel value="No" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                No
                                              </Typography>} />
                                            <FormControlLabel value="NA" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                NA
                                              </Typography>} />

                                          </Box>
                                        </RadioGroup>
                                      </FormControl>
                                    </Box>
                                    <Box sx={{ m: '0px 10px', display: 'flex', justifyContent: 'space-between' }}>
                                      <FormLabel sx={{ fontSize: '14px', display: 'flex', alignItems: 'center' }} id="demo-radio-buttons-group-label">Mammogram</FormLabel>
                                      <FormControl>
                                        <RadioGroup
                                          aria-labelledby="demo-radio-buttons-group-label"
                                          value={mammorgram}
                                          onChange={handlevalueRadio5}
                                          name="radio-buttons-group"
                                        >
                                          <Box>
                                            <FormControlLabel value="Yes" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                Yes
                                              </Typography>} />
                                            <FormControlLabel value="No" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                No
                                              </Typography>} />
                                            <FormControlLabel value="NA" control={<Radio size='small' />} label={
                                              <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                NA
                                              </Typography>} />

                                          </Box>
                                        </RadioGroup>
                                      </FormControl>
                                    </Box>
                                  </Paper>
                                </Box>
                              </Grid>


                              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                                <Box sx={{ m: '5px 10px 10px 5px' }}>
                                  <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '7px', minHeight: '250px' }}>

                                    <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '10px 10px' }}>
                                      <Typography sx={{ color: 'white' }}>
                                        Psycho Social
                                      </Typography>

                                    </Box >

                                    <Box sx={{ m: '8px 0', display: 'flex', gap: '5px', flexDirection: 'column' }}>

                                      <Box sx={{ display: 'flex', gap: '3px', flexDirection: { xl: 'row', lg: 'row', md: 'row', sm: 'row', xs: 'column' }, }}>
                                        <FormLabel sx={{ fontSize: '14px', display: 'flex', alignItems: 'center', width: { xl: '155px', lg: '150px', md: '400px', sm: '400px', xs: '230px' } }} id="demo-radio-buttons-group-label">Patient_a care giver.</FormLabel>

                                        <FormControl>
                                          <RadioGroup
                                            value={radioPsycho.patient_CareG}
                                            onChange={handleRadioPsycho}
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="patient_CareG"
                                          >
                                            <Box>
                                              <FormControlLabel value="has" control={<Radio size='small' />} label={
                                                <Typography variant="body2" style={{ fontSize: '13px' }}>
                                                  has
                                                </Typography>} />
                                              <FormControlLabel value="has not" control={<Radio size='small' />} label={
                                                <Typography variant="body2" style={{ fontSize: '13px' }}>
                                                  has not
                                                </Typography>} />

                                            </Box>
                                          </RadioGroup>
                                        </FormControl>
                                      </Box>
                                      {/* </Box> */}

                                      <Box sx={{ display: 'flex', gap: '3px', flexDirection: { xl: 'row', lg: 'row', md: 'row', sm: 'row', xs: 'column' } }}>
                                        <FormLabel sx={{ fontSize: '14px', display: 'flex', alignItems: 'center', width: { xl: '155px', lg: '150px', md: '400px', sm: '400px', xs: '230px' } }} id="demo-radio-buttons-group-label">Patient lives at.</FormLabel>
                                        <FormControl>
                                          <RadioGroup
                                            value={radioPsycho.patient_LivesAt}
                                            onChange={handleRadioPsycho}
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="patient_LivesAt">
                                            <Box>
                                              <FormControlLabel value="home" control={<Radio size='small' />} label={
                                                <Typography variant="body2" style={{ fontSize: '13px' }}>
                                                  home
                                                </Typography>} />
                                              <FormControlLabel value="narsing" control={<Radio size='small' />} label={
                                                <Typography variant="body2" style={{ fontSize: '13px' }}>
                                                  narsing
                                                </Typography>} />
                                              <FormControlLabel value="assisted living" control={<Radio size='small' />} label={
                                                <Typography variant="body2" style={{ fontSize: '13px' }}>
                                                  assisted living
                                                </Typography>} />

                                            </Box>
                                          </RadioGroup>
                                        </FormControl>
                                      </Box>

                                      <Box sx={{ display: 'flex', gap: '3px', flexDirection: { xl: 'row', lg: 'row', md: 'row', sm: 'row', xs: 'column' } }}>
                                        <FormLabel sx={{ fontSize: '14px', display: 'flex', alignItems: 'center', width: { xl: '155px', lg: '150px', md: '400px', sm: '400px', xs: '230px' } }} id="demo-radio-buttons-group-label">Patient lives with.</FormLabel>
                                        <FormControl>
                                          <RadioGroup
                                            value={radioPsycho.pateint_Livesw}
                                            onChange={handleRadioPsycho}
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="pateint_Livesw"
                                          >
                                            <Box>
                                              <FormControlLabel size='By herself' value="female" control={<Radio size='small' />} label={
                                                <Typography variant="body2" style={{ fontSize: '13px' }}>
                                                  By herself
                                                </Typography>} />
                                              <FormControlLabel value="with family" control={<Radio size='small' />} label={
                                                <Typography variant="body2" style={{ fontSize: '13px' }}>
                                                  with family
                                                </Typography>} />
                                              <FormControlLabel value="spouse" control={<Radio size='small' />} label={
                                                <Typography variant="body2" style={{ fontSize: '13px' }}>
                                                  spouse
                                                </Typography>} />
                                            </Box>
                                          </RadioGroup>
                                        </FormControl>
                                      </Box>

                                      <Box sx={{ display: 'flex', gap: '3px', flexDirection: { xl: 'row', lg: 'row', md: 'row', sm: 'row', xs: 'column' } }}>
                                        <FormLabel sx={{ fontSize: '14px', display: 'flex', alignItems: 'center', width: { xl: '155px', lg: '150px', md: '400px', sm: '400px', xs: '230px' } }} id="demo-radio-buttons-group-label">Patient Is__Perform Activiies of daily living.</FormLabel>
                                        <FormControl>
                                          <RadioGroup
                                            value={radioPsycho.patient_Activities}
                                            onChange={handleRadioPsycho}
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="patient_Activities"
                                          >
                                            <Box>
                                              <FormControlLabel value="able to" control={<Radio size='small' />} label={
                                                <Typography variant="body2" style={{ fontSize: '13px' }}>
                                                  able to
                                                </Typography>} />
                                              <FormControlLabel value="unable to" control={<Radio size='small' />} label={
                                                <Typography variant="body2" style={{ fontSize: '13px' }}>
                                                  unable to
                                                </Typography>} />

                                            </Box>
                                          </RadioGroup>
                                        </FormControl>
                                      </Box>
                                    </Box>
                                  </Paper>
                                </Box>
                              </Grid>
                            </Grid>

                            <Grid container item spacing={1}>
                              <Grid xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Box sx={{ minHeight: '150px', m: '5px 0 0 15px' }}>
                                  <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '7px' }}>

                                    <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '10px 10px' }}>
                                      <Typography sx={{ color: 'white' }}>
                                        Care Taker Name
                                      </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', gap: '2rem', alignItems: 'center', m: '10px 0 10px 10px' }}>

                                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                          Name:
                                        </Typography>
                                        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                          Contact No:
                                        </Typography>


                                      </Box>
                                      <form>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                          <TextField
                                            value={careTaker.care_Taker_Name}
                                            onChange={targetCareTaker}
                                            type='text'
                                            size='small'
                                            name='care_Taker_Name'
                                            label='Name'

                                          />

                                          <TextField
                                            value={careTaker.care_Taker_Contact}
                                            onChange={targetCareTaker}
                                            name='care_Taker_Contact'
                                            type='text'
                                            size='small'
                                            label='Phone' />

                                        </Box>
                                      </form>
                                    </Box>
                                  </Paper>
                                </Box>
                              </Grid>

                              <Grid xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Box sx={{ minHeight: '150px', m: '5px 10px 0 10px' }}>
                                  <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '7px' }}>

                                    <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '10px 10px' }}>
                                      <Typography sx={{ color: 'white' }}>
                                        Health Care
                                      </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', gap: '10px', mr: '2px' }}>
                                      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', m: '10px 0 10px 10px' }}>

                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                            Name:
                                          </Typography>
                                          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                            Specialty:
                                          </Typography>


                                        </Box>
                                        <form>
                                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                            <TextField
                                              value={healthCare.health_Care_Name}
                                              onChange={targetHealthCare}
                                              type='text'
                                              size='small'
                                              name='health_Care_Name'

                                            />

                                            <TextField
                                              value={healthCare.specialty}
                                              onChange={targetHealthCare}
                                              name='specialty'
                                              type='text'
                                              size='small'

                                            />

                                          </Box>
                                        </form>
                                      </Box>
                                      <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center', m: '10px 0 10px 10px' }}>

                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '9rem' }}>
                                          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                                            First visit:
                                          </Typography>
                                          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                                            Last visit
                                          </Typography>


                                        </Box>
                                        <form>
                                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                            <TextField
                                              value={healthCare.first_Visit}
                                              onChange={targetHealthCare}
                                              type='text'
                                              size='small'
                                              name='first_Visit'

                                            />

                                            <TextField
                                              value={healthCare.last_Visit}
                                              onChange={targetHealthCare}
                                              name='last_Visit'
                                              type='text'
                                              size='small'

                                            />

                                          </Box>
                                        </form>
                                      </Box>
                                    </Box>
                                  </Paper>
                                </Box>

                              </Grid>


                              <Grid xl={12} lg={12} md={12} sm={12} xs={12}>

                                <Box sx={{ minHeight: '200px', m: '10px 10px 0 15px' }}>
                                  <Paper sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', pb: '7px', mb: '10px' }}>

                                    <Box sx={{ bgcolor: '#01619B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', padding: '10px 10px' }}>
                                      <Typography sx={{ color: 'white' }}>
                                        Health Care Quetions
                                      </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', gap: '5px' }}>

                                      <Box>
                                        <Box sx={{ m: '10px 10px', display: 'flex', flexDirection: { sm: 'column', xs: 'column', lg: 'row', md: 'row' } }}>

                                          <FormLabel sx={{mt:'15px', fontSize: '15px', display: 'flex', mr: '15px', width: { lg: '60%', md: '60%', sm: '80%', xs: '90%' }, flexDirection: { sm: 'column', xs: 'column', lg: 'row', md: 'row' } }} id="demo-radio-buttons-group-label">
                                            In last one month, have you any charges in your medication?
                                          </FormLabel>

                                          <Box sx={{ ml: '50px', display: 'flex' }}>
                                            <FormControl>
                                              <RadioGroup
                                                value={radioValue.changes_In_Medicine}
                                                onChange={handleRadioValue}
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="changes_In_Medicine"
                                              >

                                                <Box>
                                                  <FormControlLabel value="yes" control={<Radio size='small' />} label={
                                                    <Typography variant="body2" style={{ fontSize: '15px' }}>
                                                      Yes
                                                    </Typography>} />
                                                  <FormControlLabel value="no" control={<Radio size='small' />} label={
                                                    <Typography variant="body2" style={{ fontSize: '15px' }}>
                                                      No
                                                    </Typography>} />

                                                </Box>
                                              </RadioGroup>
                                            </FormControl>

                                            {radioValue.changes_In_Medicine === 'no' ?
                                              <TextField
                                                name='medicare'
                                                type='text'
                                                size='small'
                                                
                                                sx={{ width: '8rem', display: 'none' }}
                                              />
                                              :
                                              <TextField
                                                value={other_Prob}
                                                onChange={targetOther_Prob}
                                                name='medicare'
                                                type='text'
                                                size='small'
                                               
                                                sx={{ width: '8rem' }}
                                              />
                                            }

                                          </Box>
                                        </Box>

                                        <Box sx={{ m: '5px 10px', display: 'flex', flexDirection: { sm: 'column', xs: 'column', lg: 'row', md: 'row' } }}>
                                          <FormLabel sx={{ fontSize: '15px', display: 'flex', alignItems: 'center', mr: '15px', width: { lg: '60%', md: '60%', sm: '80%', xs: '90%' } }} id="demo-radio-buttons-group-label">
                                            In last one month, have you been hospitalized or have been to ER?
                                          </FormLabel>
                                          <Box sx={{ ml: '50px' }}>
                                            <FormControl>
                                              <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                value={radioValue.hospitalized_Or_Not}
                                                onChange={handleRadioValue}
                                                name="hospitalized_Or_Not"
                                              >
                                                <Box>
                                                  <FormControlLabel value="yes" control={<Radio size='small' />} label={
                                                    <Typography variant="body2" style={{ fontSize: '15px' }}>
                                                      Yes
                                                    </Typography>} />
                                                  <FormControlLabel value="no" control={<Radio size='small' />} label={
                                                    <Typography variant="body2" style={{ fontSize: '15px' }}>
                                                      No
                                                    </Typography>} />

                                                </Box>
                                              </RadioGroup>
                                            </FormControl>
                                            {radioValue.hospitalized_Or_Not === 'no' ?
                                              <TextField
                                                name='medicare'
                                                type='text'
                                                size='small'
                                                // label='Phone'
                                                sx={{ width: '8rem', display: 'none' }}
                                              />
                                              :
                                              <TextField
                                                value={other_Prob}
                                                onChange={targetOther_Prob}
                                                name='medicare'
                                                type='text'
                                                size='small'
                                                // label='Phone'
                                                sx={{ width: '8rem' }}
                                              />
                                            }
                                          </Box>
                                        </Box>

                                        <Box sx={{ m: '5px 10px', display: 'flex', flexDirection: { sm: 'column', xs: 'column', lg: 'row', md: 'row' } }}>
                                          <FormLabel sx={{ fontSize: '15px', display: 'flex', alignItems: 'center', mr: '15px', width: { lg: '60%', md: '60%', sm: '80%', xs: '90%' } }} id="demo-radio-buttons-group-label">In last one month, have you had any surgeries or any serious health realated issues?
                                          </FormLabel>

                                          <Box sx={{ ml: '50px', width: '300px' }}>
                                            <FormControl >
                                              <RadioGroup
                                                value={radioValue.any_Surgeries}
                                                onChange={handleRadioValue}
                                                aria-labelledby="demo-radio-buttons-group-label"

                                                name="any_Surgeries"
                                              >
                                                <Box >
                                                  <FormControlLabel value='yes' control={<Radio size='small' />} label={
                                                    <Typography variant="body2" style={{ fontSize: '15px' }}>
                                                      Yes
                                                    </Typography>} />
                                                  <FormControlLabel value='no' control={<Radio size='small' />} label={
                                                    <Typography variant="body2" style={{ fontSize: '15px' }}>
                                                      No
                                                    </Typography>} />
                                                </Box>
                                              </RadioGroup>
                                            </FormControl>
                                            {radioValue.any_Surgeries === 'no' ?
                                              <TextField
                                                name='medicare'
                                                type='text'
                                                size='small'
                                                // label='Phone'
                                                sx={{ width: '8rem', display: 'none' }}
                                              />
                                              :
                                              <TextField
                                                value={other_Prob}
                                                onChange={targetOther_Prob}
                                                name='medicare'
                                                type='text'
                                                size='small'
                                                // label='Phone'
                                                sx={{ width: '8rem' }}
                                              />
                                            }
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Paper>
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Box sx={{ display: 'flex', gap: '1rem', m: '10px 50px 25px auto', width: '150px' }}>
                  <Button onClick={handleForm} variant='contained' sx={{ borderRadius: '25px', padding: '8px 40px' }}>Save</Button>
                  <Button onClick={handleClose} variant='contained' sx={{ borderRadius: '25px', padding: '8px 40px' }}>Cancel</Button>
                </Box>
              </Box>
            </Paper>

          </Box>
        </Modal>
      </Box>
    </>
  )
}