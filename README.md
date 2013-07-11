# fis-parser-haml

A parser plugin for fis to compile haml file.

## usage

    $ npm install -g fis-parser-haml
    $ vi example/fis-conf.js

```javascript
//file : example/fis-conf.js
fis.config.merge({
  modules:{
    parser:{
      haml: 'haml'
    }
  },
  roadmap:{
    ext:{
      haml: 'html'
    }
  }
});
```

## example

    $ cd example
    $ fis release -d output

