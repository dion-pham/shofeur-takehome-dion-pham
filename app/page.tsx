import Image from 'next/image'
import { Hero, SearchBar,CustomFilter } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className='mt-12 padding-x padding-y max-width' id='discover'></div>
        <div className='px-20'>
          <h1 className='text-4xl font-extrabold'>
              Explore options below!
          </h1>
        </div>

        <div className='home__filters'>
            <SearchBar/>
              <div className='home__filter-contaienr'>
                  <CustomFilter title = ''/>
                  <CustomFilter title = ''/>
                  <CustomFilter title = ''/>
                  <CustomFilter title = ''/>
                  <CustomFilter title = ''/>
                  <CustomFilter title = ''/>
              </div>
        </div>

    </main>

  )
}
