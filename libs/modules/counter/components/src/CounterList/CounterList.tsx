'use client';
import { useAppSelector } from '@castlery/shared/redux/pos';
import { Counter } from '../Counter/Counter';
import styles from './counter.module.css';
import { counterSelectors } from '@castlery/modules/counter/domain';

export function CounterList() {
  const counterIds = useAppSelector((state) =>
    counterSelectors.selectIds(state)
  );

  return (
    <article className={styles.wrapper}>
      <h3>Counters</h3>
      {counterIds.map((counterId) => (
        <Counter key={counterId} counterId={counterId} />
      ))}
    </article>
  );
}
