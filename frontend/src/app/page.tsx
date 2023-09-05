import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession();
  console.log(session?.user)
  session ? redirect('/home') : redirect('/sign-in')
}
