import Image from 'next/image'
import { nav } from '@/constants/constants'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex w-full min-h-screen items-center justify-between p-24">

      {/* 바깥 카드*/}
      <div className="flex bg-white w-full rounded shadow">



        {/* 왼편 이미지 */}
        <div className=" flex-none w-48 relative ">
          <img src="/classic-utility-jacket.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>

        {/* 오른편 소개 NAV */}
        <div className="flex-auto p-10">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-slate-800">
              전진희(Jinhee Jeon)
            </h1>
            <div className="text-sm font-medium text-slate-700 mt-2">
              프론트엔드
            </div>


          </div>
          <ul className='flex flex-wrap mt-4 mb-6 pb-6 border-b border-slate-200'>
            {nav.map((manu) => (

              <li className='rounded-lg flex items-center justify-center font-semibold bg-black text-white ml-2'>
                <Link className='p-4' href={manu.url}>{manu.title}</Link>
              </li>

            ))}
          </ul>
        </div>


      </div>

    </main>
  )
}
