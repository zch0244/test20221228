import axios from "axios"
const request = axios.create({
    baseURL: '',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
  request.interceptors.request.use(function(config){
    return config
  },function(err){
    return Promise.reject(err);

  })
  request.interceptors.response.use((res)=>{
    return res;
  },(err)=>{
    return Promise.reject(err);
  })
  function get(url,params){
    return new Promise((resolve, reject)=>{
        request.get(url,{
            params:params
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
    
  }
  function post(url,data){
    return new Promise((resolve, reject)=>{
        request.post(url,data).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
    
  }

  export {get, post}
