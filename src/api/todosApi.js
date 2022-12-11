import {client} from '../libs/client';

export const postTodo = async todo => {
  const result = await client.post('/todos', todo);
  return result.data;
};

export const deleteTodo = id => {
  return client.delete(`/todos/${id}`);
};

export const editTodo = async (id, updatedTodo) => {
  return await client.put(`/todos/${id}`, updatedTodo);
};
