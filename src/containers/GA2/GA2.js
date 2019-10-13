import { ArticleContent, ArticleSubTitle, ArticleTitle } from '../../components/Common/Common';
import React, { Component } from 'react';

import styled from 'styled-components';

const Image =  styled.img`
  width: 100%;
  margin: 1rem 0;
`;

class GA2 extends Component {
  render() {
    const image1 = require(`../../static/img/ga/ga1_2.png`);
    const image2 = require(`../../static/img/ga/ga2_1.png`);
    return (
      <div className='container'>
        <ArticleTitle>[筆記]在React上設定GA Part2</ArticleTitle>
        <ArticleContent>
          在<a href='/#/ga1'>上一篇</a>文章中已經設定好可以在GA dashboard上看總覽人數了,<br/>
          但由於我是使用react-router，在沒有多做一些處理的前提下只能抓到index的路徑。<br/>
          <Image src={image1} alt='image'/>
          今天這邊文章會紀錄如何讓GA能讀取react-router的路徑！
        </ArticleContent>
        <ArticleSubTitle>第一步：實作withTracker</ArticleSubTitle>
        <ArticleContent>
          react: ^16.8.5<br/>
          react-router: ^4.0.0<br/>
          以下code是使用react hook實作：<br/>
          <div className='hightlight code'>
            {'import React, { useEffect } from "react";'}<br/>
            {'import ReactGA from "react-ga";'}<br/><br/>

            {'const withTracker = (WrappedComponent, options = {}) => {'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{'const trackPage = page => {'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'ReactGA.set({'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'page,'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'...options'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'});'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'ReactGA.pageview(page);'}<br/>
            {'};'}<br/>

            {'const HOC = props => {'}<br/>
            {
              // eslint-disable-next-line
            }&nbsp;&nbsp;&nbsp;&nbsp;{'useEffect(() => trackPage'}<u className='emphasize'>{'(`MyTechBlog${props.location.pathname}`)'}</u>{', ['}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'props.location.pathname'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{']);'}<br/>

            &nbsp;&nbsp;&nbsp;&nbsp;{'return <WrappedComponent {...props} />;'}<br/>
              {'};'}<br/>

              {'return HOC;'}<br/>
              {'};'}<br/>

              {'export default withTracker;'}<br/>
          </div>
          如果你的domain有多個page的話，為了較好地在GA上區分user瀏覽的頁面，你可以在trackPage這邊加入上一層的路徑（底線+墨綠色部分）。<br/>
          以上是react-ga提供的方法，可以在這邊看更多資訊：<br/>
          <a href='https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker' target='_blank' rel='noopener noreferrer'>
            https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
          </a>
        </ArticleContent>
        <ArticleSubTitle>第二步：在router中導入withTracker</ArticleSubTitle>
        <ArticleContent>
          首先在App.js 中import withTracker (或者是你的index container)<br/>
          <div className='hightlight code'>
            import withTracker from './withTracker';
          </div>
          然後在route的component中把要導的頁面用withTracker包起來<br/>
          <div className='hightlight code'>
            {'<Router>'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{'<Route path="/" exact component={withTracker(this.index)} />'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{'<Route path="/ga1/" component={withTracker(this.ga1)} />'}<br/>
            {' </Router>'}<br/>
          </div>
        </ArticleContent>
        <ArticleSubTitle>第三步：在Dashboard上看結果</ArticleSubTitle>
        <ArticleContent>
          接下來開啟隨便一個router的路徑，然後到google analytics的dashboard，就可以看到成果了喔～！<br/>
          <Image src={image2} alt='image'/>
          從上圖我們可以看到原本顯示的是‘/MyTechBlog’，現在則是直接顯示我們在react-router中設定的路徑。<br/>
          如此以來我們就可以很清楚的查看user到底在瀏覽哪一頁。<br/>
          設定好GA也過了3個禮拜了，雖然來的人不多但是感覺能看到實際的數字蠻有趣的。接下來的目標就是研究如何提升人數！
        </ArticleContent>
      </div>
    );
  }
}

export default GA2;