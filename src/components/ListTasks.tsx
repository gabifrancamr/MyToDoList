import { Trash } from "phosphor-react";
import styles from "./ListTasks.module.css";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PropsListTasks {
  id: string;
  task: string;
  isChecked: boolean;
  onHandleChangeChecked: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function ListTasks({
  id,
  task,
  isChecked,
  onHandleChangeChecked,
  onDeleteTask,
}: PropsListTasks) {
  function changeChecked() {
    onHandleChangeChecked(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.taskBox} id={id}>
      <div className={styles.clickBox}>
        <input
          className={`${styles.taskRadio} ${
            isChecked ? styles.inputChecked : ""
          }`}
          type="checkbox"
          id={id}
          defaultChecked={isChecked}
          onChange={changeChecked}
        />
        <label
          className={`${styles.taskContent} ${isChecked ? styles.checked : ""}`}
          htmlFor={id}
          onClick={changeChecked}
        >
          {task}
        </label>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <button className={styles.buttonTrash}>
            <Trash className={styles.trash} size={16} />
          </button>
        </DialogTrigger>
        <DialogContent className="bg-neutral-800 text-slate-200 border-transparent !rounded-[8px]">
          <DialogHeader>
            <DialogTitle>Deseja apagar tarefa?</DialogTitle>
          </DialogHeader>
          <div className="mt-4 flex justify-center gap-5">
            <button
              className="p-2 bg-red-600 rounded-[8px] min-w-[100px]"
              onClick={handleDeleteTask}
            >
              Apagar
            </button>
            <DialogClose asChild>
              <button className="p-2 bg-emerald-600 rounded-[8px] min-w-[100px]">
                Cancelar
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
