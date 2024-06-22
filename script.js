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

const audioContainer = document.querySelector('#audioContainer');
const toggleButton = document.querySelector('#toggleButton');

    audioContainer.autoplay = false; // 웹을 열면 자동으로 재생
    audioContainer.loop = true; // 반복 재생 설정

    // 버튼 클릭 시 재생 및 일시 정지 토글
function toggleMusic() {
    if (audioContainer.paused) {
        audioContainer.play();
        toggleButton.textContent = '🔊'; // 볼륨 모양 버튼
    } else {
        audioContainer.pause();
        toggleButton.textContent = '🔇'; // 금지 모양 버튼
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
function togglePopup() {
    var popup = document.getElementById('character-choose-popup');
    popup.style.display = 'block';
}

// 팝업 닫기 함수
function closePopup() {
    var popup = document.getElementById('character-choose-popup');
    popup.style.display = 'none';
}