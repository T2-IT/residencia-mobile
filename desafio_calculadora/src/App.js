import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

let states = {
  displayValue: '',
  result: 0,
  operated: false,
  point: false,
};

const App = () => {
  const [operation, setOperation] = useState(states.displayValue);
  const [result, setResult] = useState(states.result);

  const handleDisplay = c => {
    states.displayValue = states.displayValue + c;
    setOperation(states.displayValue);
    setResult(states.result);
    states.operated = false;
  };

  function handleDel() {
    states = {
      displayValue: '',
      result: 0,
      operated: false,
      point: false,
    };
    setOperation(states.displayValue);
    setResult(states.result);
  }
  return (
    <View style={styles.container}>
      <View style={styles.calculation}>
        <TextInput
          style={styles.calculationText}
          value={operation}
          onChangeText={text => {
            setOperation(text);
          }}></TextInput>
      </View>
      <View style={styles.result}>
        <TextInput style={styles.resultText}>{result}</TextInput>
      </View>
      <View style={styles.buttons}>
        <View style={styles.number}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => {
                handleDisplay('7');
              }}>
              <View>
                <Text style={styles.customBtnText}>7</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG}
              title="8"
              onPress={() => {
                handleDisplay('8');
              }}>
              <View>
                <Text style={styles.customBtnText}>8</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG}
              title="9"
              onPress={() => {
                handleDisplay('9');
              }}>
              <View>
                <Text style={styles.customBtnText}>9</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.customBtnBG}
              title="4"
              onPress={() => {
                handleDisplay('4');
              }}>
              <View>
                <Text style={styles.customBtnText}>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG}
              title="5"
              onPress={() => {
                handleDisplay('5');
              }}>
              <View>
                <Text style={styles.customBtnText}>5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG}
              title="6"
              onPress={() => {
                handleDisplay('6');
              }}>
              <View>
                <Text style={styles.customBtnText}>6</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.customBtnBG}
              title="1"
              onPress={() => {
                handleDisplay('1');
              }}>
              <View>
                <Text style={styles.customBtnText}>1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG}
              title="2"
              onPress={() => {
                handleDisplay('2');
              }}>
              <View>
                <Text style={styles.customBtnText}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG}
              title="3"
              onPress={() => {
                handleDisplay('3');
              }}>
              <View>
                <Text style={styles.customBtnText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              title=","
              style={styles.customBtnBG}
              onPress={() => {
                handleDisplay('.');
              }}>
              <View>
                <Text style={styles.customBtnText}> , </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG}
              title="0"
              onPress={() => {
                handleDisplay('0');
              }}>
              <View>
                <Text style={styles.customBtnText}>0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.equalsButton}
              onPress={() => {
                states.result = eval(states.displayValue);
                states.operated = true;
                setResult(states.result);
              }}>
              <View>
                <Text style={styles.customBtnText}>=</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity
            onPress={() => {
              handleDisplay('+');
            }}
            style={styles.customBtnBG}>
            <View>
              <Text style={styles.sideButtonsText}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleDisplay('-');
            }}
            style={styles.customBtnBG}>
            <View>
              <Text style={styles.sideButtonsText}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleDisplay('*');
            }}
            style={styles.customBtnBG}>
            <View>
              <Text style={styles.sideButtonsText}>X</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleDisplay('/');
            }}
            style={styles.customBtnBG}>
            <View>
              <Text style={styles.sideButtonsText}>/</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDel} style={styles.deleteButton}>
            <View>
              <Text style={styles.deleteButtonText}>DEL</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  result: {
    flex: 2,
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'flex-end',
  },
  calculation: {
    flex: 2,
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'flex-end',
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row',
  },
  number: {
    flex: 3,
    backgroundColor: '#918e8e',
  },
  operations: {
    flex: 1,
    backgroundColor: '#5e5e5e',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resultText: {
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 40,
  },
  calculationText: {
    textAlignVertical: 'center',
    color: '#b5b5b5',
    fontSize: 25,
  },
  customBtnText: {
    fontSize: 40,
    fontWeight: '400',
    color: '#fff',
  },
  sideButtonsText: {
    fontSize: 25,
    fontWeight: '400',
    color: '#fff',
  },
  customBtnBG: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  equalsButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  deleteButtonText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
  },
  deleteButton: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
