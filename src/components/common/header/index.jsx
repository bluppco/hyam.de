// IMPORTS FRAMER MOTION
import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion"

// IMPORTS USESTATE AND USEFFECT
import { useState, useEffect } from "react"

// IMPORTS LAYOUTS
import Container from "@/layouts/Container"

// IMPORTS COMPONENTS
import Li from "./li/index"

const Header = () => {

    const [ isScrolled, setIsScrolled ] = useState( false )

    useEffect(() => {

        const handleScroll = () => {

          setIsScrolled( window.scrollY > window.innerHeight )

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

      }, [])

    const { scrollY } = useScroll()
    const squareVariants = {

        display: { y: 0, transition: { duration: .4 } },
        hide: { y: "-150%", transition: { duration: .6 } },

    }
    const controls = useAnimation( scrollY )
    useMotionValueEvent(scrollY, "change", (latest) => {

        let isScrollingDown = scrollY.getPrevious() - latest < 0;
        if( isScrollingDown && latest > 0 ){

            controls.start("hide")

        } else {

            controls.start("display")

        }


    })

    return(
        <>
            <header className="hidden md:block">
                <motion.header className={` ${ isScrolled ? "bg-white shadow-2xl" : "bg-transparent" } h-16 flex items-center fixed top-10 w-full z-50`}
                    variants={ squareVariants }
                    initial="display"
                    animate={ controls }
                >
                    <Container>
                        <nav className="flex items-center justify-between h-full">
                            <ul className={` ${ isScrolled ? "text-black" : "text-white" } flex items-center justify-between gap-36`}>
                                <Li href="/" aria_label="">hy.am studios</Li>
                                <Li href="/work" aria_label="">Work</Li>
                                <Li href="/about" aria_label="">About</Li>
                                <Li href="/mood-board" aria_label="">Mood Board</Li>
                                <Li href="/join-us" aria_label="">Join Us</Li>
                                <Li href="/contact" aria_label="">Contact</Li>
                            </ul>
                        </nav>
                    </Container>
                </motion.header>
            </header>
        </>
    )

}

export default Header
