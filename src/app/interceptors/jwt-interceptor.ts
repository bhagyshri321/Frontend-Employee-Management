import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const token =localStorage.getItem("jwtToken");
  if(token && token !== 'undefined' && token !== 'null' && token.includes('.')){
    const cloneReq=  req.clone({
    headers:  req.headers.set('Authorization',`Bearer ${token}`)
    });
    return next(cloneReq);
  }
  return next(req);
};
