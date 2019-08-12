import { ArticleContent, ArticleSubTitle, ArticleTitle } from '../../components/Common/Common';
import React, { Component } from 'react';

import styled from 'styled-components';

const Image =  styled.img`
  width: 100%;
  margin-top: 1rem;
`;

class GA1 extends Component {
  render() {
    const image1 = require(`../../static/img/ga/ga1_1.png`);
    const image2 = require(`../../static/img/ga/ga1_2.png`);
    return (
      <div className='container'>
        <ArticleTitle>[筆記]在React上設定GA Part1</ArticleTitle>
        <ArticleContent>
          開始在github page上建自己的blog有一小段時間了，<br />
          雖然沒幾篇文章，但是還是蠻好奇到底有沒有人來看。
        </ArticleContent>
        <ArticleSubTitle>第一步：GA資源設定</ArticleSubTitle>
        <ArticleContent>
          可以看到下圖紅色框框的地方，<br />
          追蹤ID是之後我們在code裡面初始化GA需要用的，<br />
          預設網址就輸入你要監控的website就好了。<br />
          <Image src={image1} alt='image'/>
        </ArticleContent>
        <ArticleSubTitle>第二步：載入react-ga</ArticleSubTitle>
        <ArticleContent>
          詳細的資訊可以看這邊：
          <a href='https://github.com/react-ga/react-ga'>https://github.com/react-ga/react-ga</a><br />
          在你的project中加入react-ga <br />
          <div className='hightlight code'>import ReactGA from 'react-ga';</div>
          然後再初始化，記得換成自己的追蹤ID <br />
          <div className='hightlight code'>
            {'//'} GA <br />
            ReactGA.initialize('追蹤ID'); <br />
            ReactGA.pageview(window.location.pathname + window.location.search); <br />
          </div>
        </ArticleContent>
        <ArticleSubTitle>第四步：在Dashboard上看結果</ArticleSubTitle>
        <ArticleContent>
          接下來先開啟你剛剛設定要監控的網址，<br />
          然後到google analytics的dashboard，<br />
          選擇“即時 > 總覽”，你就可以驗證有沒有設定成功了～<br />
          <Image src={image2} alt='image'/>
          目前測試下來這個設定方法只能抓到第一層路徑 (/XXX)，如果有多層的話似乎是需要更多的設定。<br />
          我的blog是用react router來做分頁的，大致上看了一下react-ga是有支援router的，就等下次再研究吧～～<br />
        </ArticleContent>
      </div>
    );
  }
}

export default GA1;