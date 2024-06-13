const app = Vue.createApp({
    data() {
        return {
            showList: true,
            itemName: null,
            itemNumber: null,
            itemUnit: 'item',
            listBelanja: [],
            darkMode: localStorage.getItem('darkMode') === 'true',
        };
    },
    created() {
        const savedlistBelanja = localStorage.getItem('listBelanja');
        this.listBelanja = savedlistBelanja ? JSON.parse(savedlistBelanja) : [];
        this.applyTheme();
    },

    methods: {
        addItem() {
            let item = {
                name: this.itemName,
                number: this.itemNumber,
                unit: this.itemUnit,
                checked: false
            };

            this.listBelanja.push(item);
            localStorage.setItem('listBelanja', JSON.stringify(this.listBelanja));
            this.itemName = null;
            this.itemNumber = null;
            this.itemUnit = 'item';
        },

        deleteItem(index) {
            this.listBelanja.splice(index, 1);
            localStorage.setItem('listBelanja', JSON.stringify(this.listBelanja));
        },

        editItem(index) {
            this.itemName = this.listBelanja[index].name;
            this.itemNumber = this.listBelanja[index].number;
            this.itemUnit = this.listBelanja[index].unit;

            this.listBelanja.splice(index, 1);

            localStorage.setItem('listBelanja', JSON.stringify(this.listBelanja));
        },

        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
            this.applyTheme();
        },

        applyTheme() {
            document.body.classList.toggle('dark-mode', this.darkMode);
        },
    }
});

app.mount('#app')