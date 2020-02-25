import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

export const AddTodo = ({onSubmit}) => {
	const [value, setValue] = useState('')

	const pressHandler = () => {
		if (value.trim()) {	// Если строка не пустая (Если метод trim вернёт чтото, значит не пустая)
			onSubmit(value)
			setValue('')
		} else {
			Alert.alert('Название задачи не может быть пустым')
		}
	}

	return (
		<View style={styles.block}>
			<TextInput 
				style={styles.input} 
				onChangeText={setValue} 
				value={value} 
				placeholder="Название задачи" 
				autoCorrect={false}	// Инпут не будет исправлять грамматику слов
				autoCapitalize="none"	// Не будет автоматом делать заглавные буквы
			/>

			<TouchableOpacity 
				activeOpacity={0.9}
				style={styles.button} 
				onPress={pressHandler}
			>
				<Text style={styles.buttonText}>Добавить</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15
	},
	input: {
		width: '65%',
		padding: 10,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: '#eee'
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#3949ab',
		padding: 15,
		color: '#fff',
		borderRadius: 5
	},
	buttonText: {
		color: 'white'
	}
})