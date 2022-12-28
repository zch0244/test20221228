import {get, post} from '@/request'


export function gets(params){
   return get('/api/get',params)
}
export function method(data){
    return post('/api/post', data)
}