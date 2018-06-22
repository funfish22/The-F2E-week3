var app = new Vue({
    el: '#app',
    data:{
        tags: 'home',


        // newProductList
        productList:[],
        newListTitle: '',
        newListText: '',
        newListMoneyO: '',
        newListMoneyD: '',
        newListSize: '',
        newListColor: '',
        newListInventory: '',
        newListStatus: '',
    },

    methods:{
        addNewProductList(){
            var timestamp = Math.floor(Date.now());
            var title = this.newListTitle;
            var text = this.newListText;
            var moneyO = this.newListMoneyO;
            var moneyD = this.newListMoneyD;
            var size = this.newListSize;
            var color = this.newListColor;
            var inventory = this.newListInventory;
            this.productList.push({
                id: timestamp,
                title: title,
                text: text,
                moneyO: moneyO,
                moneyD: moneyD,
                specification:[
                    size = this.newListSize,
                    color =this.newListColor,
                    inventory = this.newListInventory,
                ]               
            })
        }
    }
})

var add = document.querySelector('.addSpec');
var spec = document.querySelector('.specification');

add.addEventListener('click', function(){
    spec.innerHTML += `<div class="d-flex">
    <div class="col-3 p-0 mr-2 input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Size</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01" v-model="newListSize">
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
        </select>
    </div>
    <div class="col-4 p-0 mr-2 input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Color</span>
        </div>
        <input type="text" class="form-control" v-model="newListColor" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="col p-0 input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Inventory</span>
        </div>
        <input type="text" class="form-control" v-model="newListInventory" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
</div>`
})

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["6 JUN", "7 JUN", "8 JUN", "9 JUN", "10 JUN", "11 JUN", "12 JUN", "13 JUN"],
        datasets: [{
                label: "My First dataset",
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#D0021B',
                data: [500, 500, 2600, 3000, 2400, 500, 1000, 1500],
                fill: false
            },
            {
                label: "My First dataset",
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#4A90E2',
                data: [6100, 5200, 1900, 4000, 3800, 5200, 6500, 5000],
                fill: false
            },
            {
                label: "My First dataset",
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#7ED321',
                data: [7200, 7000, 5500, 7200, 5800, 6200, 7500, 7200],
                fill: false
            }
        ]
    },

    // Configuration options go here
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
    },
});

