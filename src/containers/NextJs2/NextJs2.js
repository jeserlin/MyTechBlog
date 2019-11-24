import { ArticleContent, ArticleSubTitle, ArticleTitle, Container, PrefixTitle } from '../../components/Common/Common';
import React, { Component } from 'react';

import {Helmet} from "react-helmet";
import styled from 'styled-components';

const Image =  styled.img`
  margin: 1rem 0;

  /* RWD */
  @media (max-width: 576px) {
      width: 100% !important;
  }
`;

class NextJs2 extends Component {
  render() {
    const image1 = require(`../../static/img/nextJs/nextJs2_1.png`);
    const image2 = require(`../../static/img/nextJs/nextJs2_2.png`);
    const image3 = require(`../../static/img/nextJs/nextJs2_3.png`);
    const image4 = require(`../../static/img/nextJs/nextJs2_4.png`);
    const image5 = require(`../../static/img/nextJs/nextJs2_5.png`);
    const image6 = require(`../../static/img/nextJs/nextJs2_6.png`);
    return (
      <Container>
          <Helmet>
            <title>{PrefixTitle} - Next.js #2( Render )</title>
            <meta name="keywords" content="Jeserlin, React, Next.js, React Framework" />
          </Helmet>
          <ArticleTitle>[筆記]Next.js #2( Render )</ArticleTitle>
          <ArticleSubTitle>
            前言
          </ArticleSubTitle>
          <ArticleContent>
            在<a href='https://jeserlin.github.io/MyTechBlog/#/nextJs1' target='_blank' rel='noopener noreferrer'>上一篇文章</a>中我們建立了一個Next.js的專案。
            Next.js有包裝好的router功能，除了能提供client-side navigation之外，還能實現server-side navigation。
          </ArticleContent>
          <ArticleSubTitle>
            新增頁面
          </ArticleSubTitle>
          <ArticleContent>
            我們只要在pages folder下新增react component並且export就完成頁面的新增了，比如說我們來建立一個about頁面：
            <div className='hightlight code'>
              {'// pages/about.js'}<br />

              {'export default function About() {'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'return ('}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<div>'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<p>This is the about page</p>'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' </div>'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{' );'}<br />
              {'}'}<br />
            </div>
            把專案run起來之後，我們就能在 http://localhost:3000/about 看到畫面了。<br />
            <Image src={image1} alt='image' style={{width: '50%'}}/><br />
            這個時候我們打開browser的console可以看到，這個頁面是server-side rendering。(第一行的about)
            <Image src={image2} alt='image' style={{width: '80%'}}/><br />
          </ArticleContent>
          <ArticleSubTitle>
            連結頁面
          </ArticleSubTitle>
          <ArticleContent>
            既然我們已經有頁面的url了那我們就可以直接用HTML的{'<a>'}來連接頁面了。
            但是這樣的做法會是server-side rendering，也就是說瀏覽器會去跟server要頁面然後再更新到畫面上。<br />
            為了實現client-side rendering我們要使用Next.js的Link API。首先我們要使用next/link來連結兩個頁面：
            <div className='hightlight code'>
              {'// This is the Link API'}<br />
              {'import Link from \'next/link\';'}<br />

              {'const Index = () => ('}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'<div>'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<Link href="/about" title="About Page">'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<a>About Page</a>'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</Link>'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<p>Hello Next.js</p>'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}<br />
              {');'}<br />

              {'export default Index;'}<br />
            </div>
            現在我們會看到頁面中多了一個link：<br />
            <Image src={image3} alt='image' style={{width: '50%'}}/><br />
            點下link的時候可以從console中觀察到，about頁面不再是從server過來的而使從about.js讀取。<br />
            <Image src={image4} alt='image' style={{width: '80%'}}/><br />
            如果你有點client-side routing的陰影，不要擔心。這時候我們按上一頁，
            會回到index頁面而且也是client-side rendering。Next.js已經幫我們處理好location.history的問題的了，完全不需要再自己處理了～～
          </ArticleContent>
          <ArticleSubTitle>
            限制
          </ArticleSubTitle>
          <ArticleContent>
            next/link是一個HOC，他只接受href及少部分類似的props。
            如果我們需要傳遞props的話，應該要在他的chidren中傳遞。以上方的例子來說，我們應該把props寫在{'<a>'}裡面：
            <div className='hightlight code'>
              {'<Link href="/about">'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'<a title="About Page">About Page</a>'}<br />
              {'</Link>'}
            </div>
            這時候你會看到{'<a>'}中多了title:<br />
            <Image src={image5} alt='image' style={{width: '80%'}}/><br />
            如果放在{'<Link>'}裡面則會得到unknown props的錯誤訊息：<br />
            <Image src={image6} alt='image' style={{width: '80%'}}/><br />
            但也不是所有的component都能夠放在next/link裡，他至少需要有onClick這個屬性。
          </ArticleContent>
          <ArticleSubTitle>
            資料來源
          </ArticleSubTitle>
          <ArticleContent>
            <ul>
              <li><a href='https://nextjs.org/learn/basics/navigate-between-pages' target='_blank' rel='noopener noreferrer'>https://nextjs.org/learn/basics/navigate-between-pages</a></li>
            </ul>
          </ArticleContent>
      </Container>
    );
  }
}

export default NextJs2;