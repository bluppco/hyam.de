const Container = ( props ) => {

    return(
        <section class="container mx-auto px-4 md:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mac:max-w-screen-xl 2xl:max-w-screen-2xl h-full">
            { props.children }
        </section>

    )

}

export default Container
