// 深色模式切换
const toggleDark = () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
};
// 初始化主题
if(localStorage.getItem('theme') === 'dark'){
  document.documentElement.classList.add('dark');
}

// 手风琴折叠
function toggleCollapse(id){
  const content = document.getElementById(id);
  const icon = document.getElementById(id+'-icon');
  const allContent = document.querySelectorAll('.collapse-content');
  const allIcon = document.querySelectorAll('.collapse-icon');
  
  // 先全部收起
  allContent.forEach(item=>{
    if(item.id !== id) item.classList.add('hidden');
  });
  allIcon.forEach(item=>{
    if(item.id !== id+'-icon') item.textContent = '+';
  });

  // 切换当前
  content.classList.toggle('hidden');
  icon.textContent = content.classList.contains('hidden') ? '+' : '-';
}

// 阅读进度条
window.addEventListener('scroll', ()=>{
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

  // 回到顶部显隐
  const backTop = document.getElementById('backTop');
  backTop.classList.toggle('show', winScroll > 300);
});

// 回到顶部
function backToTop(){
  window.scrollTo({top:0, behavior:'smooth'});
}

// 一键复制
function copyText(btn){
  const text = btn.parentElement.querySelector('pre').innerText;
  navigator.clipboard.writeText(text).then(()=>{
    btn.innerText = '已复制';
    setTimeout(()=>btn.innerText='复制',1500);
  });
}

// 移动端菜单
function openMenu(){
  document.querySelector('.mobile-menu').classList.add('open');
  document.querySelector('.menu-mask').classList.add('show');
}
function closeMenu(){
  document.querySelector('.mobile-menu').classList.remove('open');
  document.querySelector('.menu-mask').classList.remove('show');
}
