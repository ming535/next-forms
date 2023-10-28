import { sql } from '@vercel/postgres'
import { AddForm } from '@/app/add-form'

export default async function Home() {
  let data = await sql`SELECT * FROM todos`
  const { rows: todos } = data

    if (typeof window !== "undefined") {
        console.log("home on browser");
    } else {
        console.log("home on server");
    }
  return (
      <main>
        <h1 className="sr-only">Todos</h1>
        <AddForm />
        <ul>
          {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}
              </li>
          ))}
        </ul>
      </main>
  )
}