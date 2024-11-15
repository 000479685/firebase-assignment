/* eslint-disable react/prop-types */
import { Button, Card, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function FavouriteCheck({favouriteStatus})
{
    if (favouriteStatus)
        {
            return <FavoriteIcon fontSize='inherit' sx={{color:'#c91010'}}/>
        }
        else
        {
            return <FavoriteBorderIcon fontSize='inherit'/>
        }
}

const BlogCard = (props) => {
    const { blog, deleteBlog = () => {}, favouriteBlog = () => {}, showDeleteIcon = true, showFavouriteIcon = true } = props;
    // Favorites Table as well in the database

    const navigate = useNavigate();


    return (
        <Card style={{ position: 'relative' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={blog.image}
                title="green iguana"
            />
            {
                showDeleteIcon && <IconButton sx={{boxShadow: 3}} style={{ position: 'absolute', right: '10px', top: '5px' }} aria-label="delete" size="small" onClick={() => deleteBlog(blog.id)}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            }
            
            {
                showFavouriteIcon && <IconButton sx={{boxShadow: 3}} style={{ position: 'absolute', left: '10px', top: '5px' }} aria-label="favourite" size="small" onClick={() => favouriteBlog(blog.id)}>
                    <FavouriteCheck favouriteStatus={blog.favourite}/>
                
            </IconButton>
            }
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {blog.description}
                </Typography>
                <Chip label={blog.category} variant="outlined" />

            </CardContent>
            <CardActions>                
                <Button color='secondary' variant='contained' onClick={() => navigate(`/viewblogs/${blog.id}`)}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default BlogCard