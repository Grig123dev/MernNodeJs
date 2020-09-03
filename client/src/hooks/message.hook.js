import {useCallback} from 'react';

export const useMessage = () => {
    return useCallback((text)=>{
        if(window.m && text){
            window.m.toast({html: text})
        }
    },[])
}