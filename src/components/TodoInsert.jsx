function TodoInsert() {
    return ( 
        <div>
            <form>
               <input 
                    placeholder="할 일을 입력하세요."
                    type="text" 
               /> 
               <button type="submit">저장</button>
            </form>
        </div> 
    );
}

export default TodoInsert;