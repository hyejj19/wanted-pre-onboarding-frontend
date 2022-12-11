import {useState} from 'react';
import {TodoContent} from '../components/TodoContent';
import {postTodo, deleteTodo, editTodo} from '../api/todosApi';
import {useFetch} from '../hooks/useFetch';
import {useNavigate} from 'react-router-dom';

export const Todo = () => {
  const [todoInput, setTodoInput] = useState('');
  const onChangeTodoInput = e => {
    setTodoInput(e.target.value);
  };

  const {data, setData} = useFetch('/todos');

  const onPostTodo = async e => {
    e.preventDefault();
    const result = await postTodo({todo: todoInput});
    setData([...data, result]);
    setTodoInput('');
  };

  const onDeleteTodo = id => {
    const newTodos = data.filter(todo => todo.id !== id);
    deleteTodo(id).then(() => setData(newTodos));
  };

  const onEditTodo = async (id, updatedTodo) => {
    editTodo(id, updatedTodo).then(res => {
      const newTodos = data.map(todo => (todo.id === id ? res.data : todo));
      setData(newTodos);
    });
  };

  const navigate = useNavigate();

  return (
    <main className="flex flex-col h-screen w-screen justify-center items-center py-28">
      <section className="flex flex-col h-full min-w-[500px] space-y-5 border border-gray-300 rounded-lg p-10 overflow-y-scroll">
        <h1 className="text-3xl font-bold pb-5 text-right">Todos🔥</h1>
        <form
          className="flex w-full flex-col space-y-2 relative"
          onSubmit={onPostTodo}
        >
          <label className="text-xs">할 일 입력</label>
          <input
            className="w-full border-b p-2"
            onChange={onChangeTodoInput}
            value={todoInput}
          />
          <button className="absolute bottom-2 right-2 text-sm px-2 py-1 bg-yellow-300 hover:bg-orange-300 transition-all rounded-md">
            +
          </button>
        </form>
        {data &&
          data.map(todo => (
            <TodoContent
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onEditTodo={onEditTodo}
              key={todo.id}
            />
          ))}
      </section>
      <button
        className="bg-yellow-300 hover:bg-orange-300 transition px-10 py-2 rounded-md disabled:bg-slate-100
          disabled:text-gray-400 mt-5
          "
        onClick={() => {
          localStorage.clear();
          navigate('/');
        }}
      >
        로그아웃
      </button>
    </main>
  );
};
