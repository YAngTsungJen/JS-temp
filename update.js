
const uuid = '805a8755-d565-473e-90ee-9d24771ddf47';
const apiPath = 'https://course-ec-api.hexschool.io/api/';
new Vue({
    el: '#app',
    data() {
        return {
            filePath: '',
            token: '',
        };
    },
    //取得
    methods: {
        uproad() {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)thisiscookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            console.log('token', token);
            // 選取 DOM 中的檔案資訊
            let cust = document.querySelector('#cust').files[0];
            console.dir(cust);

            // 轉成 Form Data
            const formData = new FormData();
            formData.append('file', cust);

            // 路由、驗證
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const url = `${apiPath}${uuid}/admin/storage`;
            axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res);
                this.filePath = res.data.data.path;
            });
            // 請自行完成 Ajax 範例
        },
    },
});