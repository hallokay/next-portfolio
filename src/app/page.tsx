import Image from 'next/image'
import { nav } from '@/constants/constants'
import Link from 'next/link'
import { Bg } from '@/components'

export default function Home() {
  return (
    <main className="relative bg-black flex w-full min-h-screen items-center justify-between p-24">

      <Bg />
      <section className="text-white body-font w-full z-10">
        <div className="container px-5 py-24 mx-auto">
          {/* 소개 */}
          <div className="text-center mb-20">
            <p className="text-xs text-indigo-300 tracking-widest font-bold title-font mb-1">
              프론트엔드 개발자
            </p>
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">전진희 포트폴리오</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              안녕하세요. <br />
              <span className='font-bold'>
                배움과 성장의 즐거움을 추구하는&nbsp;
              </span>
              개발자 전진희입니다.
            </p>

            {/* 링크 */}
            {/* <div className="flex items-center gap-2 justify-center mt-8">
              <Link href={''}>git</Link>
              <Link href={''}>velog</Link>

            </div> */}

            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>

          </div>
          {/* // 소개 */}

          {/* 카드 */}
          {/* <div className="flex justify-between flex-wrap sm:-m-4 mx-5 -mb-10 -mt-4 md:space-y-0 space-y-6">

            <div className="md:w-1/2 flex flex-col text-center items-center">
              <Link href={'/about'} className='w-100 px-24 py-8'>

                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-lg title-font font-medium mb-3">ABOUT</h2>
                  <div className="mt-3 text-indigo-500 inline-flex items-center">바로가기
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>


            <div className="md:w-1/2 flex flex-col text-center items-center">
              <Link href={'/about'} className='w-100 px-24 py-8'>

                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-lg title-font font-medium mb-3">WORK</h2>
                  <div className="mt-3 text-indigo-500 inline-flex items-center">바로가기
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

          </div> */}
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Link href={'/about'}>들어가기</Link>
          </button>
        </div>
      </section>

      {/* 바깥 카드*/}
      {/* <div className="flex flex-col lg:flex-row bg-white w-full rounded shadow"> */}



      {/* 왼편 이미지 */}
      {/* <div className=" w-full lg:w-40 h-60 flex-none relative flex bg-red-100">

          <img src="/classic-utility-jacket.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div> */}

      {/* 오른편 소개 NAV */}
      {/* <div className=" p-10">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-slate-800">
              전진희(Jinhee Jeon)
            </h1>
       


          </div>
          <ul className='flex flex-wrap mt-4 mb-6 pb-6 border-b border-slate-200'>
            {nav.map((manu) => (

              <li className='rounded-lg flex items-center justify-center font-semibold bg-black text-white ml-2'>
                <Link className='p-4' href={manu.url}>{manu.title}</Link>
              </li>

            ))}
          </ul>
        </div> */}


      {/* </div> */}

    </main >
  )
}
