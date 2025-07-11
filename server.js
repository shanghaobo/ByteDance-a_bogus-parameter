const express = require("express");
const app = express();

// 导入现有的参数生成逻辑
const { genABogus } = require("./get_a_bogus_dy_func.js");

app.use(express.json());
app.post("/gen-bogus", (req, res) => {
  // 调用参数生成函数
  //   console.log("req.body=", req.body);
  const { url, data, ua } = req.body;
  const result = genABogus(url, data, ua);
  //   console.log("result=", result);
  res.json({ a_bogus: result });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
