import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goalItem}>
    <Pressable style={({ pressed }) => pressed && styles.pressable}>
        <Text style={styles.goalText}>{text}</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 10,
        backgroundColor: '#2D5C54',
        margin: 5,
      },
      goalText: {
        padding: 15,
        color: '#fff',
      },
      pressable: {
        backgroundColor: '#3ae056',
        opacity: 0.5,
      }
})

export default GoalItem