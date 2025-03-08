import styles from './Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={styles.contact}>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => onDelete(id)} className={styles.delete}>
        Delete
      </button>
    </li>
  );
}
