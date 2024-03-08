import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { getPost } from '../repository/postRepository'
import Markdown from 'react-native-markdown-display'

const PostDetailsPage = () => {
    const { slug } = useLocalSearchParams()
    const [post, setPost] = useState(getPost(slug))
    
    if (!post) {
        return <Text>Post not found!</Text>
    }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#F7A570',
      }}
      contentContainerStyle={{
        maxWidth: 960,
        width: "100%",
        marginHorizontal: "auto",
        padding: 20,
      }}
    >
          {/* <Stack.Screen options={{ title: post.title }} /> */}
      <Text style={{
        marginBottom: 20, fontSize: 30, color: '#111'
      }}>
        {post.title}
      </Text>
      <Markdown>{ post.content }</Markdown>
    </ScrollView>
  )
}

export default PostDetailsPage