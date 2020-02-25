import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
	const [todos, setTodos] = useState([])

	const addTodo = (title) => {
		const newTodo = {
			id: Date.now().toString(),
			title
		}

		setTodos((prevTodos) =>  [newTodo, ...prevTodos])	// Добавлю новый таск в начало массива
	}

	const removeTodo = (id) => {
		setTodos((prevState) => prevState.filter(todo => todo.id !== id))
	}

	const editTodo = (id, newText) => {
		console.log(id, newText)
		setTodos((prevState) => prevState.map(todo => {
			if (todo.id === String(id)) {
				return { ...todo, title: newText }
			}
			return todo;
		}))
	}

	return (
		<View style={{flex: 1}}>
			<Navbar title="Todo App!" />
			<View style={styles.container}>
				<AddTodo onSubmit={addTodo} />

				{/* Очень важная тонкость, чтобы корректно работал FlatList, нужно чтобы у всех 
				родительских View было значение flex: 1 */}
				<FlatList		
					data={todos}
					renderItem={({ item }) => (
						<View>
							<Todo todo={item} onRemove={removeTodo} onEdit={editTodo} />
						</View>
					)}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 30,
		paddingVertical: 20
	}
});
