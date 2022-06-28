const app = Vue.createApp({
    data(){
        return{
            firstValue: Number,
            secondValue: Number,
            result: ''
        }
    },
    methods: {
        add(){
            const firstValue = Number(document.querySelector('.first-number').value);
            const secondValue = Number(document.querySelector('.second-number').value);
             result = `Результат: ${firstValue + secondValue}`;
            document.querySelector('p').innerHTML = result;
            document.querySelector('.first-number').value = "";
            document.querySelector('.second-number').value = "";
        },
        reduce(){
            const firstValue = Number(document.querySelector('.first-number').value);
            const secondValue = Number(document.querySelector('.second-number').value);
             result = `Результат: ${firstValue - secondValue}`;
             document.querySelector('p').innerHTML = result;
            document.querySelector('.first-number').value = "";
            document.querySelector('.second-number').value = "";
        },
        multiply(){
            const firstValue = Number(document.querySelector('.first-number').value);
            const secondValue = Number(document.querySelector('.second-number').value);
             result = `Результат: ${firstValue * secondValue}`;
             document.querySelector('p').innerHTML = result;
            document.querySelector('.first-number').value = "";
            document.querySelector('.second-number').value = "";
        },
        divide(){
            const firstValue = Number(document.querySelector('.first-number').value);
            const secondValue = Number(document.querySelector('.second-number').value);
             result = `Результат: ${firstValue / secondValue}`;
             document.querySelector('p').innerHTML = result;
            document.querySelector('.first-number').value = "";
            document.querySelector('.second-number').value = "";
        }, 
    }
})

app.mount('#my-calculator');
