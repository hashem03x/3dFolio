import React from 'react'
import BallCanvas from './Canvas/Ball'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
function Tech() {
    return (
        <div className='flex flex-row items-center justify-center gap-10 flex-wrap'>
            {technologies.map((tech, index) => (
                <div key={`tech-${index}`} className='w-28 h-28'>
                    <BallCanvas icon={tech.icon} />

                </div>
            ))}
        </div>
    )
}

export default SectionWrapper(Tech, "")