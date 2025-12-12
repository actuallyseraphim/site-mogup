let last = performance.now();

function back_shape(t, strength, size = 5, steps = 64) {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
        const a = (i / steps) * Math.PI * 2;
        var x = Math.cos(a);
	var y = Math.sin(a);
	if (y<0.001) {
	    y+=Math.sin(x*Math.PI+t)*strength;
	    y/=5;
	}
	
	pts.push(`${x * 40 + 50},${y * 40 + 120}`);
    }
    return pts.join(' ');
}

function front_shape(t, strength, size = 5, steps = 64) {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
        const a = (i / steps) * Math.PI * 2;
        var x = Math.cos(a);
	var y = Math.sin(a);
	if (y<0.001) {
	    y+=Math.sin(x*Math.PI-t)*strength;
	    y/=-4;
	}
	
	pts.push(`${x * 40 + 50},${y * 40 + 120.1}`);
    }
    return pts.join(' ');
}

function animate(now) {
    const dt = (now - last) / 1000;
    last = now;
    const t = now / 1000 * 3;
    s = 0.5
    
    let back = document.getElementById("stir_back")
    if (back) {
	back.setAttribute("points", back_shape(t, s));
    }

    let front = document.getElementById("stir_front")
    if (front) {
	front.setAttribute("points", front_shape(t, s));
    }
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
