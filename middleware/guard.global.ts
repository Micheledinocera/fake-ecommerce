export default defineNuxtRouteMiddleware((to, from) => {  
  const page=usePage();
  if(to.name==RouterNames.HOME)
    page.value=1
  onNuxtReady(()=>document.querySelector('#layout-content')?.scrollTo(0,0))
})