import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl
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
import tw from 'twrnc';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { ButtonComponent } from './components/Button/ButtonComponent.tsx';
import { convertCurrency } from './utils/currencyFormat.ts';
import { TitleComponent } from './components/Title/TitleComponent.tsx';

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
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [updatedMessage, setUpdatedMessage] = useState<string>('');

  const initializeDatabase = async () => {
    await initDatabase();
    const fetchedTransactions = await fetchTransactions();
    setTransactions(fetchedTransactions);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await initializeDatabase();
    setRefreshing(false);
    setUpdatedMessage('Refrescado!');
    showMessage({
      message: "Refrescado",
      type: "success",
      icon: "success",
      duration: 2000,
    });
    setTimeout(() => {
      setUpdatedMessage('');
    }, 2000);
  };

  let pc = true ? 1 : 0

  useEffect(() => {
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
          updateTransactionsPay(selectedTransactions, 0);
          showMessage({
            message: "Transaccion seleccionada",
            type: "success",
            icon: "success",
            duration: 2000,
          })
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

      showMessage({
        message: "Elemento eliminado",
        type: "danger",
        icon: "danger",
        duration: 2000,
      });
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
    if (isNaN(parsedAmount) || parsedAmount <= 0 || !description) {
      showMessage({
        message: "Por favor, rellene todos los campos",
        type: "danger",
        icon: "danger",
        duration: 2000,
      });
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

    showMessage({
      message: "Elemento añadido",
      type: "success",
    });
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
    <ScrollView contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
      <FlashMessage position="top" />
      <View style={styles.summaryContainer2}>
        <TitleComponent text="Finanzas App" />
        <TitleComponent text="@copyright alexdevorigin1" stylesExt={{ fontSize: 12, textAlign: 'center', marginBottom: 10 }} />
      </View>
      
      <View style={styles.summaryContainer}>
        <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>
          Total Ingresos: <Text style={{ fontFamily: 'Montserrat-SemiBold', color: calculateIncome() > 0 ? 'green' : 'red' }}>{convertCurrency(calculateIncome())}</Text>
        </Text>
        <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>
          Total Egresos: <Text style={{ fontFamily: 'Montserrat-SemiBold', color: calculateExpenses() > 0 ? 'red' : 'green' }}>{convertCurrency(calculateExpenses())}</Text>
        </Text>
        <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>Ahorros: <Text style={{ fontFamily: 'Montserrat-SemiBold', color: calculateExtras() > 0 ? '#FF8C00' : 'grey' }}>{convertCurrency(calculateExtras())}</Text></Text>
        <Text style={styles.balanceText}>Saldo: <Text style={{ fontFamily: 'Montserrat-SemiBold', color: calculateBalance() > 0 ? 'green' : 'red' }}>{convertCurrency(calculateBalance())}</Text></Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInputComponents
          types="numeric"
          handleChange={handleAmountChange}
          value={amount}
          placeholder="Monto"
        />
        <TextInputComponents
          handleChange={text => setDescription(text)}
          multiline={true}
          autoCorrect={true}
          value={description}
          placeholder="Descripción"
        />
        <TextInputComponents
          stylesExt={tw`text-center bg-slate-200 text-lg`}
          value={date.toLocaleDateString()}
          placeholder="Fecha"
          editable={false}
        />
        <View>
          <View style={styles.buttonDate}>
            <ButtonComponent title="Seleccionar Fecha" type="primary" onPress={() => setShowDatePicker(true)} />
          </View>
          {!!showDatePicker ? (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          ) : null}
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonIncome}>
            <ButtonComponent title="Ingreso" type="success" onPress={() => addTransaction('income')} />
          </View>
          <View style={styles.buttonExpense}>
            <ButtonComponent title="Egreso" type="error" onPress={() => addTransaction('expense')} />
          </View>
          <View style={styles.buttonExtra}>
            <ButtonComponent title="Extra" type="warning" onPress={() => addTransaction('extra')} />
          </View>
        </View>
      </View>
      <Text
        style={{ textAlign: 'center', fontWeight: 'bold', paddingBottom: 20 }}>
        Pagos pendientes:{' '}
        {
          transactions.filter(
            item =>
              item.type === 'expense' && selectedTransactions.includes(item.id),
          ).length
        }
        /{transactions.filter(item => item.type === 'expense').length}
      </Text>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', paddingBottom: 10, marginBottom: 10, backgroundColor: '#5C62D6', color: 'white', padding: 10 }}>1 - 15 {`  🡰  `} 📆Rangos {`  🡲  `} 16 - 31</Text>
      <View style={{ flexDirection: 'row' }}>
        <FlatList
          style={[styles.transactionList, { marginRight: 10 }]}
          data={transactions.filter(item => {
            const day = parseInt(item.date.split('/')[pc]);
            return Array.from({ length: 15 }, (_, i) => i + 1).some(
              num => day === num,
            );
          })}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <TouchableOpacity
                style={{ zIndex: 999 }}
                onPress={() => deleteTransaction(item.id)}>
                <Text style={{ position: 'absolute', top: 0, right: 0 }}>❌</Text>
              </TouchableOpacity>
              <Text>
                {item.type === 'expense' ? <TouchableOpacity
                  onPress={() => {
                    selectedTransactions.includes(item.id)
                    toggleTransactionSelection(item.id);
                    const newPayValue = item.pay === 1 ? 0 : 1;
                    updatePay(item.id, newPayValue);

                  }}>
                  <Text>{item.pay === 1 ? '✅ ' : '⬜️ '}</Text>
                </TouchableOpacity> : null}
              </Text>
              <Text style={[
                  styles.transactionAmount,
                  item.type === 'income' && styles.incomeAmount,
                  item.type === 'extra' && styles.extraAmount,
                  item.type !== 'income' &&
                  item.type !== 'extra' &&
                  styles.expenseAmount,
                ]}>
                {item.type === 'income'
                  ? '+'
                  : item.type === 'extra'
                    ? '+'
                    : '-'}{' '}
                {convertCurrency(item.amount)}
              </Text>
              <TitleComponent stylesExt={styles.transactionDescription} text={`Descripción: ${item.description}`} />
              <TitleComponent stylesExt={styles.transactionDate} text={`Fecha: ${item.date}`} />
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <FlatList
          style={[styles.transactionList]}
          data={transactions.filter(item => {
            const day = parseInt(item.date.split('/')[pc]);
            return Array.from({ length: 16 }, (_, i) => i + 16).some(
              num => day === num,
            );
          })}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <TouchableOpacity
                style={{ zIndex: 999 }}
                onPress={() => deleteTransaction(item.id)}>
                <Text style={{ position: 'absolute', top: 0, right: 0 }}>❌</Text>
              </TouchableOpacity>
              <Text>
                {item.type === 'expense' ? <TouchableOpacity
                  onPress={() => {

                    selectedTransactions.includes(item.id)
                    toggleTransactionSelection(item.id);
                    const newPayValue = item.pay === 1 ? 0 : 1;
                    updatePay(item.id, newPayValue);

                  }}>
                  <Text>{item.pay === 1 ? '✅ ' : '⬜️ '}</Text>
                </TouchableOpacity> : null}
              </Text>
              <Text  style={[
                  styles.transactionAmount,
                  item.type === 'income' && styles.incomeAmount,
                  item.type === 'extra' && styles.extraAmount,
                  ...(item.type !== 'income' && item.type !== 'extra'
                    ? [styles.expenseAmount]
                    : []),
                ]}>
                {item.type === 'income'
                  ? '+'
                  : item.type === 'extra'
                    ? '+'
                    : '-'}{' '}
                {convertCurrency(item.amount)}
              </Text>
              <TitleComponent stylesExt={styles.transactionDescription} text={`Descripción: ${item.description}`} />
              <TitleComponent stylesExt={styles.transactionDate} text={`Fecha: ${item.date}`} />
            </View>
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
  incomeAmount: {
    color: '#008000',
  },
  extraAmount: {
    color: '#FF8C00',
  },
  expenseAmount: {
    color: '#FF0000',
  },
  inputContainer: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    flexGrow: 1,
    padding: 14,
    backgroundColor: '#f5f5f5',
  },
  summaryContainer: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  summaryContainer2: {
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
    backgroundColor: '#fff3e0',
    padding: 8,
    borderRadius: 4,
    elevation: 2,
    width: 300,
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
    backgroundColor: '#fff3e0',
    fontFamily: "Montserrat-SemiBold",
    textAlign: 'center',
    padding: 2,
    marginTop: 4,
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
});

export default FinanzasApp;
