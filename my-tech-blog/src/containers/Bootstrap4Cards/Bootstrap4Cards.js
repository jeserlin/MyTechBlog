import React, { Component } from 'react';
import styled from 'styled-components';

import { ArticleTitle, ArticleContent } from '../../components/Common/Common';

const Card = styled.span`
  margin-right: 1rem;
`;

class Bootstrap4Cards extends Component {
  render() {
    return (
      <div className='container'>
        <ArticleTitle>[筆記]Bootstrap 4.0 – Cards (card columns)</ArticleTitle>
        <ArticleContent>
          Bootstrap 4 中的Cards 取代了 Bootstrap 3中的 panels、wells、thumbnails。<br />
          Card columns 可以將cards瀑布版的排列，<br />
          順序是 <span className='hightlight'>從上到下，再從左到右</span><br />
          也就是說假設我們寫了9個cards，最後呈現的順序會如下：<br />
          <div className='emphasize'>
            <Card>card1</Card><Card>card4</Card><Card>card7</Card><br />
            <Card>card2</Card><Card>card5</Card><Card>card8</Card><br />
            <Card>card3</Card><Card>card6</Card><Card>card9</Card><br />
          </div>
          目前似乎沒辦法透過css調整他的排序(? 如果有找到再來更新)<br />
          官網中有提到另寫css調整不同大小下，每行顯示的cards數量：<br />
          其中的column-count就是在設定每行要顯示的cards數量。<br />
          以下提供CSS的寫法 :<br />
        </ArticleContent>
      </div>
    );
  }
}

export default Bootstrap4Cards;