import TodoList from '@/components/TodoList';

export default function App() {
  return (
    <>
      <h1 className="w-full text-[10rem] font-[100] text-center text-[rgba(175,47,47,0.15)]">
        todos
      </h1>
      <TodoList />
    </>
  );
}
