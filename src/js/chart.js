function init_chart() {

    const ctx = document.getElementById('myChart');
    if (ctx && ctx.id == "myChart") {
        var january = ctx.dataset.january
        var february = ctx.dataset.february
        var march = ctx.dataset.march
        var april = ctx.dataset.april
        var may = ctx.dataset.may
        var june = ctx.dataset.june
        var july = ctx.dataset.july
        var august = ctx.dataset.august
        var september = ctx.dataset.september
        var october = ctx.dataset.october;
        var november = ctx.dataset.november
        var december = ctx.dataset.december
            //console.log(ctx.id);



        new Chart(ctx, {
            type: 'line',
            data: {

                labels: [
                    "january",
                    "february",
                    "march",
                    "april",
                    "may",
                    "june",
                    "july",
                    "august",
                    "september",
                    "october",
                    "november",
                    "december"
                ],
                datasets: [{
                    label: 'Datos de las deudas',
                    data: [
                        january,
                        february,
                        march,
                        april,
                        may,
                        june,
                        july,
                        august,
                        september,
                        october,
                        november,
                        december
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
init_chart()