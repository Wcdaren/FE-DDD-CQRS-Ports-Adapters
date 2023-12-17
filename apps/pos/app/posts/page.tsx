import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface PostsProps {}

export default function Posts(props: PostsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Posts!</h1>
    </div>
  );
}
