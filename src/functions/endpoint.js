export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.hyam.blupp.co" : "https://api.hyam.blupp.co"

}
