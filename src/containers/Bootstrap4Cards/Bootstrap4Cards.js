import { ArticleContent, ArticleTitle, Iframe } from '../../components/Common/Common';
import React, { Component } from 'react';

class Bootstrap4Cards extends Component {
  render() {
    return (
      <div className='container'>
        <ArticleTitle>[筆記]Bootstrap 4 – Cards (card columns)</ArticleTitle>
        <ArticleContent>
          Bootstrap 4 中的Cards 取代了 Bootstrap 3中的 panels、wells、thumbnails。<br />
          Card columns 可以將cards瀑布版的排列，<br />
          順序是 <span className='hightlight'>從上到下，再從左到右</span><br />
          也就是說假設我們寫了9個cards，最後呈現的順序會如下：<br />
          <Iframe height="350" scrolling="no" title="Bootstrap 4.0 Cards" src="//codepen.io/jeserlin/embed/XwqYXr/?height=265&theme-id=0&default-tab=result" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
            See the Pen
            <a href='https://codepen.io/jeserlin/pen/XwqYXr/'>Bootstrap 4.0 Cards</a>
            by jeserlin chiu
            (<a href='https://codepen.io/jeserlin'>@jeserlin</a>) on <a href='https://codepen.io'>CodePen</a>.
          </Iframe><br />
          目前似乎沒辦法透過css調整他的排序(? 如果有找到再來更新)<br />
          官網中有提到另寫scss調整不同解析度下，每行顯示的cards數量：<br />
          <Iframe height="350" scrolling="no" title="Bootstrap 4 - Cards  Columns break point (css)" src="//codepen.io/jeserlin/embed/vwjrvR/?height=265&theme-id=0&default-tab=css" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
            See the Pen <a href='https://codepen.io/jeserlin/pen/vwjrvR/'>Bootstrap 4 - Cards  Columns break point (css)</a> by jeserlin chiu
            (<a href='https://codepen.io/jeserlin'>@jeserlin</a>) on <a href='https://codepen.io'>CodePen</a>.
          </Iframe><br/>
          其中的column-count就是在設定每行要顯示的cards數量。<br />
          以下提供css的寫法 :<br />
          <Iframe height="350" scrolling="no" title="Boostrap 4 - Cards Columns break point (css)" src="//codepen.io/jeserlin/embed/pmVZJj/?height=329&theme-id=0&default-tab=css,result" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
            See the Pen <a href='https://codepen.io/jeserlin/pen/pmVZJj/'>Boostrap 4 - Cards Columns break point (css)</a> by jeserlin chiu
            (<a href='https://codepen.io/jeserlin'>@jeserlin</a>) on <a href='https://codepen.io'>CodePen</a>.
          </Iframe><br />
        </ArticleContent>
      </div>
    );
  }
}

export default Bootstrap4Cards;