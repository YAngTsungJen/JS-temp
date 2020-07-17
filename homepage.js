
const uuid = '805a8755-d565-473e-90ee-9d24771ddf47';
const apiPath = 'https://course-ec-api.hexschool.io/api/';

//pagination
//全域
Vue.component('pagination', {
    props: ['pages'],
    template: '#pagination',
    data() {
        return {
        };
    },
    methods: {
        changepage(page) {
            this.$emit('change', page);
        },
    }
});


var app = new Vue({
    data: {
        token:'',
    },
    methods: {
        getProducts(page = 1) {
            const vm = this;
            const api = `${apiPath}${uuid}/admin/storage/admin/ec/products?page=${page}`;
            //預設帶入token
            axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`;
            axios.get(api).then(function (res) {
                vm.products = res.data.data;//產品資料
                vm.pagination = res.data.meta.pagination;//頁籤資料
                console.log(res);
            }).catch(error => {
                console.log(error);
            });
        }
    },
});




var app = new Vue({
    el: '#app',
    data: {
        text: '123',
    },
    methods: {
        homelist() {
            window.location = 'http://127.0.0.1:5500/%E7%AC%AC%E4%B8%89%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/home.html#';
        }
    },
});