import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/calculator/ButtonCalc';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [display, setDisplay] = useState('22');
  const [result, setResult] = useState('0');

  const cleanDisplay = () => {
    setDisplay('0');
  };

  const buildNumber = (numberText: string) => {
    // not allow double .
    if (display.includes('.') && numberText === '.') { return; }

    // not allow add other 0 in the left without a .
    if (['0', '-0'].some(d => d === display)) {
      if (numberText === '0') { return; }
      if (/[1-9]/.test(numberText)) {
        setDisplay(/[-0]/.test(display) ? '-' + numberText : numberText);
        return;
      }
    }
    setDisplay(display + numberText);
  };

  const togglePositiveNegative = () => {
    if (display.includes('-')) {
      setDisplay(display.replace('-', ''));
    } else {
      setDisplay('-' + display);
    }
  };

  const btnDeleteOneChar = () => {
    let newValue;
    const justQuitAChar = () => display.substring(0,display.length - 1) || '0';

    newValue = display.length > 2
      ? justQuitAChar()
      : /-[\d]?/.test(display) ? '0' : justQuitAChar();

    setDisplay(newValue);
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultSmall}>{result}</Text>
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{display}</Text>
      {/* Botton */}

      <View style={styles.row}>
        <ButtonCalc text="C" action={cleanDisplay} />
        <ButtonCalc text="+/-" action={togglePositiveNegative} />
        <ButtonCalc text="del" action={btnDeleteOneChar} />
        <ButtonCalc color="orange" text="/" action={cleanDisplay} />
      </View>
      <View style={styles.row}>
        <ButtonCalc color="dark" text="7" action={buildNumber} />
        <ButtonCalc color="dark" text="8" action={buildNumber} />
        <ButtonCalc color="dark" text="9" action={buildNumber} />
        <ButtonCalc color="orange" text="*" action={cleanDisplay} />
      </View>
      <View style={styles.row}>
        <ButtonCalc color="dark" text="4" action={buildNumber} />
        <ButtonCalc color="dark" text="5" action={buildNumber} />
        <ButtonCalc color="dark" text="6" action={buildNumber} />
        <ButtonCalc color="orange" text="-" action={cleanDisplay} />
      </View>
      <View style={styles.row}>
        <ButtonCalc color="dark" text="1" action={buildNumber} />
        <ButtonCalc color="dark" text="2" action={buildNumber} />
        <ButtonCalc color="dark" text="3" action={buildNumber} />
        <ButtonCalc color="orange" text="+" action={cleanDisplay} />
      </View>
      <View style={styles.row}>
        <ButtonCalc width={2} color="dark" text="0" action={buildNumber} />
        <ButtonCalc color="dark" text="." action={buildNumber} />
        <ButtonCalc color="orange" text="=" action={cleanDisplay} />
      </View>
    </View>
  );
};
