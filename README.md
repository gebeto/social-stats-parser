# social-stats-parser
Social Stats Parser


## How to use

```js
import { InstagramParser } from "social-stats-parser";

const instagramParser = new InstagramParser();

instagramParser.parse("slavik.nychkalo").then((res) => console.log(res));
```

The result will be:

```json
{
  username: 'slavik.nychkalo',
  followers: '8805',
  likes: null,
  posts: '46'
}
```