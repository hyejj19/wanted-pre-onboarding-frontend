import {useState} from 'react';

export const TodoContent = ({todo, onDeleteTodo, onEditTodo}) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(todo.todo);
  return (
    <section className="space-x-3 flex w-full">
      {isEditMode ? (
        <section className="flex justify-between w-full items-center space-x-3">
          <input
            className="border w-full p-2"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <div className="text-xs space-x-2 text-gray-400 w-24 mr-0">
            <button
              className="hover:text-orange-300"
              onClick={() => {
                onEditTodo(todo.id, {todo: inputValue, isCompleted});
                setIsEditMode(false);
              }}
            >
              수정
            </button>
            <button
              className="hover:text-orange-300"
              onClick={() => setIsEditMode(false)}
            >
              취소
            </button>
          </div>
        </section>
      ) : (
        <>
          <input
            type={'checkbox'}
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          ></input>
          <p className="w-full">{todo.todo}</p>
          <div className="text-xs mr-auto w-24 space-x-2 text-gray-400 ">
            <button
              className="hover:text-orange-300"
              onClick={() => setIsEditMode(true)}
            >
              수정
            </button>
            <button
              className="hover:text-orange-300"
              onClick={() => onDeleteTodo(todo.id)}
            >
              삭제
            </button>
          </div>
        </>
      )}
    </section>
  );
};
