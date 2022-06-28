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
            
        },
        reduce(){
            const firstValue = Number(document.querySelector('.first-number').value);
            const secondValue = Number(document.querySelector('.second-number').value);
             result = `Результат: ${firstValue - secondValue}`;
             document.querySelector('p').innerHTML = result;
        },
        multiply(){
            const firstValue = Number(document.querySelector('.first-number').value);
            const secondValue = Number(document.querySelector('.second-number').value);
             result = `Результат: ${firstValue * secondValue}`;
             document.querySelector('p').innerHTML = result;
        },
        divide(){
            const firstValue = Number(document.querySelector('.first-number').value);
            const secondValue = Number(document.querySelector('.second-number').value);
             result = `Результат: ${firstValue / secondValue}`;
             document.querySelector('p').innerHTML = result;
        }, 
    }
})

app.mount('#my-calculator');