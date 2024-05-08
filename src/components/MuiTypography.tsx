
import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1  dhara</Typography>
      <Typography variant="h2">h2  dhara</Typography>
      <Typography variant="h3">h3  dhara</Typography>
      <Typography variant="h4">h4  dhara</Typography>
      <Typography variant="subtitle2" gutterBottom>sub-title gutterbottom for thr bottom margin </Typography>
      <Typography variant="h5">h5  dhara</Typography>
      <Typography variant="h6" >h6  dhara</Typography>
      
      {/* automatic font changs */}
      <Typography variant="subtitle1" >sub title dhara</Typography>

        {/* change font as body direct give in p tage  */}
      <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, amet nesciunt perspiciatis inventore est pariatur doloremque a quidem, fugiat voluptate expedita! Nostrum culpa, maiores hic doloremque dignissimos nesciunt tempore at!</Typography> 
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos labore in itaque eos tempora quidem quia, veniam vel laboriosam deserunt. Omnis incidunt id voluptatem corporis blanditiis, expedita esse modi temporibus.</Typography>
   
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>

      
    </div>
  )
}

export default MuiTypography
