import React from 'react'
import $ from 'jquery'

export function Navbar(){
    return (<header>
        <h1><a href="index.html">Draw</a></h1>
        <nav className="mobile">
           <ul>
               <li><a href="file"><img id="Folder" src="images/Folder.svg " alt="Folder icon" /></a></li>
               <li><a href="image"><img id="image" src="images/image.svg" alt="import image icon" /></a></li>
               <li id="pen" ><img id="pen-icon" src="images/pen.svg" alt="pen icon" /></li>
               <li><a href="user"><img id="user" src="images/user.svg" alt="user settings icon" /></a></li>
           </ul>
        </nav>
        <nav className="desktop">
            <ul>
                <li><a href="file">Files</a></li>
                <li><a href="user">User Settings</a></li>
                <li><a href="Login">Log In</a></li>
                <li><a href="Register">Register</a></li>
            </ul>
        </nav>
        </header>)
}





$(function(){
    const $penIcon = $('#pen-icon');
    let opaq = true;

    $('#pen').click(function() { $('#pensettings').toggleClass('show');
    if(opaq){
        opaq = false;
        $penIcon.css('opacity', '1');
    } else {
        opaq = true;
        $penIcon.css('opacity', '0.3');
    }
});
})