import TodoListItem from "./TodoListItem";

function TodoList({ todos }) {
    return ( 
        <div>
            {todos.map(todo => (
                <TodoListItem 
                    todo={todo}
                />
            ))}
        </div> 
    );
}

export default TodoList;