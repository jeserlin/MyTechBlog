import { ArticleContent, ArticleSubTitle, ArticleTitle, Container, PrefixTitle } from '../../components/Common/Common';
import React, { Component } from 'react';

import { FaHashtag } from "react-icons/fa";
import {Helmet} from "react-helmet";
import styled from 'styled-components';

const Image =  styled.img`
  width: 50%;
  margin: 1rem 0;

  /* RWD */
    @media (max-width: 576px) {
      width: 100%;
  }
`;

const HashTag = styled(FaHashtag)`
  color: #707037;
`;

const Link = styled.li`
  cursor: pointer;
  width: fit-content;
  span {
    transition: .3s;
  }

  &:hover {
    span {
      color: #707037;
    }
  }
`;

class Pyenv extends Component {
  constructor(props) {
    super(props);

    this.goToSection = this.goToSection.bind(this);
  }

  goToSection = id => {
    console.log(id);
    const section = document.getElementById(id);
    console.log(section);
    section.scrollIntoView();
  }

  render() {
    const image1 = require(`../../static/img/pyenv/pyenv_1.png`);
    const image2 = require(`../../static/img/pyenv/pyenv_2.png`);
    const image3 = require(`../../static/img/pyenv/pyenv_3.png`);
    const image4 = require(`../../static/img/pyenv/pyenv_4.png`);
    const image5 = require(`../../static/img/pyenv/pyenv_5.png`);
    const image6 = require(`../../static/img/pyenv/pyenv_6.png`);
    const image7 = require(`../../static/img/pyenv/pyenv_7.png`);
    const image8 = require(`../../static/img/pyenv/pyenv_8.png`);
    return (
      <Container>
        <Helmet>
          <title>{PrefixTitle} - pyenv: 輕鬆切換python版本</title>
          <meta name="keywords" content="Jeserlin, pyenv, python, version control, 版本控管" />
        </Helmet>
        <ArticleTitle>[筆記] pyenv: 輕鬆切換python版本</ArticleTitle>
        <ArticleContent>
          pyenv 是一個管理python版本的套件，
          在開發不同project的時候常常會遇到使用版本不同的問題。<br/>
          有了pyenv我們就可以輕鬆地切換不同版本的python。以下主要紀錄：
        </ArticleContent>
        <ArticleContent>
          <ol>
            <Link onClick={() => this.goToSection('installPyenv')}><span className='emphasize'><HashTag />安裝pyenv / pyenv-virtualenv</span></Link>
            <Link onClick={() => this.goToSection('installSetupPython')}><span className='emphasize'><HashTag />安裝與設定設定python版本</span></Link>
            <Link onClick={() => this.goToSection('setUpEnv')}><span className='emphasize'><HashTag />建立虛擬環境</span></Link>
            <Link onClick={() => this.goToSection('enterEnv')}><span className='emphasize'><HashTag />進入虛擬環境</span></Link>
          </ol>
        </ArticleContent>
        <ArticleSubTitle id='installPyenv'>安裝pyenv / pyenv-virtualenv</ArticleSubTitle>
        <ArticleContent>
          <div className='hightlight code'>
            $ brew update<br/>
            $ brew install pyenv
          </div>
          <div className='emphasize'>
            * brew update也許會需要一點時間，要耐心等一下。
          </div>
          下載好之後，輸入pyenv會看到如下圖的資訊：<br/>
          <Image src={image1} alt='image'/><br/>
          上圖列出了很多有用的commands，等等才會用到。接下來下載pyenv-virtualenv:
          <div className='hightlight code'>
            $ brew install pyenv-virtualenv
          </div>
          裝好之後設定一下環境變數：
          <div className='hightlight code'>
            $ eval "$(pyenv init -)"<br/>
            $ eval "$(pyenv virtualenv-init -)"
          </div>
          這時候使用以下指令會發現多了一些virtualenv相關的commands：
          <div className='hightlight code'>
            $ pyenv commands
          </div>
          <Image src={image2} alt='image'/><br/>
          到這邊安裝就完成嘍～！
        </ArticleContent>
        <ArticleSubTitle id='installSetupPython'>安裝與設定python版本</ArticleSubTitle>
        <ArticleContent>
          接下來要下載特定版本的python，下載之前可以用以下指令來看看有哪些版本可以下載：
          <div className='hightlight code'>
            $ pyenv install -l
          </div>
          列出可以下載的版本，如圖：<br/>
          <Image src={image3} alt='image'/><br/>
          接下來我們來下載python，示範下載3.4.3：
          <div className='hightlight code'>
            $ pyenv install 3.4.3
          </div>
          <div className='emphasize'>
            * 這邊下載也需要一點時間
          </div>
          <Image src={image4} alt='image'/><br/>
          現在來確認一下有沒有成功：
          <div className='hightlight code'>
            $ pyenv versions
          </div>
          這個指令會列出你電腦裡面所有的pyton，我電腦裡有兩個，一個是系統預設的，一個是剛剛下載的3.4.3。
          <Image src={image5} alt='image'/><br/>
          確認看到剛剛下載的版本安裝就完成啦！
        </ArticleContent>
        <ArticleSubTitle id='setUpEnv'>建立虛擬環境</ArticleSubTitle>
        <ArticleContent>
          接下來就是最重要的一步了，為了有一個乾淨的開發環境。<br/>
          我們一般會幫每個專案建立一個虛擬環境，如此一來每個環境之間就不會互相影響了。<br/><br/>
          以下指令的意思是：建立一個使用python3.4.3的環境，並命名為env-3.4.3
          <div className='hightlight code'>
            $ pyenv virtualenv 3.4.3 env-3.4.3
          </div>
          <Image src={image6} alt='image'/><br/>
          如果不確定有沒有建立成功，可以下以下指令檢查一下現有的虛擬環境：
          <div className='hightlight code'>
            $ pyenv virtualenvs
          </div>
          <Image src={image7} alt='image'/><br/>
        </ArticleContent>
        <ArticleSubTitle id='enterEnv'>進入虛擬環境</ArticleSubTitle>
        <ArticleContent>
          完成以上步驟之後，使用以下指令就可以進入虛擬環境了：
          <div className='hightlight code'>
            $ pyenv activate env-3.4.3
          </div>
          這邊的<b>env-3.4.3</b>是剛建立的虛擬環境的名字，進入之後你會看到你的機器名字前面有一個括號表示目前的虛擬環境，如圖：
          <Image src={image8} alt='image'/><br/>
        </ArticleContent>
        <hr />
        <ArticleContent>
          整理一下這次用到的pyenv指令：
          <div className='code'>
            <ol>
              <li><span className='hightlight'>pyenv commands</span> {'/* 列出全部可用指令 */'}</li>
              <li><span className='hightlight'>pyenv install -1</span> {'/* 列出全部可下載版本 */'}</li>
              <li><span className='hightlight'>pyenv install (version)</span> {'/* 下載特定版本python */'}</li>
              <li><span className='hightlight'>pyenv versions</span> {'/* 列出電腦內的全部python版本 */'}</li>
              <li><span className='hightlight'>pyenv virtualenv (version) (environment name)</span> {'/* 建立虛擬環境 */'}</li>
              <li><span className='hightlight'>pyenv virtualenvs</span> {'/* 列出全部虛擬環境 */'}</li>
              <li><span className='hightlight'>pyenv activate (environment name)</span> {'/* 進入特定虛擬環境 */'}</li>
            </ol>
          </div>
        </ArticleContent>
      </Container>
    )
  }
}

export default Pyenv;