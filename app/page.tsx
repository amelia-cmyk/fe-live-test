import { TodoList } from '@/app/(features)/todo-list/components/todo-list';

export default function Home() {
  return (
    <div className="px-5 py-10">
      <h1 className="text-center text-2xl font-bold">Today's TO-DO</h1>
      <TodoList />
    </div>
  );
}
