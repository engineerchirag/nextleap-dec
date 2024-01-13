import { useState } from 'react';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';


const PageTabs = () => {
    const [page, setPage] = useState('page1');

    const changePage = (pageName) =>  () => {
        setPage(pageName);
    }
  return (
    <div>
      <h1>Page Tabs Example</h1>
      <div>
        <button onClick={changePage('page1')}>Page1</button>
        <button onClick={changePage('page2')}>Page2</button>
      </div>
      {renderPage(page)}
    </div>
  );
};

const renderPage = (pageName) => {
    switch(pageName) {
        case 'page1': {
            return (<Page1 />)
        }
        case 'page2' : {
            return (<Page2 />);
        }
    }
}

export default PageTabs;
