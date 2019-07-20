import { ArticleContent, ArticleSubTitle, ArticleTitle, Iframe } from '../../components/Common/Common';
import React, { Component } from 'react';

class ReactBootstrap extends Component {
  render() {
    return (
      <div className='container'>
        <ArticleTitle>[筆記]React Bootstrap - WHY & HOW？</ArticleTitle>
        <ArticleSubTitle>WHY?</ArticleSubTitle>
        <ArticleContent>
          當你開始寫react之後你一定會開始很煩惱，現在html都要寫在js裡面了(JXS)，<br />
          完全顛覆了以前的想法與習慣，到底可不可以繼續用bootstrap？<br /><br />

          先別煩惱，<span className='hightlight'>bootstrap當然是可以繼續用的</span>，只要我們把他import進來，<br />

          一切的寫法就跟以前一樣。但是你知道react-bootstrap嗎？<br /><br />

          既然我們可以繼續用原本的bootstrap為什麼要選擇react-bootstrap呢？<br /><br />

          當我們要在頁面上做一些互動效果，比如：動態新增或刪除，ajax等，這些都需要操作DOM元素。<br />
          然而這些動作在前端來說是很耗效能的，當然這些效能的差異都是在大量操作下才會感受的出來。<br />
          為了解決這個問題，React在與DOM溝通之間增加了一層虛擬DOM。這個虛擬DOM是由javascript模擬出來的，<br />
          他可以提升效能，實際上是怎麼做到的有興趣可以搜尋一下。<br /><br />

          <span className='hightlight'>簡單來說，在React中我們要避免直接操作實體DOM。</span><br /><br />

          如果大家還有印象的話，<span className='hightlight'>在bootstrap中要使用他提供的javascript元件是需要jquery的，然而jquery會直接操作實體DOM。</span><br />
          這就是我們選擇react-bootstrap而不用bootstrap的最關鍵因素。<br />
          使用react-bootstrap其實是有很多好處的：<br />

          <ol>
            <li>不會直接操作DOM</li>
            <li>直接使用component，減少程式複雜度</li>
            <li>加快開發速度(畢竟什麼都自己刻是很累的XD)</li>
          </ol>
        </ArticleContent>
        <hr />
        <ArticleSubTitle>HOW?</ArticleSubTitle>
        <ArticleContent>
          使用react-bootstrap需要import react-bootstrap和bootstrap v3.的css。（現在已經有beta版支援v4嘍）<br />
          首先，加入react-bootstrap:<br />
          <span className='hightlight'>npm install --save react-bootstrap</span><br />
          再加入Bootstrap v3. 的css：<br />
          <span className='hightlight'>npm install bootstrap@3</span><br />
          當然你也可以手動地把bootstrap.css放在你的static路徑裡面，這就看個人習慣。<br />
          如果是選擇用webpack的話，最後應該會在dist裡面，可以去找找看<br />
          最後我們在index.html中讀取就ok了。<br />
          以下提供一個使用範例：<br />
          <Iframe height="350" scrolling="no" title="react-bootstrap example" src="//codepen.io/jeserlin/embed/rXVxRp/?height=265&theme-id=dark&default-tab=js,result" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
            See the Pen <a href='https://codepen.io/jeserlin/pen/rXVxRp/'>react-bootstrap example</a> by jeserlin chiu
            (<a href='https://codepen.io/jeserlin'>@jeserlin</a>) on <a href='https://codepen.io'>CodePen</a>.
          </Iframe>
        </ArticleContent>
      </div>
    );
  }
}

export default ReactBootstrap;