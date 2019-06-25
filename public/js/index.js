   new Vue({
       el: "#f1",
       data: {
           p1: { price: 0 },
           p2: { price: 0 },
           p3: { price: 0 },
           pOthers: []
       },
       created() {
           axios.get("http://localhost:3000/index")
               .then(result => {
                   console.log(result.data);
                   this.p1 = result.data[0];
                   this.p2 = result.data[1];
                   this.p3 = result.data[2];
                   this.pOthers = result.data.slice(3);
               })
       },
       watch: {
           p1() {
               console.log(this.p1)
           },
           p2() {
               console.log(this.p2)
           },
           p3() {
               console.log(this.p3)
           },
           p4() {
               console.log(this.p4)
           },
           pOthers() {
               console.log(this.pOthers)
           }
       },
   })