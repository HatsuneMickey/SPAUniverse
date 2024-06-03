export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)
        
        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes["404"]
        fetch(route)
        .then(data => data.text())
        .then(html => { 
            document.querySelector('#app').innerHTML = html 
            this.setBodyClass(route);
        })
    }

    setBodyClass(route) {
        const bodyElement = document.querySelector('body');
        bodyElement.classList.remove("home-bg", "universo-bg", "exploracao-bg");
        console.log(route);

        switch(route) {
            case "/":
            case "/pages/home.html":
                document.querySelector('body').classList.add("home-bg")
                break
            case "/pages/universo.html":
                document.querySelector('body').classList.add("universo-bg")
                break
            case "/pages/exploracao.html":
                document.querySelector('body').classList.add("exploracao-bg")
                break
            default:
                break
        }
    }
}