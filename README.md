# social-stats-parser
Social Stats Parser


## Available parsers

 - `InstagramParser`
 - `TikTokParser`
 - `YouTubeParser`


## How to use

Parse Instagram stats

```js
import { InstagramParser } from "social-stats-parser";

const instagramParser = new InstagramParser();

instagramParser.parse("slavik.nychkalo").then((res) => console.log(res));
```

The result will be:

```js
{
  username: 'slavik.nychkalo',
  followers: '8805',
  likes: null,
  posts: '46'
}
```