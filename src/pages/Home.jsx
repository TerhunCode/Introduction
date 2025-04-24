import '../css/Home.css'
import ProfilePic from '../assets/img/profile-pic.jpg'
import Resume from '../assets/pdf/TeoJiaJun_Resume_Aus_C.pdf'
import githubIcon from '../assets/img/github-sign.png'
import linkedinIcon from '../assets/img/linkedin.png'

function Home() {
    return (
        <div className="home-container">
            <div className="left-section">
                <div className="left-section-top-content">
                    <p className="name">Teo Jia Jun</p>
                    <p className="description">Software Engineer on a journey - exploring code, travel, and games.</p>
                </div>
                <div className="left-section-bottom-content">
                    <a href={Resume} download class="download-button">
                        📄 Download Resume
                    </a>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/teo-jia-jun-87a5a021b/" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/TerhunCode" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <img src={ProfilePic} alt="Profile Picture" className="profile-pic"/>
            </div>
        </div>
    )
}

export default Home