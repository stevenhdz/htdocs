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
  cuotas: number;
  cuotasPagadas: number;
}

const FinanzasApp: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [cuotas, setCuotas] = useState<string>('');
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showDatetimePicker, setShowDateTimePicker] = useState<boolean>(false);
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>([]);
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

  useEffect(() => {
    initializeDatabase();
  }, []);

  const updatePay = async (id: string, pay: number, cuotasPagadas: number) => {
    try {
      await updateTransactionPay(id, pay, cuotasPagadas);
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

  const handleDateTimeChange = (event: any, selectedDate?: Date) => {
    setShowDateTimePicker(false);
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
    const parsedCuotas = parseInt(cuotas);
    if (isNaN(parsedAmount) || parsedAmount <= 0 || !description || isNaN(parsedCuotas) || parsedCuotas <= 0) {
      showMessage({
        message: "Por favor, rellene todos los campos correctamente",
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
      date: date.toLocaleString(),
      pay: 0,
      cuotas: parsedCuotas,
      cuotasPagadas: 0
    };

    saveTransaction(
      type,
      parsedAmount,
      description,
      date.toLocaleString(),
      0,
      parsedCuotas,
      0
    );
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
    setAmount('');
    setDescription('');
    setCuotas('');

    showMessage({
      message: "Elemento añadido",
      type: "success",
    });
  };

  const incrementCuotasPagadas = async (id: string, cuotasPagadas: number, cuotas: number, pay: number) => {
    if (cuotasPagadas < cuotas) {
      const updatedCuotasPagadas = cuotasPagadas + 1;
      await updatePay(id, pay, updatedCuotasPagadas); // pass the 'pay' as the second argument
      setTransactions(prevTransactions =>
        prevTransactions.map(transaction =>
          transaction.id === id
            ? { ...transaction, cuotasPagadas: updatedCuotasPagadas }
            : transaction
        )
      );
    }
  };
  const handleAmountChange = (text: string) => {
    const numericValue = text.replace(/[^0-9\.]/g, '');  // Permitir solo números y puntos
    setAmount(numericValue);
  };

  const handleCuotasChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');  // Permitir solo números
    setCuotas(numericValue);
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
      <View style={{ alignItems: 'center' }}>
        <TitleComponent text="Finanzas App" stylesExt={{ color: 'white' }} />
        <TitleComponent text="@copyright alexdevorigin1" stylesExt={{ fontSize: 12, textAlign: 'center', color: 'white', marginBottom: 10 }} />
      </View>

      <View style={styles.summaryContainer}>
  <View style={styles.row}>
    <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>
      Ingresos: 
      <Text style={{ fontFamily: 'Montserrat-SemiBold', color: calculateIncome() > 0 ? 'green' : 'red' }}>
        {convertCurrency(calculateIncome())}
      </Text>
    </Text>
    <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>
      Gastos: 
      <Text style={{ fontFamily: 'Montserrat-SemiBold', color: calculateExpenses() > 0 ? 'red' : 'green' }}>
        {convertCurrency(calculateExpenses())}
      </Text>
    </Text>
  </View>
  <View style={styles.row}>
    <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>
      Ahorros: 
      <Text style={{ fontFamily: 'Montserrat-SemiBold', color: calculateExtras() > 0 ? '#FF8C00' : 'grey' }}>
        {convertCurrency(calculateExtras())}
      </Text>
    </Text>
    <Text style={styles.balanceText}>
      Saldo: 
      <Text style={{ fontFamily: 'Montserrat-SemiBold', color: calculateBalance() > 0 ? 'green' : 'red' }}>
        {convertCurrency(calculateBalance())}
      </Text>
    </Text>
  </View>
</View>

      <View style={styles.inputContainer}>
        <TextInputComponents
         placeholder="Ingresar monto"
         types="numeric"
         value={amount}      
          handleChange={handleAmountChange}
          stylesExt={{ backgroundColor: '#333F52', color: 'black' }}
        />
        <TextInputComponents
          types="string"
          placeholder="Ingresar descripción"
          value={description}
          handleChange={setDescription}
          stylesExt={{ backgroundColor: '#333F52', color: 'black' }}
        />
        <TextInputComponents
          placeholder="Ingresar cantidad de cuotas"
          types="numeric"
          value={cuotas}
          handleChange={handleCuotasChange}       
          stylesExt={{ backgroundColor: '#333F52', color: 'black' }}
        />
            <TextInputComponents
          stylesExt={tw`text-center bg-slate-200 text-lg`}
          value={date.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          })}
          placeholder="Fecha"
          editable={false}
        />
      </View>
      <View>
          <View style={styles.buttonContainer}>
            <View style={{ width: '47%' }}>
              <ButtonComponent title="Fecha" type="primary" onPress={() => setShowDatePicker(true)} />
            </View>
            <View style={{ width: '47%' }}>
              <ButtonComponent title="Hora" type='primary' onPress={() => setShowDateTimePicker(true)} />
            </View>
          </View> 
          {!!showDatePicker ? (
            <DateTimePicker
              value={date}
              mode={'date'}
              display="default"
              onChange={handleDateChange}
            />
          ) : null}
          {
            !!showDatetimePicker ? (
              <DateTimePicker
                value={date}
                mode={'time'}
                is24Hour={false}
                display="default"
                onChange={handleDateTimeChange}
              />
            ) : null
          }
        </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <ButtonComponent title="Ingreso" type="success" onPress={() => addTransaction('income')} />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonComponent title="Gasto" type="error" onPress={() => addTransaction('expense')} />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonComponent title="Extra" type="primary" onPress={() => addTransaction('extra')} />
        </View>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionCard}>
            <TouchableOpacity onPress={() => toggleTransactionSelection(item.id)}>
              <Text style={styles.transactionText}>Descripcion: {item.description}</Text>
              <Text style={styles.transactionText}>Fecha: {item.date}</Text>
              <Text style={styles.transactionText}>Tipo: {item.type === 'extra' ? 'Extra' : item.type === 'income' ? 'Ingreso' : 'Gasto'}</Text>
              <Text style={styles.transactionText}>Monto: {convertCurrency(item.amount)}</Text>
              {item.type === 'expense' && (
                 <Text style={styles.transactionText}>Pagado: {item.cuotasPagadas} de {item.cuotas}</Text>
              )}
              <Text style={styles.transactionText}>Total pagado: {convertCurrency(item.cuotasPagadas * item.amount)}</Text>
            </TouchableOpacity>
            {item.cuotasPagadas < item.cuotas && (
              <Button
              title="Cuota Pagada"
              onPress={() => incrementCuotasPagadas(item.id, item.cuotasPagadas, item.cuotas, item.pay)}
              color={'#28a745'}
            />
            )}
            <Button
              title="Eliminar"
              onPress={() => deleteTransaction(item.id)}
              color={'#e74c3c'}
            />
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cuotaPagadaButton: {
    backgroundColor: '#28a745', // Green for "Cuota Pagada"
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: '100%', // Adjust the width if you want it to be more compact
    alignSelf: 'center', // Center align the button
  },
  eliminarButton: {
    backgroundColor: '#e74c3c', // Red for "Eliminar"
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: '100%', // Adjust the width to fit
    alignSelf: 'center', // Center align the button
  },
  row: {
    flexDirection: 'row', // This will make items appear side by side
    justifyContent: 'space-between', // Adjusts spacing between items
    marginBottom: 10, // Optional, to add space between rows
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#333', // Set background to gray
  },
  summaryContainer: {
    marginBottom: 20,
    backgroundColor: '#fff', // White background for summary container
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  summaryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  balanceText: {
    paddingTop: 25,
    fontSize: 14,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor: '#fff', // White background for input container
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  transactionCard: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff', // White background for transaction cards
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  transactionText: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  transactionButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  deleteButton: {
    marginTop: 15,
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  inputLabel: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputField: {
    height: 45,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 15,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // Distribute buttons evenly
    marginBottom: 15,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,  // Reduce horizontal space between buttons
  },
});



export default FinanzasApp;
