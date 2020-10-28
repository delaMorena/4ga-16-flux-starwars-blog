export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            loading: false,
            people:[],
            planets: [],
            species: [],

        },
        actions: {
            getPeople() {
                const store = getStore()
                const endpoint = "https://swapi.dev/api/people/";
                const config = {
                method: "GET"
            }  
            if ( store.people.length === 0 ){
                fetch(endpoint, config).then((response) => {
                    return response.json()
                    }).then((json) => {
                setStore({people:json.results});
                }); 
            }
                 
        },
            getPlanets() {
                const store = getStore()
                const endpoint = "https://swapi.dev/api/planets/";
                const config = {
                method: "GET"
            }  
            if ( store.planets.length === 0 ){
                fetch(endpoint, config).then((response) => {
                    return response.json()
                    }).then((json) => {
                setStore({planets:json.results});
                }); 
            }
                 
        },
            getSpecies() {
                const store = getStore()
                const endpoint = "https://swapi.dev/api/species/";
                const config = {
                method: "GET"
            }  
            if ( store.species.length === 0 ){
                fetch(endpoint, config).then((response) => {
                    return response.json()
                    }).then((json) => {
                setStore({species:json.results});
                }); 
            }
                 
        },
            setLoading(status) {
                setStore({loading: status})
            },
            toggleLoader() {
                const store = getStore()
                setStore({loading: !store.loading})
            }
        }
    }
}