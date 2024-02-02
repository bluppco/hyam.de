import { endpointFetch } from "../../functions/endpoint"

export const homeAPI = async ( environment ) => {

    const endpoint = endpointFetch( environment )

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( endpoint + "/home" )
    const data_json = await network_data.json()

    const { home, work, meta_tags } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        about : "",
        lets_talk : "",

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "about" )
            home_data.about = data
        else if ( data.slug === "lets-talk" )
            home_data.lets_talk = data

    })

    return { home_data, work, meta_tags }

}
