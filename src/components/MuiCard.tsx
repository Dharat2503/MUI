import { Box, Card, CardContent, Typography,CardActions, Button, CardMedia} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
        <CardMedia
        sx={{ height: 300 }}
        image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
        title="green iguana"
      />
            <CardContent>
                <Typography gutterBottom variant='h3' component='div'>
                  Dhara Thakkar        
                </Typography>
                <Typography variant='body2' color='text.secondary'>
               dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara dhara
                </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' startIcon={<ShareIcon/>}>Share</Button>
                <Button size='small' endIcon={<LocalLibraryIcon/>}>Learn More</Button>
                
            </CardActions>
        </Card>

    </Box>
  )
}

export default MuiCard
