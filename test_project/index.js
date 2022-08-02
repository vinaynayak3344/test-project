function getData(){
    let request=new XMLHttpRequest() //Request genrate 
    request.open("get","https://api.tvmaze.com/search/shows?q=all")
    request.send()

    request.addEventListener("load",()=>{
        var [data]=JSON.parse(request.responseText)
        document.getElementById("score").innerHTML=data.score
        document.getElementById("show_id").innerHTML=data.show.id
        document.getElementById("show_url").href=data.show.url
        document.getElementById("show_name").innerHTML=data.show.name
        document.getElementById("show_type").innerHTML=data.show.type
        document.getElementById("show_language").innerHTML=data.show.language
        document.getElementById("show_genres_drama").innerHTML=data.show.genres[0]
        document.getElementById("show_genres_legal").innerHTML=data.show.genres[1]
        document.getElementById("show_status").innerHTML=data.show.status
        document.getElementById("show_runtime").innerHTML=data.show.runtime
        document.getElementById("show_averageRuntime").innerHTML=data.show.averageRuntime
        document.getElementById("show_premiered").innerHTML=data.show.premiered
        document.getElementById("show_ended").innerHTML=data.show.ended
        document.getElementById("show_officialSite").href=data.show.officialSite
        document.getElementById("show_schedule_time").innerHTML=data.show.schedule.time
        document.getElementById("show_schedule_days").innerHTML=data.show.schedule.days[0]
        document.getElementById("show_rating_average").innerHTML=data.show.rating.average
        document.getElementById("show_weight").innerHTML=data.show.weight
        document.getElementById("show_network_id").innerHTML=data.show.network.id
        document.getElementById("show_network_name").innerHTML=data.show.network.name
        document.getElementById("show_network_Country_name").innerHTML=data.show.network.country.name
        document.getElementById("show_network_Country_code").innerHTML=data.show.network.country.code
        document.getElementById("show_network_Country_timezone").innerHTML=data.show.network.country.timezone
        document.getElementById("show_network_officialSite").innerHTML=data.show.network.officialSite
        document.getElementById("show_webChannel").innerHTML=data.show.webChannel
        document.getElementById("show_dvdCountry").innerHTML=data.show.dvdCountry
        document.getElementById("show_externals_tvrage").innerHTML=data.show.externals.tvrage
        document.getElementById("show_externals_thetvdb").innerHTML=data.show.externals.thetvdb
        document.getElementById("show_externals_imdb").innerHTML=data.show.externals.imdb
        document.getElementById("show_image_medium").src=data.show.image.medium
        document.getElementById("show_image_original").src=data.show.image.original
        document.getElementById("show_summary").innerHTML=data.show.summary
        document.getElementById("show_updated").innerHTML=data.show.updated
        document.getElementById("show_link_self").href=data.show._links.self.href
        document.getElementById("show_link_previousepisode").href=data.show._links.previousepisode.href
        document.getElementById("show_link_nextepisode").href=data.show._links.nextepisode.href



    })
}
getData()