import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { getPost } from '../repository/postRepository'


const PostDetailsPage = () => {
    const { slug } = useLocalSearchParams()
    const [post, setPost] = useState(getPost(slug))
    
    if (!post) {
        return <Text>Post not found!</Text>
    }

  return (
    <View
      style={{
        flex: 1,
        maxWidth: 960,
        width: "100%",
        marginHorizontal: "auto",
        backgroundColor: '#270247',
        padding: 20,
      }}
    >
          {/* <Stack.Screen options={{ title: post.title }} /> */}
          <Text style={{color: '#fff'}}>{ [post.title, post.description] }</Text>
    </View>
  )
}

export default PostDetailsPage