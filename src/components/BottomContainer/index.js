import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@emotion/react';
import { BottomContainerStyle } from '../../theme/bottomContainerStyle';

import CourseWhatWillLearn from '../CourseWhatWillLearn';
import CourseCurriculum from '../CourseCurriculum';
import CourseRequirements from '../CourseRequirements';
import CourseDescription from '../CourseDescription';
import CourseInstructor from '../CourseInstructor';
import StudentFeedback from '../StudentFeedback';
import StudentTestimonial from '../StudentTestimonial';

const BottomContainer = (data) => {
  const theme = useTheme();
  return (
    <>
      <BottomContainerStyle container spacing={0}>
        <Grid item xs={12} md={2} />
        <Grid item xs={12} md={6}>
          <CourseWhatWillLearn data={data.whatWillLearn} />
          <CourseCurriculum data={data.curriculum} />
          <CourseRequirements data={data.requirements} />
          <CourseDescription data={data.description} />
          <CourseInstructor data={data.instructor} />
          <StudentFeedback data={data} />
          <StudentTestimonial data={data.testimonial} />
        </Grid>
      </BottomContainerStyle>
      <Typography
        variant="body2"
        sx={{ fontSize: '8px', color: theme.palette.background.default }}
      >
        {data.version}
      </Typography>
    </>
  );
};

export default BottomContainer;
