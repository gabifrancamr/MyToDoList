import { Trash } from "phosphor-react";
import styles from "./ListTasks.module.css";

interface PropsListTasks {
  id: string;
  task: string;
  isChecked: boolean;
  onHandleChangeChecked: (id: string) => void;
  onDeleteTask: (id: string) => void
}

export function ListTasks({
  id,
  task,
  isChecked,
  onHandleChangeChecked,
  onDeleteTask
}: PropsListTasks) {
  function changeChecked() {
    onHandleChangeChecked(id);
  }

  function handleDeleteTask() {
    const confirmation = confirm("Deseja apagar tarefa?")

    if(confirmation) {
        onDeleteTask(id)
    }
  }

  return (
    <div className={styles.taskBox} id={id}>
      <div className={styles.clickBox} onClick={changeChecked}>
        <input
          className={styles.taskRadio}
          type="checkbox"
          id={id}
          defaultChecked={isChecked}
        />
        <label
          className={`${styles.taskContent} ${isChecked ? styles.checked : ""}`}
          htmlFor={id}
        >
          {task}
        </label>
      </div>

      <Trash className={styles.trash} size={20} onClick={handleDeleteTask}/>
    </div>
  );
}
