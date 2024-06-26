$(document).ready(function() {
    $('.backyong').hover(function() {
        $('#backyong-speech-bubble').toggleClass('active')
        $('#backyong-heart').toggleClass('active');
    });

    $('.bbugong').hover(function() {
        $('#bbugong-speech-bubble').toggleClass('active');
        $('#bbugong-heart').toggleClass('active');
    });
});

// 리셋 버튼 클릭
function clickReset() {
    document.getElementById('reset-button').addEventListener('click', function() {
        // 초기 상태로 되돌리기
        var backyong_popup = document.getElementById('backyong-popup');
        var overlay = document.getElementById('modal-overlay');
        var backyong = document.querySelector('.backyong');
        var bbugong = document.querySelector('.bbugong');
    
        // 팝업 숨기기
        backyong_popup.style.display = 'none';
        overlay.style.display = 'none';
    
        // 백경이와 뿌공이 모두 보이게 하기
        backyong.style.display = 'block';
        backyong.classList.remove('animate-right'); // 애니메이션 클래스 제거
        bbugong.style.display = 'block';
    
        // 하트와 말풍선 보이게 하기 (필요 시)
        document.querySelector('.backyong-heart').style.display = 'block';
        document.querySelector('.backyong-popup').style.display = 'block';
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

    // 뿌공이 이미지 이동
    const backyong = document.getElementById('backyong');
    const bbugong = document.getElementById('bbugong');

    backyong.style.left = '-20%';
    bbugong.style.left = '-20%';

    // 이동 애니메이션 후, 중앙 이미지 왼쪽에 정렬
    setTimeout(() => {
        backyong.style.left = 'calc(50% - 100px)';
        bbugong.style.left = 'calc(50% - 100px)'; // 중앙 이미지 왼쪽에 위치

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


// document.addEventListener('DOMContentLoaded', function() {
//     const bbugong = document.getElementById('bbugong');

//     document.addEventListener('click', function(event) {
//         const clickX = event.clientX;
//         const clickY = event.clientY;

//         const offsetX = clickX - bbugong.offsetWidth / 2;
//         const offsetY = clickY - bbugong.offsetHeight / 2;

//         bbugong.style.left = `${offsetX}px`;
//         bbugong.style.top = `${offsetY}px`;

//         // 스크롤 위치를 캐릭터 이미지 중심으로 조정
//         const viewportHeight = window.innerHeight;
//         const viewportWidth = window.innerWidth;
//         const scrollToY = offsetY - (viewportHeight / 2);
//         const scrollToX = offsetX - (viewportWidth / 2);
//         window.scrollTo({
//             top: scrollToY,
//             left: scrollToX,
//             behavior: 'smooth'
//         });
//     });
// });


// 팝업 토글 함수
function togglePopup(character) {
    var backyong_popup = document.getElementById('backyong-popup');
    var bbugong_popup = document.getElementById('bbugong-popup');
    var overlay = document.getElementById('modal-overlay');
    
    backyong_popup.style.display = 'none';
    bbugong_popup.style.display = 'none';
    overlay.style.display = 'none';

    if (character == 'backyong')
        backyong_popup.style.display = 'block';
    else if (character == 'bbugong')
        bbugong_popup.style.display = 'block';
}

document.getElementById('backyong').addEventListener('click', function() {
    togglePopup('backyong');
});

document.getElementById('bbugong').addEventListener('click', function() {
    togglePopup('bbugong');
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
    backyong_popup.style.display = 'none';
    overlay.style.display = 'none';
    document.querySelector('#reset-button').style.display = 'block';

    var backyong = document.querySelector('.backyong');
    backyong.classList.add('animate-right'); //백경이 중앙으로 이동

    document.querySelector('.bbugong').style.display = 'none';// 뿌공이 사라지기

    // 백경이에게 마우스 가져다 대면 하트와 말풍선 띄우지 않기
    backyong.addEventListener('mouseover', function() {
        document.querySelector('#backyong-heart').style.display = 'none';
        document.querySelector('#backyong-speech-bubble').style.display = 'none';
    });

    // 백경이 이미지 클릭 시 팝업 띄우지 않기 
    backyong.addEventListener('click', function(){
        document.querySelector('.backyong-popup').style.display = 'none';
    });

    // 백경이 마우스 포인터에 따라 이동시키기
}
// 뿌공이 선택 함수
function toggleBbugong() {
    var bbugong_popup = document.getElementById('bbugong-popup');
    var overlay = document.getElementById('modal-overlay');
    bbugong_popup.style.display = 'none';
    overlay.style.display = 'none';
    document.querySelector('#reset-button').style.display = 'block';

    var bbugong = document.querySelector('.bbugong');
    bbugong.classList.add('animate-left'); //뿌공이 중앙으로 이동

    document.querySelector('.backyong').style.display = 'none';// 백경이 사라지기

    // 뿌공이에게 마우스 가져다 대면 하트와 말풍선 띄우지 않기
    bbugong.addEventListener('mouseover', function() {
        document.querySelector('#bbugong-heart').style.display = 'none';
        document.querySelector('#bbugong-speech-bubble').style.display = 'none';
    });

    // 뿌공이 이미지 클릭 시 팝업 띄우지 않기 
    bbugong.addEventListener('click', function(){
        document.querySelector('.bbugong-popup').style.display = 'none';
    });

    // 뿌공이 이미지 클릭 시 팝업 띄우지 않기
}