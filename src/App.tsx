import * as React from 'react';
import './assets/main.css'




function SwitchNav(value) {
  mdui.$("#home").hide();
  mdui.$("#about").hide();

  mdui.$(value).show();
}




function NaviBar() {
  return (
    <mdui-navigation-bar value="navigation">
      <mdui-navigation-bar-item icon="home--outlined" value="home">Home</mdui-navigation-bar-item>
      <mdui-navigation-bar-item icon="feed--outlined" value="about">About</mdui-navigation-bar-item>
      <mdui-navigation-bar-item icon="edit--outlined" value="blog" href="https://blog.amane.icu" target="_blank">Blog</mdui-navigation-bar-item>
    </mdui-navigation-bar>
  );
}







export default function App() {

  return (
    <>
  
  <div class="title mdui-prose">
      <img loading='lazy' src="https://cfdn.nofated.win/avatars/avatar.webp" class='avatar'/>
      <h1>Amane</h1>
    </div>






<NaviBar />



</>
  );
}
