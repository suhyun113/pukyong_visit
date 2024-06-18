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

    // 마우스 클릭 이벤트 리스너 추가
    document.addEventListener('click', function(event) {
        const targetX = event.clientX;
        const targetY = event.clientY;

        // 토끼 이미지 이동
        const backyong = document.getElementById('backyong');
        backyong.style.transition = 'transform 1s ease';
        backyong.style.transform = `translate(${targetX}px, ${targetY}px)`;
    });
});