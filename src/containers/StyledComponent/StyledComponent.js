import { ArticleContent, ArticleSubTitle, ArticleTitle } from '../../components/Common/Common';
import React, { Component } from 'react';

import styled from 'styled-components';

class StyledComponent extends Component {
  render() {
    return(
      <div className='container'>
        <ArticleTitle>[筆記]styled-component - WHY & HOW</ArticleTitle>
        <ArticleSubTitle>WHY?</ArticleSubTitle>
        <ArticleContent>
          踏入React的世界之後，在view的方面我們最常煩惱的大概就是 — 某個元素到底該不該被獨立成一個component？
          之後還有沒有機會再次使用？component一多的時候要怎麼管理？
          css class name 該如何妥善管理…根據props改變style有沒有更有效率的方法…<br />
          如果你有以上痛點也許styled-component可以解決你的問題。<br />
          使用styled-component到底有什麼優點呢：<br />
          styled-component是基於優化react component中的css寫法的結果。<br />
          <ol>
            <li><span className='emphasize'>Automatic critical CSS</span>: styled-component會紀錄有哪些元件被渲染到頁面上，並自動地載入所需要的樣式（也就是說不會載入多餘的東西）。</li>
            <li><span className='emphasize'>No class name bugs</span>: styled-component會為樣式產生unique的class name，所以我們不需要擔心style被複寫或者是拼寫錯誤。</li>
            <li><span className='emphasize'>Easier deletion of CSS</span>: 當我們在管理css的時候會發現確認一個class name到底有沒有被使用很麻煩，但使用styled-component就可以避免這個狀況，因為每個style都是緊密的跟著他所屬的component。</li>
            <li><span className='emphasize'>Simple dynamic styling</span>: 可以簡單並直覺地透過props或者是global主題來決定component的style。</li>
            <li><span className='emphasize'>Painless maintenance</span>: 不需要從多份CSS file管理component的樣式。</li>
            <li><span className='emphasize'>Automatic vendor prefixing</span>: styled-component幫我們處理了各種瀏覽器的css前綴(-webkit-/-moz-/-o-/-ms-)我們只需要寫標準的css寫法就好了。</li>
          </ol>
          <hr />
          以下是我個人對styled-component的看法：<br/>
          <ol>
            <li>
            <span className='emphasize'>方便</span>：開發React的人一定會不斷地把大component切分成數個小component，
              希望可以提升重複使用率。但有時候有些component其實沒有太多複雜的邏輯只是多了一些樣式而已，
              更尷尬的是難免會有一些component無法被重複使用。這個時候如果我們用傳統的方法寫其實頗麻煩的，
              但如果使用styled-component就可以免掉不少麻煩。
            </li>
            <li>
            <span className='emphasize'>一目了然</span>：平常我們定義一個css class name後，我們的tag會這樣寫–
              {`<div className="container">`},但是如果使用了styled-component會變成這樣–
              {`<Container />`}。這種tag化的寫法可以讓我們的code更加的乾淨也更加的一目了然。
            </li>
          </ol>
        </ArticleContent>
        <ArticleSubTitle>HOW?</ArticleSubTitle>
        <ArticleContent>
          首先下載styled-component：<br />
          <span className='hightlight'>npm install –save styled-component</span><br />
          接下來在js中import元件，就可以開始了！<br />
          <span className='hightlight'>import styled from 'styled-components';</span><br />
          以下示範一個基本的使用方式：<br />
        </ArticleContent>
      </div>
    );
  }
}

export default StyledComponent;