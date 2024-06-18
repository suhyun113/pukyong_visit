function rotateAndMove() {
    // 회전 애니메이션 추가
    document.querySelector('.background-grid').classList.add('rotate-left');
    document.querySelector('.center_elements img').classList.add('rotate-left');
    document.querySelector('.floating_mini_icons').style.display = 'none';
    document.querySelector('.center_elements button').style.display = 'none';

    // 백경이 이미지 이동
    const backyong = document.getElementById('backyong');
    backyongrabbit.style.transform = 'translateX(0%)'; // 초기 위치 설정
    backyong.style.left = '50%'; // 중앙으로 이동
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