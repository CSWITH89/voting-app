import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card } from './Card'

const CardGrid = () => {
const renderCard = ({item}) => (
    <Card></Card>
);

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item,index) => index.toString()}
            />
        </View>
    )
}

export default CardGrid
