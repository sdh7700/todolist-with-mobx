import React from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import { TodoStore } from './models/TodoStore';

const store = TodoStore.create({
  todos: [
    {
      title: 'mobx 공부하기'
    },
    {
      title: '책상 정리하기'
    }
  ]
});
export const TodoContext = React.createContext(null);

function App() {
  return (
    <TodoContext.Provider value={store}>
      <TodoForm />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
