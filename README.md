# Dapp Direct
To run locally

1. ```npm install -g live-server```
1. Run ```live-server``` from directory.

# Want to make a change or add a new Dapp
1. Fork this repo. 
1. Submit PR to `lib/dapps.json`
1. Follow similar format to other JSON objects.
1. Possible categories, try to use, but not necessary `{Exchange, Hourglass, Game, Other}`
Sample (this JSON is in an arry):
```
  {
    "category": "Hourglass",
    "dapp": {
      "name": "P3C.io",
      "link": "https://p3c.io/interact.html"
    },
    "description": "A savings fund for the entire planet, and the ETC ecosystem.",
    "contact": {
      "name": "Discord",
      "link": "https://discord.gg/crjsdJr"
    },
    "contract": "0xdf9aac76b722b08511a4c561607a9bf3afa62e49"
  },
  ```