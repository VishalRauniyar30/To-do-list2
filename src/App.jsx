import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='bg-gray-800 flex flex-wrap items-center justify-center py-3 px-5 mt-6'>
        Learn About Redux ToolKit
      </h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
