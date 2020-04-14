const Mock = require('mockjs')

Mock.mock('/user/login', (req) =>{
  let request = JSON.parse(req.body);
  if(request.account == 'Nat' && request.password == '123456') {
    return {
      code: 200,
      data: {
        userName: 'Nat',
        age: 18,
        token: 'w3423434343srere'
      }
    }
  }else {
    return {
      code: 403,
      data: {
        message: '请输入正确的账号或密码！'
      }
    }
  }
})

