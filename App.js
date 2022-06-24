import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const addGoal = (text) => {
    console.log('add btn clicke', text);
    setGoalList((prev) => [...prev, {text, id: prev.length + 1}]);
    closeModal();
  };

  const deleteItem = (id) => setGoalList((prev) => prev.filter((goal) => goal.id !== id));

  return (
    <View style={styles.container}>
      <Button onPress={() => setShowModal(true)} title='Add new goal!' color="#6f6aac" />
      <GoalInput visible={showModal} closeModal={closeModal} addGoal={addGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => (
            <GoalItem id={itemData.item.id} deleteItem={deleteItem} text={itemData.item.text} />
          )}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 8,
  },
});
