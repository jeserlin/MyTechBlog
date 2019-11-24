import { ArticleContent, ArticleSubTitle, ArticleTitle, Container, PrefixTitle } from '../../components/Common/Common';
import React, { Component } from 'react';

import {Helmet} from "react-helmet";
import styled from 'styled-components';

const Image =  styled.img`
  margin: 1rem 0;
`;

class NextJs1 extends Component {
  render() {
    const image1 = require(`../../static/img/nextJs/nextJs1_1.png`);
    const image2 = require(`../../static/img/nextJs/nextJs1_2.png`);
    const image3 = require(`../../static/img/nextJs/nextJs1_3.png`);
    return (
      <Container>
          <Helmet>
            <title>{PrefixTitle} - Next.js #1( 建立)</title>
            <meta name="keywords" content="Jeserlin, React, Next.js, React Framework" />
          </Helmet>
          <ArticleTitle>[筆記]Next.js #1( 建立)</ArticleTitle>
          <ArticleSubTitle>
            前言
          </ArticleSubTitle>
          <ArticleContent>
            在我們建立一個React的專案時，一般都會使用官方提供的<a href='https://github.com/facebook/create-react-app' target='_blank' rel='noopener noreferrer'>create-react-app</a>。
            雖然可以快速的建立一個React的專案，但是學習曲線還是偏高。
            比如說設定webpack，router等等。更別說如果你需要處理SEO的話，
            還需要server-side render你的頁面。Next.js是一個React Framework，他提供了許多功能可以輕鬆解決剛剛提到的困擾：<br />
            <ul>
              <li><span className='emphasize'>Server-side rendering</span></li >
              <li><span className='emphasize'>Routing System</span></li >
              <li><span className='emphasize'>CSS-in-JS</span></li >
              <li><span className='emphasize'>Static Exporting</span></li >
              <li><span className='emphasize'>等等</span></li >
            </ul>
          </ArticleContent>
          <ArticleSubTitle>
            建立
          </ArticleSubTitle>
          <ArticleContent>
            其實官網提供了很不錯的step by step的<a href='https://nextjs.org/learn/basics/getting-started' target='_blank' rel='noopener noreferrer'>教學</a>，
            在每完成一步之後都會得到一些點數，目前不是很清楚這些點數能幹嘛XDD，
            但是似乎給了一些繼續往下學習的動力lol<br />
            <Image src={image1} alt='image' style={{width: '30%'}}/><br />
            以下紀錄建立過程的重點（手動建立）：
            <div className='hightlight code'>
              mkdir hello-next<br />
              cd hello-next<br />
              npm init -y<br />
              npm install --save react react-dom next<br />
              mkdir pagess<br />
            </div>
            然後開啟package.json做一下的修改：<br />
            <div className='hightlight code'>
              {'{ "scripts": {'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"dev": "next",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"build": "next build",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"start": "next start"<br />
              &nbsp;&nbsp;&nbsp;&nbsp;}<br />
              }
            </div>
            設定好之後用以下指令把project run起來：<br />
            <div className='hightlight code'>
              npm run dev
            </div>
            開啟 http://localhost:3000 你會看到404的畫面，如下：<br />
            <Image src={image2} alt='image' style={{width: '50%'}}/><br />
            還記得我們剛剛有建立一個pages的folder嗎？會出現以上的畫面是因為，我們沒建立任何的頁面。現在來建立一個簡單的index頁面在pages folder下：<br />
            <div className='hightlight code'>
              {'// pages/index.js'}<br />
              const Index = () => (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'<div>'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'<p>Hello Next.js</p>'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}<br />
              {');'}<br />
              export default Index;<br />
            </div>
            再次refresh頁面就會看到index頁面了！<br />
            <Image src={image3} alt='image' style={{width: '50%'}}/><br />
            如果你有開發過react專案的話，此時此刻一定會感受到Next.js中router的強大之處。
            我們只要export一個React Component然後把他放在pages folder下，就可以得到一個以檔案名一樣的固定URL，完全不需要額外的處理。
            不過這邊的render方式是server-side renderding，下一篇會主要紀錄server-side rendering跟client-side rendering。
          </ArticleContent>
          <ArticleSubTitle>
            資料來源
          </ArticleSubTitle>
          <ArticleContent>
            <ul>
              <li><a href='https://nextjs.org/#features' target='_blank' rel='noopener noreferrer'>https://nextjs.org/#features</a></li>
              <li><a href='https://nextjs.org/learn/basics/getting-started' target='_blank' rel='noopener noreferrer'>https://nextjs.org/learn/basics/getting-started</a></li>
            </ul>
          </ArticleContent>
      </Container>
    );
  }
}

export default NextJs1;