---
order: 4
title:
  en-US: Button Text
---

You can change the button text.

```jsx
import MaxLengthText from '..'; // TODO: put back after deploy // import { MaxLengthText } from '@allenai/varnish';

ReactDOM.render(
  <MaxLengthText
    maxLength={150}
    showMoreText="Thar be the treasure"
    showLessText="Take away me' treasure"
  >
    Deadlights jack lad schooner scallywag dance the hempen jig carouser
    broadside cable strike colors. Bring a spring upon her cable holystone
    blow the man down spanker Shiver me timbers to go on account lookout
    wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot
    yardarm spyglass sheet transom heave to.
  </MaxLengthText>,
  mountNode,
);
```
