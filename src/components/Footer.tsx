import React from 'react'
import { Avatar } from 'antd'
import GitHubIcon from '../images/GitHub-logo.png'
import LinkedInIcon from '../images/linkedin-logo.png'
import GmailIcon from '../images/gmail-logo.png'

const footerStyle: React.CSSProperties = {
    paddingTop: '10px',
    paddingBottom: '10px',
    background: 'white',
    margin: '0'
}

const linksWrapperStyle: React.CSSProperties = {
    textAlign: 'center'
}

const linksStyle: React.CSSProperties = {
    margin: '5px'
}

const Footer = () => {
    return (
        <div style={footerStyle}>
            <div style={linksWrapperStyle}>
                <a style={linksStyle} href="https://github.com/MattThyng"><Avatar size='large' src={GitHubIcon}/></a>
                <a style={linksStyle} href="https://www.linkedin.com/in/matthew-thyng/"><Avatar size='large' src={LinkedInIcon}/></a>
                <a style={linksStyle} href="mailto: mattthyng@gmail.com"><Avatar size='large' src={GmailIcon}/></a>
            </div>
        </div>
    )
}

export default Footer