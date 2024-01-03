import styles from './ListHeader.module.css'

export function ListHeader() {
    return (
        <div className={styles.listHeader}>
            <div className={styles.tarefas}>
                <span className={styles.tarefasCriadas}>Tarefas criadas</span>
                <span className={styles.count}>0</span>
            </div>
            <div className={styles.tarefas}>
                <span className={styles.tarefasConcluidas}>Tarefas concluídas</span>
                <span className={styles.count}>0</span>
            </div>
        </div>
    )
}