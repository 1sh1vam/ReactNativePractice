import React, { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ visible, addGoal, closeModal }) => {
  const [text, setText] = useState('');

  const handleGoalInp = (enteredText) => {
    setText(enteredText);
  };

  const handleAddGoal = () => {
    addGoal(text);
    setText('');
  }
  return (
    <Modal visible={visible} animationType='slide'>
        <View style={styles.inputContainer}>
        <TextInput
            onChangeText={handleGoalInp}
            value={text}
            placeholder="Your course goal!"
            style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button onPress={handleAddGoal} title="Add Goal" />
            </View>
            <View style={styles.button}>
                <Button onPress={closeModal} title="Cancel" />
            </View>
        </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    marginHorizontal: 16,
  }
});

export default GoalInput;
