import * as React from 'react';
import './assets/main.css'




function SwitchNav(value) {
  mdui.$("#home").hide();
  mdui.$("#about").hide();

  mdui.$(value).show();
}




function NaviBar() {
  return (
    <mdui-navigation-bar value="home">
      <mdui-navigation-bar-item icon="home--outlined" value="home">Home</mdui-navigation-bar-item>
      <mdui-navigation-bar-item icon="feed--outlined" value="about">About</mdui-navigation-bar-item>
      <mdui-navigation-bar-item icon="edit--outlined" value="blog" href="https://blog.amane.icu" target="_blank">Blog</mdui-navigation-bar-item>
    </mdui-navigation-bar>
  );
}







export default function App() {

  return (
    <>
  
  <div class="title">
      <img loading='lazy' src="https://cfdn.nofated.win/avatars/avatar.webp" class='avatar'/>
      <h1>Amane</h1>
    </div>


    <div class="home">
      <h2>Yoo!</h2>
      <p>I'm Amane, aka Nofated.</p>

      <h2>Misc</h2>
      <p>📒️ I have a <a href="https://blog.amane.icu/" target="_blank">blog</a> based on Hexo.</p>
      <p>⌨️ Coding and open-source are great! Let's contribute together!</p>
      <p>🧪 I used to be an iGEMer. My team won a 🥈silver medal in <a href="https://competition.igem.org/" target="_blank">iGEM Competition</a> 2023!</p>


    </div>




    <div class="about">
      <h2>About</h2>
      <p>My full name is Tanikaze Amane, but you may hear some one call me Nofated or nof.</p>
      <p>I do open-source works, you can check them on <a href="https://github.com/Nofated095" target="_blank">GitHub</a>. Most of them are useless and have lots of bugs.</p>

    </div>







<NaviBar />



</>
  );
}
