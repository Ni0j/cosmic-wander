

document.addEventListener("DOMContentLoaded", function(){
   const container = document.querySelector('.title');
   const screenWidth = window.innerWidth;
   const screenHeight = window.innerHeight;
   const containerWidth = container.offsetWidth;
   const containerHeight = container.offsetHeight;

   function getRandomPosition() {
     const randomX = Math.random() * (screenWidth - containerWidth);
     const randomY = Math.random() * (screenHeight - containerHeight);
     return { x: randomX, y: randomY };
   }

   function floatContainer() {
     const newPosition = getRandomPosition();
     container.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
   }

   setInterval(floatContainer, 2000);

   // 点击名字后出现intro- container
    let nameDiv = document.getElementById('name');
    nameDiv.addEventListener('click', function() {
        document.getElementById('introContainerShow').style.display="inline-flex";
        document.getElementById('introContainerShow').style.height="auto";
        document.getElementById('introContainerShow2').style.display = "none";
        document.getElementById('title').style.zIndex = 0;
    });

    // btnFlip按钮点击
    let btnFlip = document.getElementById('btnFlip');
    btnFlip.addEventListener('click', function() {
        document.getElementById('introContainerShow').style.display="none";
        document.getElementById('introContainerShow2').style.height="auto";
        document.getElementById('introContainerShow2').style.display="inline-flex";
    });

    // 输入限制校验
    let limitInputLength = document.getElementById('inputContent');
    limitInputLength.addEventListener('blur', function() {
        if (limitInputLength.value.length > 12) {
            alert("error")
        }
    });

    // 跳转页面按钮
    let btnGo = document.getElementById('btnGo');
    btnGo.addEventListener('click', function() {
        let inputLength = document.getElementById('inputContent').value.length
        if ( inputLength === 0 ) {
            alert("请输入")
        } else if ( inputLength > 12 ) {
            alert("最大字符12")
        } else {
            localStorage.setItem('userName', document.getElementById('inputContent').value)
            window.location.href="./entry1/index.html"
        }
    });
})

// 彩蛋
function clickEgg(name) {
    let eggListOld = localStorage.getItem('eggList') ? JSON.parse(localStorage.getItem('eggList')) : []
    if (!eggListOld.find(val => val === name)) {
        eggListOld.push(name)
        setTimeout(() => {
            document.getElementsByClassName(name)[0].style.display = 'none'
        }, 1000);
        localStorage.setItem('eggList', JSON.stringify(eggListOld))
    }
    
}
