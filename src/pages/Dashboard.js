import { StyledMain } from '../styles'
import {useState} from 'react';

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
            <h1>Dashboard</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange}
                        value={formState.id}
                        name='id'
                        type='text'
                        placeholder='id'
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
        </StyledMain>
    );
};

export default Dashboard;