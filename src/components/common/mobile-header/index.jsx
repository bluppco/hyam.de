// IMPORTS FRAMER MOTION
import { motion, useScroll, useAnimation, useMotionValueEvent, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState, useEffect } from "react"

// IMPORTS LAYOUTS
import Container from "@/layouts/Container"

// IMPORTS COMPONENTS
import Li from "./li/index"

const HeaderMobile = () => {

    const [ isScrolled, setIsScrolled ] = useState( false )
    const [ isOpen, updateOpen ] = useState( false )

    useEffect(() => {

        const handleScroll = () => {

            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = 0.4 * windowHeight;

            setIsScrolled(scrollPosition > scrollThreshold);

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

      }, [])

    const { scrollY } = useScroll()
    const squareVariants = {

        display: { y: 0, transition: { duration: .2 } },
        hide: { y: "-150%", transition: { duration: .4 } },

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
            <header className="md:hidden">
                <motion.header className={` ${ isScrolled ? "bg-white shadow-2xl top-0" : "bg-transparent top-10" } h-20 flex items-center fixed w-full z-50`}
                    variants={ squareVariants }
                    initial="display"
                    animate={ controls }
                >
                    <Container>
                        <nav className="flex items-center justify-between">
                            <div className={` ${ isScrolled ? "block" : "hidden" } w-24 aspect-video`}>
                                <a href="/">
                                    <img
                                        src="/logo/dark.svg"
                                        alt=""
                                        className="w-24 aspect-video"
                                    />
                                </a>
                            </div>
                            <div className={` ${ isScrolled ? "hidden" : "block" } w-24 aspect-video`}>
                                <a href="/">
                                    <img
                                        src="/logo/light.svg"
                                        alt=""
                                        className="w-24 aspect-video"
                                    />
                                </a>
                            </div>
                            <div onClick={ () => updateOpen( !isOpen ) }>
                                {

                                    isOpen &&
                                    <img
                                        src="/icons/close.svg"
                                        className="w-6 aspect-square"
                                    />

                                }
                                {

                                    !isOpen &&
                                    <img
                                        src="/icons/menu.svg"
                                        className="w-6 aspect-square"
                                    />

                                }
                            </div>
                        </nav>
                    </Container>
                    <AnimatePresence initial={false}>
                        {

                            <motion.div
                                key="content"
                                initial="collapsed"
                                animate={ isOpen ? "open" : "collapsed" }
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "100vh" },
                                    collapsed: { opacity: 0, height: "0px" }
                                }}
                                transition={{ duration: 0.3 }}
                                className="grow"
                            >
                                <div className={`${ isOpen ? "z-10" : "hidden"} flex flex-col gap-1 items-center justify-center h-full`}>
                                    <ul className="flex flex-col justify-center items-center gap-8">
                                        <Li href="/work" aria_label="">Work</Li>
                                        <Li href="/about" aria_label="">About</Li>
                                        <Li href="/mood-board" aria_label="">Mood Board</Li>
                                        <Li href="/join-us" aria_label="">Join Us</Li>
                                        <Li href="/contact" aria_label="">Contact</Li>
                                    </ul>
                                </div>
                            </motion.div>

                        }
                    </AnimatePresence>
                </motion.header>
            </header>
        </>
    )

}

export default HeaderMobile
