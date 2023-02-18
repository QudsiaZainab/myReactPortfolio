import React, { useState, useEffect } from 'react';
import './style.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si'
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

export default function Header() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [project, setProject] = useState('All');
    const showProject = (e) => setProject(e.target.value);

    function cpp() {
        document.getElementById('projectsBox').innerHTML = `
        <div class="projectItem" id="projectItem5">
            <div class="hoverBox">
                <a href="/"><h3>Infix expression into Binary expression tree</h3></a>
                <a href="/"><p>developed using Data Structure concepts in C++</p></a>
            </div>
        </div>
        <div class="projectItem" id="projectItem4">
            <div class="hoverBox">
                <a href="/"><h3>Snakes and Ladders - Game</h3></a>
                <a href="/"><p>developed using OOP concepts in C++</p></a>
            </div>
        </div>
    </div>`
    }

    function All() {
        document.getElementById('projectsBox').innerHTML = `
                   <div class="projectItem projectItem18">
                        <div class="hoverBox">
                            <a href="/"><h3>Online Food Ordering System - WebApp</h3></a>
                            <a href="/"><p>developed using HTML5, CSS3, Bootstrap, JavaScript, node js, and MySQL</p></a>
                        </div>
                    </div>
                    <div class="projectItem" id="projectItem2">
                        <div class="hoverBox">
                            <a href="/"><h3>Online Blood Bank - WebSite</h3></a>
                            <a href="/"><p>developed using HTML5, CSS3, and Bootstrap</p></a>
                        </div>
                    </div>
                    <div class="projectItem" id="projectItem3">
                        <div class="hoverBox">
                            <a href="/"><h3>Online Portfolio - WebSite</h3></a>
                            <a href="/"><p>developed using React js</p></a>
                        </div>
                    </div>
                    <div class="projectItem" id="projectItem4">
                        <div class="hoverBox">
                            <a href="/"><h3>Snakes and Ladders - Game</h3></a>
                            <a href="/"><p>developed using OOP concepts in C++</p></a>
                        </div>
                    </div>
                    <div class="projectItem" id="projectItem5">
                        <div class="hoverBox">
                            <a href="/"><h3>Infix expression into Binary expression tree</h3></a>
                            <a href="/"><p>developed using Data Structure concepts in C++</p></a>
                        </div>
                    </div>
                    <div class="projectItem projectItem67">
                        <div class="hoverBox">
                            <a href="/"><h3>UI design for Housing Society Management System</h3></a>
                            <a href="/"><p>Developed using HCI (Human Computer Interaction) concepts</p></a>
                        </div>
                    </div>
                    <div class="projectItem projectItem67">
                        <div class="hoverBox">
                            <a href="/"><h3>SRS document for Housing Society Management System</h3></a>
                            <a href="/"><p>created Software Requirement Specification Document for HSMS</p></a>
                        </div>
                    </div>
                    <div class="projectItem projectItem67">
                        <div class="hoverBox">
                            <a href="/"><h3>SDD document for Housing Society Management System</h3></a>
                            <a href="/"><p>created Software Design Document for Housing Society Management System</p></a>
                        </div>
                    </div>
                    <div class="projectItem projectItem18">
                        <div class="hoverBox">
                            <a href="/"><h3>UML diagrams for Online Food Ordering System</h3></a>
                            <a href="/"><p>drawn UML diagrams for Online Food Ordering System</p></a>
                        </div>
                    </div>
        `
    }

    function Web()
    {
        document.getElementById('projectsBox').innerHTML = `
        <div class="projectItem projectItem18">
                        <div class="hoverBox">
                            <a href="/"><h3>Online Food Ordering System - WebApp</h3></a>
                            <a href="/"><p>developed using HTML5, CSS3, Bootstrap, JavaScript, node js, and MySQL</p></a>
                        </div>
                    </div>
                    <div class="projectItem" id="projectItem2">
                        <div class="hoverBox">
                            <a href="/"><h3>Online Blood Bank - WebSite</h3></a>
                            <a href="/"><p>developed using HTML5, CSS3, and Bootstrap</p></a>
                        </div>
                    </div>
                    <div class="projectItem" id="projectItem3">
                        <div class="hoverBox">
                            <a href="/"><h3>Online Portfolio - WebSite</h3></a>
                            <a href="/"><p>developed using React js</p></a>
                        </div>
                    </div>
        `
    }

    function SE()
    {
        document.getElementById('projectsBox').innerHTML = `
                    <div class="projectItem projectItem67">
                        <div class="hoverBox">
                            <a href="/"><h3>SRS document for Housing Society Management System</h3></a>
                            <a href="/"><p>created Software Requirement Specification Document for HSMS</p></a>
                        </div>
                    </div>
                    <div class="projectItem projectItem18">
                        <div class="hoverBox">
                            <a href="/"><h3>UML diagrams for Online Food Ordering System</h3></a>
                            <a href="/"><p>drawn UML diagrams for Online Food Ordering System</p></a>
                        </div>
                    </div>
                    <div class="projectItem projectItem67">
                        <div class="hoverBox">
                            <a href="/"><h3>SDD document for Housing Society Management System</h3></a>
                            <a href="/"><p>created Software Design Document for Housing Society Management System</p></a>
                        </div>
                    </div>
        `
    }

    useEffect(() => {
        if (project === "C++")
            cpp();
        if (project === "All")
            All();
        if(project === "Web")
            Web();
        if(project === "SE")
            SE();
    });
    return (
        <>
            <div id="top">
                <h2>Qudsia Zainab</h2>
                <FaIcons.FaBars id="hammBurger" onClick={showSidebar} />
            </div>
            <div className={sidebar ? 'sidebar ' : 'sidebar sidebarGo'}>
                <div id="sideHead">
                    <AiIcons.AiOutlineClose id="close" onClick={showSidebar} />
                </div>
                <ul>
                    <IconContext.Provider value={{ size: '0.9375rem' }}>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <a href={item.path} onClick={showSidebar}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </IconContext.Provider>
                </ul>
            </div>
            <div id="Home">
                <div id="devinfo">
                    <div id="hello">Hi, I am</div>
                    <div id="name">Qudsia Zainab</div>
                    <div id="profession">Software Engineering Student</div>
                    <div id="tagline">I am a passionate student to solve problems using my programming skills.</div>
                </div>
                <div id="devPic">
                    <img src="pngtree-wenjing-girl-cute-girl-q-version-girl-cute-little-girl-png-image_336974-removebg-preview.png" alt="" />
                </div>
            </div>
            <div id="About">
                <h2>About Me</h2>
                <div id="data">
                    <img src="giphy.gif" alt="" />
                    <p>Hi, I am Qudsia Zainab and a student of BS Software engineering in Air University Islamabad. I have completed four semesters and these days I am looking for an internship apportunity related to the following skills that I have:
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>ES6</li>
                            <li>Bootstrap</li>
                            <li>Java</li>
                            <li>React js</li>
                            <li>Redux</li>
                            <li>node js</li>
                            <li>C++</li>
                            <li>SQL</li>
                            <li>ERD</li>
                            <li>OOP</li>
                            <li>Data Structures</li>
                            <li>UML Diagrams</li>
                            <li>Linux</li>
                            <li>Software Requirement Engineering</li>
                            <li>Human Computer Interaction</li>
                            <li>MS VS</li>
                            <li>Justinmind</li>
                            <li>Software Design Patterns</li>
                            <li>MS Office</li>
                            <li>MS VS Code</li>
                            <li>Visual Paradigm</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div id="Projects">
                <h2>Projects</h2>
                <div id="Buttons">
                    <button value="All" onClick={showProject} className = {project === 'All' ? 'clicked' : ''}>All</button>
                    <button value="Web" onClick={showProject} className = {project === 'Web' ? 'clicked' : ''}>Web Development</button>
                    <button value="C++" onClick={showProject} className = {project === 'C++' ? 'clicked' : ''}>C++</button>
                    <button value="SE" id = "Mrgn" onClick={showProject} className = {project === 'SE' ? 'clicked' : ''}>Software Engineering</button>
                </div>
                <div id="projectsBox">
                    
                </div>
            </div>
            <div id="contactMe">
                <h2>Contact Me</h2>
                <div id="Contacts">
                    <IconContext.Provider value={{ size: '1.5625rem', color: 'white' }}>
                        <div className='contactItem'>
                            <MdIcons.MdLocationOn className='icon' /><div className="iconText">PAF Complex E-9 Islamabad</div>
                        </div>
                        <div className='contactItem'>
                            <BsIcons.BsTelephoneFill className='icon' /><div className="iconText">+923039204060</div>
                        </div>
                        <div className='contactItem'>
                            <SiIcons.SiGmail className='icon' /><div className="iconText">qudsiazainab2002@gmail.com</div>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            <div id="navBar">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#contactMe">Contact Me</a></li>
                </ul>
            </div>
            <div id="copyright">
                copyright by Qudsia Zainab. All rights reserved.
            </div>
        </>
    )
}