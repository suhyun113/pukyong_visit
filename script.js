$(document).ready(function() {
    $('.backyong-before').hover(function() {
        $('#backyong-speech-bubble').toggleClass('active')
        $('#backyong-heart').toggleClass('active');
    });

    $('.bbugong-before').hover(function() {
        $('#bbugong-speech-bubble').toggleClass('active');
        $('#bbugong-heart').toggleClass('active');
    });
});

// 리셋 버튼 클릭
function clickReset() {
    document.getElementById('reset-button').addEventListener('click', function() {
        // 초기 상태로 되돌리기
        var mainImage = document.querySelector('.center_elements img#main-image');
        mainImage.style.display = 'block';
    
        document.querySelector('.center_elements p').style.display = 'block';
        document.querySelector('.center_elements img#angle-down').style.display = 'block';
        document.querySelector('.backyong').style.display = 'none';
        document.querySelector('.bbugong').style.display = 'none';
        var backyong_before = document.querySelector('.backyong-before');
        var bbugong_before = document.querySelector('.bbugong-before');
        var overlay = document.getElementById('modal-overlay');
    
        // 백경이와 뿌공이 모두 보이게 하기
        backyong_before.style.display = 'block';
        bbugong_before.style.display = 'block';
        overlay.style.display = 'none';

        mainImage.style.position = 'absolute'; // ensure it is positioned absolutely
        mainImage.style.left = '180px'; // desired left position
        mainImage.style.top = '-280px'; // desired top position
    });
}

const audioContainer = document.querySelector('#audioContainer');
const audioToggleButton = document.querySelector('#audio-toggleButton');

    audioContainer.autoplay = false; // 웹을 열면 자동 재생x
    audioContainer.loop = true; // 반복 재생 설정

    // 버튼 클릭 시 재생 및 일시 정지 토글
function toggleMusic() {
    if (audioContainer.paused) {
        audioContainer.play();
        audioToggleButton.textContent = '🔊'; // 볼륨 모양 버튼
    } else {
        audioContainer.pause();
        audioToggleButton.textContent = '🔇'; // 금지 모양 버튼
    }
}

function rotateAndMove() {
    // 회전 애니메이션 추가
    document.querySelector('.background-grid').classList.add('rotate-left');
    document.querySelector('.center_elements img#main-image').classList.add('rotate-left');
    document.querySelector('.center_elements p').classList.add('rotate-left');
    document.querySelector('.center_elements img#angle-down').classList.add('rotate-left');
    document.querySelector('.floating_mini_icons').style.display = 'none';
    document.querySelector('.center_elements button').style.display = 'none';
    document.querySelector('.center_elements p').style.display = 'block';
    document.querySelector('.center_elements img#angle-down').style.display = 'block';
    

    // 백경이, 뿌공이 이미지 이동
    const backyong_before = document.getElementById('backyong-before');
    const bbugong_before = document.getElementById('bbugong-before');

    backyong_before.style.left = '-20%';
    bbugong_before.style.left = '-20%';

    // 이동 애니메이션 후, 중앙 이미지 왼쪽에 정렬
    setTimeout(() => {
        backyong_before.style.left = 'calc(50% - 100px)';
        bbugong_before.style.left = 'calc(50% - 100px)'; // 중앙 이미지 왼쪽에 위치

        // 건물 이미지를 표시
        // bbugong.addEventListener('transitionend', function showBuildings() {
        //     const buildings = document.querySelector('.buildings');
        //     buildings.style.display = 'flex';
        //     bbugong.removeEventListener('transitionend', showBuildings);
        // }, { once: true }); // 이벤트 리스너는 한 번만 실행되고 제거됨
    }, 100); // 약간의 지연을 줘서 자연스럽게 이동 시작

    // const duration = 3000;
    // setTimeout(() => {
    //     const backyongSpeechBubble = document.querySelector('#backyong-container .speech-bubble');
    //     backyongSpeechBubble.style.display = 'block';
        
    //     const bbugongSpeechBubble = document.querySelector('#bbugong-container .speech-bubble');
    //     bbugongSpeechBubble.style.display = 'block';
    // }, duration);

}
// 팝업 토글 함수
function togglePopup(character) {
    var backyong_popup = document.getElementById('backyong-popup');
    var bbugong_popup = document.getElementById('bbugong-popup');
    var overlay = document.getElementById('modal-overlay');
    
    backyong_popup.style.display = 'none';
    bbugong_popup.style.display = 'none';
    overlay.style.display = 'none';

    if (character == 'backyong-before')
        backyong_popup.style.display = 'block';
    else if (character == 'bbugong-before')
        bbugong_popup.style.display = 'block';
}

document.getElementById('backyong-before').addEventListener('click', function() {
    togglePopup('backyong-before');
});

document.getElementById('bbugong-before').addEventListener('click', function() {
    togglePopup('bbugong-before');
});

document.getElementById('modal-overlay').addEventListener('click', function() {
    var backyong_popup = document.getElementById('backyong-popup');
    var bbugong_popup = document.getElementById('bbugong-popup');
    var overlay = document.getElementById('modal-overlay');
    
    backyong_popup.style.display = 'none';
    bbugong_popup.style.display = 'none';
    overlay.style.display = 'none';
});

// 팝업 닫기 함수
function closeBackyongPopup() {
    var backyong_popup = document.getElementById('backyong-popup');
    var overlay = document.getElementById('modal-overlay');
    backyong_popup.style.display = 'none';
    overlay.style.display = 'none';
}

function closeBbugongPopup() {
    var bbugong_popup = document.getElementById('bbugong-popup');
    var overlay = document.getElementById('modal-overlay');
    bbugong_popup.style.display = 'none';
    overlay.style.display = 'none';
}

// 백경이 선택 함수
function toggleBackyong() {
    var backyong_popup = document.getElementById('backyong-popup');
    var overlay = document.getElementById('modal-overlay');
    document.querySelector('.backyong-before').style.display = 'none';
    document.querySelector('.bbugong-before').style.display = 'none';
    document.querySelector('.backyong').style.display = 'block';
    document.querySelector('.center_elements img#main-image').style.display = 'none';
    document.querySelector('.center_elements p').style.display = 'none';
    document.querySelector('.center_elements img#angle-down').style.display = 'none';
    document.querySelector('.buildings').style.display = 'block'

    backyong_popup.style.display = 'none';
    overlay.style.display = 'none';
    document.querySelector('#reset-button').style.display = 'block';

    var backyong = document.querySelector('.backyong');
    backyong.classList.add('animate-right'); //백경이 중앙으로 이동

    document.querySelector('.bbugong').style.display = 'none';// 뿌공이 사라지기

        // 백경이 마우스 포인터에 따라 이동시키기
    // 뿌공이 애니메이션 함수
    function animateBackyong(startX, startY, endX, endY) {
        let progress = 0;
        const duration = 500; // 애니메이션 지속 시간 (밀리초)
        const startTime = performance.now();
        
    
        function step(currentTime) {
            progress = (currentTime - startTime) / duration;
            if (progress < 1) {
                const x = startX + (endX - startX) * progress;
                const y = startY + (endY - startY) * progress;
                backyong.style.left = `${x}px`;
                backyong.style.top = `${y}px`;
                console.log(x, y);
                requestAnimationFrame(step);
            } else {
                backyong.style.left = `${endX}px`;
                backyong.style.top = `${endY}px`;
            }
        }
    
        requestAnimationFrame(step);
    }
    
    // 클릭 이벤트 리스너는 전역에서 한 번만 등록합니다.
    document.addEventListener('click', (event) => {
        const backyong = document.querySelector('.backyong');
        if (!backyong) return;
    
        backyong.classList.remove('animate-right'); // 백경이 중앙 이동 에니메이션 제거
    
        const startX = parseInt(backyong.style.left) || 0;
        const startY = parseInt(backyong.style.top) || 0;
        const endX = event.clientX - backyong.offsetWidth / 2;
        const endY = event.clientY - backyong.offsetHeight / 2;
    
        animateBackyong(startX, startY, endX, endY);
        console.log(startX, startY, endX, endY);
    });

}

// 뿌공이 선택 함수
function toggleBbugong() {
    var bbugong_popup = document.getElementById('bbugong-popup');
    var overlay = document.getElementById('modal-overlay');
    document.querySelector('.backyong-before').style.display = 'none';
    document.querySelector('.bbugong-before').style.display = 'none';
    document.querySelector('.bbugong').style.display = 'block';
    document.querySelector('.center_elements img#main-image').style.display = 'none';
    document.querySelector('.center_elements p').style.display = 'none';
    document.querySelector('.center_elements img#angle-down').style.display = 'none';
    document.querySelector('.buildings').style.display = 'block'

    bbugong_popup.style.display = 'none';
    overlay.style.display = 'none';
    document.querySelector('#reset-button').style.display = 'block';

    var bbugong = document.querySelector('.bbugong');
    bbugong.classList.add('animate-left'); // 뿌공이 중앙으로 이동

    document.querySelector('.backyong').style.display = 'none'; // 백경이 사라지기

    // 뿌공이 마우스 포인터에 따라 이동시키기
    // 뿌공이 애니메이션 함수
    function animateBbugong(startX, startY, endX, endY) {
        let progress = 0;
        const duration = 500; // 애니메이션 지속 시간 (밀리초)
        const startTime = performance.now();
        

        function step(currentTime) {
            progress = (currentTime - startTime) / duration;
            if (progress < 1) {
                const x = startX + (endX - startX) * progress;
                const y = startY + (endY - startY) * progress;
                bbugong.style.left = `${x}px`;
                bbugong.style.top = `${y}px`;
                console.log(x, y);
                requestAnimationFrame(step);
            } else {
                bbugong.style.left = `${endX}px`;
                bbugong.style.top = `${endY}px`;
            }
        }

        requestAnimationFrame(step);
    }

    // 클릭 이벤트 리스너는 전역에서 한 번만 등록합니다.
    document.addEventListener('click', (event) => {
        const bbugong = document.querySelector('.bbugong');
        if (!bbugong) return;

        bbugong.classList.remove('animate-left'); // 뿌공이 중앙 이동 에니메이션 제거

        const startX = parseInt(bbugong.style.left) || 0;
        const startY = parseInt(bbugong.style.top) || 0;
        const endX = event.clientX - bbugong.offsetWidth / 2;
        const endY = event.clientY - bbugong.offsetHeight / 2;

        animateBbugong(startX, startY, endX, endY);
        console.log(startX, startY, endX, endY);
    });
}
