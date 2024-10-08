import Contador from "./Counter.jsx"
import TodoList from "../todolist/TodoList.jsx"

export default function page() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>Pagina 2 </h1>
          <Contador/>
          <Contador multiplo={10} />
          <Contador multiplo={2} />
          <Contador multiplo={123} />
        </main>
      </div>
    );
}