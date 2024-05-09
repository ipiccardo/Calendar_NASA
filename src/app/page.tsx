import Calendar from "./components/Calendar"
import { Suspense } from "react";


export default function Home({ searchParams }: { searchParams?: { month: string } }) {


  const selectedMonth = searchParams?.month || ''


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary text-white">
      <Suspense fallback={<h1>LOADING...</h1>} >
      <Calendar selectedMonth={selectedMonth} />
      </Suspense>
    </main>
  );
}
