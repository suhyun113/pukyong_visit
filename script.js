function rotateAndMove() {
    // 회전 애니메이션 추가
    document.querySelector('.background-grid').classList.add('rotate-left');
    document.querySelector('.center_elements img').classList.add('rotate-left');
    document.querySelector('.floating_mini_icons').style.display = 'none';
    document.querySelector('.center_elements button').style.display = 'none';

    // 백경이 이미지 이동
    const backyong = document.getElementById('backyong');
    // 이동 애니메이션 후, 중앙 이미지 왼쪽에 정렬
    setTimeout(() => {
        backyong.style.left = 'calc(50% - 150px)'; // 중앙 이미지 왼쪽에 위치
    }, 100); // 약간의 지연을 줘서 자연스럽게 이동 시작

    // 키보드 입력 이벤트 리스너 등록
    document.addEventListener('keydown', function(event) {
        moveBackyong(event.key);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const backyong = document.getElementById('backyong');
    const moveAmount = 2; // 이동 거리 설정

    function moveBackyong(direction) {
        let currentLeft = parseInt(backyong.style.left) || 50;
        let currentTop = parseInt(backyong.style.top) || 50;

        switch(direction) {
            case 'ArrowLeft':
                backyong.style.left = (currentLeft - moveAmount) + '%';
                break;
            case 'ArrowRight':
                backyong.style.left = (currentLeft + moveAmount) + '%';
                break;
            case 'ArrowUp':
                backyong.style.top = (currentTop - moveAmount) + '%';
                break;
            case 'ArrowDown':
                backyong.style.top = (currentTop + moveAmount) + '%';
                break;
            default:
                break;
        }

         // 스크롤 위치를 캐릭터 이미지 중심으로 조정
         const viewportHeight = window.innerHeight;
         const scrollToY = backyong.getBoundingClientRect().top - (viewportHeight / 2);
         window.scrollTo({
             top: scrollToY,
             behavior: 'smooth'
         });
    }

    // 키보드 입력 이벤트 리스너 등록
    document.addEventListener('keydown', function(event) {
        moveBackyong(event.key);
    });
});