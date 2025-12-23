
import { getTopCoins } from '@/lib/api';
import Dashboard from '@/components/Dashboard';

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  const coins = await getTopCoins();

  return (
    <main>
      <Dashboard coins={coins} />
    </main>
  );
}
