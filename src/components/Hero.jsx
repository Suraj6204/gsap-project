import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: "chars, words" });
    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    const paraSplit = new SplitText('.subtitle', { type: "lines" });
    gsap.from(paraSplit.lines, {
      opacity: 0,   
      yPercent: 100,
      duration: 1.8,
      stagger: 0.06,
      ease: "expo.out",
      delay: 1
    });

    const heroScroll = gsap.timeline({
      scrollTrigger: {
        trigger : '#hero',
        start : 'top top',
        end : 'bottom top',
        scrub : true
      }
    })

    heroScroll.to('.right-leaf' , {y : 200} , 0)
    heroScroll.to('.left-leaf' , {y : -200} , 0)
  }, [])
  return (
    <>
    <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>

        <img 
        src="/images/hero-left-leaf.png" 
        alt="left-leaf" 
        className='left-leaf' />

        <img 
        src="/images/hero-right-leaf.png" 
        alt="right-leaf" 
        className='right-leaf' />

        <div className='body'>
        <div className='content'>
          <div className='space-y-5 md:block hidden'>
            <p>Cool. Crisp. Classic</p>

            <p className='subtitle'>Sip the Spirit <br /> of summer</p>
          </div>

          <div className='view-cocktails'>
            <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi ducimus animi dolore eaque odit illum provident sapiente placeat officia!</p>
            <a href="#cocktails">view cocktail</a>
          </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Hero