import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
        currencies: {},
        selectedCurrencyRate: null,
        selectedCurrencyRate2: null,
        euroInput: 0,
        desiredInput: 0,
        euroToSelectedConversion: 0,
        selectedToEuroConversion: 0,
        currencyTracker: ""
    },

    computed: {},

    mounted() {
        this.getCurrencies();
    },

    methods: {
        getCurrencies: function() {
            fetch("https://api.exchangeratesapi.io/latest")
            .then(response => response.json())
            .then(currencies => this.currencies = currencies)
        }, 
        convertEuroToSelectedCurrency: function() {
            const fixed2 = this.euroInput * this.selectedCurrencyRate
            this.euroToSelectedConversion = fixed2.toFixed(2);
        },
        convertSelectedCurrencyToSelectedEuro: function() {
            const fixed2 = this.euroInput / this.selectedCurrencyRateC2E
            this.selectedToEuroConversion = fixed2.toFixed(2);
        }
    }
  })
})