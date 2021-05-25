//成功返回的数据类型

class SuccessModel {
    constructor(data){
        this.error = 0  //成功返回标志
        if(data != null){
            this.data = data
        }
    }
}
module.exports = SuccessModel

// new SuccessModel()  //{ errorL: 0}
// new SuccessModel({...})  //{ errorL: 0, data: {...}}