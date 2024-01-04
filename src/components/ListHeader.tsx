import styles from './ListHeader.module.css'

interface ListHeaderProps {
    allTasks: number,
    completedTasks: number
}

export function ListHeader({allTasks, completedTasks}: ListHeaderProps) {
    return (
        <div className={styles.listHeader}>
            <div className={styles.tarefas}>
                <span className={styles.tarefasCriadas}>Tarefas criadas</span>
                <span className={styles.count}>{allTasks}</span>
            </div>
            <div className={styles.tarefas}>
                <span className={styles.tarefasConcluidas}>Tarefas concluídas</span>
                {allTasks === 0 ? (
                    <span className={styles.count}>0</span>
                ): (
                    <span className={styles.count}><span>{completedTasks}</span> de <span>{allTasks}</span></span>
                )}
            </div>
        </div>
    )
}