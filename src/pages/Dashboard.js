import { StyledMain } from '../styles'
import {useState} from 'react';
import {Link} from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Dashboard = (props) => {
    const [formState, setFormState] = useState({
        id: '',
        title: '',
        thumbnail: '',
        status: '',
        shortDescription: '',
        description: '',
        genre: '',
        platform: '',
        publisher: '',
        developer: '',
        releaseDate: '',
        minimumRequirements: '',
        screenshot: '',
    });

    const handleChange = event => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.createFavGame(formState);
        setFormState({
            id: '',
            title: '',
            thumbnail: '',
            status: '',
            shortDescription: '',
            description: '',
            genre: '',
            platform: '',
            publisher: '',
            developer: '',
            releaseDate: '',
            minimumRequirements: '',
            screenshot: '',
        });
    }




    return (
        <StyledMain>
            <h1>My Games Collection</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange}
                        value={formState.id}
                        name='id'
                        type='text'
                        placeholder='id'
                        required='true'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.title}
                        name='title'
                        type='text'
                        placeholder='title'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.thumbnail}
                        name='thumbnail'
                        type='text'
                        placeholder='thumbnail'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.status}
                        name='status'
                        type='text'
                        placeholder='status'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.shortDescription}
                        name='shortDescription'
                        type='text'
                        placeholder='shortDescription'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.description}
                        name='description'
                        type='text'
                        placeholder='description'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.genre}
                        name='genre'
                        type='text'
                        placeholder='genre'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.platform}
                        name='platform'
                        type='text'
                        placeholder='platform'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.publisher}
                        name='publisher'
                        type='text'
                        placeholder='publisher'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.developer}
                        name='developer'
                        type='text'
                        placeholder='developer'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.releaseDate}
                        name='releaseDate'
                        type='text'
                        placeholder='releaseDate'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.minimumRequirements}
                        name='minimumRequirements'
                        type='text'
                        placeholder='minimumRequirements'
                    />
                    <input 
                        onChange={handleChange}
                        value={formState.screenshot}
                        name='screenshot'
                        type='text'
                        placeholder='screenshot'
                    />
                    <input type="submit" value='Add Game' />
                </form>
            </section>
            <br />
            <br />
            <section>
                <Card sx={{ maxWidth: 345 }}>
                    {
                        props.favGames.map(fg => (
                            <>
                            <CardMedia
                                component="img"
                                height="200"
                                image={fg.thumbnail}
                                alt={fg.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {fg.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {fg.shortDescription}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to='/:id'>More Details</Link>
                            </CardActions>
                            </>
                        ))
                    }
                </Card>
                <br />
            </section>
        </StyledMain>
    );
};

// image="https://images7.alphacoders.com/296/thumb-1920-296710.jpg"
// <Typography gutterBottom variant="h5" component="div">
// Dark Orbit Reloaded
// </Typography>
// <Typography variant="body2" color="text.secondary">
// Dark Orbit Reloaded is a browser based 3d space-combat MMO with a massive playerbase and endless customization. originally launched in 2006, Dark Orbit was recently revamped with 3d graphics, new interface and new maps.
// </Typography>

export default Dashboard;