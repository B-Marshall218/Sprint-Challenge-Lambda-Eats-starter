import React from "react";

const HomePage = () => {
    return (
        <section className="welcome-page">
            <header className="welcomeHeader">
                <h1 className="welcomeTitle">Were Happy to Serve You!</h1>

                <iframe src="https://giphy.com/embed/9fuvOqZ8tbZOU" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                {/* <p><a href="https://giphy.com/gifs/happiness-9fuvOqZ8tbZOU">via GIPHY</a></p> */}
            </header>
        </section>
    );
}

export default HomePage;