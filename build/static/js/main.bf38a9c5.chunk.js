(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),o=a.n(s),i=(a(14),a(1)),l=a(3),c=a(2),m=a(4),u=a(5),p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("span",{id:"logo"},r.a.createElement("img",{src:"/logo.png",alt:"logo"})),localStorage.getItem("username")?r.a.createElement("span",{className:"welcome"},"Welcome, ",localStorage.getItem("firstName")," ",localStorage.getItem("lastName")):"",localStorage.getItem("username")?r.a.createElement("button",{onClick:this.props.logout},"Logout"):"")}}]),t}(n.Component),h=(a(15),a(6)),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(c.a)(t).call(this))).generateURL=e.generateURL.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"generateURL",value:function(){var e=document.getElementById("search_input").value.trim(),t="http://www.omdbapi.com/?s=".concat(e,"&apikey=32b7125b&type=movie");this.props.search(t,e)}},{key:"render",value:function(){var e=Array.from(this.props.searchHistory).map((function(e,t){return r.a.createElement("option",{key:t},e)}));return r.a.createElement("div",{className:"search_container"},r.a.createElement("input",{type:"search",id:"search_input",list:"search_history"}),r.a.createElement("button",{onClick:this.generateURL},"Search"),r.a.createElement("datalist",{id:"search_history"},e))}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).fetchMovieDetails=function(e){var t="http://www.omdbapi.com/?i=".concat(e,"&apikey=32b7125b");a.props.displayMovieDetails(t)},a.render=function(){return r.a.createElement("div",{className:"movie",onClick:a.fetchMovieDetails.bind(Object(h.a)(a),a.props.movie.imdbID)},r.a.createElement("div",{className:"poster"},r.a.createElement("img",{width:"250px",height:"374px",src:a.props.movie.Poster,alt:a.props.movie.Title})),r.a.createElement("div",{className:"movies_details"},r.a.createElement("h4",null,a.props.movie.Title),r.a.createElement("span",{className:"year"},a.props.movie.Year)))},a}return Object(m.a)(t,e),t}(r.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Array.from(this.props.movies).map((function(t,a){return r.a.createElement(d,{key:a,movie:t,displayMovieDetails:e.props.displayMovieDetails})}));return r.a.createElement("div",{className:"movies_container"},r.a.createElement("span",{className:"search_query"},this.props.results,r.a.createElement("strong",null,this.props.searchKey)),r.a.createElement("div",{className:"movie_grid"},t))}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"movies_container"},r.a.createElement("div",{className:"movie_details_grid"},r.a.createElement("div",{className:"poster"},r.a.createElement("img",{src:this.props.movie.Poster,width:"250px",alt:this.props.movie.Title})),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h2",null,this.props.movie.Title,r.a.createElement("em",{className:"year"},"\xa0(",this.props.movie.Year,")\xa0"),r.a.createElement("span",{className:"rated"},this.props.movie.Rated)),r.a.createElement("div",{className:"dataset-1"},r.a.createElement("span",{className:"production"},this.props.movie.Production),r.a.createElement("span",null,"|"),r.a.createElement("span",{className:"runtime"},this.props.movie.Runtime),r.a.createElement("span",null,"|"),r.a.createElement("span",{className:"genre"},this.props.movie.Genre),r.a.createElement("span",null,"|"),r.a.createElement("span",null,this.props.movie.Released," (",this.props.movie.Country,")")),r.a.createElement("span",{className:"language"},r.a.createElement("em",null,this.props.movie.Language)),r.a.createElement("div",{className:"plot"},this.props.movie.Plot),r.a.createElement("div",{className:"dataset-2"},r.a.createElement("span",null,"Director"),r.a.createElement("strong",{className:"director"},this.props.movie.Director),r.a.createElement("span",null,"Stars"),r.a.createElement("strong",{className:"stars"},this.props.movie.Actors),r.a.createElement("span",null,"Writers"),r.a.createElement("span",{className:"writers"},this.props.movie.Writer),r.a.createElement("span",null,"Box Office"),r.a.createElement("strong",{className:"box_office"},this.props.movie.BoxOffice),r.a.createElement("span",null,"Awards"),r.a.createElement("strong",{className:"awards"},this.props.movie.Awards),r.a.createElement("span",null,"Ratings"),r.a.createElement("span",{className:"ratings"},r.a.createElement("span",{className:"imdb"},r.a.createElement("i",{class:"fab fa-imdb fa-lg"}),"\xa0",r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(this.props.movie.imdbID,"/"),target:"_blank"},this.props.movie.imdbRating),"\xa0"),"\xa0",r.a.createElement("span",null,"Metacritic:"),r.a.createElement("span",{className:"metaCritic"},this.props.movie.Metascore))))))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(){document.querySelector("#username").classList.remove("error")}},{key:"handleLogin",value:function(){var e=!1,t=document.querySelector("#username"),a=t.value.trim();if(""!==a){fetch("https://raw.githubusercontent.com/prathameshkoshti/users/master/db.json").then((function(e){return e.json()})).then((function(n){n.forEach((function(t){t.userName===a?(localStorage.setItem("username",a),localStorage.setItem("firstName",t.firstName),localStorage.setItem("lastName",t.lastName),e=!0,window.location.reload()):(console.log("error while logging in!"),e=!1)})),!1===e&&setTimeout((function(){return t.classList.add("error")}),1500)}))}else t.classList.add("error")}},{key:"render",value:function(){return r.a.createElement("div",{className:"login_container"},r.a.createElement("div",{className:"login_form"},r.a.createElement("h3",null,"Login"),r.a.createElement("p",null,"Type your username to login"),r.a.createElement("input",{type:"text",onChange:this.handleChange,id:"username",placeholder:"username"}),r.a.createElement("span",{className:"error_message"},"Please ensure your username is proper!"),r.a.createElement("button",{onClick:this.handleLogin.bind(this)},"Log In")))}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("span",null,"Made with ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udda4")," by Prathamesh Koshti."),r.a.createElement("span",null,"All rights reserved."))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(c.a)(t).call(this))).logout=function(){localStorage.clear(),window.location.reload()},e.search=function(t,a){if(fetch(t).then((function(e){return e.json()})).then((function(t){"True"===t.Response?e.setState({movies:t.Search,result:"You searched for ",searchKey:a,movieList:!0}):e.setState({result:"No results found for keyword ",searchKey:a})})).catch((function(e){return console.log(e)})),null!==localStorage.getItem("history")&&""!==a){var n=localStorage.getItem("history").split(",");n.push(a);var r=Array.from(new Set(n));localStorage.setItem("history",r.join(","))}else""!==a&&localStorage.setItem("history",a)},e.displayMovieDetails=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){"True"===t.Response&&e.setState({movies:[],movie:t,movieList:!1})})).catch((function(e){return console.log(e)}))},e.render=function(){var t=[];return null!==localStorage.getItem("history")&&(t=localStorage.getItem("history").split(",")),localStorage.getItem("username")?r.a.createElement("div",{className:"container"},r.a.createElement(p,{logout:e.logout}),r.a.createElement(v,{search:e.search,searchHistory:t}),e.state.movieList?r.a.createElement(g,{movies:e.state.movies,results:e.state.result,searchKey:e.state.searchKey,displayMovieDetails:e.displayMovieDetails}):r.a.createElement(E,{movie:e.state.movie}),r.a.createElement(b,null)):r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(f,null),r.a.createElement(b,null))},e.state={movies:"",movieList:!0},e}return Object(m.a)(t,e),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bf38a9c5.chunk.js.map