import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const buttons = [
    'AC',
    'DEL',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '.',
    '0',
    '+/-',
    '=',
  ];
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, SetLastNumber] = useState('');

  return (
    <View>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button,{backgroundColor: '#cdd0d1'}]}>
            <Text style={[styles.textButton, {color: "write", fontSize: 30}]}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
  function handleInput(buttonPressed) {
    if (
      (buttonPressed === '+') |
      (buttonPressed === '-') |
      (buttonPressed === '*') |
      (button === '/')
    ) {
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
      return;
    }
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'AC':
        SetLastNumber('');
        SetCurrentNumber('');
        return;
      case '=':
        SetLastNumber(currentNumber + '=');
        calculator();
        return;
      case '+/-':
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }
  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    const firstNumber = parserFloat(splitNumbers[0]);
    const lastNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];

    switch (operator) {
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString());
        return
      case '-':
        setCurrentNumber((firstNumber - lastNumber).toString());
        return
      case '*':
        setCurrentNumber((firstNumber * lastNumber).toString());
        return
      case '/':
        if (lastNumber == 0) {
          setCurrentNumber('Inválido');
        } else {
          setCurrentNumber((firstNumber / lastNumber).toString());
          return
        }
    }
  }
}
const styles = StyleSheet.create({
  result: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 2,
    justifyContent: 'center ',
    alignItems: 'center',
    backgroundColor: 'write',
    minHeinght: 80,
    minWidth: 80,
  },
  textButton: {
    color: '#5b5b5b',
    fonSize: 25,
  },
    resultText: {
   color:"#282F38#",
   margin: 10,
   fontSize: 40
 },
 historyText: {
   color: "#7c7c7c",
   marginRight: 10,
   alignSelf: 'flex-end',
 },
});


