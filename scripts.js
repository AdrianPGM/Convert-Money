const ConvertButton = document.querySelector(".button-convert")
const currencySelectConverted = document.querySelector(".select-converted")
const currencySelect = document.querySelector(".select-to-convert")
const imageToConvert = document.getElementById("image-to-convert")
const imageConverted = document.getElementById("image-converted")
const currencyConverted = document.querySelector(".currency-converted")
const currencyToConvert = document.querySelector(".currency-to-convert")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector("#currency-value")

function selectChangeConverted(){
    if (currencySelectConverted.value == "real") {
        currencyConverted.innerHTML = "Real"
        imageConverted.src = "./assets/Real-img.png"
        currencyValueConverted.innerHTML ="R$ 0,00"

    }

    if (currencySelectConverted.value == "dolar") {
        currencyConverted.innerHTML = "Dólar Americano"
        imageConverted.src = "./assets/Dólar-img.png"
        currencyValueConverted.innerHTML ="US$ 0.00"

    }

    if (currencySelectConverted.value == "libra") {
        currencyConverted.innerHTML = "Libra"
        imageConverted.src = "./assets/Libra-img.png"
        currencyValueConverted.innerHTML ="£ 0.00"

    }

    if (currencySelectConverted.value == "euro") {
        currencyConverted.innerHTML = "Euro"
        imageConverted.src = "./assets/Euro-img.png"
        currencyValueConverted.innerHTML ="€ 0.00"

    }

    if (currencySelectConverted.value == "bitcoin") {
        currencyConverted.innerHTML = "Bitcoin"
        imageConverted.src = "./assets/Bitcoin-img.png"
        currencyValueConverted.innerHTML ="₿ 0.00"

    }


}

function selectChange(){
    if (currencySelect.value == "real") {
        currencyToConvert.innerHTML = "Real"
        imageToConvert.src = "./assets/Real-img.png"
        currencyValueToConvert.innerHTML ="R$ 0,00"

    }

    if (currencySelect.value == "dolar") {
        currencyToConvert.innerHTML = "Dólar Americano"
        imageToConvert.src = "./assets/Dólar-img.png"
        currencyValueToConvert.innerHTML ="US$ 0.00"

    }

    if (currencySelect.value == "libra") {
        currencyToConvert.innerHTML = "Libra"
        imageToConvert.src = "./assets/Libra-img.png"
        currencyValueToConvert.innerHTML ="£ 0.00"

    }

    if (currencySelect.value == "euro") {
        currencyToConvert.innerHTML = "Euro"
        imageToConvert.src = "./assets/Euro-img.png"
        currencyValueToConvert.innerHTML ="€ 0.00"

    }

    if (currencySelect.value == "bitcoin") {
        currencyToConvert.innerHTML = "Bitcoin"
        imageToConvert.src = "./assets/Bitcoin-img.png"
        currencyValueToConvert.innerHTML ="₿ 0.00"

    }
}






function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector("#currency-value")
    const currencyConverted = document.querySelector(".currency-converted")
    const currencyToConvert = document.querySelector(".currency-to-convert")



    const dolarTodayReal = 5.2
    const euroTodayReal = 6.2
    const libraTodayReal = 7.35
    const bitcoinTodayReal = 312.492

    const realTodayDolar = 5.2
    const euroTodayDolar = 0.9
    const libraTodayDolar = 0.76
    const bitcoinTodayDolar = 0.000018

    const dolarTodayEuro = 1.11
    const realTodayEuro = 6.2
    const libraTodayEuro = 0.84
    const bitcoinTodayEuro = 0.000018

    const dolarTodayLibra = 1.32
    const euroTodayLibra = 1.2
    const realTodayLibra = 7.35
    const bitcoinTodayLibra = 0.000024

    const dolarTodayBtc = 55861.0
    const euroTodayBtc = 50270.0
    const libraTodayBtc = 42386.0
    const realTodayBtc = 312492.0



    if (currencySelect.value == "dolar") {


        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * realTodayDolar)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        }

        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * euroTodayDolar)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        }

        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * libraTodayDolar)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        }

        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * bitcoinTodayDolar)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)

        }


    }




    if (currencySelect.value == "euro") {


        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * realTodayEuro)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * dolarTodayEuro)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * libraTodayEuro)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * bitcoinTodayDolar)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)

        }

    }



    if (currencySelect.value == "libra") {


        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * realTodayLibra)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Uk", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * euroTodayLibra)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * dolarTodayLibra)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * bitcoinTodayLibra)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)

        }

    }



    if (currencySelect.value == "bitcoin") {


        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * realTodayBtc)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-Us", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)

        }


        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * euroTodayBtc)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * dolarTodayBtc)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * libraTodayBtc)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)

        }

        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)

        }

    }


    if (currencySelect.value == "real") {


        if (currencySelectConverted.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarTodayReal)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)



        }


        if (currencySelectConverted.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroTodayReal)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)



        }

        if (currencySelectConverted.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraTodayReal)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)



        }

        if (currencySelectConverted.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoinTodayReal)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)



        }


        if (currencySelectConverted.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)

        }

    }


}

ConvertButton.addEventListener("click", convertValue)