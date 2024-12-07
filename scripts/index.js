let homepage = document.querySelector(".homepageB")
let buttons = document.querySelector(".buttons")
let contentwrapper = document.querySelector(".contentwrapper")
let info = document.querySelector(".info")
let worldrecords = document.querySelector(".worldrecordsB")
let aboutgd = document.querySelector(".aboutgdB")
let videos = document.querySelector(".videosB")
let demonlist = document.querySelector(".demonlistB")
let notebook = document.querySelector(".notebookB")
let calc = document.querySelector(".calculaterB")
let mylevels = document.querySelector(".mylevelsB")
let mychannel = document.querySelector(".mychannelB")
let settingButton = document.querySelector(".setting")
let settinglist = document.querySelector(".Settinglist")
settingButton.addEventListener("click", () => {
  if(settinglist.classList.contains("downmenu")){
    settinglist.classList.add("upmenu")
    settinglist.classList.remove("downmenu")
  }else{
     settinglist.classList.remove("upmenu")
    settinglist.classList.add("downmenu")
  }
})







homepage.addEventListener("click", () => {
    contentwrapper.innerHTML = data.section1
})

worldrecords.addEventListener("click", () => {
    contentwrapper.innerHTML = data.section2
})

aboutgd.addEventListener("click", () => {
    contentwrapper.innerHTML = data.section3
})

videos.addEventListener("click", () => {
    contentwrapper.innerHTML = data.section4
})

demonlist.addEventListener("click", () => {
    contentwrapper.innerHTML = data.section5
})


notebook.addEventListener("click", () => {
    contentwrapper.innerHTML = data.section6
})

calc.addEventListener("click", () => {
    contentwrapper.innerHTML = data.section7
})

mylevels.addEventListener("click", () => {
    contentwrapper.innerHTML = data.section8
})

mychannel.addEventListener("click", () => {
    contentwrapper.innerHTML = data.section9
})



let text1 = `Geometry Dash is a side-scrolling music platforming game series developed by Robert Topala. The game was released on 13 August 2013 on iOS and Android, and the Windows and macOS versions on 22 December 2014. In Geometry Dash, players control the movement of an icon and navigate music-based levels while avoiding obstacles such as spikes.

Geometry Dash comprises 26 full-length levels made by its developer; 22 are auto-scrolling, and 4 are 'platformer' levels. There is also a short-length level called 'The Challenge', unrelated to the other 26 levels. It has a level creation system, where players can create their custom levels, share them online, and play levels designed by other players. In-game currency, such as stars, moons, coins, mana orbs or diamonds, can be obtained from various sources, such as levels (both official and user-created) or chests.

Three other spin-off games in the series have been made: Geometry Dash Meltdown, Geometry Dash World and Geometry Dash SubZero. Geometry Dash Lite is a free version of the main game that has fewer levels available, no access to the game's online editor, and advertisements.`

let text2 = `Geometry Dash can be played with a touchscreen, keyboard, mouse or controller. The player manipulates the movement of their icon through input in the form of pressing or holding to reach the end of a level. The level restarts if the player crashes into an obstacle, such as a spike, a sawblade, a wall, or a ceiling. There is a 'practice mode' in which a player may place checkpoints to survey or practice a level but is unable to collect coins or gain progress for normal mode. The timing and rhythm of the in-game music are key parts of the game, often relating to each other.[1][2] In the game's platformer mode, the player can go left or right at their own discretion. There are 26 main levels in the full version of Geometry Dash, 20 of which are unlocked upon installation. Three require a specific number of secret coins hidden within the official levels (also obtained by completing map packs), and the four platformer levels (three of which are initially locked) require the previous to be completed. 'The Challenge' is also official but not considered a main level. Each level grants rewards upon completion.[1][3] The full version of the game features the ability to upload and download user-created levels.[4]`

let text3 = `Geometry Dash was created by Swedish video game developer Robert Nicholas Christian Topala, known professionally as RobTop. On 6 June 2010, Topala created his first video game, Bounce Ball Thingy, on Newgrounds, developing it while he was at university studying civil engineering. He later abandoned his course because he became more interested in the video game industry.[5]

Topala decided to work alone, founding RobTop Games in 2012. The first video game he produced under RobTop Games was Boomlings, a puzzle video game released on 5 November 2012 for mobile devices,[6][7] Topala continued to produce video games, including Memory Mastermind (2013) and Boomlings MatchUp (2013).[8][9]

Geometry Dash
The game began as a project that could have moved in any direction, according to Topala. He remarked, 'it simply started as a template with a cube that could crash and jump' and 'there really was no detailed plan'.[10] He previously developed it for the computer but later altered his plan and made attempts to make it a mobile game. Topala was inspired by The Impossible Game and took about four months to create the game and take it to the App Store and Google Play Store. In the beta version, the game was called Geometry Jump but later changed to Geometry Dash. The game is developed on the Cocos2d game engine.[11]

Upon its release, Geometry Dash had seven levels.[12] It gained popularity around the world, especially in Canada, where it achieved the title of the most popular paid iPhone app in June 2014.[13] There are four free versions of the game, one being Geometry Dash Lite, which includes 21 levels from the full version, including the tower levels.[3]

Update 2.2
On 14 August 2021, Topala released a sneak peek video of version 2.2, the first major update since 2017, on his YouTube channel. The release date had yet to be announced.[14][15] On 4 September 2022, Topala released the second sneak peek, over a year after the first.[16] Topala released a third sneak peek on 15 May 2023, which showcased additional platformer mode features and a sound effect library for custom levels.[17] On 13 August 2023, as part of the game's 10th anniversary, Topala released a 27-minute video in commemoration. At the end of the video, the release date for 2.2 was revealed as October 2023, making it the first update to be released in more than six years.[18] However, on 22 October 2023, Topala announced via Twitter that the 2.2 release date would be delayed to November due to server and bug issues.[19] Topala later wrote on 26 November 2023 that the release 'may not be doable in November' since he wanted to release the update simultaneously for all platforms.[20]

On 20 December 2023, Topala announced the update's release via Twitter with the message 'check steam' and a clip from Avengers: Infinity War.[21][22][23]`



// buttons.onclick=function(b){
//     if(b.target.classList.contains("generalinformation")){
//         info.innerHTML=text1
//     }
//     else if(b.target.classList.contains("gameplay")){
//         info.innerHTML=text2
//     }
//     else if(b.target.classList.contains("development")){
//         info.innerHTML=text3
// }}
let data = {
    section1: ` <h1>GD by KVAS</h1>
    <div class="picture"></div>`,
    section2: `
        <div class="Records" id="records">
            <div class="recordswrapper">
            <div class="row">
                <div class="colon colon1">#</div>
            <div class="colon colon2">Player</div>
            <div class="colon">LRT</div>
            <div class="colon">RTA</div>
            <div class="colon">Date</div>
            <div class="colon">Platform</div>
            <div class="colon">FPS</div>
            <div class="colon">Version</div>
            </div>
           
            <div class="row">
                <div class="colon colon1">🥇</div>
            <div class="colon colon2">sinc0s</div>
            <div class="colon">6m 42s 356ms</div>
            <div class="colon">6m 53s 667ms</div>
            <div class="colon">4 months ago</div>
            <div class="colon">PC</div>
            <div class="colon">N/A (2.2)</div>
            <div class="colon">2.206</div>
            </div>

            <div class="row">
                <div class="colon colon1">🥈</div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>
           
            <div class="row">
                <div class="colon colon1">🥉</div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            <div class="row">
                <div class="colon colon1"></div>
            <div class="colon colon2"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            <div class="colon"></div>
            </div>

            </div>
        `,
    section3: `<div class="about">
            <div class="aboutwrapper"id="about">
                <div class="buttons">
                    <button class="button generalinformation">General Information</button>
                    <button class="button gameplay">Gameplay</button>
                    <button class="button development">Development</button>
                </div>
                <p class="info">Genre(s)	Runner, music, platformer
                    Developer(s)	Robert Topala
                    Publisher(s)	RobTop Games
                    Platform(s)	iOS, Android, Windows Phone, Microsoft Windows, macOS
                    Original release	iOS, Android
                    13 August 2013
                    Windows Phone
                    12 June 2014
                    Microsoft Windows, macOS
                    22 December 2014
                    First release	Geometry Dash
                    13 August 2013
                    Latest release	Geometry Dash SubZero
                    21 December 2017
                    Spin-offs	
                    Geometry Dash Lite
                    Geometry Dash Meltdown
                    Geometry Dash World
                    Geometry Dash Subzero
                Geode</p>
            </div>
        </div>`,
    section4: ` <div class="videos" id="videos">
            <iframe width="280" height="157" src="https://www.youtube.com/embed/V4mI4sZGLmU?si=knio8AQxkl3RqQOC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/pfau107Vclk?si=KTRbrY1zFKeALHGy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/BC_MMwq7nE0?si=NvRTfTstiSNk8bXa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/EilL1lE6Opo?si=iPNSGr7to7ghePX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/bQXnREyaO34?si=ONQx0SBVh0M8ICFe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/EM41J4sV2Iw?si=cPPuBq7EWd8_pT1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/KexhCTpuQZY?si=zW3iqJ7t2O2QxLlJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/nG2H95mHFIU?si=QnW-KCB30epwRLm3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/2lMs4EBVkMQ?si=RrJ3WLqxAwur6bU_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/s04GNPjN-lg?si=TYKFatyxrrcghK2h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



        </div>`,
    section5: `<div class="demonslist" id="Demonslist">
            <div class="demonsitem">
                <iframe width="280" height="157" src="https://www.youtube.com/embed/9fsZ014qB3s?si=LFMHJFnLAKaZA9O5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="levels">
                    <p class="levelname">#1 – Tidal Wave</p>
                    <p class="authorname">OniLink</p>
                </div>

            </div>
            <div class="demonsitem">
                <iframe width="280" height="157" src="https://www.youtube.com/embed/sBKR6aUorzA?si=VkDfIVgD5gSDvvPX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="levels">
                    <p class="levelname">#2 – Acheron</p>
                    <p class="authorname">ryamu</p>
                </div>

                
            </div>

            
                <div class="demonsitem">
                    <iframe width="280" height="157" src="https://www.youtube.com/embed/EztneTPp5CU?si=S9nVhWvMB1_jFVRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div class="levels">
                        <p class="levelname">#3 – Nullscapes</p>
                        <p class="authorname">Kiba</p>
                    </div>
    
                </div>
                <div class="demonsitem">
                    <iframe width="280" height="157" src="https://www.youtube.com/embed/GR4OMkS3SN8?si=u6b3m1LaZHqoPMOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div class="levels">
                        <p class="levelname">#4 – Silent Clubstep</p>
                        <p class="authorname">TheRealSailent</p>
                    </div>
    
                    
                </div>

        </div>
    </div>`,
    section6: `<div class="notebook">
        <div class="notebook-wrapper">
            <div class="top">
                <div class="inputs">
<input class="task" placeholder="go to the grocery" type="text">
<input class="time" placeholder="15:30" type="text">
                </div>
                <div class="buttonsForNotebook">
                    <button class="addtothelist" onclick="addtothelist()">Add</button>
                </div>
            </div>
            <div class="bottom">
                <div class="list">
                    <ul class="listul">
                        <li class="item">go to the grocery <button class="done"><img onclick="crossout(event)" src="correct.png" class="correctimg" alt=""></button> <button class="delete"><img onclick="remove(event)" src="cancel.png" class="cancelimg" alt=""></button> </li>
                        <li class="item">go to the grocery <button class="done"><img onclick="crossout(event)" src="correct.png" class="correctimg" alt=""></button> <button class="delete"><img onclick="remove(event)" src="cancel.png" class="cancelimg" alt=""></button> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`,
    section7: ` <div class="calc">
    <input class="x" type="number">
    <input class="y" type="number">
<div class="calcbuttons">
    <button class="cbutton" onclick="foo()">+</button>
    <button class="cbutton" onclick="minus()">-</button>
    <button class="cbutton" onclick="multiply()">*</button>
    <button class="cbutton" onclick="division()">/</button>
    <button class="cbutton" onclick="sqroot()">^</button>
    <button class="cbutton" onclick="sqr()">√</button>
</div>
    <p class="result"></p>
  </div>`,
    section8: `<div class="futurecontent">
Work still in Progress!
</div>`,
section9:`<div class="channels">
    <h1>Link to my channels</h1>
    <ul>
        <li>
            <a href="https://www.youtube.com/@COSMOSyt2010">COSMOS</a>
        </li>
        <li>
            <a href="https://www.youtube.com/@KVAS-YOUTUBE">KVAS</a>
        </li>
        <li>
            <a href="https://www.youtube.com/@AnimationsSUNDOWN/videos">SUNDOWN</a>
        </li>
    </ul>
</div>`,

}


