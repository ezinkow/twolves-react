function Welcome() {
    const currentHour = new Date().getHours();
    const message = currentHour < 5 ? "Go the fuck to sleep"
        : currentHour < 12 ? "Good morning!"
            : currentHour < 16 ? "Good afternoon!"
                : currentHour < 18 ? "Good evening!"
                    : currentHour < 22 ? "Good night!"
                        : "go to sleep!"

    return (
        <div class="header">
            <h1 id="message">{message}</h1>
            <h1 id="welcome">Welcome <strong>Timberwolves</strong> Fans!</h1>
        </div>
    )
}

export default Welcome