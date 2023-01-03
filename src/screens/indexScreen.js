import React, { useContext } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import BlogContext from './context/BlogContext'
import { Context as BlogContext } from './context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)
    return <View>
        <Button title='Add Post' onPress={addBlogPost} />
        <FlatList
            data={state}
            keyExtractor={blogs => blogs.title}
            renderItem={({ item }) => {
                return <View style={styles.row}>
                    <Text>{item.title}</Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Feather name='error' />
                    </TouchableOpacity>
                </View>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen