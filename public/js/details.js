new Vue({
    el: "#app",
    data: {
        product: {},
        pics: [],
        specs: []
    },
    created() {
        axios.get("http://localhost:3000/details", {
            params: {
                lid: location.search.split("=")[1]
            }
        }).then(result => {
            console.log(result);
            this.product = result.data.product;
            this.pics = result.data.pics;
            this.specs = result.data.specs;
        })
    },
    watch: {
        product() {
            console.log(this.product);
        },
        pics() {
            console.log(this.pics);
        },
        specs() {
            console.log(this.specs);
        }
    },
})