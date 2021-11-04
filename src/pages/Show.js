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


const Show = ({game}) => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


      return (
        <StyledMain>
        <section>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={16}>
                        <Item>
                                    <Card sx={{ maxWidth: 1000 }}>
                                        <CardMedia
                                            component="img"
                                            height="600"
                                            image={game.thumbnail}
                                            alt={game.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h2" component="div">
                                                {game.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                {game.short_description}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                Link to Game: <Link>{game.game_url}</Link>
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                Genre: {game.genre}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                Platform: {game.platform}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                Developer: {game.developer}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                Release Date: {game.release_date}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button>
                                            <Link>Add to Collection</Link>
                                            </Button>
                                        </CardActions>
                                    </Card>
            </Item>
            </Grid>
            </Grid>
            </Box>
        <br />
        </section>
    </StyledMain>
    )
}

export default Show;