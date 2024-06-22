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
        bbugong.style.left = 'calc(50% - 100px)'; // 중앙 이미지 왼쪽에 위치

    // 건물 이미지를 표시
        bbugong.addEventListener('transitionend', function() {
            var buildings = document.querySelector('.buildings');
            buildings.style.display = 'flex';
        }, { once: true }); // 이벤트 리스너는 한 번만 실행되고 제거됨
    }, 100); // 약간의 지연을 줘서 자연스럽게 이동 시작
}

document.addEventListener('DOMContentLoaded', function() {
    const bbugong = document.getElementById('bbugong');

    document.addEventListener('click', function(event) {
        const clickX = event.clientX;
        const clickY = event.clientY;

        bbugong.style.left = `${clickX}px`;
        bbugong.style.top = `${clickY}px`;

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
    });
});