let commonUtil = {
  render(str){
    let container=document.querySelector('#container');
    container.innerHTML=str + container.innerHTML;
  }
};
export default commonUtil;
