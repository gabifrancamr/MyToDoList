import { Header } from './components/Header'
import { PlusCircle, Trash } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'
import './global.module.css'

import styles from './App.module.css'
import { ListHeader } from './components/ListHeader'
import { WithoutTasks } from './components/WithoutTasks'
import { ChangeEvent, useState } from 'react'

interface InfoTasks {
  task: string,
  id: string,
  isChecked: boolean
}

export function App() {
  const [inputNewTask, setInputNewTask] = useState('')
  const [tasks, setTasks] = useState<InfoTasks[]>([])
 

  function handleInputNewTaskChange(e:ChangeEvent<HTMLInputElement>) {
    setInputNewTask(e.target.value)
  }

  function handleCreateNewTask() {
    if(inputNewTask) {
      const newTask:InfoTasks = {
        id: uuidv4(),
        task: inputNewTask,
        isChecked: false
      }
      setTasks((state) => [...state, newTask])
      setInputNewTask("")
    } else {
      alert("Digite alguma tarefa!")
    }
  }

  function handleChangeChecked(taskId: string) {
    setTasks(
      tasks.map((task) => task.id === taskId ? { ...task, isChecked: !task.isChecked } : task)
    )
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
          
          {tasks.length === 0 ? (
            <WithoutTasks/>
          ) : (
            <div className={styles.allTasks}>
              {tasks.map((task) => {
                return (
                  <div className={styles.taskBox} key={task.id} >
                    <div className={styles.clickBox} onChange={() => handleChangeChecked(task.id)}>
                      <input className={styles.taskRadio} type="checkbox" id={task.id} checked={task.isChecked} />
                    <label className={styles.taskContent} htmlFor={task.id}>{task.task}</label>
                    </div>
                    
                    <Trash />
                  </div>
                )
              })}
            </div>
          )}
          
        </div>
      </section>
    </div>
  )
}