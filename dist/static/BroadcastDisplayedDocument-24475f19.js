import{r,bk as s}from"./sanity-66341ca1.js";import{u}from"./DisplayedDocumentBroadcaster-7ca8062e.js";function c(a){const e=u(),t=s(!1);return r.useEffect(()=>{const o=setTimeout(()=>e==null?void 0:e(a.value),10);return()=>clearTimeout(o)},[t==null?void 0:t.perspective,a.value,e]),null}var i=r.memo(c);export{i as default};