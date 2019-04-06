//The class responsible for counting down to the event
class TimeTo {
    constructor(timeEvent) {
        const endTime = new Date(timeEvent).getTime();
        this.days = document.querySelector("aside p .days");
        this.hours = document.querySelector(".hours");
        this.minutes = document.querySelector(".minutes");
        this.seconds = document.querySelector(".seconds");
        this.getTimeValue = () => endTime;
    }

    // Function that calculates how many days, hours, minutes and seconds have been left from the current moment to the event
    setTimeToEvent() {
        setInterval(() => {
            const nowTime = new Date().getTime();
            const toDays = Math.floor((this.getTimeValue() / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)));
            const toHours = Math.floor((this.getTimeValue() / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
            const toMinutes = Math.floor((this.getTimeValue() / (1000 * 60) - nowTime / (1000 * 60)) % 60);
            const toSeconds = Math.floor((this.getTimeValue() / (1000) - nowTime / (1000)) % 60);

            this.render(toDays, toHours, toMinutes, toSeconds);
        }, 1000)
    }

    // Function that is responsible for showing the units of time
    render(toDays, toHours, toMinutes, toSeconds) {
        this.days.textContent = `${toDays} dni `;
        this.hours.textContent = `${toHours} godzin `;
        this.minutes.textContent = `${toMinutes} minut `;
        this.seconds.textContent = `${toSeconds} sekund `;
    }
}
