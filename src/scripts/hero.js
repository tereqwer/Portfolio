// ─────────────────────────────────────────────────────
// HERO.JS — cursor, title fit, avatar parallax
// ─────────────────────────────────────────────────────

// ── Fit title to exact viewport width ───────────────
function fitTitle() {
  const title = document.getElementById('heroTitle')
  const l1 = document.getElementById('l1')
  const l2 = document.getElementById('l2')
  const pl = parseFloat(getComputedStyle(title).paddingLeft)
  const pr = parseFloat(getComputedStyle(title).paddingRight)
  const avail = window.innerWidth - pl - pr

  title.style.fontSize = '100px'
  const longest = Math.max(l1.scrollWidth, l2.scrollWidth)
  title.style.fontSize = Math.floor(100 * (avail / longest) * 0.985) + 'px'
}
fitTitle()
window.addEventListener('resize', fitTitle)

// ── Custom cursor ────────────────────────────────────
const cursor = document.getElementById('cursor')
const ring   = document.getElementById('cursorRing')
let mx = 0, my = 0, rx = 0, ry = 0

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY
  cursor.style.left = mx + 'px'
  cursor.style.top  = my + 'px'
})

;(function loopRing() {
  rx += (mx - rx) * 0.13
  ry += (my - ry) * 0.13
  ring.style.left = rx + 'px'
  ring.style.top  = ry + 'px'
  requestAnimationFrame(loopRing)
})()

document.querySelectorAll('a').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(3)'
    ring.style.width = '54px'
    ring.style.height = '54px'
    ring.style.opacity = '0.4'
  })
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)'
    ring.style.width = '32px'
    ring.style.height = '32px'
    ring.style.opacity = '1'
  })
})

// ── Avatar parallax ──────────────────────────────────
const avatar = document.getElementById('avatar')
let ax = 0, ay = 0, tx = 0, ty = 0

document.addEventListener('mousemove', e => {
  const nx = (e.clientX / window.innerWidth  - 0.5) * 2
  const ny = (e.clientY / window.innerHeight - 0.5) * 2
  tx = nx * 24
  ty = ny * 16
})

;(function loopAvatar() {
  ax += (tx - ax) * 0.055
  ay += (ty - ay) * 0.055
  avatar.style.transform = `translate(calc(-50% + ${ax}px), calc(-42% + ${ay}px))`
  requestAnimationFrame(loopAvatar)
})()
