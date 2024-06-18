function rotateAndMove() {
    // 회전 애니메이션 추가
    document.querySelector('.background-grid').classList.add('rotate-left');
    document.querySelector('.center_elements img').classList.add('rotate-left');
    document.querySelector('.floating_mini_icons').style.display = 'none';
    document.querySelector('.center_elements button').style.display = 'none';

    // 뿌공이 이미지 이동
    const bbugong = document.getElementById('bbugong');
    // 이동 애니메이션 후, 중앙 이미지 왼쪽에 정렬
    setTimeout(() => {
        bbugong.style.left = 'calc(50% - 150px)'; // 중앙 이미지 왼쪽에 위치
    }, 100); // 약간의 지연을 줘서 자연스럽게 이동 시작

    // 키보드 입력 이벤트 리스너 등록
    document.addEventListener('keydown', function(event) {
        moveBbugong(event.key);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const bbugong = document.getElementById('bbugong');
    const moveAmount = 2; // 이동 거리 설정

    function moveBbugong(direction) {
        let currentLeft = parseInt(bbugong.style.left) || 50;
        let currentTop = parseInt(bbugong.style.top) || 50;

        switch(direction) {
            case 'ArrowLeft':
                bbugong.style.left = (currentLeft - moveAmount) + '%';
                break;
            case 'ArrowRight':
                bbugong.style.left = (currentLeft + moveAmount) + '%';
                break;
            case 'ArrowUp':
                bbugong.style.top = (currentTop - moveAmount) + '%';
                break;
            case 'ArrowDown':
                bbugong.style.top = (currentTop + moveAmount) + '%';
                break;
            default:
                break;
        }

         // 스크롤 위치를 캐릭터 이미지 중심으로 조정
         const viewportHeight = window.innerHeight;
         const viewportWidth = window.innerWidth;
         const scrollToY = bbugong.getBoundingClientRect().top + window.scrollY - (viewportHeight / 2);
         const scrollToX = bbugong.getBoundingClientRect().left + window.scrollX - (viewportWidth / 2);
         window.scrollTo({
             top: scrollToY,
             left: scrollToX,
             behavior: 'smooth'
         });
    }

    // 키보드 입력 이벤트 리스너 등록
    document.addEventListener('keydown', function(event) {
        moveBbugong(event.key);
    });
});