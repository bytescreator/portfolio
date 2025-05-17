import { Component } from "react";
import "./App.css";
import ProfilePic from "./pp";

class App extends Component<unknown, { dark: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = { dark: false };
  }

  componentDidMount(): void {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (dark) {
      document.body.classList.add("dark");
    }

    this.setState({ dark });
  }

  render() {
    const preh = `
Portfolio Working Group                          Atakan Karagül, Subject
Portfolio: 1
                                                                May 2025
Category: Portfolios Track

`;

    return (
      <div className="content">
        <pre>{preh}</pre>
        <div
          style={{ display: "flex", alignSelf: "center", width: "fit-content" }}
        >
          <input
            type="checkbox"
            checked={this.state.dark}
            onClick={() => {
              this.setState({ dark: !this.state.dark });
              document.body.classList.toggle("dark");
            }}
            className="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <span className="ball"></span>
          </label>
        </div>
        <b style={{ textAlign: "center" }}>Atakan Karagül's Portfolio</b>
        <p>Status Of This Memo</p>
        <p style={{ paddingLeft: "4ch" }}>
          This document specifies a portfolio for the Developer community.
          Distribution of this memo is unlimited.
        </p>
        <p>Copyright Notice</p>
        <p style={{ paddingLeft: "4ch" }}>
          Copyright (C) Atakan Karagül (2025). All Rights Reserved.
        </p>
        <p>Abstract</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ paddingLeft: "4ch" }}>
            <p>
              This portfolio describes Atakan Karagül's profession as a
              Developer in a humorously formatted in RFC style.
            </p>
            <span style={{ display: "flex", gap: "10px" }}>
              <a href="https://github.com/bytescreator">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  className={this.state.dark ? "octicon" : ""}
                >
                  <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
                </svg>
              </a>
              <a href="https://t.me/bytescreator">
                <img src="https://web.telegram.org/favicon.ico" />
              </a>
            </span>
          </div>
          <div style={{ alignSelf: "flex-end", marginLeft: "auto" }}>
            {ProfilePic(this.state.dark)}
          </div>
        </div>
        <p style={{ paddingLeft: "4ch" }}>
          If you're unfamiliar with RFCs,{" "}
          <a href="https://datatracker.ietf.org/doc/html/rfc2616">RFC2616</a>{" "}
          defines the HTTP protocol and{" "}
          <a href="https://datatracker.ietf.org/doc/html/rfc2324">
            I'm a teapot
          </a>{" "}
          is an April Fools' joke.
        </p>
        <p>Table Of Contents</p>
        <div
          className="content-table"
          style={{
            paddingLeft: "4ch",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>
            <a href="#1.">1.</a> Subject Identification
          </span>
          <span>
            <a href="#1.1.">1.1</a> Designated Identifier
          </span>
          <span>
            <a href="#1.2.">1.2</a> Origin Story
          </span>
          <span>
            <a href="#2.">2.</a> Technical Capabilities
          </span>
          <span>
            <a href="#2.1.">2.1. </a> Language Support Matrix
          </span>
          <span>
            <a href="#2.2.">2.2. </a> Operational Compatibility
          </span>
          <span>
            <a href="#2.3.">2.3. </a> Known Issues
          </span>
          <span>
            <a href="#3.">3.</a> Previous Work
          </span>
          <span>
            <a href="#4.">4.</a> Contact
          </span>
        </div>
        <hr
          style={{ background: "black", marginTop: "10px", width: "100%" }}
        ></hr>
        <p id="1.">
          1. <b>Subject Identification</b>
        </p>
        <p id="1.1.">
          1.1. <b>Designated Identifier</b>
        </p>
        <div style={{ paddingLeft: "4ch" }}>
          <p>
            The Subject is identified as "Atakan", a self-taught programmer
            operating since 2016.
          </p>
        </div>
        <p id="1.2.">
          1.2. <b>Origin Story</b>
        </p>
        <div style={{ paddingLeft: "4ch" }}>
          <p>
            Initial system boot occurred with an affinity for Linux
            environments. Curiosity-driven reverse engineering and consistent
            tinkering with systems and software components led to a gradual
            firmware update — from competent Linux user to functional
            programmer.
          </p>
        </div>
        <p id="2.">
          2. <b>Technical Capabilities</b>
        </p>
        <p id="2.1.">
          2.1. <b>Language Support Matrix</b>
        </p>
        <div style={{ paddingLeft: "4ch" }}>
          <p>
            The Subject has implemented functionality in, and maintains
            operational fluency with, the following programming languages:
          </p>
          <ul>
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>Rust</li>
            <li>Go</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Dart</li>
          </ul>
          <p>
            Support for these languages includes both theoretical understanding
            and practical application in various runtime environments.
          </p>
        </div>
        <p id="2.2.">
          2.2. <b>Operational Compatibility</b>
        </p>
        <div style={{ paddingLeft: "4ch" }}>
          The Subject can function effectively within the following
          environments:
          <ul>
            <li>Unix-like systems (Linux preferred)</li>
            <li>
              Kubernetes-native platforms (hands-on with Cilium, ClusterMesh,
              etc.)
            </li>
            <li>Containerized environments (Docker, Podman)</li>
            <li>Embedded systems with constrained hardware</li>
          </ul>
        </div>
        <p id="2.3.">
          2.3. <b>Known Issues</b>
        </p>
        <div style={{ paddingLeft: "4ch" }}>
          <ul>
            <li>
              Occasionally writes documentation in RFC format to amuse or
              confuse readers
            </li>
            <li>
              Cannot function optimally without a dark theme editor and black
              coffee
            </li>
          </ul>
        </div>
        <p id="3.">
          3. <b>Implemented Modules</b>
        </p>
        <div style={{ paddingLeft: "4ch" }}>
          The Subject has implemented numerous modules, both publicly and
          privately:
          <ul>
            <li>
              <a href="https://github.com/bytescreator/jacktheyokripper">
                a YÖK Atlas scraper
              </a>
            </li>
            <li>an e-Invoice verifier and indexer for a local municipality</li>
            <li>a MUN website for a local school</li>
            <li>
              <a href="https://github.com/bytescreator/ai-frontend">
                Gemini assisted local assistant
              </a>
            </li>
            {/* <li>
            A <a href="https://tailscale.com/">TailScale</a> alternative for
            in-house usage in <a href="https://datalines.com">Datalines</a>
          </li> */}
            <li>
              ... and several others which are private to{" "}
              <a href="https://datalines.com">Datalines</a> and{" "}
              <a href="https://github.com/Centaur-Games">Centaur Interactive</a>
            </li>
          </ul>
        </div>
        <p id="4.">
          4. <b>Contact</b>
        </p>
        <div
          style={{
            paddingLeft: "4ch",
            display: "flex",
            flexDirection: "column",
            paddingBottom: "50px",
          }}
        >
          <span>
            Email:{" "}
            <a href="mailto:ata2014kara2@gmail.com">ata2014kara2@gmail.com</a>
          </span>
          <span>
            Telegram: <a href="https://t.me/bytescreator">@bytescreator</a>
          </span>
          <div>
            <p>
              <b>Useless Contact Form</b>
            </p>
            <i>this will just show an alert, it won't send a message!</i>
            <form
              onSubmit={this.handleSubmit}
              action="/"
              method="post"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label htmlFor="name">Name Surname</label>
              <input type="text" name="name" id="name" required></input>
              <label htmlFor="email">Mail</label>
              <input type="email" name="email" id="email" required></input>
              <label htmlFor="content">Message</label>
              <textarea
                name="content"
                id="content"
                required
                style={{ minWidth: "100%", maxWidth: "100%" }}
              ></textarea>
              <input type="submit" value="Send"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(event);
  }
}

export default App;
