export function TodoList() {
  return (
    <ul className="mt-2 list-inside list-disc">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

export function TodoItem() {
  const createdAtISOString = '2024-09-13T00:30:00.000Z';
  return (
    <div className="flex flex-col gap-2 rounded-md border p-2">
      <li>What should I do?</li>
      <time className={'text-xs text-zinc-600'}>
        {new Date(createdAtISOString).toLocaleDateString()}
      </time>
      <button className="ml-auto rounded-full border px-2 py-1">
        Mark as done
      </button>
    </div>
  );
}
