---
order: 3
title:
  zh-CN: 跳转
  en-US: Jumper
---

## zh-CN

快速跳转到某一页。

## en-US

Jump to a page directly.

```jsx
import { Pagination } from '@allenai/varnish';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

ReactDOM.render(
  <>
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    <br />
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
  </>,
  mountNode,
);
```
