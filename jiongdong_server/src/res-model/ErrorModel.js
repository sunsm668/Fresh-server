// 错误返回的数据模型

class ErrorModel{
    constructor( errno = -1, message = 'error'){
        this.errno = errno
        this.message = message
    }
}

module.exports = ErrorModel

// new ErrorModel( 1001, '注册失败')   // { error: 1001, message: '注册失败'}