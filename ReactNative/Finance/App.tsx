import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
//import {MaterialIcons} from '@expo/vector-icons';
import {
  fetchTransactions,
  initDatabase,
  saveTransaction,
  deleteTransactions,
  updateTransactionPay,
  updateTransactionsPay,
} from './database.tsx';
import { TextInputComponents } from './components/TextInput/TextInputComponent.tsx';

interface Transaction {
  id: string;
  type: 'income' | 'expense' | 'extra';
  amount: number;
  description: string;
  date: string;
  pay: number;
}

const FinanzasApp: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>(
    [],
  );
  let pc = false ? 1 : 0

  useEffect(() => {
    const initializeDatabase = async () => {
      await initDatabase();
      const fetchedTransactions = await fetchTransactions();
      setTransactions(fetchedTransactions);
    };
    initializeDatabase();
  }, []);

  useEffect(() => {
    const handleSelectedTransactions = (
      rangeStart: number,
      rangeEnd: number,
    ) => {
      const filteredTransactions = transactions.filter(item => {
        const day = parseInt(item.date.split('/')[pc]);
        return day >= rangeStart && day <= rangeEnd && item.type === 'expense';
      })
      .map(item => item.id);
      const allSelected = filteredTransactions.every(id =>
        selectedTransactions.includes(id),
      );
      console.log(selectedTransactions)
      if (
        allSelected &&
        filteredTransactions.length > 0 &&
        selectedTransactions.length > 0
      ) {
        setSelectedTransactions(prevSelected => {
         /*  const deselectedIds = filteredTransactions.filter(
            id => !prevSelected.includes(id),
            )
            console.log(selectedTransactions) */
            updateTransactionsPay(selectedTransactions, 0); 
          return prevSelected.filter(id => !filteredTransactions.includes(id));
        });
      }
    };

    handleSelectedTransactions(1, 15);
    handleSelectedTransactions(16, 31);
  }, [transactions, selectedTransactions]);

  const updatePay = async (id: string, pay: number) => {
    try {
      await updateTransactionPay(id, pay);
      const updatedTransactions = await fetchTransactions();
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error('Error updating transaction pay: ', error);
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const deleteTransaction = async (id: any) => {
    try {
      await deleteTransactions(id);
      setTransactions(prevTransactions =>
        prevTransactions.filter((item: any) => item.id !== id),
      );
    } catch (error) {
      console.error('Error deleting transaction: ', error);
    }
  };

  const toggleTransactionSelection = (id: string) => {
    setSelectedTransactions(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(item => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const addTransaction = (type: 'income' | 'expense' | 'extra') => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return;
    }

    const newTransaction: Transaction = {
      id: Math.random().toString(),
      type,
      amount: parsedAmount,
      description,
      date: date.toLocaleDateString(),
      pay: 0
    };

    saveTransaction(
      type,
      parsedAmount,
      description,
      date.toLocaleDateString(),
      0,
    );
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
    setAmount('');
    setDescription('');
  };

  const handleAmountChange = (text: string) => {
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
      return transaction.type === 'expense'
        ? total + transaction.amount
        : total;
    }, 0);
  };

  const calculateExtras = () => {
    return transactions.reduce((total, transaction) => {
      return transaction.type === 'extra' ? total + transaction.amount : total;
    }, 0);
  };

  const calculateBalance = () => {
    return calculateIncome() - calculateExpenses();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.summaryContainer2}>
        <Text style={styles.title}>Finanzas App</Text>
        <Text style={{ fontSize: 12, textAlign: 'center', marginBottom: 10}}>@copyright alexdevorigin1</Text>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Total Ingresos: ${calculateIncome()}
        </Text>
        <Text style={styles.summaryText}>
          Total Egresos: ${calculateExpenses()}
        </Text>
        <Text style={styles.summaryText}>Ahorros: ${calculateExtras()}</Text>
        <Text style={styles.balanceText}>Saldo: ${calculateBalance()}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInputComponents
          types="numeric"
          styles={styles}
          handleChange={handleAmountChange}
          value={amount}
          placeholder="Monto"
        />
        <TextInput
          style={[styles.input, {backgroundColor: '#f2f2f2'}]}
          placeholder="Monto"
          keyboardType="numeric"
          value={amount}
          onChangeText={handleAmountChange}
        />
        <TextInput
          style={[styles.input, {backgroundColor: '#f2f2f2'}]}
          placeholder="Descripción"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TextInput
          style={[styles.input, {color: '#888888', backgroundColor: '#f2f2f2'}]}
          placeholder="Fecha"
          value={date.toLocaleDateString()}
          editable={false}
        />
        <View>
          <View style={styles.buttonDate}>
            <Button
              title="Seleccionar Fecha"
              onPress={() => setShowDatePicker(true)}
            />
          </View>
          {!!showDatePicker ? (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          ): null}
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonIncome}>
            <Button title="Ingreso" onPress={() => addTransaction('income')} />
          </View>
          <View style={styles.buttonExpense}>
            <Button title="Egreso" onPress={() => addTransaction('expense')} />
          </View>
          <View style={styles.buttonExtra}>
            <Button title="Extra" onPress={() => addTransaction('extra')} />
          </View>
        </View>
      </View>
      <Text
        style={{textAlign: 'center', fontWeight: 'bold', paddingBottom: 20}}>
        Pagadas:{' '}
        {
          transactions.filter(
            item =>
              item.type === 'expense' && selectedTransactions.includes(item.id),
          ).length
        }
        /{transactions.filter(item => item.type === 'expense').length}
      </Text>
      <Text style={styles.pay30}>Pagos del 30</Text>
      <Text style={styles.pay15}>Pagos del 15</Text>
      <View style={{flexDirection: 'row'}}>
        <FlatList
          style={[styles.transactionList, {marginRight: 10}]}
          data={transactions.filter(item => {
            const day = parseInt(item.date.split('/')[pc]);
            return Array.from({length: 15}, (_, i) => i + 1).some(
              num => day === num,
            );
          })}
          renderItem={({item}) => (
            <View style={styles.transactionItem}>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.transactionAmount,
                    item.type === 'income' && styles.incomeAmount,
                    item.type === 'extra' && styles.extraAmount,
                    item.type !== 'income' &&
                      item.type !== 'extra' &&
                      styles.expenseAmount,
                  ]}>
                   {item.type === 'expense' ? <TouchableOpacity
                      onPress={() => { 

                        selectedTransactions.includes(item.id)
                          toggleTransactionSelection(item.id);
                          const newPayValue = item.pay === 1 ? 0 : 1;
                          updatePay(item.id, newPayValue);
                        
                      }}>
                      <Text>{item.pay === 1 ? '☑️ ' : '⬜️ '}</Text>
                    </TouchableOpacity> : null }
                  {item.type === 'income'
                    ? '+'
                    : item.type === 'extra'
                    ? '+'
                    : '-'}{' '}
                  ${item.amount}
                </Text>
              </TouchableOpacity>
              <Text style={styles.transactionDescription}>Descripción: {item.description}</Text>
              <Text style={styles.transactionDate}>Fecha: {item.date}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => deleteTransaction(item.id)}
                  style={styles.deleteButton}>
                  <Text>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <FlatList
          style={[styles.transactionList, {marginRight: 10}]}
          data={transactions.filter(item => {
            const day = parseInt(item.date.split('/')[pc]);
            return Array.from({length: 16}, (_, i) => i + 16).some(
              num => day === num,
            );
          })}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.transactionItem}>
                <Text
                  style={[
                    styles.transactionAmount,
                    item.type === 'income' && styles.incomeAmount,
                    item.type === 'extra' && styles.extraAmount,
                    ...(item.type !== 'income' && item.type !== 'extra'
                      ? [styles.expenseAmount]
                      : []),
                  ]}>
                   {item.type === 'expense' ? <TouchableOpacity
                        onPress={() => { 
                
                            selectedTransactions.includes(item.id)
                            toggleTransactionSelection(item.id);
                            const newPayValue = item.pay === 1 ? 0 : 1;
                            updatePay(item.id, newPayValue);
                   
                        }}>
                        <Text>{item.pay === 1 ? '☑️ ' : '⬜️ '}</Text>
                      </TouchableOpacity> : null }
                  {item.type === 'income'
                    ? '+'
                    : item.type === 'extra'
                    ? '+'
                    : '-'}{' '}
                  ${item.amount}
                </Text>
                <Text style={styles.transactionDescription}>
                  Descripción: {item.description}
                </Text>
                <Text style={styles.transactionDate}>Fecha: {item.date}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => deleteTransaction(item.id)}
                    style={styles.deleteButton}>
                    <Text>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonDate: {
    backgroundColor: '#87CEFA',
  },
  deleteButton: {
    position: 'absolute',
    top: -60,
    right: 0,
    borderRadius: 50,
  },
  incomeAmount: {
    color: 'green',
  },
  extraAmount: {
    color: 'blue',
  },
  expenseAmount: {
    color: 'red',
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
  buttonContainer: {
    marginTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#B0E0E6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  summaryContainer: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  summaryContainer2: {
    marginTop: 20,
    marginBottom: 16,
    backgroundColor: '#ffffff',
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
  transactionDate: {
    fontSize: 14,
  },
  buttonExtra: {
    marginBottom: 0,
    width: 115,
    backgroundColor: '#FFA07A',
  },
  buttonExpense: {
    marginBottom: 0,
    width: 115,
    backgroundColor: '#FF6347',
  },
  buttonIncome: {
    marginBottom: 0,
    width: 115,
    backgroundColor: '#90EE90',
  },
  pay15: {
    marginBottom: 10,
    marginLeft: 40,
    fontSize: 16,
  },
  pay30: {
    marginBottom: -20,
    marginLeft: 230,
    fontSize: 16,
  },
});

export default FinanzasApp;
