module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        bypass: function(req, res) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          } else if (process.env.MOCK !== "none") {
            const name = req.path
              .split("/api/")[1]
              .split("/")
              .join("_");
            // 这里是可以拿到api请求的链接的，拿到之后将路径进行分解为对应的文件名
            const mock = require(`./mock/${name}`);
            // 将得到的mock文件require进来
            const result = mock(req.method);
            // 传入require到mock中的方法
            delete require.cache[require.resolve(`./mock/${name}`)];
            // 删除缓存的数据，以便在数据变更之后能及时展示
            return res.send(result);
            // 最终将得到的mock对应的结果发送出去
          }
        }
      }
    }
  }
};
