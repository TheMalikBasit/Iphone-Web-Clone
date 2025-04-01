import Home from '@/Home'

export default function Main() {
  return (
    <div className='bg-black text-white p-4 flex flex-col justify-center items-center'>
      <header className='flex flex-col items-center w-full'>
        <p>Main</p>
        <div className='flex flex-row items-center justify-between w-full'>
          <Home />
          <p className='m-10'>I should be on right</p>
        </div>
      </header>
      <footer className='flex flex-col items-center justify-center w-full p-20'>
        <p className='text-md sm:text-left font-[family-name:var(--font-geist-mono)] text-primary p-5'>Footer</p>
        <div className='flex flex-row items-center justify-between w-full'>
          <p className='text-md sm:text-left font-[family-name:var(--font-geist-mono)] text-gray'>I should be on left</p>
          <p className='text-md sm:text-left font-[family-name:var(--font-geist-mono)] text-secondary'>I should be on right</p>
        </div>
      </footer>
    </div>
    
  )
}
