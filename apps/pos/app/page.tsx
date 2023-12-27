import { redirect } from 'next/navigation';

export default async function Profile({ params }) {
  return redirect('/dashboard');

  // ...
}
