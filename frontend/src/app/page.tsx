import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession();
  session ? redirect('/home') : redirect('/sign-in')
}
