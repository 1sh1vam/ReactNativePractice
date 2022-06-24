import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    goalItem: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#2D5C54',
        margin: 5,
      },
      goalText: {
        color: '#fff',
      },
})

export default GoalItem