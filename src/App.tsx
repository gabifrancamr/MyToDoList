import { Header } from './components/Header'
import { PlusCircle } from 'phosphor-react'
import './global.module.css'

import styles from './App.module.css'
import { ListHeader } from './components/ListHeader'
import { WithoutTasks } from './components/WithoutTasks'
import { ChangeEvent, useState } from 'react'

export function App() {
  const [inputNewTask, setInputNewTask] = useState('')

  function handleInputNewTaskChange(e:ChangeEvent<HTMLInputElement>) {
    setInputNewTask(e.target.value)
  }

  function handleCreateNewTask() {
    alert(inputNewTask)
    setInputNewTask("")
  }

  return (
    <div>
      <Header />
      
      <section className={styles.mainContent}>
        <div className={styles.newTask}>
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa' 
            value={inputNewTask}
            onChange={handleInputNewTaskChange}
          />
          <button className={styles.newTaskButton} onClick={handleCreateNewTask}>
            <span>Criar</span>
            <PlusCircle size={20}/>
          </button>
        </div>

        <div className={styles.areaTasks}>
          <ListHeader />

          <WithoutTasks/>
        </div>
      </section>
    </div>
  )
}