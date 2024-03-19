import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';

const FinanzasApp = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');


  const addTransaction = (type) => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Ingresa un monto válido mayor que cero.');
      return;
    }

    const newTransaction = {
      id: Math.random().toString(),
      type,
      amount: parsedAmount,
      description,
    };
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setAmount('');
    setDescription('');
  };

  const handleAmountChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setAmount(numericValue);
  };

  const calculateIncome = () => {
    return transactions.reduce((total, transaction) => {
      return transaction.type === 'income' ? total + transaction.amount : total;
    }, 0);
  };

  const calculateExpenses = () => {
    return transactions.reduce((total, transaction) => {
      return transaction.type === 'expense' ? total + transaction.amount : total;
    }, 0);
  };

  const calculateExtras = () => {
    return transactions.reduce((total, transaction) => {
      return transaction.type === 'extra' ? total + transaction.amount : total;
    }, 0);
  };

  const calculateBalance = () => {
    return calculateIncome() - calculateExpenses() + calculateExtras();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Finanzas App</Text>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total Ingresos: ${calculateIncome()}</Text>
        <Text style={styles.summaryText}>Total Egresos: ${calculateExpenses()}</Text>
        <Text style={styles.summaryText}>Total Extras: ${calculateExtras()}</Text>
        <Text style={styles.balanceText}>Saldo: ${calculateBalance()}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Monto"
          keyboardType="numeric"
          value={amount}
          onChangeText={handleAmountChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Agregar Ingreso" onPress={() => addTransaction('income')} />
          <Button title="Agregar Egreso" onPress={() => addTransaction('expense')} />
          <Button title="Agregar Extra" onPress={() => addTransaction('extra')} />
        </View>
      </View>

      <FlatList
        style={styles.transactionList}
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionAmount}>{item.type === 'income' ? '+' : item.type === 'extra' ? '+' : '-'} ${item.amount}</Text>
            <Text style={styles.transactionDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  summaryContainer: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 8,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
    borderRadius: 4,
  },
  transactionList: {
    marginBottom: 16,
  },
  transactionItem: {
    marginBottom: 8,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 4,
    elevation: 2,
  },
  transactionAmount: {
    fontSize: 16,
    marginBottom: 4,
  },
  transactionDescription: {
    fontSize: 14,
  },
});

export default FinanzasApp;
