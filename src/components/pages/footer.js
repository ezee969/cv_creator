import icon from "../../assets/gh-icon.png"

export default function Footer() {
    return(
        <div className="footer-cont">
            <p id="footer-text">Copyright © 2022 ezee969</p>
            <a href="https://github.com/ezee969" target="_blank" rel="noreferrer">
                 <img src={icon} alt="icon" id="footer-img"></img>
            </a>
        </div>
    )
}