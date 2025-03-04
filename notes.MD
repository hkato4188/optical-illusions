# **Multiple Oscillating Circles**
Update creates **multiple circles that oscillate back and forth** along the x-axis with a phase difference between them.

---

#### 1️⃣ **New Variable for Multiple Circles**
```js
const circleCount = 10;
```
- Defines **10 circles** that will be animated.

#### 2️⃣ **Loop to Draw Multiple Circles**
```js
for(let i = 0; i < circleCount; i++) {
```
- Iterates through **10 circles**.

#### 3️⃣ **Modified Time Offset**
```js
const offset = Date.now() / 1000 + i + Math.PI / circleCount;
```
- `Date.now() / 1000` → Converts the timestamp to seconds for smooth motion.
- `+ i` → **Offsets each circle** by a different amount based on its index (`i`).  
  - This prevents all circles from moving identically.
- `+ Math.PI / circleCount` → **Spreads them out further**, making sure they don’t overlap too much.

#### 4️⃣ **Oscillation Calculation**
```js
const x = Math.sin(offset) * width / 2;
```
- Uses the **sine wave** (`Math.sin(offset)`) to determine the **x-position** of each circle.
- The **range of movement** is `-width/2` to `width/2`, meaning circles move **side to side**.

---

