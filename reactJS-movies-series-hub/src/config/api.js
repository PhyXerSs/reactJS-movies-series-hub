const API_KEY = "715b41144a8f86d5967c772f99d51303"

export function TrendingData(page){
    return `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`
}

export function MovieData(page,genresForURL){
    return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForURL}`
}

export function TvSeriesData(page,genresForURL){
    return `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForURL}`
}

export function GenresData(type){
    return `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`
}

export function SearchMedia(type,searchText,page){
    return `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
}

export function SearchAllMedia(searchText){
    return `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
}

export function ContentDeta(media_type,id){
    return `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}&language=en-US`
}

export function CreditsData(media_type,id){
    return `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${API_KEY}&language=en-US`
}

export function VideoData(media_type,id){
    return `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`
}