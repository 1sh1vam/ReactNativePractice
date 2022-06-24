import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoal = (text) => {
    console.log('add btn clicke', text);
    setGoalList((prev) => [...prev, {text, id: prev.length + 1}]);
  };

  return (
    <View style={styles.container}>
      <GoalInput addGoal={addGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} />
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
  },
  goalsContainer: {
    flex: 8,
  },
});
