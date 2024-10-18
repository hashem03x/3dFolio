import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

function Ball({ icon }) {
    const [decal] = useTexture([icon])
    return (
        <Float
            speed={1.75}
            rotationIntensity={1}
            floatIntensity={2}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 0.05]} intensity={2} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    map={decal}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1.8}
                    flatShading />
            </mesh>
        </Float>
    )
}



function BallCanvas({ icon }) {
    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Ball icon={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default BallCanvas