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
  settings:{
    parser:{
      haml: {pretty:true}
    }
  },
  roadmap:{
    ext:{
      haml: 'html'
    }
  }
});
```

```javascript
//set haml option
fis.config.set('settings.parser.haml', {pretty:true});
//or
fis.config.merge({
  settings:{
    parser:{
      haml: {pretty:true}
    }
  }
});
```

## example

    $ cd example
    $ fis release -d output

