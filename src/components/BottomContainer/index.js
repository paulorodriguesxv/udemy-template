import { BottomContainerStyle } from "../../theme/bottomContainerStyle"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

import CourseWhatWillLearn from '../Coursewhatwilllearn'
import CourseCurriculum from "../Coursecurriculum"
import CourseRequirements from "../Courserequirements"
import CourseDescription from "../CourseDescription"
import CourseInstructor from '../CourseInstructor'
import StudentFeedback from '../StudentFeedback'
import StudentTestimonial from '../StudentTestimonial'
import { useTheme } from "@emotion/react";
const BottomContainer = (data) => {

  const theme = useTheme()
  return (
    <>
    <BottomContainerStyle container spacing={0}>
    <Grid item xs={12} md={2}>
    </Grid>
    <Grid item xs={12} md={6} >
      <CourseWhatWillLearn data={data.whatWillLearn}></CourseWhatWillLearn>
      <CourseCurriculum data={data.curriculum}></CourseCurriculum>
      <CourseRequirements data={data.requirements}></CourseRequirements>
      <CourseDescription data={data.description}></CourseDescription>      
      <CourseInstructor  data={data.instructor}></CourseInstructor>
      <StudentFeedback data={data}></StudentFeedback>
      <StudentTestimonial data={data.testimonial}></StudentTestimonial>
    </Grid>    
    </BottomContainerStyle>
    <Typography variant="body2" sx={{fontSize:"8px", color:theme.palette.background.default}}>{data.version}</Typography>
    </>
  )

}

export default BottomContainer