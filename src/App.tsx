function App() {
  return (
    <main className='h-screen w-full flex items-center justify-center bg-[#0d192b] font-[outfit]'>
      <div className='flex flex-col  items-center justify-center bg-[#14253d] text-[18px] mx-6 p-6 rounded-2xl w-[20.5rem]'>
        <div className='rounded-md overflow-hidden w-[17.5rem]'>
          <img
            src='/image-equilibrium.jpg'
            alt='logo'
            className='h-[18rem] w-[20rem]'
          />
        </div>
        <section className='mt-5 w-[17.5rem]'>
          <h1 className='text-white mb-3 text-[1.4rem] font-[600]'>
            Equilibrium #3429
          </h1>
          <p className='text-[#8bacda] font-[300] text-[17px]'>
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className='flex justify-between items-center mt-3 pb-5 border-b border-[#2f415b]'>
            <div className='flex gap-2 items-center'>
              <img src='/icon-ethereum.svg' alt='ethereum-icon' />
              <p className='text-[#00fff7] text-sm font-semibold'>0.041 ETH</p>
            </div>
            <div className='flex items-center gap-1'>
              <img src='/icon-clock.svg' alt='icon-clock' />
              <p className='text-[#8bacda] text-sm'>3 days left</p>
            </div>
          </div>
        </section>
        <section className='w-[17.5rem] flex items-center mt-5 gap-4 mb-1'>
          <div className='border border-white w-8 h-8 rounded-full'>
            <img src='/image-avatar.png' alt='avatar' className='h-7' />
          </div>
          <p className='text-[#8bacda] text-[16px] font-[300]'>
            Creation of <span className='text-white'>Jules Wyvern</span>
          </p>
        </section>
      </div>
    </main>
  )
}

export default App
