import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";
import "./global.module.css";
import "./index.css";

import styles from "./App.module.css";
import { ListHeader } from "./components/ListHeader";
import { WithoutTasks } from "./components/WithoutTasks";
import { ChangeEvent, FormEvent, useState } from "react";
import { ListTasks } from "./components/ListTasks";

interface InfoTasks {
  task: string;
  id: string;
  isChecked: boolean;
}

export function App() {
  const [inputNewTask, setInputNewTask] = useState("");
  const [tasks, setTasks] = useState<InfoTasks[]>([]);
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);

  function handleInputNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    setInputNewTask(e.target.value);
  }

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();
    if (inputNewTask) {
      const newTask: InfoTasks = {
        id: uuidv4(),
        task: inputNewTask,
        isChecked: false,
      };
      setTasks((state) => [...state, newTask]);
      setInputNewTask("");
    } else {
      alert("Digite alguma tarefa!");
    }
  }

  function handleChangeChecked(taskId: string) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      );

      setCountCompletedTasks(
        updatedTasks.filter((task) => task.isChecked).length
      );

      return updatedTasks;
    });
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);

    setCountCompletedTasks(newTasks.filter((task) => task.isChecked).length);
  }

  return (
    <div>
      <Header />

      <section className={styles.mainContent}>
        <form className={styles.newTask} onSubmit={handleCreateNewTask}>
          <input
            type="text"
            required
            placeholder="Adicione uma nova tarefa"
            value={inputNewTask}
            onChange={handleInputNewTaskChange}
          />
          <button type="submit" className={styles.newTaskButton}>
            <span>Criar</span>
            <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.areaTasks}>
          <ListHeader
            allTasks={tasks.length}
            completedTasks={countCompletedTasks}
          />

          {tasks.length === 0 ? (
            <WithoutTasks />
          ) : (
            <div className={styles.allTasks}>
              {tasks.map((task) => {
                return (
                  <ListTasks
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    isChecked={task.isChecked}
                    onHandleChangeChecked={handleChangeChecked}
                    onDeleteTask={deleteTask}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
