import {Link} from 'react-router-dom';
import { StyledMain } from "../styles";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Show = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      return (
        <StyledMain>
        <section>
            { props.game.map(game => {
                return (
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Item>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={game.thumbnail}
                                            alt={game.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {game.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {game.shortDescription}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link to={`/games/${game.id}`} >More Details</Link>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                )}
            ) 
        }
        <br />
        </section>
    </StyledMain>
    )
}

export default Show;