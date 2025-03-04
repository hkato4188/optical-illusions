### **Oscillating Circle**
This JavaScript code creates an animated **circle** on an HTML `<canvas>` element. The circle moves left and right in a sinusoidal (wave-like) motion...thanks Brilliant subscription!

---

### **Code Breakdown**
#### 1️⃣ **Canvas Setup**
```js
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const { width, height } = myCanvas;
```
- Retrieves the **canvas element** with the `id="myCanvas"`.
- Gets the **2D rendering context** (`ctx`) to draw on the canvas.
- Extracts the **width** and **height** properties of the canvas.

#### 2️⃣ **Centering the Origin**
```js
ctx.translate(width / 2, height / 2);
```
- Moves the canvas **origin (0,0)** from the top-left **to the center** of the canvas.
- Now, all drawing operations will be **relative to the center**.

#### 3️⃣ **Animation Loop**
```js
animate();
```
- Calls the `animate()` function, which **continuously updates** the canvas.

---

### **Drawing and Animation Functions**
#### 4️⃣ **Function to Draw a Circle**
```js
function drawCircle(x, y, radius = 20) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}
```
- Draws a **circle** at `(x, y)`, with a default **radius of 20 pixels**.
- Uses `arc()` to create a full 360-degree (2π radians) circle.
- Calls `fill()` to **fill the circle with the current fill style**.

#### 5️⃣ **Animation Function**
```js
function animate() {
    ctx.clearRect(-width / 2, -height / 2, width, height);
```
- Clears the entire canvas on **each frame** to prevent trails.
- Uses **negative width/height values** because the origin is now at the center.

```js
    const offset = Date.now() / 1000;
```
- `Date.now()` returns the **current timestamp in milliseconds**.
- Dividing by `1000` converts it into **seconds**, making the motion **smoother**.

```js
    const x = Math.sin(offset) * width / 2;
    drawCircle(x, 0);
```
- Calculates the **x-coordinate** using `Math.sin(offset)`, which oscillates between `-1` and `1`.
- Multiplying by `width / 2` scales it to **move back and forth** across the full canvas width.
- Draws the **circle at (x, 0)**, keeping the **y-position fixed at 0** (the center).

```js
    requestAnimationFrame(animate);
```
- Requests the **next frame update**, making the animation continuous.

---

### **What This Code Does**
- Moves a **circle left and right** in a **smooth sine wave motion**.
- The **speed of movement** depends on time (`Date.now()/1000`).
- **Canvas origin is centered**, making calculations easier.

---
