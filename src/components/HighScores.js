import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DEFAULT_TOTAL_NUMBER = 10;

const Row = ({ highScore, index }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.index}>{index + 1}.</Text>
      <Text style={[styles.score, styles.bold]}>{highScore.score}</Text>
      <Text style={styles.date}>{highScore.createdAt.toDateString()}</Text>
    </View>
  );
}

const TableHeader = () => {
  return (
    <View style={[styles.row, styles.headerRow]}>
      <Text style={[styles.index, styles.thItem]}>#</Text>
      <Text style={[styles.score, styles.thItem]}>Words</Text>
      <Text style={[styles.date, styles.thItem]}>Date</Text>
    </View>
  );
}

const getTopScores = (highScores, totalNumber) =>
  highScores
    .sort((first, second) => second.score - first.score)
    .slice(0, totalNumber);

export default HighScores = ({ data, totalNumber }) => {
  const highScores = getTopScores(data, totalNumber || DEFAULT_TOTAL_NUMBER);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>High Scores</Text>
      <TableHeader />
      {
        highScores.map((highScore, index) =>
          <Row highScore={highScore} index={index} key={index} />)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginBottom: 15
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15
  },
  headerRow: {
    marginBottom: 5
  },
  row: {
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  thItem: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  index: {
    width: 40,
    fontSize: 12,
    textAlign: 'center'
  },
  score: {
    width: 60,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  date: {
    width: 120,
    textAlign: 'center'
  }
});
