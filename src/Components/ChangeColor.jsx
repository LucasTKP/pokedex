import React, { useState, useEffect } from 'react';



export default function ToDo() {
  const [todo, setTodo] = useState('');
  const [pessoa, setPessoa] = useState(localStorage.getItem('@pessoa'));
  const [todoList, setTodoList] = useState([]);
  const [cor, setCor] = useState('');
  const localToDO = localStorage.getItem('@tarefa');


  useEffect(() => {
    if (localToDO) {
      setTodoList(JSON.parse(localToDO));
    }
    if (pessoa && pessoa !== 'null') {
      setPessoa(pessoa)
    } else {
      const pessoa = prompt('Qual seu nome?')
      setPessoa(pessoa)
      localStorage.setItem("@user", pessoa)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(todoList));
  }, [todoList]);


  //sempre executa algo quando alguma coisa muda
  const handleToDo = (e) => {
    e.preventDefault();

    setTodoList([...todoList, todo]);

    setTodo('');
  }

  return (

    <div style={{ backgroundColor: `${cor}`, height: "100vh", padding: 10 }}>
      <div >
        <h1 style={{ margin: 0 }}>{pessoa}, sua lista de tarefas</h1>
      </div>
      <div>
        <form onSubmit={handleToDo}>
          <input type="text" required placeholder='Digite a tarefa' value={todo} onChange={(e) => setTodo(e.target.value)} />
          <input type="submit" value='ADD' />
        </form>
        <div>
          <ul>
            {todoList.map(todo =>
              <li key={todo}>{todo}</li>
            )}
          </ul>
        </div>
        <div>
          <input type="radio" name='backColor' value='blue' onChange={(e) => setCor(e.target.value)} />
          <label>azul</label>
          <br />
          <input type="radio" name='backColor' value='green' onChange={(e) => setCor(e.target.value)} />
          <label>verde</label>
          <br />
          <input type="radio" name='backColor' value='red' onChange={(e) => setCor(e.target.value)} />
          <label>vermelho</label>
        </div>
      </div>
    </div>
  );
}