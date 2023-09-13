import React from 'react'
import Link from 'next/link'

export default function About() {
    return (
        <div className='about-container'>
            <div className="about-grid">
                <div className="about-img">
                    이미지
                </div>
                <div className="about-info">

                    <h2>Front-end 개발자 전진희 입니다.</h2>
                    <p>
                        저는 프론트엔드 개발자로서 <strong>1년의 경험</strong>을 가지고 있습니다.</p>
                    <p>
                        이전 회사에서는 프로젝트의 요구사항에 맞추어 Vue를 사용하여 CMS 페이지를
                        개발한 경험이 있으며, Vue 라이브러리의 레이아웃 시스템과 컴포넌트 재사용성을 경험하였습니다.
                    </p>
                    <h2>현재</h2>
                    <p>
                        React를 공부하고 있습니다. 강의를 보며 React를 공부하면서 간단한
                        프로젝트를 진행해보았고, 상태관리를 위한 Redux-toolkit과 NEXT.js를 공부하고 있습니다.

                    </p>
                    <h2>자격증</h2>
                    <p>
                        저는 정보처리기사 자격증을 보유하고 있고, 이전 회사 재직 당시 데이터를
                        조회해보며 SQL에 호기심을 느껴 SQLD 자격증을 공부하여 취득하였습니다.

                    </p>


                    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        <Link href={'/about'}>이력서 보기</Link>
                    </button>
                </div>
            </div>



        </div>
    )
}
