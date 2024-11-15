import { collection, deleteDoc, doc, getDocs, getDoc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig';
import { Box, Divider, Typography } from '@mui/material';
import BlogCard from '../components/BlogCard';
import Alert from '../components/Alert';

const ViewBlogFavouritesPage = () => {

    const blogCollectionReference = collection(db, "blogs");
    const [blogsList, setBlogsList] = useState([]);
    const [alertConfig, setAlertConfig] = useState({});

    const getBlogsList = async () => {
        const blogs = await getDocs(blogCollectionReference);
        const extractedBlogs = blogs.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })

        setBlogsList(extractedBlogs);
        console.log(extractedBlogs, 'blogs')
    }

    const deleteBlog = async (id) => {
        // First get the doc you want to delete
        const blogDoc = doc(db, "blogs", id); // We will get the  blog we are trying to delete.

        console.log(blogDoc, 'blogDoc'); 
        try {
            await deleteDoc(blogDoc);
            setAlertConfig({...alertConfig, message:'Succesfully deleted the blog', color: 'success', isOpen: true })
        } catch (error) {
            setAlertConfig({...alertConfig, message:'Error Deleting the blog', color: 'error', isOpen: true })
        }
    }
    
    const favouriteBlog = async (id) =>
        {
            const blogDoc = doc(db, "blogs", id); 
    
            console.log(blogDoc, 'blogDoc');         
            try {            
                const docData = await getDoc(blogDoc)
                // console.log(docData.data(), "This thing I found")
                const flag = !docData.data()['favourite']
                await setDoc(blogDoc, {...docData.data(), favourite: flag})            
                setAlertConfig({...alertConfig, message:`Succesfully ${flag ? "favourited" : "unfavourited"} the blog`, color: 'success', isOpen: true })
            } catch (error) {
                setAlertConfig({...alertConfig, message:'Error favouriting the blog', color: 'error', isOpen: true })
            }
        }

    useEffect(() => {
        getBlogsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alertConfig])

    return (
        <Box display="flex" flexDirection="column" gap="20px">
            <Typography variant="h3">View Blogs</Typography>
            <Divider />
            <Box display="grid" gridTemplateColumns="33% 33% 33%" gap="12px">
                {
                    blogsList.map((blog, index) => {
                        if(blog['favourite']) return <BlogCard key={index} blog={blog} deleteBlog={deleteBlog} favouriteBlog={favouriteBlog}/>
                        return null
                    })
                }
            </Box>
            <Alert alertConfig={alertConfig} />
        </Box>
    )
}

export default ViewBlogFavouritesPage