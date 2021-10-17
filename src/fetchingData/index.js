import React,{useState,useEffect} from "react"
import axios from "axios"
import {
    Box,
    UnorderedList,
    ListItem
} from "@chakra-ui/react"


function Axioss(){
  const [posts, setPosts]= useState([])
 

  useEffect(() => {
    axios.get ('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log(res)
      setPosts(res.data)
    })
    .catch(err=>{
      console.log(err)
      
    })

  })
  return(
   
  <Box> 
    <UnorderedList>{posts.map(post=>(
     <ListItem key={post.id}>{post.title} </ListItem>
    ))}
    

    </UnorderedList>
      </Box>
    )
}
  export default Axioss