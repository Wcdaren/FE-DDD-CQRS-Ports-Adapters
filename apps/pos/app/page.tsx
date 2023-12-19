'use client';
// import { Counter } from './components/Counter/Counter'
import { CounterList } from './components/CounterList/CounterList';
import { CreateCounterForm } from './components/CreateCounterForm/CreateCounterForm';
import { Unsubscribe } from '@reduxjs/toolkit';
import { setupCounterListeners } from '@/lib/redux/slices/counter/listeners';
import { startAppListening } from '@/lib/redux';
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    const subscriptions: Unsubscribe[] = [
      setupCounterListeners(startAppListening),
      // setupThemeListeners(startAppListening),
    ];

    return () => subscriptions.forEach((unsubscribe) => unsubscribe());
  }, []);

  return (
    <main className={'main'}>
      <header className="App-header">
        <h1>Counter example</h1>
      </header>
      {/* <ChangeThemeForm /> */}
      <CreateCounterForm />
      <CounterList />
    </main>
  );
}

// export const metadata = {
//   title: 'Redux Toolkit',
// };
