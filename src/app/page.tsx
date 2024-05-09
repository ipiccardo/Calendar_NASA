import Calendar from "./components/Calendar"
import Pagination from '../app/components/Pagination'


export default function Home({ searchParams }: { searchParams?: { month: string } }) {


  const selectedMonth = searchParams?.month || ''


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary text-white">
      <Calendar selectedMonth={selectedMonth} />
    </main>
  );
}
