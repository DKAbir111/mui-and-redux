import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useDispatch } from 'react-redux'
import { increment } from "../redux/counter/counterSlice"
export default function MainCard({ item }) {

    const dispatch = useDispatch()
    return (
        <Card >

            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image={item.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">

                        {item.title}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    onClick={() => dispatch(increment())}
                    size="small"
                    sx={{ backgroundColor: '#ff5a3d', color: 'white', '&:hover': { backgroundColor: 'darkorange' } }}
                >
                    Add to Cart
                </Button>

            </CardActions>
        </Card>
    )
}
