import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export const Todo = ({ todo, onRemove, onEdit }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editingValue, setEditingValue] = useState(todo.title);

	const onTodoEdit = (id, newText) => {
		// if (newText === '') newText = todo.title;
		if (newText === '') {
			newText = todo.title;
			setEditingValue(todo.title);
		}
		onEdit(id, newText)
		setIsEditing(false)
	}

	return (
		<TouchableOpacity 
			activeOpacity={0.7} 
			// onPress={() => console.log('pressed', todo.id)}
			onPress={() => setIsEditing(true)}
			onLongPress={() => onRemove(todo.id)}
		>
			<View style={styles.todo}>
				{ !isEditing 
					? <Text>{todo.title}</Text>
					: <TextInput 
						style={styles.editInput}
						autoFocus={true}
						onChangeText={setEditingValue}
						value={editingValue} 
						onEndEditing={() => onTodoEdit(todo.id, editingValue)}
					/>
				}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	todo: {
		// height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15, 
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
		marginBottom: 10
	},
	editInput: {
		borderBottomWidth: 2,
		borderBottomColor: '#eee'
	}
})