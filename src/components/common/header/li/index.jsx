// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index"

const Li = ( props ) => {

    const { href, aria_label } = props

    return(
        <li className="text-lg font-light font-lausanne uppercase">
            <Link href={ href } aria_label={ aria_label }>
                { props.children }
            </Link>
        </li>
    )

}

export default Li
