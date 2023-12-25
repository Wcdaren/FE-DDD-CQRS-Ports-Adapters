'use client';
import { Unsubscribe } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { CounterList, CreateCounterForm } from '@castlery/modules/counter/components';
import { setupCounterListeners } from '@castlery/modules/counter/domain';
import { startAppListening } from '@castlery/shared/redux/pos';

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
