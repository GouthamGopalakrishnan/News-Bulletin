export type Source = {
    id:string|null,
    name:string
}
export type News = {
    source:Source,
    author:string,
    title:string,
    description:string,
    url:string,
    urlToImage:null|string,
    publishedAt:string,
    content:string
}
export type NewsAPI ={
    status:string,
    totalResults:number,
    articles:News[]
}
export type Coordinates = {
    lon:number,
    lat:number
}
export type Weather = {
    id:number,
    main:string,
    description:string,
    icon:string
}
export type Rain = {
    '1h':number
}
export type Current = {
    dt:number,
    sunrise:number,
    sunset:number,
    temp:number,
    feels_like:number,
    pressure:number,
    humidity:number,
    dew_point:number,
    uvi:number,
    clouds:number,
    visibility:number,
    wind_speed:number,
    wind_deg:number,
    weather:Weather[],
    rain:Rain

}
export type WeatherAPI ={
    lon:number,
    lat:number,
    timezone:string,
    timezone_offset:number,
    current:Current
}
export type Address = {
    building:string,
    road:string,
    village:string,
    county:string,
    state_district:string,
    state:string,
    postcode:string,
    country:string,
    country_code:string
}
export type LocationAPI = {
    place_id:string,
    license:string,
    osm_id:number,
    lat:string,
    lon:string,
    display_name:string,
    address:Address,
    boundingbox:string[]
}