function Main () {
    return (
        <main>
            <section id="about">
                <About />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </main>
    )
}

export default Main

function About () {
    return (
        <>
            <h2>About Me</h2>
            <div className="outer">
                <p>
                    &emsp;Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nascetur penatibus auctor bibendum malesuada mauris quis habitant. Rutrum accumsan dictum platea aptent; montes molestie orci. Pulvinar sapien litora sem convallis nullam vestibulum. Id et sit facilisi velit, vestibulum orci aliquet? Elit malesuada potenti fermentum curae consectetur lobortis. Lectus ultricies cras bibendum sagittis adipiscing.
                </p>
                <div className="inner">
                    <h3>Interests</h3>
                    <ul>
                        <ul>
                            <li><p>Hiking</p></li>
                            <li><p>Coding</p></li>
                            <li><p>Basketball</p></li>
                            <li><p>Reading</p></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </>
    )
}

function Experience () {
    return (
        <>
            <h2>My Experience</h2>
            <div>
                <Role 
                    companyName={"Company 1"}
                    roleDescription={"Lorem ipsum odor amet, consectetuer adipiscing elit."}
                />
                <Role 
                    companyName={"Company 2"}
                    roleDescription={"Lorem ipsum odor amet, consectetuer adipiscing elit."}
                />
                <Role 
                    companyName={"Company 3"}
                    roleDescription={"Lorem ipsum odor amet, consectetuer adipiscing elit."}
                />
                <Role 
                    companyName={"Company 4"}
                    roleDescription={"Lorem ipsum odor amet, consectetuer adipiscing elit."}
                />

            </div>
        </>
    )
}

function Role ({ companyName, roleDescription }) {
    return (
        <article>
            <h3>{companyName}</h3>
            <p>
                &emsp;{roleDescription}
            </p>
        </article>
    )
}

function Contact() {
    return (
        <section id="contact" style={contactStyle}>
            <h2>Contact Me</h2>
            <div className="contact-info">
                <p>
                    <strong>Email:</strong> <a href="mailto:anishp2303@gmail.com">anishp2303@gmail.com</a>
                </p>
                <p>
                    <strong>Phone:</strong> <a href="tel:+17328824634">+1 (732) 882-4634</a>
                </p>
            </div>
        </section>
    );
}

const contactStyle = {
    backgroundColor: "#f1f1f1",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    margin: "2rem 0"
};