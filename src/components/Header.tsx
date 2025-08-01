import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-[150px] flex justify-center items-center fixed bottom-0 bg-amber-300 left-0 z-50'>
            <div className='w-fit h-auto flex justify-center items-center gap-3 bg-[#F5F5F5] px-6 py-3 rounded-[20px]'>
                <ul className='w-full h-full flex justify-center items-center gap'>
                    <li className='w-auto h-auto flex-col gap-1 flex justify-center items-center group'>
                        <div className='flex justify-center items-center rounded-[10px] bg-[#0000000F] group-hover:bg-[#92D8E7] focus:bg-[#92D8E7] w-[74px] h-[63px]'>
                            <Image src="/images/home-icon" alt='home-icon' width={42} height={42} />
                        </div>
                        <div className='w-4 h-1 bg-[#92D8E7] rounded-[10px] hidden group-hover:block'></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
