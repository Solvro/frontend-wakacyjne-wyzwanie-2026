import { Sun } from 'lucide-react'
import './App.css'
import { MemberCard } from './components/MemberCard'
function App() {
  

  return (
    <>
      <header className="bg-sky-50 text-center my-24 p-12 rounded-3xl mx-auto max-w-screen-lg">
        <h1 className="text-4xl font-bold mb-8">Witamy w "Wakacyjnym wyzwaniu" <Sun className='inline-block size-12 text-yellow-400' /></h1>
        <p className="text-gray-600 text-lg">Sprawdź <span className='underline font-bold'>README.md</span> i zobacz co dla ciebie przygotowaliśmy</p>
      </header>
      <main className='grid grid-cols-2 justify-center text-center gap-16 py-16 px-8'>
        <section className='flex flex-col'>
          <h2>Zadanie warsztatowe</h2>
          <MemberCard name="Ksawery" role='Frontend Developer' skills={["hajs", "jaksa"]}/>
        </section>
        <section className='flex justify-center items-center border border-gray-200 rounded-lg p-16 shadow-sm'>
          <h2>Zadanie domowe</h2>
        </section>

      </main>



    </>
  )
}

export default App
