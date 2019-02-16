//Show and Hide series info
{
    const seriesBox = Array.from(document.querySelectorAll('.js-series-box'));
    const seriesInfo = Array.from(document.querySelectorAll('.js-series-info'));
    seriesBox.forEach((series) => {
        const dataNumber = series.getAttribute('data-number');

        function hideInfo() {
            seriesInfo.forEach((info) => {
                if ((info.getAttribute('data-number')) === dataNumber) {
                    info.style.visibility = 'hidden';
                }
            });

            function showInfo() {
                seriesInfo.forEach((info) => {
                    if ((info.getAttribute('data-number')) === dataNumber) {
                        info.style.visibility = 'visible';
                    }
                });
            }


            series.addEventListener('mouseout', showInfo);
        }

        series.addEventListener('mouseover', hideInfo);
    });
}

// series of the week
{
    const weekBtn = Array.from(document.querySelector('.week-btn').children);
    const weekContent = Array.from(document.querySelectorAll('.week-content'));
    const day = new Date().getDay();

    weekContent.forEach((dayOfWeek) => {
        const numberOfDay = Number(dayOfWeek.getAttribute('data-value'));
        if (numberOfDay === day) {
            dayOfWeek.style.display = 'flex';
            weekBtn.forEach((dayBtn) => {
                const numberOfDayBtn = Number(dayBtn.getAttribute('data-value'));
                if (numberOfDayBtn === day) {
                    dayBtn.classList.add('week-btn-active');
                }
            });
        }
    });

    weekBtn.forEach((dayBtn) => {

        function showInfo() {
            const numberOfDay = dayBtn.getAttribute('data-value');
            weekContent.forEach((content) => {
                const contentNumber = content.getAttribute('data-value');
                content.style.display = 'none';
                if (numberOfDay == contentNumber) {
                    content.style.display = 'flex';
                }
            });
        }

        dayBtn.addEventListener('click', showInfo);
    });

    console.log(weekBtn);
}
