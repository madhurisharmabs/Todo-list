import React from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';
import './TodoList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, addTodo, removeTodo, updateTodo } from '../redux/action';

function TodoList() {
    const state = useSelector((state) => ({ ...state.todos }));
    //const data=useSelector((state)=>({...state.todos.temp}));
    //console.log(data);

    let dispatch = useDispatch();

    const create = (newTodo) => {
        dispatch(addTodo(newTodo));
    };
    const update = (id, updatedTask) => {
        dispatch(updateTodo({ id, updatedTask }));
    }


    return (
        <div className="TodoList">
            <h1> Todo-List</h1>
            {/*const res=data.map(todo=>todo.title)
                console.log(res);*/}
            <TodoInput createTodo={create} />
            <ul>
                <TransitionGroup className="todo-list">
                    {state.todos.map((todo) => {
                        return (
                            <CSSTransition key={todo.id} className="todo">
                                {/* <h2>{todo.task}</h2>*/}
                                <Todo
                                    id={todo.id}
                                    task={todo.task}
                                    completed={todo.completed}
                                    toggleTodo={() => dispatch(completeTodo(todo))}
                                    removeTodo={() => dispatch(removeTodo(todo))}
                                    updateTodo={update}
                                />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>

            </ul>
        </div>
    )

}
export default TodoList;