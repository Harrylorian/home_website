document.addEventListener("mousemove", function(event) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = `${event.pageX}px`;
    trail.style.top = `${event.pageY}px`;

    document.body.appendChild(trail);

    // 1秒後移除
    setTimeout(() => {
        trail.remove();
    }, 1000); // 確保動畫完成後清除
});
