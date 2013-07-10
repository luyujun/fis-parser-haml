fis.config.merge({
    project: {
      charset : 'utf-8',
      fileType : {
        text : 'haml'
      }
    },
    modules : {
      parser : {
        haml : 'haml'
      }
    },
    settings : {
      parser : {
        haml : {optimize:false}
      }
    },
    roadmap : {
      ext : {
        haml : 'html'
      }
    }
});
