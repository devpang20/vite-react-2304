import TodoListItem from "./TodoListItem";

function TodoList({ todos, onDelete, onToggle }) {
    return ( 
        <div>
            {todos.map(todo => (
                <TodoListItem 
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div> 
    );
}

export default TodoList;