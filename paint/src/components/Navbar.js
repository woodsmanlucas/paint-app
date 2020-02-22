import React from 'react'
import $ from 'jQuery'

export function Navbar(){
    return (<header>
        <h1><a href="index.html">Draw</a></h1>
        <nav class="mobile">
           <ul>
               <li><img id="Folder" src="images/Folder.svg " alt="Folder icon" /></li>
               <li><a href="file.html"><img id="image" src="images/image.svg" alt="import image icon" /></a></li>
               <li id="pen" ><img id="pen-icon" src="images/pen.svg" alt="pen icon" /></li>
               <li><a href="user.html"><img id="user" src="images/user.svg" alt="user settings icon" /></a></li>
           </ul>
        </nav>
        <nav class="desktop">
            <ul>
                <li><a href="file.html">Files</a></li>
                <li><a href="user.html">User Settings</a></li>
                <li>Log In</li>
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