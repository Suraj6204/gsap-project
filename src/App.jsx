import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main>
		<div className='flex-center text-red-500 font-bold text-9xl h-screen'>Hello! Gsap</div>
	</main>
 )
}

export default App
