# social-stats-parser
Social Stats Parser

[![Node.js Package](https://github.com/gebeto/social-stats-parser/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/gebeto/social-stats-parser/actions/workflows/npm-publish.yml)
![NPM Version](https://img.shields.io/npm/v/social-stats-parser)

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
